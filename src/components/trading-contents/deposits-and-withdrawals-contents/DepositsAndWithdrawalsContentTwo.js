import { useEffect, useState } from "react";

const DepositsAndWithdrawalsContentTwo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const securityFeatures = [
    {
      title: "Segregated accounts",
      text: "We follow international compliance across all processes.",
    },
    {
      title: "Secure withdrawal transactions",
      text: "Your withdrawals are safe and secure, protected by one-time password verification methods.",
    },
    {
      title: "PCI DSS certified",
      text: "We have successfully passed PCI DSS compliance requirements for cardholder data security.",
    },
    {
      title: "3D Secure payments",
      text: "We provide 3D Secure payments for all major credit cards such as Visa and Mastercard.",
    },
  ];

  return (
    <div className="sm-security-section">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/1.png"})`,
          backgroundSize: isMobile ? "80%" : "60%",
          backgroundPosition: isMobile ? "-50% 60%" : "-90% 110%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="sm-content-center">
          <h2 className="sm-main-title">Your money is safe with us</h2>
          <p className="sm-intro-text">
            As the biggest retail multi-asset broker in the world, we apply
            multiple layers of security to keep your funds safe and instantly
            available to you upon request.
          </p>
        </div>

        <div className="sm-feature-list">
          {securityFeatures.map((item, index) => (
            <div key={index} className="sm-feature-item">
              <div className="sm-feature-row">
                <div className="sm-feature-title">
                  <h3>{item.title}</h3>
                </div>
                <div className="sm-feature-desc">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepositsAndWithdrawalsContentTwo;
