import { useEffect, useState } from "react";

const StandardAccountsContentTwo = () => {
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
      title: "What account types are available at The Pips?",
      text: "The Pips offers Essential, Prime, Prestige, Black, and VIP Elite accounts to suit traders with different experience levels and investment goals.",
    },
    {
      title: "How do I choose the right account type?",
      text: "Choose an account based on your preferred trading conditions, available capital, and the range of instruments you wish to access.",
    },
    {
      title: "What is the minimum deposit for each account?",
      text: "Minimum deposits start from $500 for Essential accounts and increase across higher tiers, reaching $100,000 for VIP Elite accounts.",
    },
    {
      title: "Do higher-tier accounts offer better trading conditions?",
      text: "Yes, higher-tier accounts provide access to more instruments and tighter spreads, offering enhanced trading conditions for active traders.",
    },
    {
      title: "Can I upgrade my account type later?",
      text: "Yes, you can move to a higher account tier by meeting the relevant deposit and account requirements.",
    },
    {
      title: "What markets can I trade with these accounts?",
      text: "Depending on your account type, you can access a wide range of instruments across Forex, Commodities, Indices, Stocks, Cryptocurrencies, and more.",
    },
    // {
    //   title: "Do Standard Accounts have commission?",
    //   text: "No, spreads-only model across all tiers.",
    // },
    // {
    //   title: "Is leverage available?",
    //   text: "Yes, leverage is enabled across all tiers depending on instrument.",
    // },
    // {
    //   title: "Can I upgrade my tier later?",
    //   text: "Absolutely, your tier increases automatically as your deposit level grows.",
    // },
  ];

  return (
    <div className="how__work__trading">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/2.png"})`,
          backgroundSize: isMobile ? "80%" : "60%",
          backgroundPosition: isMobile ? "-25% 76%" : "123% 106%",
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
                  "/images/trading/standard_accounts/standard_acc.png"
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

export default StandardAccountsContentTwo;
