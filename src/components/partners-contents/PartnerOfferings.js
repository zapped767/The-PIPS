import React from "react";
// We don't need any icons for this layout, so no lucide-react import is necessary.
import { Link } from "react-router-dom";

const partnerPrograms = [
  {
    number: 1,
    title: "Introducing Broker Program",
    revenue: "up to 40% of our revenue",
    description:
      "Earn up to 40% revenue share from active traders you refer.",
  },
  {
    number: 2,
    title: "Affiliate Program",
    revenue: "up to $1850 for every client",
    description:
      "arn up to $1,850 per client you refer.",
  },
];

const PartnerOfferings = () => {
  return (
    <div className="partners-offer-section">
      <div className="partners-offer-header">
        <h1 className="partners-offer-main-title">What we offer</h1>
      </div>

      <div className="partners-offer-cards-container">
        {partnerPrograms.map((program, index) => (
          <div key={index} className="partners-offer-card">
            <div className="partners-offer-card-number-wrapper">
              <span className="partners-offer-card-number">
                {program.number}
              </span>
            </div>

            <h2 className="partners-offer-card-title">{program.title}</h2>

            <div className="partners-offer-card-revenue-box">
              <p className="partners-offer-card-revenue-text">
                You get {program.revenue}
              </p>
            </div>

            <p className="partners-offer-card-description">
              {program.description}
            </p>

            <div className="partners-offer-button-container">
              <Link to="/company/contact">
                <button className="partners-offer-learn-more-btn">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerOfferings;
