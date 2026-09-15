import React from "react";
// import { Star } from 'lucide-react';
import { Link } from "react-router-dom";

const TopicTwo = () => {
  const accountTypes = [
    {
      title: "Elite Conditions for Elite Traders",
      isPopular: true,
      description: "Built for speed, stability, and high-volume trades.",
      details: [
        {
          label: "Minimum trade size",
          value: "0.01 lots",
        },
        {
          label: "Maximum trade size",
          value: "Up to 50 lots (depending on tier)",
        },
        {
          label: "Spreads",
          value: "0.3 – 1.6 pips",
        },
        {
          label: "Leverage",
          value: "Available across all tiers",
        },
        {
          label: "Daily Analysis",
          value: "Platinum tier and above",
        },
        {
          label: "Insurance Trades",
          value: "VIP & Exclusive tiers",
        },
      ],
    },
    {
      title: "Elite Conditions for Elite Traders",
      isPopular: true,
      description: "Fast, stable, high-volume trading.",
      details: [
        {
          label: "Minimum trade size",
          value: "0.01 lots",
        },
        {
          label: "Maximum trade size",
          value: "Up to 50 lots (depending on tier)",
        },
        {
          label: "Spreads",
          value: "0.3 – 1.6 pips",
        },
        {
          label: "Leverage",
          value: "Available across all tiers",
        },
        {
          label: "Daily Analysis",
          value: "Platinum tier and above",
        },
        {
          label: "Insurance Trades",
          value: "VIP & Exclusive tiers",
        },
      ],
    },
    {
      title: "Elite Conditions for Elite Traders",
      isPopular: true,
      description: "Built for speed, stability, and volume.",
      details: [
        {
          label: "Minimum trade size",
          value: "0.01 lots",
        },
        {
          label: "Maximum trade size",
          value: "Up to 50 lots (depending on tier)",
        },
        {
          label: "Spreads",
          value: "0.3 – 1.6 pips",
        },
        {
          label: "Leverage",
          value: "Available across all tiers",
        },
        {
          label: "Daily Analysis",
          value: "Platinum tier and above",
        },
        {
          label: "Insurance Trades",
          value: "VIP & Exclusive tiers",
        },
      ],
    },
  ];

  return (
    <div className="quality-section-trading">
      {/* <div className="quality-header-trading">
        <h1>
          Professional Accounts - Raw Speed. Ultra-Low Spreads. Pro-Grade
          Execution.
        </h1>
        <p>
          When every millisecond matters and every pip counts, Professional
          Accounts give you the firepower to trade like a market veteran.
          Designed for advanced strategies, high-volume flows, and traders who
          demand an edge, this is where real precision trading begins.
        </p>
      </div> */}

      <div className="cards-container">
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
              <Link to="/register">
                <button className="register-btn">Register</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicTwo;
