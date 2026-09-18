import React from "react";
import "./live-market-terminal-section.css";

const LiveMarketTerminalSection = () => {
  return (
    <section className="market-terminal-section">
      {/* =====================================================
          SECTION 1 - HERO TOP
      ====================================================== */}
      <div className="market-terminal-hero">
        <div className="market-terminal-hero__inner">
          <p className="market-terminal-eyebrow">
            LIVE MARKET TERMINAL
          </p>

          <h2 className="market-terminal-title">
            Trade the world's leading
            <br />
            markets with confidence
          </h2>

          <p className="market-terminal-subtitle">
            BTC & ETH: live WebSocket ticks · Gold, Oil, NVDA: 60s refresh
          </p>
        </div>
      </div>

      {/* =====================================================
          SECTION 2 - WHITE CONTENT AREA
      ====================================================== */}
      <div className="market-terminal-content">
        <div className="market-terminal-content__inner">
          {/* TOP TABS */}
          <div className="market-terminal-tabs">
            <button className="market-tab active">₿ BTC <span>Bitcoin</span></button>
            <button className="market-tab">Ξ ETH <span>Ethereum</span></button>
            <button className="market-tab">Au XAU/USD <span>Gold / US Dollar</span></button>
            <button className="market-tab">🛢 OIL <span>Crude Oil</span></button>
            <button className="market-tab">◈ NVDA <span>Nvidia</span></button>
          </div>

          {/* MAIN CARD */}
          <div className="market-terminal-card">
            <div className="market-terminal-card__top">
              <div className="market-terminal-left">
                <div className="market-terminal-coin-icon">₿</div>

                <div>
                  <h3>Bitcoin</h3>
                  <p>BTC • USD • LIVE</p>
                </div>
              </div>

              <div className="market-terminal-right">
                <h4>$75,830.00</h4>
                <span className="market-terminal-change">
                  ▼ -3494.7500 (-4.41%)
                </span>
              </div>
            </div>

            {/* CHART PLACEHOLDER */}
            <div className="market-terminal-chart">
              <div className="market-terminal-chart-placeholder">
                Chart Area
              </div>
            </div>

            <div className="market-terminal-card__bottom">
              <p>
                <span className="dot-live"></span>
                WEBSOCKET • LIVE TICKS
              </p>

              <p>Source: Binance WebSocket (Live)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMarketTerminalSection;