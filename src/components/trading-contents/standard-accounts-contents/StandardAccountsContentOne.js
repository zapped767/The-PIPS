import React from "react";
import TopicTwo from "./TopicTwo";

const StandardAccountsContentOne = () => {
  const accounts = [
    {
      id: 1,
      badge: "STARTER",
      type: "ESSENTIAL",
      tagline: "Where Professional Trading Begins",
      instruments: "100+ instruments",
      spread: "Spreads from 1.4 pips",
      deposit: "$500",
    },
    {
      id: 2,
      badge: "MOST POPULAR",
      type: "PRIME",
      tagline: "Enhanced Access. Superior Execution.",
      instruments: "250+ instruments",
      spread: "Spreads from 1.1 pips",
      deposit: "$2,500",
    },
    {
      id: 3,
      badge: "ADVANCED",
      type: "PRESTIGE",
      tagline: "Precision Trading for Serious Investors",
      instruments: "500+ instruments",
      spread: "Spreads from 0.8 pips",
      deposit: "$25,000",
    },
    {
      id: 4,
      badge: "PREMIUM",
      type: "BLACK",
      tagline:
        "Elite Trading Conditions. Institutional Experience.",
      instruments: "750+ instruments",
      spread: "Spreads from 0.5 pips",
      deposit: "$50,000",
    },
    {
      id: 5,
      badge: "ELITE",
      type: "VIP ELITE",
      tagline:
        "Exclusive Privileges for High-Volume Traders",
      instruments: "1000+ instruments",
      spread: "Spreads from 0.2 pips",
      deposit: "$100,000",
    },
  ];

  return (
    <>
      {/* TRADING CONDITIONS */}
      <TopicTwo />

      {/* ACCOUNT CARDS */}
      <section className="account-plans-section">
        <div className="account-plans-container">

          <div className="account-plans-grid">
            {accounts.map((account) => (
              <div
                key={account.id}
                className={`account-plan-card account-plan-card--${account.id}`}
              >
                <div className="account-plan-content">

                  {/* TOP */}
                  <div className="account-plan-top-row">

                    <div className="account-plan-tier">
                      {account.badge}

                      <span>
                        MIN {account.deposit}
                      </span>
                    </div>

                    <div className="account-plan-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                  </div>

                  {/* TITLE */}
                  <h3 className="account-plan-title">
                    {account.type}
                  </h3>

                  {/* TAGLINE */}
                  <p className="account-plan-tagline">
                    {account.tagline}
                  </p>

                  {/* MARKET / ACCESS */}
                  <div className="account-plan-market">
                    <span>Access:</span>

                    <strong>
                      {account.instruments}
                    </strong>
                  </div>

                  {/* FEATURES */}
                  <div className="account-plan-features">

                    <div className="account-plan-feature">
                      <span className="account-check">
                        ✓
                      </span>

                      {account.instruments}
                    </div>

                    <div className="account-plan-feature">
                      <span className="account-check">
                        ✓
                      </span>

                      {account.spread}
                    </div>

                    <div className="account-plan-feature">
                      <span className="account-check">
                        ✓
                      </span>

                      Minimum Deposit {account.deposit}
                    </div>

                  </div>

                </div>

                {/* REGISTER */}
                <a
                  href="https://portal.thepips.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="account-plan-button"
                >
                  Register

                  <span className="account-plan-arrow">
                    ›
                  </span>
                </a>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default StandardAccountsContentOne;