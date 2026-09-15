import { useState, useEffect, useRef } from "react";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const CORS_PROXY = "https://corsproxy.io/?key=1dc9c7fd&url=";
const POLL_INTERVAL = 60000; // 60 seconds

// CoinGecko IDs matched to your crypto JSON order
const COINGECKO_IDS = [
  "bitcoin",
  "ethereum",
  "ripple",
  "bitcoin-cash",
  "cardano",
  "litecoin",
  "stellar",
  "iota",
];

// Yahoo Finance tickers - order matches your JSON files exactly
const YAHOO_TICKERS = {
  commodities: ["GC=F", "SI=F", "CL=F", "BZ=F", "NG=F", "PL=F", "HG=F", "ZW=F"],
  forex: [
    "EURUSD=X",
    "GBPUSD=X",
    "JPY=X",
    "CHF=X",
    "AUDUSD=X",
    "CAD=X",
    "NZDUSD=X",
    "EURGBP=X",
  ],
  indices: [
    "^GSPC",
    "^DJI",
    "^NDX",
    "^FTSE",
    "^GDAXI",
    "^N225",
    "^HSI",
    "^AXJO",
  ],
  stocks: ["AAPL", "MSFT", "NVDA", "AMZN", "META", "TSLA", "GOOGL", "BRK-B"],
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

async function fetchWithTimeout(url, timeoutMs = 12000) {
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

// ─── FETCHERS ────────────────────────────────────────────────────────────────

async function fetchCryptoData(seedData) {
  const ids = COINGECKO_IDS.join(",");
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=7d`;
  const res = await fetchWithTimeout(url);
  if (!res.ok) throw new Error("CoinGecko fetch failed");
  const data = await res.json();

  return seedData.map((item) => {
    const match = data.find(
      (coin) => coin.id === COINGECKO_IDS[parseInt(item.id) - 1],
    );
    if (!match) return item;
    return {
      ...item,
      price: match.current_price,
      volume: match.total_volume,
      percent: parseFloat(
        (
          match.price_change_percentage_7d_in_currency ??
          match.price_change_percentage_24h ??
          0
        ).toFixed(2),
      ),
    };
  });
}

/**
 * Fetch a single Yahoo Finance ticker via v8/finance/chart (same endpoint as
 * LiveChartTwo.js). Extracts price, volume, and 24h change from chart meta.
 */
async function fetchYahooSingle(ticker) {
  return withRetry(async () => {
    const yahooUrl =
      `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}` +
      `?interval=1d&range=5d&_=${Date.now()}`;
    const proxied = `${CORS_PROXY}${encodeURIComponent(yahooUrl)}`;

    const res = await fetchWithTimeout(proxied, 12000);
    if (!res.ok)
      throw new Error(`Yahoo chart failed for ${ticker}: ${res.status}`);

    const json = await res.json();
    const result = json?.chart?.result?.[0];
    if (!result) throw new Error(`No chart result for ${ticker}`);

    const meta = result.meta;

    const price = meta.regularMarketPrice ?? null;
    const volume = meta.regularMarketVolume ?? null;

    // % change: (currentPrice - previousClose) / previousClose * 100
    const prevClose = meta.chartPreviousClose ?? meta.previousClose ?? null;
    const percent =
      price != null && prevClose != null && prevClose !== 0
        ? parseFloat((((price - prevClose) / prevClose) * 100).toFixed(2))
        : null;

    return { price, volume, percent };
  }, 3);
}

async function fetchYahooData(tableType, seedData) {
  const tickers = YAHOO_TICKERS[tableType];
  if (!tickers) return seedData;

  // Fetch all tickers concurrently; fall back to seed item on individual failure
  const results = await Promise.allSettled(
    tickers.map((ticker) => fetchYahooSingle(ticker)),
  );

  return seedData.map((item, index) => {
    const outcome = results[index];
    if (outcome?.status !== "fulfilled") return item; // keep seed on error

    const { price, volume, percent } = outcome.value;
    return {
      ...item,
      price: price ?? item.price,
      volume: volume ?? item.volume,
      percent: percent ?? item.percent,
    };
  });
}

// ─── HOOK ────────────────────────────────────────────────────────────────────

/**
 * useMarketTableData
 *
 * @param {"crypto"|"commodities"|"forex"|"indices"|"stocks"} tableType
 * @param {Array} seedData  - the imported JSON (used as initial state + fallback)
 * @returns {{ rows: Array, loading: boolean, error: string|null }}
 */
export function useMarketTableData(tableType, seedData) {
  const [rows, setRows] = useState(seedData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchingRef = useRef(false);
  const timerRef = useRef(null);

  const fetchData = async () => {
    if (fetchingRef.current) return;
    fetchingRef.current = true;
    try {
      let updated;
      if (tableType === "crypto") {
        updated = await fetchCryptoData(seedData);
      } else {
        updated = await fetchYahooData(tableType, seedData);
      }
      setRows(updated);
      setError(null);
    } catch (err) {
      console.warn(
        `[useMarketTableData] ${tableType} fetch error:`,
        err.message,
      );
      setError(err.message);
      // Preserve seed / previously fetched data - don't blank the table
    } finally {
      fetchingRef.current = false;
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    timerRef.current = setInterval(fetchData, POLL_INTERVAL);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tableType]);

  return { rows, loading, error };
}
