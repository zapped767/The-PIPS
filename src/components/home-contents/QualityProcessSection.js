import React from "react";
import "./QualityProcessSection.scss";
import {
  FiBookOpen,
  FiTrendingUp,
  FiUsers,
  FiGrid,
  FiShield,
  FiZap,
} from "react-icons/fi";

const serviceCards = [
  {
    id: 1,
    title: "Beginner-Focused Learning",
    description: "Easy resources that simplify trading concepts.",
    icon: <FiBookOpen />,
  },
  {
    id: 2,
    title: "Guided by experts",
    description: "Learn and grow with experienced trader support.",
    icon: <FiUsers />,
  },
  {
    id: 3,
    title: "Secure and transparent",
    description: "Trade safely with strong security and clear pricing.",
    icon: <FiShield />,
  },
  {
    id: 4,
    title: "Real-time insights",
    description: "Get live data and updates to make smarter decisions.",
    icon: <FiTrendingUp />,
  },
  {
    id: 5,
    title: "All-in-one platform",
    description: "Trade Forex, Crypto, and Stocks in one place.",
    icon: <FiGrid />,
  },
  {
    id: 6,
    title: "Seamless Experience",
    description: "Enjoy fast execution, smooth navigation, and 24/7 support.",
    icon: <FiZap />,
  },
];

const QualityProcessSection = () => {
  return (
    <section className="quality-section">
      {/* =========================================================
          PART 1 - BLUE HEADER PART
      ========================================================= */}
      <div className="quality-header-section">
        <div className="quality-header-layout">
          <div className="quality-header-content">
            <h2>
              <span className="trade-yellow">Trade</span> with Confidence
            </h2>
            <p>
              Take control with simple tools, transparent pricing, and reliable
              support from The Pips.
            </p>
          </div>

          {/* RIGHT SIDE BIG GRAY TEXT */}
          <div className="quality-header-watermark">PIPS</div>
        </div>
      </div>

      {/* =========================================================
          PART 2 - WHITE CARDS PART
      ========================================================= */}
      <div className="quality-cards-section">
        <div className="quality-grid">
          {serviceCards.map((card) => (
            <div key={card.id} className="quality-premium-card">
              {/* NORMAL CONTENT */}
              <div className="quality-normal-content">
                <div className="quality-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <div className="quality-card-line" />
              </div>

              {/* HOVER CONTENT */}
              <div className="quality-hover-content">
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityProcessSection;
