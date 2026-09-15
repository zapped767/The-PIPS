import TopicOne from "../../resource-contents/currency-converter-contents/TopicOne";
import { useEffect, useState, useCallback, useRef } from "react";

// ── Currency list ─────────────────────────────────────────────────────────────
const CURRENCIES = [
  { code: "USD", name: "US Dollar", flag: "us" },
  { code: "EUR", name: "Euro", flag: "eu" },
  { code: "GBP", name: "British Pound", flag: "gb" },
  { code: "JPY", name: "Japanese Yen", flag: "jp" },
  { code: "AUD", name: "Australian Dollar", flag: "au" },
  { code: "CAD", name: "Canadian Dollar", flag: "ca" },
  { code: "CHF", name: "Swiss Franc", flag: "ch" },
  { code: "NZD", name: "New Zealand Dollar", flag: "nz" },
  { code: "SGD", name: "Singapore Dollar", flag: "sg" },
  { code: "HKD", name: "Hong Kong Dollar", flag: "hk" },
  { code: "SEK", name: "Swedish Krona", flag: "se" },
  { code: "NOK", name: "Norwegian Krone", flag: "no" },
  { code: "DKK", name: "Danish Krone", flag: "dk" },
  { code: "ZAR", name: "South African Rand", flag: "za" },
  { code: "INR", name: "Indian Rupee", flag: "in" },
  { code: "LKR", name: "Sri Lankan Rupee", flag: "lk" },
  { code: "CNY", name: "Chinese Yuan", flag: "cn" },
  { code: "MXN", name: "Mexican Peso", flag: "mx" },
  { code: "BRL", name: "Brazilian Real", flag: "br" },
  { code: "TRY", name: "Turkish Lira", flag: "tr" },
  { code: "BTC", name: "Bitcoin", flag: null },
  { code: "ETH", name: "Ethereum", flag: null },
];

const DEFAULT_SLOTS = [
  { currency: "USD", amount: "100", isBase: true },
  { currency: "EUR", amount: "", isBase: false },
  { currency: "GBP", amount: "", isBase: false },
  { currency: "JPY", amount: "", isBase: false },
  { currency: "BTC", amount: "", isBase: false },
  { currency: "ETH", amount: "", isBase: false },
];

const FALLBACK_RATES = {
  USD: 1,
  EUR: 0.922,
  GBP: 0.787,
  JPY: 149.5,
  AUD: 1.544,
  CAD: 1.362,
  CHF: 0.905,
  NZD: 1.663,
  SGD: 1.347,
  HKD: 7.822,
  SEK: 10.44,
  NOK: 10.61,
  DKK: 6.877,
  ZAR: 18.62,
  INR: 83.48,
  LKR: 308.0,
  CNY: 7.237,
  MXN: 17.15,
  BRL: 4.972,
  TRY: 32.14,
  BTC: 0.0000105,
  ETH: 0.000278,
};

const FX_TICKERS = {
  EUR: "EURUSD=X",
  GBP: "GBPUSD=X",
  JPY: "JPY=X",
  AUD: "AUDUSD=X",
  CAD: "CAD=X",
  CHF: "CHF=X",
  NZD: "NZDUSD=X",
  SGD: "SGD=X",
  HKD: "HKD=X",
  SEK: "SEK=X",
  NOK: "NOK=X",
  DKK: "DKK=X",
  ZAR: "ZAR=X",
  INR: "INR=X",
  LKR: "LKR=X",
  CNY: "CNY=X",
  MXN: "MXN=X",
  BRL: "BRL=X",
  TRY: "TRY=X",
};
const CRYPTO_TICKERS = { BTC: "BTCUSDT", ETH: "ETHUSDT" };
const CORS_PROXY = "https://corsproxy.io/?key=1dc9c7fd&url=";
const USD_QUOTE = new Set(["EURUSD=X", "GBPUSD=X", "AUDUSD=X", "NZDUSD=X"]);

async function fetchWithTimeout(url, ms = 10000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { signal: ctrl.signal, cache: "no-store" });
  } finally {
    clearTimeout(t);
  }
}

