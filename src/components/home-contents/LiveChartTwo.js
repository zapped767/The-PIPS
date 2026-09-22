import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import {
  Bitcoin,
  Gem,
  Coins,
  Fuel,
  Cpu,
} from "lucide-react";
/* =========================================================
   ASSET CONFIG
========================================================= */

const ASSETS = [
  {
    id: "bitcoin",
    label: "BTC",
    name: "Bitcoin",
    color: "#F7931A",
    glow: "rgba(247,147,26,0.4)",
    icon: "₿",
    source: "binance-ws",
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
    source: "binance-ws",
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


/* =========================================================
   HELPERS
========================================================= */

async function fetchWithTimeout(
  url,
  timeoutMs = 10000
) {

  const controller =
    new AbortController();


  const timer =
    setTimeout(
      () =>
        controller.abort(),
      timeoutMs
    );


  try {

    const res =
      await fetch(
        url,
        {
          signal:
            controller.signal,

          cache:
            "no-store",
        }
      );


    return res;

  } finally {

    clearTimeout(
      timer
    );
  }
}


const sleep = (
  ms
) =>
  new Promise(
    (
      resolve
    ) =>
      setTimeout(
        resolve,
        ms
      )
  );


async function withRetry(
  thunk,
  maxAttempts = 3
) {

  let lastError;


  for (
    let attempt = 0;
    attempt <
    maxAttempts;
    attempt++
  ) {

    try {

      return await thunk();

    } catch (
      err
    ) {

      lastError =
        err;


      if (
        attempt <
        maxAttempts -
          1
      ) {

        await sleep(
          Math.min(
            1000 *
            2 ** attempt,
            8000
          )
        );
      }
    }
  }


  throw lastError;
}


/* =========================================================
   BINANCE HISTORY
========================================================= */

async function fetchBinanceHistory(
  symbol
) {

  return withRetry(
    async () => {

      const url =
        `https://api.binance.com/api/v3/klines` +
        `?symbol=${symbol}` +
        `&interval=4h` +
        `&limit=42`;


      const res =
        await fetchWithTimeout(
          url,
          10000
        );


      if (
        !res.ok
      ) {

        throw new Error(
          `Binance ${res.status}`
        );
      }


      const klines =
        await res.json();


      return klines.map(
        (
          k
        ) => {

          const ts =
            k[0];


          const close =
            parseFloat(
              k[4]
            );


          return {

            time:
              new Date(
                ts
              ).toLocaleTimeString(
                [],
                {
                  hour:
                    "2-digit",

                  minute:
                    "2-digit",
                }
              ),

            timestamp:
              ts,

            value:
              parseFloat(
                close.toFixed(
                  close >
                  1
                    ? 2
                    : 6
                )
              ),
          };
        }
      );
    },

    3
  );
}


/* =========================================================
   YAHOO DATA
========================================================= */

async function fetchYahooChart(
  yahooSymbol
) {

  return withRetry(
    async () => {

      const yahooUrl =
        `https://query1.finance.yahoo.com/v8/finance/chart/${yahooSymbol}` +
        `?interval=5m&range=1d&_=${Date.now()}`;


      const proxyUrl =
        `https://corsproxy.io/?key=1dc9c7fd&url=${encodeURIComponent(
          yahooUrl
        )}`;


      const res =
        await fetchWithTimeout(
          proxyUrl,
          12000
        );


      if (
        !res.ok
      ) {

        throw new Error(
          `Yahoo proxy failed: ${res.status}`
        );
      }


      const data =
        await res.json();


      const result =
        data?.chart
          ?.result?.[0];


      if (
        !result
      ) {

        console.log(
          data
        );


        throw new Error(
          "Invalid Yahoo response"
        );
      }


      const timestamps =
        result.timestamp;


      const closes =
        result
          .indicators
          ?.quote?.[0]
          ?.close;


      return timestamps
        .map(
          (
            ts,
            i
          ) => {

            const close =
              closes[i];


            if (
              close ==
              null
            ) {

              return null;
            }


            return {

              time:
                new Date(
                  ts *
                  1000
                ).toLocaleTimeString(
                  "en-US",
                  {
                    hour:
                      "2-digit",

                    minute:
                      "2-digit",

                    hour12:
                      true,
                  }
                ),

              timestamp:
                ts *
                1000,

              value:
                parseFloat(
                  close.toFixed(
                    close >
                    100
                      ? 2
                      : 4
                  )
                ),
            };
          }
        )

        .filter(
          Boolean
        );
    },

    3
  );
}


/* =========================================================
   FETCH SINGLE ASSET
========================================================= */

async function fetchSingleAsset(
  asset,
  setAllData,
  setLoading,
  setErrors
) {

  setLoading(
    (
      prev
    ) => ({
      ...prev,

      [asset.id]:
        true,
    })
  );


  setErrors(
    (
      prev
    ) => ({
      ...prev,

      [asset.id]:
        null,
    })
  );


  try {

    const data =
      asset.source ===
      "binance-ws"

        ? await fetchBinanceHistory(
            asset.symbol
          )

        : await fetchYahooChart(
            asset.yahooSymbol
          );


    setAllData(
      (
        prev
      ) => ({
        ...prev,

        [asset.id]:
          data,
      })
    );

  } catch (
    err
  ) {

    console.error(
      `Failed to fetch ${asset.id}:`,
      err
    );


    setErrors(
      (
        prev
      ) => ({
        ...prev,

        [asset.id]:
          "Market Data Unavailable",
      })
    );

  } finally {

    setLoading(
      (
        prev
      ) => ({
        ...prev,

        [asset.id]:
          false,
      })
    );
  }
}


/* =========================================================
   CUSTOM TOOLTIP
========================================================= */

const CustomTooltip = ({
  active,
  payload,
  label,
  asset,
}) => {

  if (
    !active ||
    !payload ||
    !payload.length
  ) {

    return null;
  }


  const val =
    payload[0].value;


  return (

    <div
      style={{
        background:
          "rgba(8,12,24,0.97)",

        border:
          `1px solid ${asset.color}44`,

        borderRadius:
          10,

        padding:
          "10px 16px",

        boxShadow:
          `0 4px 32px ${asset.glow}`,

        fontFamily:
          "'IBM Plex Mono', monospace",
      }}
    >

      <div
        style={{
          color:
            "#8892a4",

          fontSize:
            11,

          marginBottom:
            4,
        }}
      >

        {label}

      </div>


      <div
        style={{
          color:
            asset.color,

          fontSize:
            16,

          fontWeight:
            700,
        }}
      >

        {val >=
        1

          ? `$${val.toLocaleString(
              "en-US",
              {
                minimumFractionDigits:
                  2,

                maximumFractionDigits:
                  2,
              }
            )}`

          : `$${val.toFixed(
              4
            )}`
        }

      </div>

    </div>
  );
};


/* =========================================================
   PRICE TICKER
========================================================= */

const PriceTicker = ({
  data,
  asset,
  livePrice,
}) => {

  if (
    !data ||
    data.length <
    2
  ) {

    return null;
  }


  const current =
    livePrice ??
    data[
      data.length -
      1
    ]?.value;


  const open =
    data[0]?.value;


  const change =
    current -
    open;


  const pct =
    (
      (
        change /
        open
      ) *
      100
    ).toFixed(
      2
    );


  const up =
    change >=
    0;


  return (

    <div
      style={{
        textAlign:
          "right",
      }}
    >

      <div
        style={{
          fontSize:
            30,

          fontWeight:
            800,

          color:
            "#ffffff",

          fontFamily:
            "'IBM Plex Mono', monospace",

          letterSpacing:
            "-0.5px",

          transition:
            "color 0.15s ease",
        }}
      >

        {current >=
        1

          ? `$${current.toLocaleString(
              "en-US",
              {
                minimumFractionDigits:
                  2,

                maximumFractionDigits:
                  2,
              }
            )}`

          : `$${current?.toFixed(
              4
            )}`
        }

      </div>


      <div
        style={{
          display:
            "inline-flex",

          alignItems:
            "center",

          gap:
            6,

          marginTop:
            7,

          background:
            up
              ? "rgba(16,185,129,0.12)"
              : "rgba(239,68,68,0.12)",

          border:
            `1px solid ${
              up
                ? "rgba(16,185,129,0.3)"
                : "rgba(239,68,68,0.3)"
            }`,

          borderRadius:
            8,

          padding:
            "5px 11px",

          fontSize:
            13,

          fontFamily:
            "'IBM Plex Mono', monospace",

          color:
            up
              ? "#10b981"
              : "#ef4444",

          fontWeight:
            600,
        }}
      >

        {up
          ? "▲"
          : "▼"}

        {" "}

        {up
          ? "+"
          : ""}

        {change >=
        1
          ? change.toFixed(
              2
            )
          : change.toFixed(
              4
            )}

        {" "}

        (

        {up
          ? "+"
          : ""}

        {pct}%)

      </div>

    </div>
  );
};


/* =========================================================
   COMPONENT
========================================================= */

const LiveChartTwo = () => {


  /* Live Market scrolls normally; this ref is only for the rising text. */
  const marketHeroRef = useRef(null);

  /* =====================================================
     MARKET STATES
  ===================================================== */

  const [
    allData,
    setAllData,
  ] = useState({});


  const [
    activeId,
    setActiveId,
  ] = useState(
    "bitcoin"
  );


  const [
    loading,
    setLoading,
  ] = useState({});


  const [
    errors,
    setErrors,
  ] = useState({});


  const [
    animKey,
    setAnimKey,
  ] = useState(0);


  const [
    livePrices,
    setLivePrices,
  ] = useState({});


  const wsRefs =
    useRef({});


  const activeAsset =
    ASSETS.find(
      (
        asset
      ) =>
        asset.id ===
        activeId
    );

/* =========================================================
   MARKET TAB ICONS
========================================================= */

const TAB_ICONS = {
  bitcoin: Bitcoin,
  ethereum: Gem,
  gold: Coins,
  oil: Fuel,
  nvda: Cpu,
};

  const chartData =
    allData[
      activeId
    ] ||
    [];


  const livePrice =
    livePrices[
      activeId
    ] ??
    null;


  const refresh =
    useCallback(
      (
        asset
      ) =>
        fetchSingleAsset(
          asset,
          setAllData,
          setLoading,
          setErrors
        ),

      []
    );


  /* =========================================================
     LIVE MARKET: NORMAL SCROLL + ONE GROUP RISE

     Live Market no longer installs a wheel listener or owns the
     scrolling lock. Quality's second scroll can finish and the
     browser continues here normally. All three texts rise together.
  ========================================================= */
  useEffect(() => {
    const section = marketHeroRef.current;
    const content = section?.querySelector(".live-market-content");
    if (!section || !content) return undefined;

    /* Remove any old owner left by hot reload of the previous code. */
    if (window.__PIPS_SCROLL_OWNER__ === "market") {
      delete window.__PIPS_SCROLL_OWNER__;
    }

    if (window.innerWidth < 1200) {
      content.classList.add("is-visible");
      return undefined;
    }

    let finished = false;
    let observer;

    const riseWhenReady = () => {
      if (finished || window.innerWidth < 1200) return;

      /* Do not animate this section while Quality is still flipping. */
      if (window.__PIPS_SCROLL_OWNER__ === "quality") return;

      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight * 0.66 &&
        rect.bottom >= window.innerHeight * 0.16
      ) {
        content.classList.add("is-visible");
        finished = true;
        window.removeEventListener("scroll", riseWhenReady);
        observer?.disconnect();
      }
    };

    window.addEventListener("scroll", riseWhenReady, { passive: true });
    observer = new IntersectionObserver(riseWhenReady, {
      threshold: [0, 0.2, 0.5],
    });
    observer.observe(section);
    const firstFrame = requestAnimationFrame(riseWhenReady);

    return () => {
      cancelAnimationFrame(firstFrame);
      window.removeEventListener("scroll", riseWhenReady);
      observer?.disconnect();
    };
  }, []);


  /* =======================================================
     BINANCE WEBSOCKET
  ======================================================= */

  useEffect(() => {

    const binanceAssets =
      ASSETS.filter(
        (
          asset
        ) =>
          asset.source ===
          "binance-ws"
      );


    binanceAssets.forEach(
      (
        asset
      ) => {

        refresh(
          asset
        );


        const streamUrl =
          `wss://stream.binance.com:9443/stream?streams=` +
          `${asset.wsStream}/${asset.klineStream}`;


        const connect =
          () => {

            const ws =
              new WebSocket(
                streamUrl
              );


            ws.onopen =
              () => {

                console.log(
                  `[WS] Connected: ${asset.id}`
                );
              };


            ws.onmessage =
              (
                event
              ) => {

                try {

                  const msg =
                    JSON.parse(
                      event.data
                    );


                  const streamName =
                    msg.stream ||
                    "";


                  /* CURRENT PRICE */

                  if (
                    streamName.includes(
                      "@ticker"
                    )
                  ) {

                    const price =
                      parseFloat(
                        msg.data.c
                      );


                    if (
                      !isNaN(
                        price
                      )
                    ) {

                      setLivePrices(
                        (
                          prev
                        ) => ({
                          ...prev,

                          [asset.id]:
                            price,
                        })
                      );
                    }
                  }


                  /* LIVE CANDLE */

                  if (
                    streamName.includes(
                      "@kline"
                    )
                  ) {

                    const k =
                      msg.data.k;


                    const ts =
                      k.t;


                    const close =
                      parseFloat(
                        k.c
                      );


                    const time =
                      new Date(
                        ts
                      ).toLocaleTimeString(
                        [],
                        {
                          hour:
                            "2-digit",

                          minute:
                            "2-digit",
                        }
                      );


                    setAllData(
                      (
                        prev
                      ) => {

                        const existing =
                          prev[
                            asset.id
                          ];


                        if (
                          !existing ||
                          existing.length ===
                          0
                        ) {

                          return prev;
                        }


                        const newCandle = {
                          time,

                          timestamp:
                            ts,

                          value:
                            parseFloat(
                              close.toFixed(
                                close >
                                1
                                  ? 2
                                  : 6
                              )
                            ),
                        };


                        const last =
                          existing[
                            existing.length -
                            1
                          ];


                        let updated;


                        if (
                          last.timestamp ===
                          ts
                        ) {

                          updated = [
                            ...existing.slice(
                              0,
                              -1
                            ),

                            newCandle,
                          ];

                        } else {

                          updated = [
                            ...existing.slice(
                              -59
                            ),

                            newCandle,
                          ];
                        }


                        return {
                          ...prev,

                          [asset.id]:
                            updated,
                        };
                      }
                    );
                  }

                } catch (
                  e
                ) {

                  // Ignore malformed messages
                }
              };


            ws.onerror =
              (
                err
              ) => {

                console.warn(
                  `[WS] Error on ${asset.id}:`,
                  err
                );
              };


            ws.onclose =
              (
                event
              ) => {

                console.warn(
                  `[WS] Closed ${asset.id} (code ${event.code}), reconnecting in 3s…`
                );


                if (
                  event.code !==
                  1000
                ) {

                  wsRefs.current[
                    asset.id
                  ] =
                    null;


                  setTimeout(
                    connect,
                    3000
                  );
                }
              };


            wsRefs.current[
              asset.id
            ] =
              ws;
          };


        connect();
      }
    );


    const currentWsRefs =
      wsRefs.current;


    return () => {

      Object.values(
        currentWsRefs
      ).forEach(
        (
          ws
        ) => {

          if (
            ws &&
            (
              ws.readyState ===
                WebSocket.OPEN ||
              ws.readyState ===
                WebSocket.CONNECTING
            )
          ) {

            ws.close(
              1000,
              "Component unmounted"
            );
          }
        }
      );
    };

  }, [refresh]);


  /* =======================================================
     YAHOO REFRESH
  ======================================================= */

  useEffect(() => {

    const yahooAssets =
      ASSETS.filter(
        (
          asset
        ) =>
          asset.source ===
          "yahoo"
      );


    const loadYahoo =
      () => {

        let delay =
          0;


        yahooAssets.forEach(
          (
            asset
          ) => {

            setTimeout(
              () =>
                refresh(
                  asset
                ),

              delay
            );


            delay +=
              800;
          }
        );
      };


    loadYahoo();


    const id =
      setInterval(
        loadYahoo,
        60000
      );


    return () =>
      clearInterval(
        id
      );

  }, [refresh]);


  /* =======================================================
     TAB CHANGE
  ======================================================= */

  const handleAssetChange =
    (
      id
    ) => {

      setActiveId(
        id
      );


      setAnimKey(
        (
          key
        ) =>
          key +
          1
      );


      const asset =
        ASSETS.find(
          (
            item
          ) =>
            item.id ===
            id
        );


      if (
        asset.source ===
        "yahoo"
      ) {

        refresh(
          asset
        );
      }
    };


  /* =========================================================
     STYLES
  ========================================================= */

  const styles = {

    wrapper: {
      width:
        "100%",

      background:
        "#ffffff",

      fontFamily:
        "'IBM Plex Sans', sans-serif",

      position:
        "relative",

      overflow:
        "visible",
    },


    heroSection: {
      width:
        "100%",

      background:
        "#012d65",

      position:
        "relative",
    },


    heroSticky: {
      width:
        "100%",

      background:
        "#012d65",

      position:
        "relative",

      display:
        "flex",

      alignItems:
        "center",

      justifyContent:
        "center",

      overflow:
        "hidden",

      boxSizing:
        "border-box",
    },


    heroContainer: {
      width:
        "100%",

      maxWidth:
        1500,

      margin:
        "0 auto",

      padding:
        "0 20px",

      boxSizing:
        "border-box",

      position:
        "relative",

      zIndex:
        2,
    },


    header: {
      width:
        "100%",

      textAlign:
        "center",

      margin:
        0,
    },


    eyebrow: {
      color:
        "#f7a901",

      fontSize:
        13,

      fontWeight:
        700,

      fontFamily:
        "'IBM Plex Mono', monospace",

      letterSpacing:
        "0.34em",

      textTransform:
        "uppercase",

      marginBottom:
        22,
    },


    title: {
      margin:
        "0 auto 24px",

      width:
        "100%",

      maxWidth:
        1500,

      color:
        "#ffffff",

      fontWeight:
        800,

      lineHeight:
        1.03,

      letterSpacing:
        "-2.7px",

      textAlign:
        "center",
    },


    titleLine: {
      display:
        "block",

      whiteSpace:
        "nowrap",
    },


    subtitle: {
      color:
        "rgba(255,255,255,0.78)",

      fontSize:
        16,

      lineHeight:
        1.6,

      fontWeight:
        500,

      letterSpacing:
        "0.02em",

      margin:
        0,

      textAlign:
        "center",
    },


    marketSection: {
      width:
        "100%",

      background:
        "#ffffff",

      padding:
        "55px 20px 95px",

      boxSizing:
        "border-box",

      position:
        "relative",

      zIndex:
        3,
    },


    marketContainer: {
      width:
        "100%",

      maxWidth:
        1200,

      margin:
        "0 auto",

      position:
        "relative",
    },


    tabBar: {
      display:
        "flex",

      justifyContent:
        "center",

      alignItems:
        "center",

      flexWrap:
        "wrap",

      gap:
        12,

      marginBottom:
        32,
    },


    card: {
      width:
        "100%",

      background:
        "#071f47",

      border:
        "1px solid rgba(1,45,101,0.08)",

      borderRadius:
        22,

      padding:
        "32px 36px 28px",

      boxSizing:
        "border-box",

      boxShadow:
        "0 22px 55px rgba(1,45,101,0.14)",
    },


    chartMeta: {
      display:
        "flex",

      justifyContent:
        "space-between",

      alignItems:
        "flex-end",

      marginBottom:
        28,

      flexWrap:
        "wrap",

      gap:
        20,
    },


    assetBadge: {
      display:
        "flex",

      alignItems:
        "center",

      gap:
        14,
    },


    iconCircle: {
      width:
        50,

      height:
        50,

      borderRadius:
        "50%",

      background:
        `${activeAsset.color}22`,

      border:
        `1.5px solid ${activeAsset.color}66`,

      display:
        "flex",

      alignItems:
        "center",

      justifyContent:
        "center",

      fontSize:
        17,

      fontWeight:
        700,

      color:
        activeAsset.color,

      fontFamily:
        "'IBM Plex Mono', monospace",

      transition:
        "all 0.4s",
    },


    assetName: {
      color:
        "#ffffff",

      fontSize:
        22,

      fontWeight:
        700,

      lineHeight:
        1.2,
    },


    assetLabel: {
      color:
        "rgba(255,255,255,0.68)",

      fontSize:
        12,

      fontFamily:
        "'IBM Plex Mono', monospace",

      marginTop:
        5,

      letterSpacing:
        "0.04em",
    },


    chartWrap: {
      height:
        360,

      animation:
        "fadeSlideIn 0.5s ease both",

      background:
        "rgba(255,255,255,0.01)",

      borderRadius:
        14,
    },


    footer: {
      display:
        "flex",

      justifyContent:
        "space-between",

      alignItems:
        "center",

      marginTop:
        22,

      flexWrap:
        "wrap",

      gap:
        10,
    },


    footerTag: {
      fontSize:
        11,

      color:
        "rgba(255,255,255,0.72)",

      fontFamily:
        "'IBM Plex Mono', monospace",

      letterSpacing:
        "0.08em",
    },


    dot: {
      display:
        "inline-block",

      width:
        7,

      height:
        7,

      borderRadius:
        "50%",

      background:
        "#10b981",

      marginRight:
        7,

      animation:
        "pulse 2s infinite",
    },


    loadingStyle: {
      display:
        "flex",

      alignItems:
        "center",

      justifyContent:
        "center",

      height:
        "100%",

      color:
        "#8892a4",

      fontFamily:
        "'IBM Plex Mono', monospace",

      fontSize:
        14,
    },


    errorStyle: {
      display:
        "flex",

      flexDirection:
        "column",

      alignItems:
        "center",

      justifyContent:
        "center",

      height:
        "100%",

      color:
        "#ef4444",

      fontFamily:
        "'IBM Plex Mono', monospace",

      fontSize:
        14,

      gap:
        12,
    },


    retryBtn: {
      background:
        "rgba(239,68,68,0.12)",

      border:
        "1px solid rgba(239,68,68,0.3)",

      color:
        "#ef4444",

      borderRadius:
        8,

      padding:
        "8px 20px",

      cursor:
        "pointer",

      fontFamily:
        "'IBM Plex Mono', monospace",

      fontSize:
        12,

      fontWeight:
        600,
    },
  };


  /* =========================================================
     CURRENT DATA
  ========================================================= */

  const isWs =
    activeAsset.source ===
    "binance-ws";


  const sourceLabel =
    isWs
      ? "Source: Binance WebSocket (Live)"
      : "Source: Yahoo Finance (60s refresh)";


  const isCurrentlyLoading =
    loading[
      activeId
    ];


  const hasError =
    errors[
      activeId
    ];


  /* =========================================================
     RENDER
  ========================================================= */

  return (

    <>

      <style>{`

        @import url(
          'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600;700&family=IBM+Plex+Sans:wght@400;600;700;800;900&display=swap'
        );


        @keyframes fadeSlideIn {

          from {
            opacity: 0;

            transform:
              translateY(10px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }
        }


        @keyframes pulse {

          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.3;
          }
        }


        /* =====================================================
           MARKET TABS
        ===================================================== */

        .asset-tab {

          display:
            flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            8px;

          min-height:
            44px;

          padding:
            10px 18px;

          border-radius:
            10px;

          border:
            1px solid
            rgba(
              1,
              45,
              101,
              0.18
            );

          background:
            #012d65;

          cursor:
            pointer;

          font-family:
            'IBM Plex Mono',
            monospace;

          font-size:
            13px;

          font-weight:
            600;

          color:
            #ffffff;

          transition:
            all 0.25s ease;

          letter-spacing:
            0.04em;

          box-shadow:
            0 5px 15px
            rgba(
              1,
              45,
              101,
              0.08
            );
        }


        .asset-tab:hover {

          background:
            #035391;

          border-color:
            #035391;

          color:
            #ffffff;

          transform:
            translateY(-2px);

          box-shadow:
            0 8px 20px
            rgba(
              1,
              45,
              101,
              0.16
            );
        }


        .asset-tab.active {

          background:
            #012d65;

          border-color:
            var(
              --tab-color
            );

          color:
            var(
              --tab-color
            );

          box-shadow:
            0 0 0 1px
            var(
              --tab-color
            ),
            0 8px 22px
            var(
              --tab-glow
            );
        }


        .tab-icon {
          font-size:
            15px;
        }


        .tab-name {
          opacity:
            0.65;

          font-size:
            10px;
        }


        .recharts-cartesian-axis-tick text {

          fill:
            #f9f9f999
            !important;

          font-size:
            11px
            !important;

          font-family:
            'IBM Plex Mono',
            monospace
            !important;
        }


        /* =====================================================
           DESKTOP 1200+
        ===================================================== */

        @media (min-width: 1200px) {

          .live-market-hero-section {

            height:
              50vh !important;
          }


          .live-market-hero-sticky {

            position:
              sticky !important;

            top:
              0 !important;

            height:
              100vh !important;

            min-height:
              720px !important;

            padding:
              40px
              20px !important;
          }


          /* ===============================================
             KEEP YOUR CURRENT TEXT POSITION

             - = UP
             + = DOWN
          =============================================== */

          .live-market-hero-sticky > div {

            transform:
              translateY(-290px) !important;
          }


          .live-market-scroll-title {

            font-size:
              clamp(
                78px,
                5.7vw,
                110px
              ) !important;

            line-height:
              1.03 !important;

            letter-spacing:
              -3px !important;
          }


          /*
            IMPORTANT:
            NO SHINE / NO GLOW
          */

          .live-market-letter {

            text-shadow:
              none !important;
          }
        }


        /* =====================================================
           LAPTOP
        ===================================================== */

        @media
        (min-width: 992px)
        and
        (max-width: 1199px) {

          .live-market-hero-section {

            height:
              auto !important;
          }


          .live-market-hero-sticky {

            position:
              relative !important;

            height:
              auto !important;

            min-height:
              480px !important;

            padding:
              80px
              20px !important;
          }


          .live-market-scroll-title {

            font-size:
              58px !important;

            line-height:
              1.06 !important;
          }


          .live-market-letter {

            color:
              #ffffff !important;

            text-shadow:
              none !important;
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media
        (min-width: 768px)
        and
        (max-width: 991px) {

          .live-market-hero-section {

            height:
              auto !important;
          }


          .live-market-hero-sticky {

            position:
              relative !important;

            height:
              auto !important;

            min-height:
              420px !important;

            padding:
              70px
              20px !important;
          }


          .live-market-scroll-title {

            font-size:
              48px !important;

            line-height:
              1.08 !important;

            letter-spacing:
              -1.5px !important;
          }


          .live-market-letter {

            color:
              #ffffff !important;

            text-shadow:
              none !important;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .live-market-hero-section {

            height:
              auto !important;
          }


          .live-market-hero-sticky {

            position:
              relative !important;

            height:
              auto !important;

            min-height:
              340px !important;

            padding:
              55px
              16px !important;
          }


          .live-market-scroll-title {

            font-size:
              31px !important;

            line-height:
              1.08 !important;

            letter-spacing:
              -0.8px !important;
          }


          .live-market-title-line {

            white-space:
              normal !important;
          }


          .live-market-letter {

            color:
              #ffffff !important;

            text-shadow:
              none !important;
          }


          .live-market-eyebrow {

            font-size:
              9px !important;

            letter-spacing:
              0.22em !important;
          }


          .live-market-subtitle {

            font-size:
              11px !important;

            line-height:
              1.5 !important;
          }


          .asset-tab {

            padding:
              8px
              10px;

            font-size:
              10px;

            min-height:
              36px;
          }


          .tab-name {

            display:
              none;
          }
        }

/* =========================================================
   MOBILE - LIVE MARKET COMPACT + LEFT ALIGNED
   767PX AND BELOW
========================================================= */

@media (max-width: 767px) {

  /* =====================================================
     REMOVE BLUE EMPTY SPACE
  ===================================================== */

  .live-market-hero-section {
    width: 100%;

    height: auto !important;
    min-height: 0 !important;

    margin: 0 !important;

    padding: 0 !important;

    background: #012d65;
  }


  .live-market-hero-sticky {
    position: relative !important;

    top: auto !important;

    height: auto !important;
    min-height: 0 !important;

    /* MANUAL SPACING: TOP | SIDES | BOTTOM */
    padding: 24px 20px 28px !important;

    display: flex !important;

    align-items: flex-start !important;
    justify-content: flex-start !important;

    box-sizing: border-box;
  }


  /* =====================================================
     MAIN CONTENT CONTAINER
  ===================================================== */

  .live-market-hero-sticky > div {
    width: 100% !important;

    max-width: 100% !important;

    margin: 0 !important;

    padding: 0 !important;

    /* REMOVE OLD DESKTOP POSITION */
    transform: none !important;

    text-align: left !important;
  }


  .live-market-hero-sticky > div > div {
    width: 100%;

    text-align: left !important;
  }


  /* =====================================================
     LIVE MARKET TERMINAL - SMALL GOLD TEXT
  ===================================================== */

  .live-market-eyebrow {
    width: 100%;

    /* MANUAL SIZE */
    font-size: 10px !important;

    letter-spacing: 0.2em !important;

    line-height: 1.4 !important;

    text-align: left !important;

    /* MANUAL GAP BELOW */
    margin: 0 0 12px !important;

    color: #f7a901;
  }


  /* =====================================================
     MAIN TITLE - LEFT ALIGNED
  ===================================================== */

  .live-market-scroll-title {
    width: 100% !important;

    max-width: 100% !important;

    /* MANUAL TITLE SIZE */
    font-size: 27px !important;

    line-height: 1.16 !important;

    letter-spacing: -0.6px !important;

    font-weight: 800;

    color: #ffffff;

    margin: 0 0 14px !important;

    padding: 0 !important;

    text-align: left !important;

    /* PREVENT TEXT FROM GETTING CUT OFF */
    white-space: normal !important;

    overflow-wrap: anywhere;

    box-sizing: border-box;
  }


  /* TITLE LINES - ALLOW WRAPPING ON MOBILE */

  .live-market-title-line {
    display: block !important;

    width: 100% !important;

    white-space: normal !important;

    overflow-wrap: anywhere;

    text-align: left !important;
  }


  /* LETTERS STAY PURE WHITE ON MOBILE */

  .live-market-letter {
    color: #ffffff !important;

    text-shadow: none !important;

    filter: none !important;
  }


  /* =====================================================
     BTC / ETH DESCRIPTION - LEFT ALIGNED
  ===================================================== */

  .live-market-subtitle {
    width: 100% !important;

    max-width: 100% !important;

    /* MANUAL DESCRIPTION SIZE */
    font-size: 12px !important;

    line-height: 1.5 !important;

    letter-spacing: 0 !important;

    color: rgba(255, 255, 255, 0.78);

    margin: 0 !important;

    padding: 0 !important;

    text-align: left !important;

    white-space: normal !important;

    overflow-wrap: break-word;
  }

}
  
/* =========================================================
   MOBILE - LIVE MARKET TEXT SIZE
========================================================= */

/* LIVE MARKET TERMINAL - SMALL LABEL */

.live-market-eyebrow {
  /* MANUAL FONT SIZE */
  font-size: 9px !important;

  line-height: 1.3 !important;

  letter-spacing: 0.15em !important;

  text-align: left !important;
}


/* =========================================================
   MAIN HEADING
   TRADE THE WORLD'S LEADING...
========================================================= */

.live-market-scroll-title {
  /* MANUAL FONT SIZE */
  font-size: 22px !important;

  line-height: 1.25 !important;

  letter-spacing: -0.4px !important;

  font-weight: 800;

  text-align: left !important;

  width: 100% !important;

  max-width: 100% !important;

  white-space: normal !important;

  overflow-wrap: normal;
}


/* ALLOW TITLE TO WRAP NATURALLY */

.live-market-title-line {
  display: block !important;

  white-space: normal !important;

  overflow-wrap: normal;

  text-align: left !important;
}


/* MOBILE DESCRIPTION TEXT */

.live-market-subtitle {
  font-size: 10px !important;

  line-height: 1.5 !important;

  text-align: left !important;
}
  
/* =========================================================
   MARKET TERMINAL - MOBILE ONLY
   767PX AND BELOW
========================================================= */

.market-mobile-short-label {
  display: none;
}


@media (max-width: 767px) {

  /* =====================================================
     1. ALL FIVE BUTTONS IN ONE ROW
  ===================================================== */

  .market-mobile-tabs {
    display: grid !important;

    grid-template-columns:
      repeat(5, minmax(0, 1fr)) !important;

    width: 100% !important;

    max-width: 100% !important;

    /* MANUAL SPACE BETWEEN BUTTONS */
    gap: 4px !important;

    margin: 0 0 18px !important;

    padding: 0 !important;

    box-sizing: border-box !important;

    align-items: stretch !important;

    justify-content: stretch !important;
  }


  /* =====================================================
     2. SMALL MARKET BUTTONS
  ===================================================== */

  .market-mobile-tabs .asset-tab {

    width: 100% !important;

    min-width: 0 !important;

    max-width: 100% !important;

    /* MANUAL BUTTON HEIGHT */
    height: 38px !important;

    min-height: 38px !important;

    padding: 4px 2px !important;

    margin: 0 !important;

    display: flex !important;

    flex-direction: row !important;

    align-items: center !important;

    justify-content: center !important;

    /* MANUAL ICON / TEXT GAP */
    gap: 3px !important;

    background: #012d65;

    border-radius: 7px !important;

    font-size: 9px !important;

    letter-spacing: 0 !important;

    white-space: nowrap !important;

    box-sizing: border-box !important;
  }


  /* =====================================================
     3. LUCIDE ICON SIZE
  ===================================================== */

  .market-mobile-tabs .tab-icon {
    display: inline-flex !important;

    align-items: center !important;

    justify-content: center !important;

    flex-shrink: 0;

    line-height: 1;
  }


  .market-mobile-tabs .tab-icon svg {

    /* MANUAL ICON SIZE */
    width: 12px !important;

    height: 12px !important;
  }


  /* =====================================================
     4. HIDE LONG LABELS ON MOBILE
  ===================================================== */

  .market-mobile-tabs .market-desktop-label,
  .market-mobile-tabs .tab-name {
    display: none !important;
  }


  /* =====================================================
     5. SHOW SHORT MOBILE LABELS
  ===================================================== */

  .market-mobile-tabs .market-mobile-short-label {
    display: inline !important;

    font-size: 9px !important;

    font-weight: 700 !important;

    white-space: nowrap !important;

    line-height: 1 !important;
  }


  /* =====================================================
     6. REDUCE DARK CHART CARD SIZE
  ===================================================== */

  .market-mobile-card {

    width: 100% !important;

    /* CARD HEIGHT FOLLOWS ITS CONTENT */
    height: auto !important;

    min-height: 0 !important;

    /* MANUAL INNER SPACE */
    padding: 18px 14px 16px !important;

    border-radius: 18px !important;

    box-sizing: border-box !important;
  }


  /* =====================================================
     7. REDUCE SPACE ABOVE THE CHART
  ===================================================== */

  .market-mobile-card > div:first-child {

    /* CHART HEADER BOTTOM GAP */
    margin-bottom: 16px !important;

    gap: 10px !important;
  }


  /* =====================================================
     8. MANUAL CHART HEIGHT

     200px = SHORT
     230px = RECOMMENDED
     260px = MEDIUM
     300px = BIGGER

     CHANGE ONLY THIS VALUE TO RESIZE CHART.
  ===================================================== */

  .market-mobile-chart {

    height: 250px !important;

    min-height: 0 !important;

    max-height: none !important;
  }


  /* =====================================================
     9. REDUCE CHART FOOTER SPACE
  ===================================================== */

  .market-mobile-card > div:last-child {

    margin-top: 14px !important;
  }

}
  
/* =========================================================
   LIVE MARKET - DESKTOP TEXT SIZE RESTORE
   DESKTOP ONLY: 1200PX AND ABOVE

   MOBILE / TABLET / LAPTOP UNCHANGED
========================================================= */

@media (min-width: 1200px) {

  /* =====================================================
     1. LIVE MARKET TERMINAL - GOLD LABEL
  ===================================================== */

  .live-market-hero-section
  .live-market-eyebrow {

    /* MANUAL LABEL SIZE */
    font-size: 13px !important;

    line-height: 1.4 !important;

    letter-spacing: 0.34em !important;

    text-align: center !important;

    margin-bottom: 22px !important;
  }


  /* =====================================================
     2. MAIN TITLE - RESTORE LARGE DESKTOP SIZE
  ===================================================== */

  .live-market-hero-section
  #pips-live-market-title {

    /*
      PREVIOUS DESKTOP SIZE

      Minimum: 78px
      Responsive: 5.7vw
      Maximum: 110px

      MANUAL SIZE:
      Increase 5.7vw for bigger text.
    */

    font-size:
      clamp(78px, 5.7vw, 110px) !important;

    line-height: 1.03 !important;

    letter-spacing: -3px !important;

    font-weight: 800 !important;

    color: #ffffff !important;

    width: 100% !important;

    max-width: 1500px !important;

    margin: 0 auto 24px !important;

    text-align: center !important;

    /* REMOVE OLD LETTER EFFECTS */

    text-shadow: none !important;

    filter: none !important;
  }


  /* =====================================================
     3. KEEP TWO TITLE LINES
  ===================================================== */

  .live-market-hero-section
  #pips-live-market-title
  .live-market-title-line {

    display: block !important;

    font-size: inherit !important;

    line-height: inherit !important;

    color: #ffffff !important;

    white-space: nowrap !important;

    text-align: center !important;

    text-shadow: none !important;
  }


  /* =====================================================
     4. BTC & ETH DESCRIPTION
  ===================================================== */

  .live-market-hero-section
  .live-market-subtitle {

    /* MANUAL DESCRIPTION SIZE */

    font-size: 16px !important;

    line-height: 1.6 !important;

    color: rgba(255,255,255,0.78) !important;

    text-align: center !important;

    margin: 0 !important;
  }

}
  

/* =========================================================
   DESKTOP LIVE MARKET - NORMAL FLOW + GROUP RISE
   FIX: The former 50vh parent had a 100vh sticky child.
   That mismatch visually overlapped the Quality / Market sections.
   Mobile/tablet/laptop rules above remain unchanged.
========================================================= */
@media (min-width: 1200px) {
  .live-market-hero-section {
    height: 50vh !important;
    min-height: 470px !important;
  }

  .live-market-hero-section .live-market-hero-sticky {
    position: relative !important;
    top: auto !important;
    height: 100% !important;
    min-height: 0 !important;
    padding: 35px 20px !important;
  }

  /* Remove the previous -290px offset on the entire content wrapper. */
  .live-market-hero-section .live-market-hero-sticky > div {
    transform: none !important;
  }

  /* Three elements rise as ONE group, not individual letters. */
  .live-market-hero-section .live-market-content {
    opacity: 0;
    transform: translate3d(0, 36px, 0);
    transition:
      opacity 1s ease-out,
      transform 1s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .live-market-hero-section .live-market-content.is-visible {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .live-market-hero-section #pips-live-market-title {
    font-size: clamp(78px, 5.7vw, 110px) !important;
    line-height: 1.03 !important;
    color: #ffffff !important;
    text-shadow: none !important;
  }
}

@media (max-width: 1199px) {
  .live-market-content {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  .live-market-content {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

/* =========================================================
   LIVE MARKET - TABLET TEXT SIZE
   768PX TO 991PX
========================================================= */

@media (min-width: 768px) and (max-width: 991px) {

  /* LIVE MARKET TERMINAL */

  .live-market-hero-section .live-market-eyebrow {
    font-size: 12px !important;

    line-height: 1.4 !important;

    letter-spacing: 0.2em !important;
  }


  /* TRADE THE WORLD'S LEADING... */

  .live-market-hero-section .live-market-scroll-title {
    /* MANUAL TABLET TITLE SIZE */
    font-size: 36px !important;

    line-height: 1.15 !important;

    letter-spacing: -0.8px !important;

    font-weight: 800 !important;

    color: #ffffff !important;
  }


  /* KEEP TITLE LINES AT THE SAME SIZE */

  .live-market-hero-section
  .live-market-title-line {
    font-size: inherit !important;

    line-height: inherit !important;

    white-space: normal !important;
  }


  /* BTC & ETH DESCRIPTION */

  .live-market-hero-section .live-market-subtitle {
    font-size: 13px !important;

    line-height: 1.5 !important;
  }

}


/* =========================================================
   LIVE MARKET - LAPTOP TEXT SIZE
   992PX TO 1199PX
========================================================= */

@media (min-width: 992px) and (max-width: 1199px) {

  /* LIVE MARKET TERMINAL */

  .live-market-hero-section .live-market-eyebrow {
    font-size: 14px !important;

    line-height: 1.4 !important;

    letter-spacing: 0.25em !important;
  }


  /* TRADE THE WORLD'S LEADING... */

  .live-market-hero-section .live-market-scroll-title {
    /* MANUAL LAPTOP TITLE SIZE */
    font-size: 46px !important;

    line-height: 1.12 !important;

    letter-spacing: -1px !important;

    font-weight: 800 !important;

    color: #ffffff !important;
  }


  /* KEEP TITLE LINES AT THE SAME SIZE */

  .live-market-hero-section
  .live-market-title-line {
    font-size: inherit !important;

    line-height: inherit !important;

    white-space: normal !important;
  }


  /* BTC & ETH DESCRIPTION */

  .live-market-hero-section .live-market-subtitle {
    font-size: 15px !important;

    line-height: 1.5 !important;
  }

}
  
/* =========================================================
   THE PIPS - PREMIUM LIVE MARKET TERMINAL

   WHITE + DEEP BLUE THEME

   ONLY MARKET BUTTONS AND CHART CONTAINER
   NO CONTENT OR CHART DATA CHANGES
========================================================= */


/* =========================================================
   1. MARKET BUTTON ROW
========================================================= */

.market-mobile-tabs {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;

  margin-bottom: 28px !important;
}


/* =========================================================
   2. NORMAL MARKET BUTTON

   WHITE BACKGROUND
   PIPS BLUE TEXT
========================================================= */

.market-mobile-tabs .asset-tab {
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  min-height: 48px;

  padding: 12px 20px;

  background: #ffffff !important;

  color: #012d65 !important;

  border: 1px solid #d8e4f2 !important;

  border-radius: 13px !important;

  box-shadow:
    0 3px 8px rgba(1, 45, 101, 0.04),
    0 8px 22px rgba(1, 45, 101, 0.05) !important;

  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
}


/* =========================================================
   3. BUTTON ICON
========================================================= */

.market-mobile-tabs .asset-tab .tab-icon {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  color: inherit;

  flex-shrink: 0;
}


.market-mobile-tabs .asset-tab .tab-icon svg {
  width: 16px;
  height: 16px;

  stroke-width: 2;
}


/* =========================================================
   4. SECONDARY BUTTON TEXT
========================================================= */

.market-mobile-tabs .asset-tab .tab-name {
  color: inherit;

  opacity: 0.65;
}


/* =========================================================
   5. BUTTON HOVER
========================================================= */

.market-mobile-tabs .asset-tab:hover {
  background: #eef4fb !important;

  color: #012d65 !important;

  border-color: #9bb7d8 !important;

  transform: translateY(-3px);

  box-shadow:
    0 8px 18px rgba(1, 45, 101, 0.10),
    0 14px 28px rgba(1, 45, 101, 0.06) !important;
}


/* =========================================================
   6. ACTIVE MARKET BUTTON

   DEEP BLUE BACKGROUND
   WHITE TEXT
   SMALL ASSET-COLOR INDICATOR
========================================================= */

.market-mobile-tabs .asset-tab.active {
  background: #012d65 !important;

  color: #ffffff !important;

  border-color: #012d65 !important;

  box-shadow:
    0 5px 12px rgba(1, 45, 101, 0.13),
    0 12px 26px rgba(1, 45, 101, 0.20) !important;

  transform: translateY(-2px);
}


.market-mobile-tabs .asset-tab.active .tab-icon,
.market-mobile-tabs .asset-tab.active .tab-name {
  color: #ffffff !important;
}


/* SMALL COLORED LINE AT BOTTOM OF ACTIVE BUTTON */

.market-mobile-tabs .asset-tab.active::after {
  content: "";

  position: absolute;

  left: 25%;
  right: 25%;

  bottom: -1px;

  height: 3px;

  border-radius: 999px;

  background: var(--tab-color, #035391);
}


/* KEYBOARD FOCUS */

.market-mobile-tabs .asset-tab:focus-visible {
  outline: 2px solid #035391;

  outline-offset: 4px;
}


/* =========================================================
   7. MAIN CHART CONTAINER

   PREMIUM NAVY BACKGROUND
========================================================= */

.market-mobile-card {
  position: relative;

  background:
    radial-gradient(
      ellipse at 90% 0%,
      rgba(3, 83, 145, 0.30),
      transparent 48%
    ),
    linear-gradient(
      145deg,
      #102d56 0%,
      #071e42 55%,
      #061934 100%
    ) !important;

  border: 1px solid rgba(134, 181, 235, 0.24) !important;

  border-radius: 26px !important;

  box-shadow:
    0 8px 18px rgba(1, 45, 101, 0.06),
    0 28px 65px rgba(1, 45, 101, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.10) !important;

  transition:
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}


/* SUBTLE CONTAINER HOVER */

.market-mobile-card:hover {
  border-color: rgba(134, 181, 235, 0.40) !important;

  box-shadow:
    0 12px 25px rgba(1, 45, 101, 0.08),
    0 32px 70px rgba(1, 45, 101, 0.18),
    inset 0 1px 0 rgba(255, 255, 255, 0.12) !important;
}


/* =========================================================
   8. CHART AREA

   DISTINCT INNER PANEL
========================================================= */

.market-mobile-card .market-mobile-chart {
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.045),
      rgba(255, 255, 255, 0.012)
    ) !important;

  border: 1px solid rgba(255, 255, 255, 0.055);

  border-radius: 18px !important;

  box-sizing: border-box;
}


/* =========================================================
   9. MARKET DATA UNAVAILABLE STATE

   PREMIUM, READABLE TEXT
========================================================= */

.market-mobile-card .market-empty-state {
  color: #dce8f7 !important;

  text-align: center;
}


.market-mobile-card .market-empty-state p {
  color: #dce8f7 !important;

  font-size: 14px;

  line-height: 1.5;

  margin: 0;
}


/* RETRY CONNECTION BUTTON */

.market-mobile-card .market-retry-button {
  background: #ffffff !important;

  color: #012d65 !important;

  border: 1px solid #ffffff !important;

  border-radius: 10px !important;

  padding: 11px 22px !important;

  font-size: 12px;

  font-weight: 700;

  box-shadow:
    0 5px 14px rgba(0, 0, 0, 0.10);

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}


.market-mobile-card .market-retry-button:hover {
  background: #f7a901 !important;

  color: #012d65 !important;

  border-color: #f7a901 !important;

  transform: translateY(-2px);
}


/* =========================================================
   10. MOBILE ONLY

   KEEP ALL 5 BUTTONS IN ONE ROW
   KEEP YOUR EXISTING MOBILE CHART HEIGHT
========================================================= */

@media (max-width: 767px) {

  .market-mobile-tabs {
    gap: 4px !important;

    margin-bottom: 18px !important;
  }


  .market-mobile-tabs .asset-tab {
    min-height: 38px !important;

    height: 38px !important;

    padding: 4px 2px !important;

    gap: 3px !important;

    border-radius: 8px !important;

    transform: none !important;
  }


  .market-mobile-tabs .asset-tab .tab-icon svg {
    width: 12px !important;

    height: 12px !important;
  }


  .market-mobile-card {
    border-radius: 18px !important;
  }


  .market-mobile-card .market-mobile-chart {
    border-radius: 12px !important;
  }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

  .market-mobile-tabs .asset-tab,
  .market-mobile-card,
  .market-mobile-card .market-retry-button {
    transition: none !important;

    transform: none !important;
  }

}
      `}</style>


      <div
        style={
          styles.wrapper
        }
      >

        {/* =====================================================
            BLUE LIVE MARKET SECTION
        ===================================================== */}

        <section
          ref={
            marketHeroRef
          }

          className="live-market-hero-section"

          style={
            styles.heroSection
          }
        >

          <div
            className="live-market-hero-sticky"

            style={
              styles.heroSticky
            }
          >

            <div
              style={
                styles.heroContainer
              }
            >

              <div
  className="live-market-content"
  style={styles.header}
>

                {/* GOLD LABEL */}

                <div
                  className="live-market-eyebrow"

                  style={
                    styles.eyebrow
                  }
                >
                  Live Market Terminal
                </div>


 {/* =====================================================
    NORMAL WHITE TITLE
    NO LETTER-BY-LETTER REVEAL
===================================================== */}

<h1
  id="pips-live-market-title"
  className="live-market-scroll-title"
  style={styles.title}
>
  <span
    className="live-market-title-line"
    style={styles.titleLine}
  >
    Trade the world's leading
  </span>

  <span
    className="live-market-title-line"
    style={styles.titleLine}
  >
    markets with confidence
  </span>
</h1>


                <p
                  className="live-market-subtitle"

                  style={
                    styles.subtitle
                  }
                >

                  BTC &amp; ETH:
                  live WebSocket ticks

                  {" · "}

                  Gold, Oil, NVDA:
                  60s refresh

                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHITE MARKET SECTION
        ===================================================== */}

        <section
          style={
            styles.marketSection
          }
        >

          <div
            style={
              styles.marketContainer
            }
          >

            {/* ASSET TABS */}

            <div
            className="market-mobile-tabs"
            style={
              styles.tabBar
            }
            >

              {ASSETS.map(
                (
                  asset
                ) => (

                  <button
                    key={
                      asset.id
                    }

                    type="button"

                    className={
                      `asset-tab${
                        activeId ===
                        asset.id
                          ? " active"
                          : ""
                      }`
                    }

                    style={{
                      "--tab-color":
                        asset.color,

                      "--tab-glow":
                        asset.glow,
                    }}

                    onClick={
                      () =>
                        handleAssetChange(
                          asset.id
                        )
                    }
                  >

                   {/* LUCIDE REACT ICON */}

<span className="tab-icon">
  {React.createElement(
    TAB_ICONS[asset.id],
    {
      size: 14,
      strokeWidth: 2,
    }
  )}
</span>


{/* ORIGINAL DESKTOP LABEL */}

<span className="market-desktop-label">
  {asset.label}
</span>


{/* SHORT MOBILE LABEL */}

<span className="market-mobile-short-label">

  {asset.id === "bitcoin"
    ? "BTC"
    : asset.id === "ethereum"
    ? "ETH"
    : asset.id === "gold"
    ? "AU"
    : asset.id === "oil"
    ? "OIL"
    : "NVDA"}

</span>


{/* DESKTOP ASSET NAME */}

<span className="tab-name">
  {asset.name}
</span>

                  </button>
                )
              )}

            </div>


            {/* =================================================
                CHART CARD
            ================================================= */}

            <div
  className="market-mobile-card"
  style={
    styles.card
  }
>

              {/* CHART HEADER */}

              <div
                style={
                  styles.chartMeta
                }
              >

                <div
                  style={
                    styles.assetBadge
                  }
                >

                  <div
                    style={
                      styles.iconCircle
                    }
                  >

                    {
                      activeAsset.icon
                    }

                  </div>


                  <div>

                    <div
                      style={
                        styles.assetName
                      }
                    >

                      {
                        activeAsset.name
                      }

                    </div>


                    <div
                      style={
                        styles.assetLabel
                      }
                    >

                      {
                        activeAsset.label
                      }

                      {" · USD · "}

                      {
                        isWs
                          ? "LIVE"
                          : "TODAY"
                      }

                    </div>

                  </div>

                </div>


                <PriceTicker
                  data={
                    chartData
                  }

                  asset={
                    activeAsset
                  }

                  livePrice={
                    livePrice
                  }
                />

              </div>


              {/* =================================================
                  CHART
              ================================================= */}

             <div
                  className="market-mobile-chart"
                  style={
                    styles.chartWrap
                  }

                  key={
                    animKey
                  }
                >

                {
                  isCurrentlyLoading &&
                  chartData.length ===
                  0

                    ? (

                      <div
                        style={
                          styles.loadingStyle
                        }
                      >
                        Fetching market data…
                      </div>

                    )

                    : hasError &&
                      chartData.length ===
                      0

                      ? (

                        <div
                          style={
                            styles.errorStyle
                          }
                        >

                          <p>
                            {hasError}
                          </p>


                          <button
                            type="button"

                            onClick={
                              () =>
                                refresh(
                                  activeAsset
                                )
                            }

                            style={
                              styles.retryBtn
                            }
                          >
                            Retry Connection
                          </button>

                        </div>

                      )

                      : (

                        <>

                          {
                            hasError &&
                            chartData.length >
                            0 &&
                            (

                              <div
                                style={{
                                  fontSize:
                                    11,

                                  color:
                                    "#f59e0b",

                                  fontFamily:
                                    "'IBM Plex Mono', monospace",

                                  marginBottom:
                                    8,

                                  opacity:
                                    0.8,
                                }}
                              >

                                ⚠ Showing cached data

                                {" · "}

                                refresh failed

                                {" · "}


                                <span
                                  style={{
                                    cursor:
                                      "pointer",

                                    textDecoration:
                                      "underline",
                                  }}

                                  onClick={
                                    () =>
                                      refresh(
                                        activeAsset
                                      )
                                  }
                                >
                                  Retry
                                </span>

                              </div>
                            )
                          }


                          <ResponsiveContainer
                            width="100%"
                            height="100%"
                          >

                            <AreaChart
                              data={
                                chartData
                              }

                              margin={{
                                top:
                                  5,

                                right:
                                  10,

                                left:
                                  10,

                                bottom:
                                  0,
                              }}
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

                                    stopColor={
                                      activeAsset.color
                                    }

                                    stopOpacity={
                                      0.25
                                    }
                                  />


                                  <stop
                                    offset="100%"

                                    stopColor={
                                      activeAsset.color
                                    }

                                    stopOpacity={
                                      0
                                    }
                                  />

                                </linearGradient>

                              </defs>


                              <CartesianGrid
                                strokeDasharray="1 4"

                                vertical={
                                  false
                                }

                                stroke="rgba(255,255,255,0.04)"
                              />


                              <XAxis
                                hide

                                dataKey="time"

                                stroke="transparent"

                                tick={{
                                  fill:
                                    "#f9f9f999",

                                  fontSize:
                                    11,
                                }}

                                tickLine={
                                  false
                                }

                                interval="preserveStartEnd"
                              />


                              <YAxis
                                domain={[
                                  "auto",
                                  "auto",
                                ]}

                                stroke="transparent"

                                tick={{
                                  fill:
                                    "#f9f9f999",

                                  fontSize:
                                    11,
                                }}

                                tickLine={
                                  false
                                }

                                axisLine={
                                  false
                                }

                                tickFormatter={
                                  (
                                    value
                                  ) =>

                                    value >=
                                    1000

                                      ? `$${(
                                          value /
                                          1000
                                        ).toFixed(
                                          1
                                        )}k`

                                      : value >=
                                        1

                                        ? `$${value.toFixed(
                                            0
                                          )}`

                                        : `$${value.toFixed(
                                            3
                                          )}`
                                }

                                width={
                                  60
                                }
                              />


                              <Tooltip
                                content={
                                  <CustomTooltip
                                    asset={
                                      activeAsset
                                    }
                                  />
                                }

                                cursor={{
                                  stroke:
                                    activeAsset.color,

                                  strokeWidth:
                                    1,

                                  strokeDasharray:
                                    "4 4",

                                  opacity:
                                    0.5,
                                }}
                              />


                              <Area
                                type="monotone"

                                dataKey="value"

                                stroke={
                                  activeAsset.color
                                }

                                strokeWidth={
                                  2
                                }

                                fill={
                                  `url(#grad-${activeId})`
                                }

                                dot={
                                  false
                                }

                                activeDot={{
                                  r:
                                    5,

                                  fill:
                                    activeAsset.color,

                                  stroke:
                                    "#020818",

                                  strokeWidth:
                                    2,
                                }}

                                isAnimationActive={
                                  false
                                }
                              />

                            </AreaChart>

                          </ResponsiveContainer>

                        </>
                      )
                }

              </div>


              {/* =================================================
                  FOOTER
              ================================================= */}

              <div
                style={
                  styles.footer
                }
              >

                <span
                  style={
                    styles.footerTag
                  }
                >

                  <span
                    style={
                      styles.dot
                    }
                  />


                  {
                    isWs
                      ? "WEBSOCKET · LIVE TICKS"
                      : "POLLING · 60S REFRESH"
                  }

                </span>


                <span
                  style={
                    styles.footerTag
                  }
                >

                  {sourceLabel}

                </span>

              </div>

            </div>

          </div>

        </section>

      </div>

    </>
  );
};


export default LiveChartTwo;