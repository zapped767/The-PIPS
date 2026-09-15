import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// ─── Asset Config ─────────────────────────────────────────────────────────────
const ASSETS = [
  {
    id: "bitcoin",
    label: "BTC",
    name: "Bitcoin",
    color: "#F7931A",
    glow: "rgba(247,147,26,0.4)",
    icon: "₿",
    source: "binance-ws", // ← WebSocket: live tick every ~1s
    symbol: "BTCUSDT",
    wsStream: "btcusdt@ticker",
    klineStream: "btcusdt@kline_1m",
  },
  {
    id: "ethereum",
    label: "ETH",
    name: "Ethereum",
    color: "#627EEA",
    glow: "rgba(98,126,234,0.4)",
    icon: "Ξ",
    source: "binance-ws", // ← WebSocket: live tick every ~1s
    symbol: "ETHUSDT",
    wsStream: "ethusdt@ticker",
    klineStream: "ethusdt@kline_1m",
  },
  {
    id: "gold",
    label: "XAU/USD",
    name: "Gold / US Dollar",
    color: "#FFD700",
    glow: "rgba(255,215,0,0.4)",
    icon: "Au",
    source: "yahoo",
    yahooSymbol: "GC=F",
  },
  {
    id: "oil",
    label: "OIL",
    name: "Crude Oil",
    color: "#FF6B35",
    glow: "rgba(255,107,53,0.4)",
    icon: "⛽",
    source: "yahoo",
    yahooSymbol: "CL=F",
  },
  {
    id: "nvda",
    label: "NVDA",
    name: "Nvidia",
    color: "#76B900",
    glow: "rgba(118,185,0,0.4)",
    icon: "◈",
    source: "yahoo",
    yahooSymbol: "NVDA",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
async function fetchWithTimeout(url, timeoutMs = 10000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      cache: "no-store",
    });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function withRetry(thunk, maxAttempts = 3) {
  let lastError;
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await thunk();
    } catch (err) {
      lastError = err;
      if (attempt < maxAttempts - 1)
        await sleep(Math.min(1000 * 2 ** attempt, 8000));
    }
  }
  throw lastError;
}

// ─── Binance REST (initial history load only) ─────────────────────────────────
async function fetchBinanceHistory(symbol) {
  return withRetry(async () => {
    const bust = Date.now();
    const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=4h&limit=42`;
    const res = await fetchWithTimeout(url, 10000);
    if (!res.ok) throw new Error(`Binance ${res.status}`);
    const klines = await res.json();
    return klines.map((k) => {
      const ts = k[0];
      const close = parseFloat(k[4]);
      return {
        time: new Date(ts).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        timestamp: ts,
        value: parseFloat(close.toFixed(close > 1 ? 2 : 6)),
      };
    });
  }, 3);
}

async function fetchYahooChart(yahooSymbol) {
  return withRetry(async () => {
    const yahooUrl =
      `https://query1.finance.yahoo.com/v8/finance/chart/${yahooSymbol}` +
      `?interval=5m&range=1d&_=${Date.now()}`;

    const proxyUrl = `https://corsproxy.io/?key=1dc9c7fd&url=${encodeURIComponent(yahooUrl)}`;

    const res = await fetchWithTimeout(proxyUrl, 12000);

    if (!res.ok) {
      throw new Error(`Yahoo proxy failed: ${res.status}`);
    }

    const data = await res.json();

    const result = data?.chart?.result?.[0];

    if (!result) {
      console.log(data);
      throw new Error("Invalid Yahoo response");
    }

    const timestamps = result.timestamp;
    const closes = result.indicators?.quote?.[0]?.close;

    return timestamps
      .map((ts, i) => {
        const close = closes[i];

        if (close == null) return null;

        return {
          time: new Date(ts * 1000).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }),
          timestamp: ts * 1000,
          value: parseFloat(close.toFixed(close > 100 ? 2 : 4)),
        };
      })
      .filter(Boolean);
  }, 3);
}

