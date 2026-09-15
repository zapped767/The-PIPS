import { useEffect, useState } from "react";

const ForexMarketContentFour = () => {
  // Track which section is open

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

  // Content data (to avoid repeating text)
  const sections = [
    {
      title: "What is forex trading?",
      text: `Forex trading, or foreign exchange trading, involves buying and selling currencies to profit from price fluctuations. It’s the largest financial market in the world, open 24 hours a day, five days a week.`,
    },
    {
      title: "Why should I trade forex with The Pips?",
      text: `At The Pips, we combine beginner-friendly tools with professional-grade trading conditions. You get tight spreads, transparent pricing, and access to major, minor, and exotic currency pairs, all on a secure and reliable platform.`,
    },
    {
      title: "What currencies can I trade?",
      text: `You can trade a wide range of currency pairs, including major pairs like EUR/USD and GBP/USD, minors like AUD/NZD, and exotics such as USD/TRY,  giving you opportunities across global markets.`,
    },
    {
      title: "What factors influence currency prices?",
      text: `Currency values are influenced by factors such as interest rates, inflation, global events, political stability, and market sentiment. Understanding these drivers helps traders anticipate trends and make informed decisions.`,
    },
    {
      title: "Do I need prior experience to start trading forex?",
      text: `Not at all. The Pips is designed to support beginners. Our learning hub, mentorship programs, and simulation tools help new traders build knowledge and confidence before trading live.`,
    },
    {
      title: "What is leverage, and how does it work?",
      text: `Leverage allows you to control larger positions with a smaller amount of capital. While it increases profit potential, it also amplifies risk which is why The Pips provides detailed educational material on using leverage responsibly.`,
    },
    // {
    //   title: "How does The Pips ensure my funds and data are secure?",
    //   text: `We use bank-grade encryption, secure payment gateways, and strict data compliance standards. Your safety is our priority, ensuring full protection of your funds and personal information.`,
    // },
    // {
    //   title: "How can I start trading forex with The Pips?",
    //   text: `Simply register for a free account, verify your profile, and start exploring our demo or live trading options. You can begin trading in minutes with full access to our educational and analytical tools.`,
    // },
  ];

  return (
    <div className="how__work__market">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/2.png"})`,
          backgroundSize: isMobile ? "90%" : "50%",
          backgroundPosition: isMobile ? "-125% 87%" : "105% 105%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Frequently Asked Questions</h2>
              <p>
                Get clear answers on trading, pricing, and execution to help you
                trade with confidence.
              </p>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/markets/forex_cfd/forex_3.png"
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

export default ForexMarketContentFour;
