import React from "react";
// import { Star } from 'lucide-react';
import { Link } from "react-router-dom";

const TopicTwo = () => {
  const accountTypes = [
    {
      title: "Trading Conditions",
      isPopular: true,
      description: "Trade with speed, stability, and confidence.",
      details: [
        { label: "Minimum trade size", value: "0.01 lots" },
        { label: "Maximum trade size", value: "tier-based up to 50 lots" },
        { label: "Spreads", value: "as low as 0.3 pips (Exclusive)" },
        { label: "Leverage", value: "available on all tiers" },
        {
          label: "Advanced Indicators",
          value: "available from Gold tier and above",
        },
        { label: "Premium Customer Support", value: "Gold tier and above" },
      ],
    },
  ];

  return (
    <div className="quality-section-trading">
      <div
        className="cards-container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/1.png"})`,
          backgroundSize: "60%",
          backgroundPositionX: "-97%",
          backgroundPositionY: "-23%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {accountTypes.map((account, index) => (
          <div key={index} className="trading-card">
            <div className="card-header">
              <div className="title-row">
                {/* {account.isPopular && <Star className="star-icon" />} */}
                <h2 className="card-title">{account.title}</h2>
              </div>
              <p className="card-description">{account.description}</p>
            </div>

            <div className="divider"></div>

            <div className="details-list">
              {account.details.map((detail, idx) => (
                <div key={idx} className="detail-item">
                  <span className="detail-label">{detail.label}</span>
                  <p className="detail-value">{detail.value}</p>
                </div>
              ))}
            </div>

            <div className="button-container">
              <a
                className="slide__btn dg__btn"
                href="https://portal.thepips.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicTwo;
