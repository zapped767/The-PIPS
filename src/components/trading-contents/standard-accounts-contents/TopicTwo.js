import React from "react";

const TopicTwo = () => {
  const account = {
    title: "Trading Conditions",
    description: "Trade with speed, stability, and confidence.",
    image:
  process.env.PUBLIC_URL +
  "/images/trading/account-left-bg.png",
    details: [
      {
        label: "Minimum trade size",
        value: "0.01 lots",
      },
      {
        label: "Maximum trade size",
        value: "tier-based up to 50 lots",
      },
      {
        label: "Spreads",
        value: "as low as 0.3 pips (Exclusive)",
      },
      {
        label: "Leverage",
        value: "available on all tiers",
      },
      {
        label: "Advanced Indicators",
        value: "available from Gold tier and above",
      },
      {
        label: "Premium Customer Support",
        value: "Gold tier and above",
      },
    ],
  };

  return (
    <section className="pips-account-conditions-section">
      <div className="pips-account-conditions-container">

       {/* LEFT IMAGE SIDE */}
<div className="pips-account-conditions-visual">
  <img
    src={account.image}
    alt="Trading conditions"
    className="pips-account-left-full-image"
    draggable="false"
  />
</div>

        {/* RIGHT CONTENT SIDE */}
        <div className="pips-account-conditions-card">
          <div className="pips-account-card-header">
            <span className="pips-account-card-badge">
              Premium Conditions
            </span>

            <h2>
              {account.title}
            </h2>

            <p>
              {account.description}
            </p>
          </div>

          <div className="pips-account-details-grid">
            {account.details.map((detail, index) => (
              <div
                className="pips-account-detail-item"
                key={index}
              >
                <span>
                  {detail.label}
                </span>

                <strong>
                  {detail.value}
                </strong>
              </div>
            ))}
          </div>

          <div className="pips-account-button-wrap">
            <a
              className="pips-account-register-button"
              href="https://portal.thepips.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TopicTwo;