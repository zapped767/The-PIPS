import { Link } from "react-router-dom";
import TopicOne from "../../resource-contents/trading-calculator-contents/TopicOne";
import { useEffect, useState, useCallback } from "react";

const INSTRUMENTS = {
  Forex: [
    {
      label: "EURUSDm",
      contractSize: 100000,
      pipSize: 0.0001,
      baseCurrency: "EUR",
      quoteCurrency: "USD",
    },
    {
      label: "GBPUSDm",
      contractSize: 100000,
      pipSize: 0.0001,
      baseCurrency: "GBP",
      quoteCurrency: "USD",
    },
    {
      label: "USDJPYm",
      contractSize: 100000,
      pipSize: 0.01,
      baseCurrency: "USD",
      quoteCurrency: "JPY",
    },
    {
      label: "AUDUSDm",
      contractSize: 100000,
      pipSize: 0.0001,
      baseCurrency: "AUD",
      quoteCurrency: "USD",
    },
    {
      label: "USDCADm",
      contractSize: 100000,
      pipSize: 0.0001,
      baseCurrency: "USD",
      quoteCurrency: "CAD",
    },
    {
      label: "USDCHFm",
      contractSize: 100000,
      pipSize: 0.0001,
      baseCurrency: "USD",
      quoteCurrency: "CHF",
    },
    {
      label: "NZDUSDm",
      contractSize: 100000,
      pipSize: 0.0001,
      baseCurrency: "NZD",
      quoteCurrency: "USD",
    },
    {
      label: "EURGBPm",
      contractSize: 100000,
      pipSize: 0.0001,
      baseCurrency: "EUR",
      quoteCurrency: "GBP",
    },
  ],
  Commodities: [
    // XAU: 1 lot = 100 oz, price in USD/oz
    {
      label: "XAUUSDm",
      contractSize: 100,
      pipSize: 0.01,
      baseCurrency: "XAU",
      quoteCurrency: "USD",
    },
    // XAG: 1 lot = 5000 oz, price in USD/oz
    {
      label: "XAGUSDm",
      contractSize: 5000,
      pipSize: 0.001,
      baseCurrency: "XAG",
      quoteCurrency: "USD",
    },
    // Oil: 1 lot = 1000 barrels, price in USD/barrel
    {
      label: "USOILm",
      contractSize: 1000,
      pipSize: 0.01,
      baseCurrency: "OIL",
      quoteCurrency: "USD",
    },
    {
      label: "UKOILm",
      contractSize: 1000,
      pipSize: 0.01,
      baseCurrency: "OIL",
      quoteCurrency: "USD",
    },
  ],
  Stocks: [
    // Stocks: contractSize = 1 share per lot, pipSize = $0.01
    {
      label: "AAPLm",
      contractSize: 1,
      pipSize: 0.01,
      baseCurrency: "AAPL",
      quoteCurrency: "USD",
    },
    {
      label: "MSFTm",
      contractSize: 1,
      pipSize: 0.01,
      baseCurrency: "MSFT",
      quoteCurrency: "USD",
    },
    {
      label: "TSLAm",
      contractSize: 1,
      pipSize: 0.01,
      baseCurrency: "TSLA",
      quoteCurrency: "USD",
    },
    {
      label: "NVDAm",
      contractSize: 1,
      pipSize: 0.01,
      baseCurrency: "NVDA",
      quoteCurrency: "USD",
    },
  ],
  Indices: [
    // Index CFDs: contractSize = 1 index unit per lot
    {
      label: "US30m",
      contractSize: 1,
      pipSize: 1,
      baseCurrency: "US30",
      quoteCurrency: "USD",
    },
    {
      label: "US500m",
      contractSize: 1,
      pipSize: 0.1,
      baseCurrency: "US500",
      quoteCurrency: "USD",
    },
    {
      label: "US100m",
      contractSize: 1,
      pipSize: 0.1,
      baseCurrency: "US100",
      quoteCurrency: "USD",
    },
    {
      label: "GER40m",
      contractSize: 1,
      pipSize: 0.1,
      baseCurrency: "GER40",
      quoteCurrency: "EUR",
    },
  ],
  Crypto: [
    {
      label: "BTCUSDm",
      contractSize: 1,
      pipSize: 1,
      baseCurrency: "BTC",
      quoteCurrency: "USD",
    },
    {
      label: "ETHUSDm",
      contractSize: 1,
      pipSize: 0.01,
      baseCurrency: "ETH",
      quoteCurrency: "USD",
    },
    {
      label: "LTCUSDm",
      contractSize: 1,
      pipSize: 0.01,
      baseCurrency: "LTC",
      quoteCurrency: "USD",
    },
    {
      label: "XRPUSDm",
      contractSize: 1,
      pipSize: 0.0001,
      baseCurrency: "XRP",
      quoteCurrency: "USD",
    },
  ],
};

