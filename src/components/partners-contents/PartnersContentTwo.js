import React from "react";
import {
  GlobeIcon,
  SettingsIcon,
  CalendarIcon,
  BarChart2Icon,
  SmartphoneIcon,
  CreditCardIcon,
  DollarSign, // Used for calendar/payments representation
} from "lucide-react";

const DynamicContent = ({ bgImage }) => (
  <div
    className="partners-benefits-icon-content"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "150px",
      borderRadius: "10px",
    }}
  ></div>
);

const partnersBenefitsData = [
  {
    icon: GlobeIcon,
    title: "Transparent, Competitive Rewards",
    bgImage: "/images/partners/partners_1.png",
    backContent: [
      "Earn clear, competitive commissions with no hidden conditions. Simple payouts that grow with your performance.",
    ],
  },
  {
    icon: SettingsIcon,
    title: "A Platform Traders Trust",
    bgImage: "/images/partners/partners_2.png",
    backContent: [
      "YYour referrals get tight spreads, fast execution, and reliable support. Build trust with a secure and transparent platform.",
    ],
  },
  {
    icon: CalendarIcon,
    title: "Scalable Marketing Support",
    bgImage: "/images/partners/partners_3.png",
    backContent:
      "Get the tools you need to attract and grow your audience, from branded assets to performance insights.",
  },
  {
    icon: BarChart2Icon,
    title: "Global Reach, Local Support",
    bgImage: "/images/partners/partners_4.png",
    backContent: [
      "Grow with a trusted global brand while getting local insights and support to connect with your audience.",
    ],
  },
  {
    icon: SmartphoneIcon,
    title: "Seamless Integration & Partner-Friendly Tools",
    bgImage: "/images/partners/partners_5.png",
    backContent: [
      "Easy onboarding, smart tracking, and simple tools to help you manage and grow with less effort.",
    ],
  },
  {
    icon: CreditCardIcon,
    title: "A Reputation That Elevates You",
    bgImage: "/images/partners/partners_6.png",
    backContent: [
      "Partner with a trusted, secure platform to build credibility, gain trust, and grow faster.",
    ],
  },
];

const PartnersContentTwo = () => {
  return (
    <div className="container">
      <div className="partners-benefits-section">
        <div className="partners-benefits-header">
          <h1 className="partners-benefits-main-title">
            Built to Empower You. Designed for Growth
          </h1>
        </div>

        <div className="partners-benefits-cards-container">
          {partnersBenefitsData.map((benefit, index) => (
            <div key={index} className="partners-benefits-card-wrapper">
              <div className="partners-benefits-card">
                {/* Card Front */}
                <div className="partners-benefits-card-front">
                  <h2 className="partners-benefits-card-title">
                    {benefit.title}
                  </h2>
                  <div className="partners-benefits-card-content">
                    <DynamicContent bgImage={benefit.bgImage} />
                  </div>
                </div>

                {/* Card Back (Flipping content) */}
                <div className="partners-benefits-card-back">
                  <div className="partners-benefits-card-icon-back">
                    <benefit.icon size={40} />
                  </div>
                  {/* <h2 className="partners-benefits-card-title-back">
                  {benefit.title}
                </h2> */}
                  {Array.isArray(benefit.backContent) ? (
                    benefit.backContent.map((line, i) => (
                      <p key={i} className="partners-benefits-card-description">
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="partners-benefits-card-description">
                      {benefit.backContent}
                    </p>
                  )}
                  {/* <button className="partners-benefits-register-btn">
                  Register as a Partner
                </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersContentTwo;