async function fetchFXRates() {
  const tickers = Object.values(FX_TICKERS);
  const results = await Promise.allSettled(
    tickers.map(async (ticker) => {
      const yahooUrl =
        `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}` +
        `?interval=1d&range=1d&_=${Date.now()}`;
      const res = await fetchWithTimeout(
        `${CORS_PROXY}${encodeURIComponent(yahooUrl)}`,
        10000,
      );
      if (!res.ok) throw new Error(`${ticker} ${res.status}`);
      const json = await res.json();
      const price = json?.chart?.result?.[0]?.meta?.regularMarketPrice;
      if (price == null) throw new Error(`no price for ${ticker}`);
      return { ticker, price };
    }),
  );
  const rates = { USD: 1 };
  Object.entries(FX_TICKERS).forEach(([code, ticker], i) => {
    const r = results[i];
    rates[code] =
      r.status === "fulfilled"
        ? USD_QUOTE.has(ticker)
          ? 1 / r.value.price
          : r.value.price
        : FALLBACK_RATES[code];
  });
  return rates;
}

async function fetchCryptoRates() {
  const out = {};
  await Promise.allSettled(
    Object.entries(CRYPTO_TICKERS).map(async ([code, sym]) => {
      const res = await fetchWithTimeout(
        `https://api.binance.com/api/v3/ticker/price?symbol=${sym}`,
        8000,
      );
      if (!res.ok) throw new Error(sym);
      const json = await res.json();
      out[code] = 1 / parseFloat(json.price);
    }),
  );
  return out;
}

function convertAmount(fromCode, toCode, amount, rates) {
  if (!rates || !amount || isNaN(amount)) return "";
  const inUSD = parseFloat(amount) / (rates[fromCode] || 1);
  const result = inUSD * (rates[toCode] || 1);
  if (Math.abs(result) < 0.000001) return result.toFixed(8);
  if (Math.abs(result) < 0.001) return result.toFixed(6);
  if (Math.abs(result) < 1) return result.toFixed(4);
  if (Math.abs(result) >= 10000) return result.toFixed(2);
  return result.toFixed(4);
}

// ─────────────────────────────────────────────────────────────────────────────

