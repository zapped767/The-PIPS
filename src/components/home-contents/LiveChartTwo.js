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
      await fetch(url, {
        signal:
          controller.signal,

        cache:
          "no-store",
      });

    return res;
  } finally {
    clearTimeout(timer);
  }
}


const sleep = (ms) =>
  new Promise(
    (resolve) =>
      setTimeout(resolve, ms)
  );


async function withRetry(
  thunk,
  maxAttempts = 3
) {
  let lastError;

  for (
    let attempt = 0;
    attempt < maxAttempts;
    attempt++
  ) {
    try {
      return await thunk();
    } catch (err) {
      lastError = err;

      if (
        attempt <
        maxAttempts - 1
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


      if (!res.ok) {
        throw new Error(
          `Binance ${res.status}`
        );
      }


      const klines =
        await res.json();


      return klines.map(
        (k) => {
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
                  close > 1
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


      if (!res.ok) {
        throw new Error(
          `Yahoo proxy failed: ${res.status}`
        );
      }


      const data =
        await res.json();


      const result =
        data?.chart
          ?.result?.[0];


      if (!result) {
        console.log(data);

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
          (ts, i) => {
            const close =
              closes[i];


            if (
              close == null
            ) {
              return null;
            }


            return {
              time:
                new Date(
                  ts * 1000
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
                ts * 1000,

              value:
                parseFloat(
                  close.toFixed(
                    close > 100
                      ? 2
                      : 4
                  )
                ),
            };
          }
        )

        .filter(Boolean);
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
    (prev) => ({
      ...prev,

      [asset.id]:
        true,
    })
  );


  setErrors(
    (prev) => ({
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
      (prev) => ({
        ...prev,

        [asset.id]:
          data,
      })
    );
  } catch (err) {
    console.error(
      `Failed to fetch ${asset.id}:`,
      err
    );


    setErrors(
      (prev) => ({
        ...prev,

        [asset.id]:
          "Market Data Unavailable",
      })
    );
  } finally {
    setLoading(
      (prev) => ({
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

        {val >= 1
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
            )}`}

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
    data.length < 2
  ) {
    return null;
  }


  const current =
    livePrice ??
    data[
      data.length - 1
    ]?.value;


  const open =
    data[0]?.value;


  const change =
    current - open;


  const pct =
    (
      (change / open) *
      100
    ).toFixed(2);


  const up =
    change >= 0;


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

        {current >= 1
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
            )}`}

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

        {change >= 1
          ? change.toFixed(2)
          : change.toFixed(4)}

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
   MAIN COMPONENT
========================================================= */

const LiveChartTwo = () => {

  /* =====================================================
     HERO SCROLL EFFECT
  ===================================================== */

  const marketHeroRef =
    useRef(null);
const heroProgressRef =
  useRef(0);
const heroLockedRef =
  useRef(false);
  
  const [
    heroTextProgress,
    setHeroTextProgress,
  ] = useState(0);


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
      (a) =>
        a.id === activeId
    );


  const chartData =
    allData[activeId] ||
    [];


  const livePrice =
    livePrices[
      activeId
    ] ?? null;


  const refresh =
    useCallback(
      (asset) =>
        fetchSingleAsset(
          asset,
          setAllData,
          setLoading,
          setErrors
        ),

      []
    );


 /* =========================================================
   LIVE MARKET TEXT REVEAL
   LOCK WEBSITE WHILE REVEALING

   DESKTOP ONLY
========================================================= */

useEffect(() => {
  const section =
    marketHeroRef.current;

  if (!section) return;


  /* =========================================
     RESET TEXT WHEN PAGE / CODE LOADS
  ========================================= */

  heroProgressRef.current = 0;
  setHeroTextProgress(0);


  /* =========================================
     MANUAL SETTINGS
  ========================================= */

  /*
    TEXT REVEAL SPEED

    0.0010 = slower
    0.0015 = medium
    0.0020 = recommended
    0.0025 = faster
    0.0030 = very fast
  */

  const REVEAL_SPEED = 0.0020;


  /*
    WHERE PAGE SHOULD LOCK

    Your navbar is fixed at the top.

    100 = higher
    130 = recommended
    150 = little lower
    180 = lower
  */

/*
  EXACT POSITION WHERE BLUE SECTION STOPS

  150 = higher
  170 = recommended for your screenshot
  190 = lower
*/
const LOCK_TOP = 390;


  const setProgress = (value) => {
    const clamped =
      Math.min(
        Math.max(value, 0),
        1
      );

    heroProgressRef.current =
      clamped;

    setHeroTextProgress(
      clamped
    );
  };

const handleWheel = (event) => {

  /* DESKTOP ONLY */
  if (window.innerWidth < 1200) {
    return;
  }


  const rect =
    section.getBoundingClientRect();


  const progress =
    heroProgressRef.current;


  /*
    =====================================================
    SECTION LOCK AREA
  =====================================================
  */

  const shouldLock =
    rect.top <= LOCK_TOP &&
    rect.bottom > LOCK_TOP;


  if (!shouldLock) {
    return;
  }


  /* =====================================================
     SCROLL DOWN
     PAGE DOES NOT MOVE
     TEXT REVEALS
  ===================================================== */

  if (
    event.deltaY > 0 &&
    progress < 1
  ) {

    event.preventDefault();
    event.stopPropagation();


    const amount =
      Math.abs(
        event.deltaY
      ) *
      REVEAL_SPEED;


    setProgress(
      progress + amount
    );


    return;
  }


  /* =====================================================
     SCROLL UP
     PAGE DOES NOT MOVE
     REVERSE THE SHADOW / REVEAL

     IMPORTANT:
     THIS ALSO WORKS WHEN progress === 1
  ===================================================== */

  if (
    event.deltaY < 0 &&
    progress > 0
  ) {

    event.preventDefault();
    event.stopPropagation();


    const amount =
      Math.abs(
        event.deltaY
      ) *
      REVEAL_SPEED;


    setProgress(
      progress - amount
    );


    return;
  }


  /* =====================================================
     progress === 1 + SCROLL DOWN

     Animation is complete.
     Browser may now go to NEXT SECTION.
  ===================================================== */

  if (
    event.deltaY > 0 &&
    progress >= 1
  ) {
    return;
  }


  /* =====================================================
     progress === 0 + SCROLL UP

     Reverse animation is complete.
     Browser may now go to PREVIOUS SECTION.
  ===================================================== */

  if (
    event.deltaY < 0 &&
    progress <= 0
  ) {
    return;
  }
};


  /*
    capture:true makes this run before
    other scroll handlers on the page.
  */

  const wheelOptions = {
    passive: false,
    capture: true,
  };


  window.addEventListener(
    "wheel",
    handleWheel,
    wheelOptions
  );


  return () => {
    window.removeEventListener(
      "wheel",
      handleWheel,
      wheelOptions
    );
  };

}, []);

  /* =======================================================
     BINANCE WEBSOCKET
  ======================================================= */

  useEffect(() => {
    const binanceAssets =
      ASSETS.filter(
        (a) =>
          a.source ===
          "binance-ws"
      );


    binanceAssets.forEach(
      (asset) => {

        refresh(asset);


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
              (event) => {

                try {

                  const msg =
                    JSON.parse(
                      event.data
                    );


                  const streamName =
                    msg.stream ||
                    "";


                  /* ===============================
                     CURRENT PRICE
                  =============================== */

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
                        (prev) => ({
                          ...prev,

                          [asset.id]:
                            price,
                        })
                      );
                    }
                  }


                  /* ===============================
                     LIVE CANDLE
                  =============================== */

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
                      (prev) => {

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


                        const newCandle =
                          {
                            time,

                            timestamp:
                              ts,

                            value:
                              parseFloat(
                                close.toFixed(
                                  close > 1
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

                          updated =
                            [
                              ...existing.slice(
                                0,
                                -1
                              ),

                              newCandle,
                            ];

                        } else {

                          updated =
                            [
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

                } catch (e) {
                  // Ignore malformed messages
                }
              };


            ws.onerror =
              (err) => {

                console.warn(
                  `[WS] Error on ${asset.id}:`,
                  err
                );
              };


            ws.onclose =
              (e) => {

                console.warn(
                  `[WS] Closed ${asset.id} (code ${e.code}), reconnecting in 3s…`
                );


                if (
                  e.code !==
                  1000
                ) {

                  wsRefs.current[
                    asset.id
                  ] = null;


                  setTimeout(
                    connect,
                    3000
                  );
                }
              };


            wsRefs.current[
              asset.id
            ] = ws;
          };


        connect();
      }
    );


    return () => {

      Object.values(
        wsRefs.current
      ).forEach(
        (ws) => {

          if (
            ws &&
            ws.readyState ===
              WebSocket.OPEN
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
        (a) =>
          a.source ===
          "yahoo"
      );


    const loadYahoo =
      () => {

        let delay =
          0;


        yahooAssets.forEach(
          (asset) => {

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
      clearInterval(id);

  }, [refresh]);


  /* =======================================================
     TAB CHANGE
  ======================================================= */

  const handleAssetChange =
    (id) => {

      setActiveId(id);


      setAnimKey(
        (k) =>
          k + 1
      );


      const asset =
        ASSETS.find(
          (a) =>
            a.id === id
        );


      if (
        asset.source ===
        "yahoo"
      ) {
        refresh(asset);
      }
    };


  /* =========================================================
     TITLE LETTER CONFIG
  ========================================================= */

  const titleLineOne =
    "Trade the world's leading";


  const titleLineTwo =
    "markets with confidence";


  const totalTitleCharacters =
    titleLineOne.length +
    titleLineTwo.length;


  /*
    -0.7 makes every letter dim at the beginning.

    As user scrolls:
    Trade → world's → leading → markets → confidence.
  */

  const revealHead =
    heroTextProgress *
      totalTitleCharacters -
    0.7;


  const renderTitleLine =
    (
      text,
      startingIndex
    ) => {

      return text
        .split("")
        .map(
          (
            letter,
            index
          ) => {

            const globalIndex =
              startingIndex +
              index;


            const distance =
              revealHead -
              globalIndex;


            const revealed =
              distance >= 0;


            /*
              Current leading edge gets stronger glow.
            */

            const isGlowLetter =
              revealed &&
              distance >= 0 &&
              distance < 2.2;


            return (
              <span
                key={
                  `${startingIndex}-${index}`
                }

                className="live-market-letter"

                style={{
                  color:
                    revealed
                      ? "#ffffff"
                      : "rgba(255,255,255,0.16)",

                  textShadow:
                    isGlowLetter
                      ? `
                        0 0 8px rgba(255,255,255,0.95),
                        0 0 18px rgba(255,255,255,0.70),
                        0 0 34px rgba(255,255,255,0.35)
                      `
                      : revealed
                        ? "0 0 2px rgba(255,255,255,0.10)"
                        : "none",

                  transition:
                    "color 0.10s linear, text-shadow 0.10s linear",
                }}
              >

                {letter === " "
                  ? "\u00A0"
                  : letter}

              </span>
            );
          }
        );
    };


  /* =========================================================
     STYLES
  ========================================================= */

  const styles = {

    /* =====================================================
       WHOLE COMPONENT
    ===================================================== */

    wrapper: {
      width:
        "100%",

      background:
        "#ffffff",

      fontFamily:
        "'IBM Plex Sans', sans-serif",

      position:
        "relative",

      /*
        IMPORTANT:

        Must be visible for position: sticky.
      */

      overflow:
        "visible",
    },


    /* =====================================================
       BLUE HERO OUTER
    ===================================================== */

    heroSection: {
      width:
        "100%",

      background:
        "#012d65",

      position:
        "relative",
    },


    /* =====================================================
       BLUE HERO STICKY INNER
    ===================================================== */

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


    /* =====================================================
       ONLY LIVE MARKET TERMINAL = GOLD
    ===================================================== */

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


    /* =====================================================
       WHITE MARKET SECTION
    ===================================================== */

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


    /* =====================================================
       MARKET TABS
    ===================================================== */

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


    /* =====================================================
       CHART CARD
    ===================================================== */

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
    loading[activeId];


  const hasError =
    errors[activeId];


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
           DESKTOP ONLY
           STICKY SECTION + LETTER REVEAL
           1200PX+
        ===================================================== */

        @media (min-width: 1200px) {

          /*
            ==================================================
            MANUAL SCROLL SPEED

            160vh = FAST
            180vh = LITTLE FASTER
            200vh = RECOMMENDED
            230vh = SLOW
            260vh = VERY SLOW
            ==================================================
          */

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

/* =====================================================
   MOVE ALL LIVE MARKET TEXT UP / DOWN
===================================================== */

.live-market-hero-sticky > div {

  /*
    - value = UP
    + value = DOWN

    -10px = little up
    -20px = up
    -30px = recommended
    -40px = more up
  */

  transform:
    translateY(-290px) !important;
}
          /*
            ==================================================
            MANUAL DESKTOP TITLE SIZE

            80px  = smaller
            90px  = medium
            100px = recommended
            110px = bigger
            120px = much bigger
            ==================================================
          */

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
        }


        /* =====================================================
           LAPTOP
           NO STICKY EFFECT
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

          {/* =================================================
              STICKY SCREEN

              USER SCROLLS,
              SCREEN DOES NOT VISUALLY MOVE.

              ONLY LETTERS CHANGE.
          ================================================= */}

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
                style={
                  styles.header
                }
              >

                {/* ===========================================
                    GOLD LABEL
                =========================================== */}

                <div
                  className="live-market-eyebrow"

                  style={
                    styles.eyebrow
                  }
                >
                  Live Market Terminal
                </div>


                {/* ===========================================
                    SCROLL LETTER REVEAL TITLE
                =========================================== */}

                <h1
                  className="live-market-scroll-title"

                  style={
                    styles.title
                  }
                >

                  <span
                    className="live-market-title-line"

                    style={
                      styles.titleLine
                    }
                  >

                    {renderTitleLine(
                      titleLineOne,
                      0
                    )}

                  </span>


                  <span
                    className="live-market-title-line"

                    style={
                      styles.titleLine
                    }
                  >

                    {renderTitleLine(
                      titleLineTwo,

                      titleLineOne.length
                    )}

                  </span>

                </h1>


                {/* ===========================================
                    SUB TITLE
                =========================================== */}

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

            {/* =================================================
                ASSET TABS
            ================================================= */}

            <div
              style={
                styles.tabBar
              }
            >

              {ASSETS.map(
                (a) => (

                  <button
                    key={
                      a.id
                    }

                    type="button"

                    className={
                      `asset-tab${
                        activeId ===
                        a.id
                          ? " active"
                          : ""
                      }`
                    }

                    style={{
                      "--tab-color":
                        a.color,

                      "--tab-glow":
                        a.glow,
                    }}

                    onClick={() =>
                      handleAssetChange(
                        a.id
                      )
                    }
                  >

                    <span
                      className="tab-icon"
                    >
                      {a.icon}
                    </span>


                    <span>
                      {a.label}
                    </span>


                    <span
                      className="tab-name"
                    >
                      {a.name}
                    </span>

                  </button>

                )
              )}

            </div>


            {/* =================================================
                CHART CARD
            ================================================= */}

            <div
              style={
                styles.card
              }
            >

              {/* =============================================
                  CHART HEADER
              ============================================= */}

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


              {/* =============================================
                  LIVE CHART
              ============================================= */}

              <div
                style={
                  styles.chartWrap
                }

                key={
                  animKey
                }
              >

                {isCurrentlyLoading &&
                chartData.length ===
                  0 ? (

                  <div
                    style={
                      styles.loadingStyle
                    }
                  >
                    Fetching market data…
                  </div>

                ) : hasError &&
                  chartData.length ===
                    0 ? (

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

                      onClick={() =>
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

                ) : (

                  <>

                    {hasError &&
                      chartData.length >
                        0 && (

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

                            onClick={() =>
                              refresh(
                                activeAsset
                              )
                            }
                          >
                            Retry
                          </span>

                        </div>

                      )}


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

                          tickFormatter={(
                            v
                          ) =>

                            v >= 1000

                              ? `$${(
                                  v /
                                  1000
                                ).toFixed(
                                  1
                                )}k`

                              : v >= 1

                                ? `$${v.toFixed(
                                    0
                                  )}`

                                : `$${v.toFixed(
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

                          fill={`url(#grad-${activeId})`}

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

                )}

              </div>


              {/* =============================================
                  CHART FOOTER
              ============================================= */}

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


                  {isWs
                    ? "WEBSOCKET · LIVE TICKS"
                    : "POLLING · 60S REFRESH"}

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