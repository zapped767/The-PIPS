import { useEffect, useState } from "react";

const ClientProtectionContentSeven = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Is Pips regulated?",
      text: "Yes. Pips is licensed and regulated by multiple international financial authorities.",
    },
    {
      title: "Is Pips safe?",
      text: "Yes. Pips uses advanced security measures and client fund protection features.",
    },
    {
      title: "What security types are available?",
      text: "Pips offers phone, email, and TOTP verification, plus a unique Support PIN.",
    },
    {
      title: "Is Pips a scam?",
      text: "No. Pips is a regulated global broker with a strong focus on security and compliance.",
    },
    {
      title: "What are some common scams and warning signs?",
      text: "Watch for phishing, fake investment offers, urgent requests, and suspicious links or emails.",
    },
    // {
    //   title: "Can I trade safely using public Wi-Fi?",
    //   text: "We strongly advise against trading on unsecured public networks. If necessary, use a trusted VPN to encrypt your data and prevent interception by malicious actors.",
    // },
    // {
    //   title: "What happens if my withdrawal takes longer than expected?",
    //   text: "Most withdrawals are processed within 24 hours, but delays can occur due to payment provider timelines or additional compliance checks. These checks ensure your funds remain safe and fully compliant with regulations.",
    // },
    // {
    //   title: "How can I reduce the risk of account compromise?",
    //   text: "Use strong, unique passwords, enable 2FA, update your devices regularly, avoid downloading unverified files, and never share your login credentials. Staying alert is your first line of defense.",
    // },
  ];

  return (
    <div className="how__work__trading">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/1.png"})`,
          backgroundSize: isMobile ? "90%" : "50%",
          backgroundPosition: isMobile ? "-175% 86%" : "105% 108%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/trading/client_protection/client_protection_4.png"
                }
                alt="computer images"
              />
            </div>
          </div>

          {/* RIGHT SIDE ACCORDION */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <hr className="black-line" />
              {sections.map((section, index) => (
                <div key={index} className="accordion-section">
                  <button
                    className="accordion-header"
                    onClick={() => toggleSection(index)}
                  >
                    <h3>{section.title}</h3>
                    <span
                      className={`arrow ${openIndex === index ? "open" : ""}`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`accordion-content ${
                      openIndex === index ? "show" : ""
                    }`}
                  >
                    <p>{section.text}</p>
                  </div>

                  <hr className="black-line" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProtectionContentSeven;
