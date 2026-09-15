import { useEffect, useState } from "react";
const ClientProtectionContentSix = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const securityFeatures = [
    {
      title: "Protect Your Account",
      text: "Keep your Personal Area private, never share access and personal documents. Don’t let anyone use your name to create an Pips account or share your security information.",
    },
    {
      title: "Use Official Payment Channels",
      text: "Only conduct financial activities within the Pips Personal Area and avoid transferring funds to unknown accounts.",
    },
    {
      title: "Stay Alert to Fraud Attempts",
      text: "Be vigilant towards suspicious links and unknown sources, never provide sensitive information if contacted unexpectedly, and reach out directly to Pips via live chat or email for any concerns about fraudulent activities or message authenticity.",
    },
  ];

  return (
    <div className="sm-security-section">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/2.png"})`,
          backgroundSize: isMobile ? "70%" : "50%",
          backgroundPosition: isMobile ? "10% 48%" : "-40% 120%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {/* LEFT SIDE: Main Heading */}
          <div className="col-lg-4 col-md-12 col-12">
            <div className="sm-content-left">
              <h2 className="sm-main-title">Take steps to protect yourself</h2>
            </div>
          </div>

          {/* RIGHT SIDE: Intro Text + Feature List */}
          <div className="col-lg-8 col-md-12 col-12">
            <div className="sm-content-right">
              <p className="sm-intro-text">
                Enhance your security by familiarizing yourself with practices
                that help prevent unauthorized account activities, scams, and
                fraud attempts.
              </p>

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
        </div>
      </div>
    </div>
  );
};

export default ClientProtectionContentSix;