// ─── fetchSingleAsset (Yahoo + history fetch, outside component) ──────────────
async function fetchSingleAsset(asset, setAllData, setLoading, setErrors) {
  setLoading((prev) => ({ ...prev, [asset.id]: true }));
  setErrors((prev) => ({ ...prev, [asset.id]: null }));
  try {
    const data =
      asset.source === "binance-ws"
        ? await fetchBinanceHistory(asset.symbol)
        : await fetchYahooChart(asset.yahooSymbol);
    setAllData((prev) => ({ ...prev, [asset.id]: data }));
  } catch (err) {
    console.error(`Failed to fetch ${asset.id}:`, err);
    setErrors((prev) => ({ ...prev, [asset.id]: "Market Data Unavailable" }));
  } finally {
    setLoading((prev) => ({ ...prev, [asset.id]: false }));
  }
}

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
const CustomTooltip = ({ active, payload, label, asset }) => {
  if (!active || !payload || !payload.length) return null;
  const val = payload[0].value;
  return (
    <div
      style={{
        background: "rgba(8,12,24,0.97)",
        border: `1px solid ${asset.color}44`,
        borderRadius: 10,
        padding: "10px 16px",
        boxShadow: `0 4px 32px ${asset.glow}`,
        fontFamily: "'IBM Plex Mono', monospace",
      }}
    >
      <div style={{ color: "#8892a4", fontSize: 11, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ color: asset.color, fontSize: 16, fontWeight: 700 }}>
        {val >= 1
          ? `$${val.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
          : `$${val.toFixed(4)}`}
      </div>
    </div>
  );
};

// ─── Price Ticker ─────────────────────────────────────────────────────────────
const PriceTicker = ({ data, asset, livePrice }) => {
  if (!data || data.length < 2) return null;
  // Use live WebSocket price for the "current" value if available
  const current = livePrice ?? data[data.length - 1]?.value;
  const open = data[0]?.value;
  const change = current - open;
  const pct = ((change / open) * 100).toFixed(2);
  const up = change >= 0;

  return (
    <div style={{ textAlign: "left" }}>
      <div
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: "#fff",
          fontFamily: "'IBM Plex Mono', monospace",
          letterSpacing: "-0.5px",
          // Flash animation on price change
          transition: "color 0.15s ease",
        }}
      >
        {current >= 1
          ? `$${current.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
          : `$${current?.toFixed(4)}`}
      </div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          marginTop: 4,
          background: up ? "rgba(16,185,129,0.12)" : "rgba(239,68,68,0.12)",
          border: `1px solid ${up ? "rgba(16,185,129,0.3)" : "rgba(239,68,68,0.3)"}`,
          borderRadius: 6,
          padding: "3px 10px",
          fontSize: 13,
          fontFamily: "'IBM Plex Mono', monospace",
          color: up ? "#10b981" : "#ef4444",
          fontWeight: 600,
        }}
      >
        {up ? "▲" : "▼"} {up ? "+" : ""}
        {change >= 1 ? change.toFixed(2) : change.toFixed(4)} ({up ? "+" : ""}
        {pct}%)
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const LiveChartTwo = () => {
  const [allData, setAllData] = useState({});
  const [activeId, setActiveId] = useState("bitcoin");
  const [loading, setLoading] = useState({});
  const [errors, setErrors] = useState({});
  const [animKey, setAnimKey] = useState(0);
  // Stores the latest live price per asset from WebSocket (separate from chart history)
  const [livePrices, setLivePrices] = useState({});

  // Refs to hold the two Binance WebSocket connections (one per crypto asset)
  const wsRefs = useRef({});

  const activeAsset = ASSETS.find((a) => a.id === activeId);
  const chartData = allData[activeId] || [];
  const livePrice = livePrices[activeId] ?? null;

  const refresh = useCallback(
    (asset) => fetchSingleAsset(asset, setAllData, setLoading, setErrors),
    [],
  );

  // ─── WebSocket setup for Binance assets ───────────────────────────────────
  useEffect(() => {
    const binanceAssets = ASSETS.filter((a) => a.source === "binance-ws");

    binanceAssets.forEach((asset) => {
      // Load historical candles first so the chart has data immediately
      refresh(asset);

      // Open a combined WebSocket stream:
      //   @ticker  → current price tick (fires every ~1 second)
      //   @kline_1m → live 1-minute candle updates
      const streamUrl = `wss://stream.binance.com:9443/stream?streams=${asset.wsStream}/${asset.klineStream}`;

      const connect = () => {
        const ws = new WebSocket(streamUrl);

        ws.onopen = () => {
          console.log(`[WS] Connected: ${asset.id}`);
        };

        ws.onmessage = (event) => {
          try {
            const msg = JSON.parse(event.data);
            const streamName = msg.stream || "";

            // ── Ticker stream: update the live price display every ~1s ──
            if (streamName.includes("@ticker")) {
              const price = parseFloat(msg.data.c); // "c" = current/last price
              if (!isNaN(price)) {
                setLivePrices((prev) => ({ ...prev, [asset.id]: price }));
              }
            }

            // ── Kline stream: update the last candle on the chart in real time ──
            if (streamName.includes("@kline")) {
              const k = msg.data.k;
              const ts = k.t; // candle open time
              const close = parseFloat(k.c); // current close price
              const time = new Date(ts).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });

              setAllData((prev) => {
                const existing = prev[asset.id];
                if (!existing || existing.length === 0) return prev;

                const newCandle = {
                  time,
                  timestamp: ts,
                  value: parseFloat(close.toFixed(close > 1 ? 2 : 6)),
                };

                const last = existing[existing.length - 1];

                let updated;
                if (last.timestamp === ts) {
                  // Same candle - update its close price in place
                  updated = [...existing.slice(0, -1), newCandle];
                } else {
                  // New candle opened - append it and drop the oldest to keep 60 points
                  updated = [...existing.slice(-59), newCandle];
                }

                return { ...prev, [asset.id]: updated };
              });
            }
          } catch (e) {
            // Ignore malformed messages
          }
        };

        ws.onerror = (err) => {
          console.warn(`[WS] Error on ${asset.id}:`, err);
        };

        ws.onclose = (e) => {
          console.warn(
            `[WS] Closed ${asset.id} (code ${e.code}), reconnecting in 3s…`,
          );
          // Auto-reconnect after 3 seconds unless intentionally closed (code 1000)
          if (e.code !== 1000) {
            wsRefs.current[asset.id] = null;
            setTimeout(connect, 3000);
          }
        };

        wsRefs.current[asset.id] = ws;
      };

      connect();
    });

    // Cleanup: close all WebSocket connections when component unmounts
    return () => {
      Object.values(wsRefs.current).forEach((ws) => {
        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.close(1000, "Component unmounted");
        }
      });
    };
  }, []); // Runs once on mount

  // ─── Yahoo polling: load once then refresh every 60s ─────────────────────
  useEffect(() => {
    const yahooAssets = ASSETS.filter((a) => a.source === "yahoo");

    const loadYahoo = () => {
      let delay = 0;
      yahooAssets.forEach((asset) => {
        setTimeout(() => refresh(asset), delay);
        delay += 800;
      });
    };

    loadYahoo();
    const id = setInterval(loadYahoo, 60_000); // Yahoo data refreshes every 60s
    return () => clearInterval(id);
  }, [refresh]);

  const handleAssetChange = (id) => {
    setActiveId(id);
    setAnimKey((k) => k + 1);
    // For Yahoo assets, always re-fetch on tab switch for freshest data
    const asset = ASSETS.find((a) => a.id === id);
    if (asset.source === "yahoo") refresh(asset);
  };

  // ─── Styles ───────────────────────────────────────────────────────────────
  const styles = {
    wrapper: {
      background: "#012d65",
      minHeight: "100vh",
      padding: "60px 20px",
      fontFamily: "'IBM Plex Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
    },
    grid: {
      position: "absolute",
      inset: 0,
      backgroundSize: "40px 40px",
      pointerEvents: "none",
    },
    glow1: {
      position: "absolute",
      top: "-20%",
      left: "-10%",
      width: 600,
      height: 600,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${activeAsset.glow} 0%, transparent 70%)`,
      transition: "background 0.6s ease",
      pointerEvents: "none",
      filter: "blur(40px)",
    },
    glow2: {
      position: "absolute",
      bottom: "-20%",
      right: "-10%",
      width: 500,
      height: 500,
      borderRadius: "50%",
      background: `radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)`,
      pointerEvents: "none",
      filter: "blur(60px)",
    },
    container: {
      maxWidth: 1100,
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    header: { marginBottom: 40, textAlign: "center" },
    eyebrow: {
      fontSize: 11,
      letterSpacing: "0.25em",
      color: activeAsset.color,
      textTransform: "uppercase",
      fontFamily: "'IBM Plex Mono', monospace",
      marginBottom: 12,
      transition: "color 0.4s",
    },
    title: {
      color: "#fff",
      margin: "0 0 8px",
      letterSpacing: "-1px",
      lineHeight: 1.1,
    },
    subtitle: { color: "#4a5568", fontSize: 14, letterSpacing: "0.05em" },
    tabBar: {
      display: "flex",
      gap: 8,
      marginBottom: 32,
      flexWrap: "wrap",
      justifyContent: "center",
    },
    card: {
      background: "rgba(10,22,48,0.8)",
      border: `1px solid rgba(255,255,255,0.06)`,
      borderRadius: 16,
      padding: "28px 32px",
      backdropFilter: "blur(20px)",
      boxShadow: `0 0 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)`,
    },
    chartMeta: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 28,
      flexWrap: "wrap",
      gap: 16,
    },
    assetBadge: { display: "flex", alignItems: "center", gap: 12 },
    iconCircle: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: `${activeAsset.color}22`,
      border: `1.5px solid ${activeAsset.color}66`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 16,
      fontWeight: 700,
      color: activeAsset.color,
      fontFamily: "'IBM Plex Mono', monospace",
      transition: "all 0.4s",
    },
    assetName: { color: "#fff", fontSize: 20, fontWeight: 700 },
    assetLabel: {
      color: "#ffffff",
      fontSize: 12,
      fontFamily: "'IBM Plex Mono', monospace",
      marginTop: 2,
    },
    chartWrap: { height: 340, animation: "fadeSlideIn 0.5s ease both" },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 20,
      flexWrap: "wrap",
      gap: 8,
    },
    footerTag: {
      fontSize: 11,
      color: "#ffffff",
      fontFamily: "'IBM Plex Mono', monospace",
      letterSpacing: "0.1em",
    },
    dot: {
      display: "inline-block",
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "#10b981",
      marginRight: 6,
      animation: "pulse 2s infinite",
    },
    loadingStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      color: "#8892a4",
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 14,
    },
    errorStyle: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      color: "#ef4444",
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 14,
      gap: 12,
    },
    retryBtn: {
      background: "rgba(239,68,68,0.12)",
      border: "1px solid rgba(239,68,68,0.3)",
      color: "#ef4444",
      borderRadius: 8,
      padding: "8px 20px",
      cursor: "pointer",
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: 12,
      fontWeight: 600,
    },
  };

  const isWs = activeAsset.source === "binance-ws";
  const sourceLabel = isWs
    ? "Source: Binance WebSocket (Live)"
    : "Source: Yahoo Finance (60s refresh)";

  const isCurrentlyLoading = loading[activeId];
  const hasError = errors[activeId];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=IBM+Plex+Sans:wght@400;600;700;800;900&display=swap');
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .asset-tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 18px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(10,22,48,0.6);
          cursor: pointer;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          font-weight: 600;
          color: #ffffff;
          transition: all 0.25s;
          letter-spacing: 0.05em;
        }
        .asset-tab:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
        }
        .asset-tab.active {
          background: rgba(255,255,255,0.07);
          border-color: var(--tab-color);
          color: var(--tab-color);
          box-shadow: 0 0 20px var(--tab-glow), inset 0 0 12px var(--tab-glow);
        }
        .tab-icon { font-size: 14px; }
        .recharts-cartesian-axis-tick text {
          fill: #f9f9f999 !important;
          font-size: 11px !important;
          font-family: 'IBM Plex Mono', monospace !important;
        }
      `}</style>

      <div style={styles.wrapper}>
        <div style={styles.grid} />
        <div style={styles.glow1} />
        <div style={styles.glow2} />

        <div style={styles.container}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.eyebrow}>Live Market Terminal</div>
            <h1 style={styles.title}>
              Trade the world's leading
              <br />
              markets with confidence
            </h1>
            <p style={styles.subtitle}>
              BTC &amp; ETH: live WebSocket ticks · Gold, Oil, NVDA: 60s refresh
            </p>
          </div>

          {/* Asset Tabs */}
          <div style={styles.tabBar}>
            {ASSETS.map((a) => (
              <button
                key={a.id}
                className={`asset-tab${activeId === a.id ? " active" : ""}`}
                style={{ "--tab-color": a.color, "--tab-glow": a.glow }}
                onClick={() => handleAssetChange(a.id)}
              >
                <span className="tab-icon">{a.icon}</span>
                {a.label}
                <span style={{ opacity: 0.5, fontSize: 10 }}>{a.name}</span>
              </button>
            ))}
          </div>

          {/* Chart Card */}
          <div style={styles.card}>
            <div style={styles.chartMeta}>
              <div style={styles.assetBadge}>
                <div style={styles.iconCircle}>{activeAsset.icon}</div>
                <div>
                  <div style={styles.assetName}>{activeAsset.name}</div>
                  <div style={styles.assetLabel}>
                    {activeAsset.label} · USD · {isWs ? "LIVE" : "TODAY"}
                  </div>
                </div>
              </div>
              <PriceTicker
                data={chartData}
                asset={activeAsset}
                livePrice={livePrice}
              />
            </div>

            <div style={styles.chartWrap} key={animKey}>
              {isCurrentlyLoading && chartData.length === 0 ? (
                <div style={styles.loadingStyle}>Fetching market data…</div>
              ) : hasError && chartData.length === 0 ? (
                <div style={styles.errorStyle}>
                  <p>{hasError}</p>
                  <button
                    onClick={() => refresh(activeAsset)}
                    style={styles.retryBtn}
                  >
                    Retry Connection
                  </button>
                </div>
              ) : (
                <>
                  {hasError && chartData.length > 0 && (
                    <div
                      style={{
                        fontSize: 11,
                        color: "#f59e0b",
                        fontFamily: "'IBM Plex Mono', monospace",
                        marginBottom: 8,
                        opacity: 0.8,
                      }}
                    >
                      ⚠ Showing cached data · refresh failed ·{" "}
                      <span
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                        }}
                        onClick={() => refresh(activeAsset)}
                      >
                        Retry
                      </span>
                    </div>
                  )}
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={chartData}
                      margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id={`grad-${activeId}`}
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor={activeAsset.color}
                            stopOpacity={0.25}
                          />
                          <stop
                            offset="100%"
                            stopColor={activeAsset.color}
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="1 4"
                        vertical={false}
                        stroke="rgba(255,255,255,0.04)"
                      />
                      <XAxis
                        hide
                        dataKey="time"
                        stroke="transparent"
                        tick={{ fill: "#f9f9f999", fontSize: 11 }}
                        tickLine={false}
                        interval="preserveStartEnd"
                      />
                      <YAxis
                        domain={["auto", "auto"]}
                        stroke="transparent"
                        tick={{ fill: "#f9f9f999", fontSize: 11 }}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(v) =>
                          v >= 1000
                            ? `$${(v / 1000).toFixed(1)}k`
                            : v >= 1
                              ? `$${v.toFixed(0)}`
                              : `$${v.toFixed(3)}`
                        }
                        width={60}
                      />
                      <Tooltip
                        content={<CustomTooltip asset={activeAsset} />}
                        cursor={{
                          stroke: activeAsset.color,
                          strokeWidth: 1,
                          strokeDasharray: "4 4",
                          opacity: 0.5,
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke={activeAsset.color}
                        strokeWidth={2}
                        fill={`url(#grad-${activeId})`}
                        dot={false}
                        activeDot={{
                          r: 5,
                          fill: activeAsset.color,
                          stroke: "#020818",
                          strokeWidth: 2,
                        }}
                        isAnimationActive={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </>
              )}
            </div>

            {/* Footer */}
            <div style={styles.footer}>
              <span style={styles.footerTag}>
                <span style={styles.dot} />
                {isWs ? "WEBSOCKET · LIVE TICKS" : "POLLING · 60S REFRESH"}
              </span>
              <span style={styles.footerTag}>{sourceLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveChartTwo;
