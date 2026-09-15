import React from "react";

const ClientProtectionContentTwo = () => {
  const securityFeatures = [
    {
      title: "Web attack protection",
      text: "Our Web Application Firewall (WAF) protects our infrastructure and servers from web threats like SQL injection, XSS attacks, and blocks harmful traffic.",
    },
    {
      title: "Trading platform fault tolerance",
      text: "Our DDoS protection offers you seamless order execution, 24/7 access to your Personal Area, swift deposits and withdrawals, and uninterrupted servers’ operations.",
    },
    {
      title: "Zero trust approach",
      text: "Our Zero Trust model assumes minimal trust for company IT components and includes features like user and device authentication, restricted access, and network monitoring.",
    },
    {
      title: "Bug Bounty program",
      text: "You gain an extra layer of security with our Bug Bounty program, where we invite external experts to examine our platforms and give reviews that help us improve our services.",
    },
    {
      title: "Cybersecurity knowledge and skills",
      text: "Our Information Security Team are continuously updated on security technology and upgrade their skills through workshops and certifications.",
    },
  ];

  return (
    <div className="sm-security-section">
      <div className="container">
        <div className="sm-content-center">
          <h2 className="sm-main-title">Platform protection</h2>
          <p className="sm-intro-text">
            Learn more about our safe and secure trading conditions and
            protection measures for a smooth trading experience.
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

export default ClientProtectionContentTwo;