const ACCOUNT_TYPES = [
  "Standard",
  "Standard Cent",
  "Raw Spread",
  "Zero",
  "Pro",
];
const CURRENCIES = ["USD", "EUR", "GBP", "AUD", "LKR"];
const LEVERAGES = ["1:50", "1:100", "1:200", "1:500", "1:1000", "1:2000"];
const TABS = ["Forex", "Commodities", "Stocks", "Indices", "Crypto"];

const PRICES = {
  EURUSDm: 1.085,
  GBPUSDm: 1.272,
  USDJPYm: 149.5,
  AUDUSDm: 0.648,
  USDCADm: 1.362,
  USDCHFm: 0.905,
  NZDUSDm: 0.599,
  EURGBPm: 0.853,
  XAUUSDm: 2350,
  XAGUSDm: 29.5,
  USOILm: 78.0,
  UKOILm: 82.0,
  AAPLm: 195,
  MSFTm: 420,
  TSLAm: 180,
  NVDAm: 950,
  US30m: 39200,
  US500m: 5250,
  US100m: 18400,
  GER40m: 18100,
  BTCUSDm: 95000,
  ETHUSDm: 3600,
  LTCUSDm: 90,
  XRPUSDm: 0.55,
};

// Approximate account-currency conversion rates vs USD (indicative)
const USD_TO_ACCOUNT = {
  USD: 1,
  EUR: 0.922,
  GBP: 0.786,
  AUD: 1.544,
  LKR: 308,
};

// Spread in pips per category (approximate typical spreads)
const SPREAD_PIPS = {
  Forex: 0.8,
  Commodities: 0.3,
  Stocks: 0.02,
  Indices: 0.5,
  Crypto: 50,
};

// Commission per standard lot (one side), charged both sides (×2 round-trip)
const COMMISSION_PER_LOT = {
  Standard: 0,
  "Standard Cent": 0,
  "Raw Spread": 3.5,
  Zero: 3.5,
  Pro: 0,
};

// Swap rates in USD per standard lot per night
// Source: representative broker rates
const SWAP_RATES = {
  Forex: { long: -6.5, short: 2.1 },
  Commodities: { long: -4.2, short: -1.8 },
  Stocks: { long: -3.0, short: -1.2 },
  Indices: { long: -5.0, short: -0.8 },
  Crypto: { long: -20.0, short: -20.0 },
};

// ── Core calculation engine ───────────────────────────────────────────────────
function calculate({
  tab,
  accountType,
  accountCurrency,
  instrument,
  leverage,
  lot,
}) {
  const inst =
    INSTRUMENTS[tab].find((i) => i.label === instrument) || INSTRUMENTS[tab][0];
  const levRatio = parseFloat(leverage.replace("1:", ""));
  const lotSize = Math.max(parseFloat(lot) || 0.01, 0.001);
  const price = PRICES[inst.label] || 1;

  // Conversion rate: 1 USD → account currency
  const toAcct = USD_TO_ACCOUNT[accountCurrency] ?? 1;

  // ── 1. MARGIN ──────────────────────────────────────────────────────────────
  // Formula: (lots × contractSize × price) / leverage
  // When quote = USD  → result is already in USD
  // When quote ≠ USD  → result is in quote currency, convert to USD first
  //   e.g. USDJPY: notional = lots×100000×149.50 JPY → divide by USDJPY price to get USD
  //   e.g. USDCAD: notional in CAD → divide by USDCAD price
  //   e.g. EURGBP: notional in GBP → multiply by GBPUSD price
  let marginUSD;
  if (inst.quoteCurrency === "USD") {
    // Direct: notional already in USD
    marginUSD = (lotSize * inst.contractSize * price) / levRatio;
  } else if (inst.baseCurrency === "USD") {
    // USD is base (e.g. USDJPY, USDCAD, USDCHF)
    // Notional = lots × contractSize (USD) — price not needed for base-USD pairs
    marginUSD = (lotSize * inst.contractSize) / levRatio;
  } else {
    // Cross pair (e.g. EURGBP): notional in quote currency, convert via quote/USD
    // We only have USD-denominated prices, so we approximate:
    // EURGBP margin ≈ (lots × contractSize × EURUSD price) / leverage
    const baseUSD = PRICES[inst.baseCurrency + "USDm"] || price;
    marginUSD = (lotSize * inst.contractSize * baseUSD) / levRatio;
  }
  const margin = marginUSD * toAcct;

  // ── 2. PIP VALUE ───────────────────────────────────────────────────────────
  // Pip value = (pipSize / price) × contractSize × lots  [when quote ≠ USD]
  // Pip value = pipSize × contractSize × lots            [when quote = USD]
  // Result is always in account currency.
  let pipValueUSD;
  if (inst.quoteCurrency === "USD") {
    pipValueUSD = lotSize * inst.contractSize * inst.pipSize;
  } else if (inst.baseCurrency === "USD") {
    // e.g. USDJPY: pip value in JPY → convert to USD by dividing by price
    pipValueUSD = (lotSize * inst.contractSize * inst.pipSize) / price;
  } else {
    // Cross: pip value in quote currency → approximate via quote/USD
    const quoteUSD =
      PRICES["USD" + inst.quoteCurrency + "m"] ||
      1 / (PRICES[inst.quoteCurrency + "USDm"] || 1);
    pipValueUSD = lotSize * inst.contractSize * inst.pipSize * quoteUSD;
  }
  const pipValue = pipValueUSD * toAcct;

  // ── 3. SPREAD COST ─────────────────────────────────────────────────────────
  // Spread cost = pip value × spread in pips (round-trip opening cost)
  const spreadCost = pipValue * (SPREAD_PIPS[tab] || 1);

  // ── 4. COMMISSION ──────────────────────────────────────────────────────────
  // Commission = rate per lot × lots × 2 (both sides), rate is in USD
  const commissionUSD = (COMMISSION_PER_LOT[accountType] || 0) * lotSize * 2;
  const commission = commissionUSD * toAcct;

  // ── 5. SWAP ────────────────────────────────────────────────────────────────
  // Swap rates stored as USD per standard lot per night
  // Scale by actual lot size
  const swapLong = (SWAP_RATES[tab]?.long || 0) * lotSize * toAcct;
  const swapShort = (SWAP_RATES[tab]?.short || 0) * lotSize * toAcct;

  return {
    margin: margin.toFixed(2),
    pipValue: pipValue.toFixed(4),
    spreadCost: spreadCost.toFixed(2),
    commission: commission.toFixed(2),
    swapLong: swapLong.toFixed(2),
    swapShort: swapShort.toFixed(2),
    currency: accountCurrency,
  };
}

// ─────────────────────────────────────────────────────────────────────────────

const TradingCalculatorContentOne = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [activeTab, setActiveTab] = useState("Forex");
  const [accountType, setAccountType] = useState("Standard");
  const [currency, setCurrency] = useState("USD");
  const [instrument, setInstrument] = useState("EURUSDm");
  const [leverage, setLeverage] = useState("1:200");
  const [lot, setLot] = useState("0.01");
  const [results, setResults] = useState(null);
  const [calculated, setCalculated] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset instrument when tab changes
  useEffect(() => {
    setInstrument(INSTRUMENTS[activeTab][0].label);
    setResults(null);
    setCalculated(false);
  }, [activeTab]);

  const handleCalculate = useCallback(() => {
    const res = calculate({
      tab: activeTab,
      accountType,
      accountCurrency: currency,
      instrument,
      leverage,
      lot,
    });
    setResults(res);
    setCalculated(true);
  }, [activeTab, accountType, currency, instrument, leverage, lot]);

  const tabDesc = {
    Forex:
      "Plan your forex trades with precision. This trade calculator helps you manage risk and determine everything from your required margin to your potential trading costs.",
    Commodities:
      "Calculate margin, pip value and swap costs for gold, silver, oil and other commodities before you enter a position.",
    Stocks:
      "Estimate your required margin, commission and overnight swap for CFD stock trades across major US equities.",
    Indices:
      "Determine your margin and pip value for index CFDs including US500, US30, NASDAQ and more.",
    Crypto:
      "Plan your crypto CFD positions with precise margin, pip value and swap calculations for BTC, ETH and more.",
  };

  return (
    <>
      <TopicOne />

      {/* ── Calculator section ──────────────────────────────────────────────── */}
      <section id="trading-calculator-section" className="tc-calc-section">
        <div className="tc-calc-container">
          {/* Category tabs */}
          <div className="tc-tabs-wrapper">
            <nav className="tc-tabs">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  className={`tc-tab${activeTab === tab ? " tc-tab--active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab description */}
          <p className="tc-tab-description">{tabDesc[activeTab]}</p>

          {/* Calculator card */}
          <div className="tc-calc-card">
            {/* Row 1: Account type | Account currency | Instrument */}
            <div className="tc-calc-row tc-calc-row--three">
              <div className="tc-field">
                <label className="tc-field-label">Account type</label>
                <div className="tc-select-wrapper">
                  <select
                    className="tc-select"
                    value={accountType}
                    onChange={(e) => setAccountType(e.target.value)}
                  >
                    {ACCOUNT_TYPES.map((a) => (
                      <option key={a}>{a}</option>
                    ))}
                  </select>
                  <ChevronIcon />
                </div>
              </div>

              <div className="tc-field">
                <label className="tc-field-label">Account currency</label>
                <div className="tc-select-wrapper">
                  <select
                    className="tc-select"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronIcon />
                </div>
              </div>

              <div className="tc-field">
                <label className="tc-field-label">Instrument</label>
                <div className="tc-select-wrapper">
                  <select
                    className="tc-select"
                    value={instrument}
                    onChange={(e) => setInstrument(e.target.value)}
                  >
                    {INSTRUMENTS[activeTab].map((i) => (
                      <option key={i.label}>{i.label}</option>
                    ))}
                  </select>
                  <ChevronIcon />
                </div>
              </div>
            </div>

            {/* Row 2: Leverage | Lot | Calculate */}
            <div className="tc-calc-row tc-calc-row--three">
              <div className="tc-field">
                <label className="tc-field-label">Leverage</label>
                <div className="tc-select-wrapper">
                  <select
                    className="tc-select"
                    value={leverage}
                    onChange={(e) => setLeverage(e.target.value)}
                  >
                    {LEVERAGES.map((l) => (
                      <option key={l}>{l}</option>
                    ))}
                  </select>
                  <ChevronIcon />
                </div>
              </div>

              <div className="tc-field">
                <label className="tc-field-label">Lot size</label>
                <input
                  className="tc-input"
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={lot}
                  onChange={(e) => setLot(e.target.value)}
                />
              </div>

              <div className="tc-field tc-field--cta">
                <button className="tc-calc-btn" onClick={handleCalculate}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="14"
                      height="14"
                      rx="2.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M5.5 6h7M5.5 9h7M5.5 12h4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Calculate
                </button>
              </div>
            </div>

            {/* Results */}
            {calculated && results && (
              <div className="tc-results">
                <div className="tc-results-divider" />
                <h4 className="tc-results-title">
                  Results{" "}
                  <span className="tc-results-currency">
                    ({results.currency})
                  </span>
                </h4>
                <div className="tc-results-grid">
                  <TcResultCard
                    label="Required Margin"
                    value={results.margin}
                    currency={results.currency}
                    suffix="Funds needed to open position"
                  />
                  <TcResultCard
                    label="Pip Value"
                    value={results.pipValue}
                    currency={results.currency}
                    suffix="Value of 1 pip move"
                  />
                  <TcResultCard
                    label="Spread Cost"
                    value={results.spreadCost}
                    currency={results.currency}
                    suffix="Estimated entry cost"
                  />
                  <TcResultCard
                    label="Commission"
                    value={results.commission}
                    currency={results.currency}
                    suffix="Round-trip commission"
                  />
                  <TcResultCard
                    label="Swap Long"
                    value={results.swapLong}
                    currency={results.currency}
                    suffix="Overnight cost (buy)"
                  />
                  <TcResultCard
                    label="Swap Short"
                    value={results.swapShort}
                    currency={results.currency}
                    suffix="Overnight cost (sell)"
                  />
                </div>
                <p className="tc-results-disclaimer">
                  ⚠ Results are indicative estimates based on approximate market
                  prices and typical broker rates. Actual margin, pip value,
                  swap and commission will vary based on live market conditions
                  and your broker's current rates. Always confirm with your
                  broker before trading.
                </p>
              </div>
            )}
          </div>

          {/* How to use steps */}
          <div className="tc-steps">
            {[
              {
                n: "01",
                title: "Choose Account Settings",
                body: "Select your account type, account currency and leverage. These affect your required margin and cost calculations.",
              },
              {
                n: "02",
                title: "Select Your Instrument",
                body: "Pick the trading instrument you plan to trade from the relevant market category — Forex, Commodities, Stocks, Indices or Crypto.",
              },
              {
                n: "03",
                title: "Enter Lot Size & Calculate",
                body: "Enter your desired lot size and click Calculate to instantly see your margin, pip value, spread cost, commission and swap rates.",
              },
            ].map((s) => (
              <div key={s.n} className="tc-step">
                <span className="tc-step-num">{s.n}</span>
                <div>
                  <strong className="tc-step-title">{s.title}</strong>
                  <p className="tc-step-body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

/* ── Sub-components ─────────────────────────────────────────────────────────── */

const ChevronIcon = () => (
  <svg
    className="tc-select-chevron"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M2 4l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TcResultCard = ({ label, value, currency, suffix }) => (
  <div className="tc-result-card">
    <p className="tc-result-label">{label}</p>
    <p className="tc-result-value">
      {currency} {value}
    </p>
    {suffix && <p className="tc-result-meta">{suffix}</p>}
  </div>
);

export default TradingCalculatorContentOne;