const CurrencyConverterContentOne = () => {
  const [slots, setSlots] = useState(DEFAULT_SLOTS);
  const [rates, setRates] = useState(FALLBACK_RATES);
  const [rateTime, setRateTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchRef = useRef(false);

  const fetchRates = useCallback(async () => {
    if (fetchRef.current) return;
    fetchRef.current = true;
    try {
      const [fxRates, cryptoRates] = await Promise.all([
        fetchFXRates(),
        fetchCryptoRates(),
      ]);
      const merged = { ...FALLBACK_RATES, ...fxRates, ...cryptoRates };
      setRates(merged);
      setRateTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    } catch {
      setRates(FALLBACK_RATES);
    } finally {
      setLoading(false);
      fetchRef.current = false;
    }
  }, []);

  useEffect(() => {
    fetchRates();
    const timer = setInterval(fetchRates, 60000);
    return () => clearInterval(timer);
  }, [fetchRates]);

  // Recalculate non-base slots when rates refresh
  useEffect(() => {
    const base = slots.find((s) => s.isBase);
    if (!base || !rates) return;
    setSlots((prev) =>
      prev.map((s) =>
        s.isBase
          ? s
          : {
              ...s,
              amount: convertAmount(
                base.currency,
                s.currency,
                base.amount,
                rates,
              ),
            },
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rates]);

  const handleAmountChange = (idx, value) => {
    setSlots((prev) => {
      const updated = prev.map((s, i) => ({
        ...s,
        isBase: i === idx,
        amount: i === idx ? value : s.amount,
      }));
      const base = updated[idx];
      return updated.map((s, i) =>
        i === idx
          ? s
          : {
              ...s,
              amount: convertAmount(
                base.currency,
                s.currency,
                base.amount,
                rates,
              ),
            },
      );
    });
  };

  const handleCurrencyChange = (idx, newCode) => {
    setSlots((prev) => {
      const base = prev.find((s) => s.isBase) || prev[0];
      return prev.map((s, i) => {
        if (i !== idx) return s;
        return {
          ...s,
          currency: newCode,
          amount: s.isBase
            ? s.amount
            : convertAmount(base.currency, newCode, base.amount, rates),
        };
      });
    });
  };

  const handleSlotClick = (idx) => {
    setSlots((prev) => {
      const clicked = prev[idx];
      const updated = prev.map((s, i) => ({ ...s, isBase: i === idx }));
      return updated.map((s, i) =>
        i === idx
          ? s
          : {
              ...s,
              amount: convertAmount(
                clicked.currency,
                s.currency,
                clicked.amount,
                rates,
              ),
            },
      );
    });
  };

  return (
    <>
      <TopicOne />

      <section 
      id="currency-converter-section"
      className="cc-section">
        <div className="cc-container">
          {/* ── Header ─────────────────────────────────────────────────────── */}
          <div className="cc-header">
            <div className="cc-header-left">
              <span className="cc-live-dot" />
              <span className="cc-header-title">Currency Converter</span>
            </div>
            <div className="cc-header-right">
              {loading && <span className="cc-badge">Fetching rates…</span>}
              {rateTime && !loading && (
                <span className="cc-rate-time">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <circle
                      cx="6.5"
                      cy="6.5"
                      r="5.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M6.5 3.8V6.5l1.8 1.8"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                  Updated {rateTime}
                </span>
              )}
            </div>
          </div>

          <p className="cc-hint">
            Enter an amount in any field to set it as the base currency. All
            other fields convert automatically. Click any result to swap the
            base.
          </p>

          {/* ── 6-slot grid — 3 cols desktop / 2 cols tablet / 1 col mobile ── */}
          <div className="cc-grid">
            {slots.map((slot, idx) => {
              const meta =
                CURRENCIES.find((c) => c.code === slot.currency) ||
                CURRENCIES[0];
              return (
                <div
                  key={idx}
                  className={`cc-slot${slot.isBase ? " cc-slot--base" : ""}`}
                  onClick={() => !slot.isBase && handleSlotClick(idx)}
                >
                  <label className="cc-slot-label">
                    {slot.isBase ? "Base Amount" : "Converted Amount"}
                  </label>

                  {/* Amount row */}
                  <div className="cc-amount-row">
                    {!slot.isBase && (
                      <svg
                        className="cc-lock-icon"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <rect
                          x="2.5"
                          y="6.5"
                          width="9"
                          height="6"
                          rx="1.5"
                          stroke="currentColor"
                          strokeWidth="1.3"
                        />
                        <path
                          d="M4.5 6.5V5A2.5 2.5 0 019.5 5v1.5"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    <input
                      className="cc-amount-input"
                      type="number"
                      value={slot.amount}
                      readOnly={!slot.isBase}
                      onChange={(e) =>
                        slot.isBase && handleAmountChange(idx, e.target.value)
                      }
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!slot.isBase) handleSlotClick(idx);
                      }}
                      placeholder="0.00"
                    />
                  </div>

                  {/* Divider */}
                  <div className="cc-slot-divider" />

                  {/* Currency selector row */}
                  <div
                    className="cc-currency-row"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {meta.flag ? (
                      <img
                        className="cc-flag"
                        src={`https://flagcdn.com/w40/${meta.flag}.png`}
                        alt={slot.currency}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <span className="cc-crypto-icon">
                        {slot.currency === "BTC" ? "₿" : "Ξ"}
                      </span>
                    )}
                    <div className="cc-select-wrap">
                      <select
                        className="cc-select"
                        value={slot.currency}
                        onChange={(e) =>
                          handleCurrencyChange(idx, e.target.value)
                        }
                      >
                        {CURRENCIES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.code} — {c.name}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="cc-chevron"
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                      >
                        <path
                          d="M2 4l3.5 3.5L9 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="cc-disclaimer">
            Exchange rates are indicative and sourced from live market data. Not
            intended for investment decisions.
          </p>

          {/* ── How to use ──────────────────────────────────────────────────── */}
          <div className="cc-how-to">
            <h4 className="cc-how-to-title">
              How to use the Currency Converter
            </h4>
            <div className="cc-steps">
              {[
                "Select your base currency from any of the six dropdown menus.",
                "Choose up to five other currencies you want to convert to.",
                "Enter the amount — all other fields update instantly.",
                "Click any converted field to make it your new base currency.",
              ].map((text, i) => (
                <div key={i} className="cc-step">
                  <span className="cc-step-num">{i + 1}</span>
                  <span className="cc-step-text">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default CurrencyConverterContentOne;
