import React from "react";
import { useEffect, useState } from "react";
import {
  Star,
  TrendingUp,
  CreditCard,
  Headset,
  Wallet,
  GraduationCap,
} from "lucide-react";

const clientFeaturesData = [
  {
    icon: Star,
    text: "Ultra-Fast Execution",
  },
  {
    icon: TrendingUp,
    text: "Tight, Transparent Pricing",
  },
  {
    icon: CreditCard,
    text: "A Platform Designed for Everyone",
  },
  {
    icon: Headset,
    text: "Real Human Support, 24/7",
  },
  {
    icon: Wallet,
    text: "Secure & Fully Protected",
  },
  {
    icon: GraduationCap,
    text: "Everything in One Place",
  },
];

const ClientLoveFeatures = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="client-features-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/1.png"})`,
        backgroundSize: isMobile ? "120%" : "50%",
        backgroundPosition: isMobile ? "0% 54%" : "120% 120%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="client-features-header">
        <h1 className="client-features-main-title">
          Why clients will love us...
        </h1>
      </div>

      <div className="client-features-list">
        {clientFeaturesData.map((feature, index) => (
          <div key={index} className="client-features-item">
            {/* The image uses outline-style icons. Lucide icons are generally stroke-based. */}
            <div className="client-features-icon-wrapper">
              <feature.icon size={24} className="client-features-icon" />
            </div>
            <p className="client-features-text">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientLoveFeatures;
