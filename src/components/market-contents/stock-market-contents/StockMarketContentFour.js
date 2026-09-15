import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const StockMarketContentFour = () => {
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
      title: "What is stock trading at The Pips?",
      text: `Stock trading at The Pips allows you to speculate on price movements of global equities through CFDs, without needing to own the underlying shares.`,
    },
    {
      title: "Can I trade both local and international stocks?",
      text: `Yes. You can trade major international stocks listed on NASDAQ, NYSE, and other leading exchanges directly through The Pips.`,
    },
    {
      title: "What are the trading hours for stocks?",
      text: `Stock trading hours vary depending on the exchange but generally align with standard market hours in their respective regions.`,
    },
    {
      title: "Do I receive dividends when trading stock CFDs?",
      text: `No, since CFD trading doesn’t involve ownership of actual shares. However, dividend adjustments are reflected in your account balance.`,
    },
    {
      title: "What is the minimum deposit required to start trading stocks?",
      text: `You can start trading with as little as the platform’s minimum deposit requirement, designed for flexibility across different trader levels.`,
    },
    // {
    //   title: "How is leverage applied in stock trading?",
    //   text: `The Pips offers up to 1:50 leverage on stock trades, allowing you to control larger positions with smaller capital, while managing risk effectively.`,
    // },
    // {
    //   title: "Can I short-sell stocks on The Pips?",
    //   text: `Yes, you can go both long and short on stocks, giving you the ability to profit from both rising and falling markets.`,
    // },
    // {
    //   title: "What makes The Pips different from other platforms?",
    //   text: `The Pips delivers a next-gen trading experience with transparent pricing, intuitive tools, and integrated market insights, all within a secure ecosystem.`,
    // },
  ];

  return (
    <div className="how__work__market">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/11.png"})`,
          backgroundSize: isMobile ? "90%" : "70%",
          backgroundPosition: isMobile ? "-153% 73%" : "124% 121%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Frequently Asked Questions</h2>
              <p>
                Got questions about trading stocks with The Pips? Find clear,
                straightforward answers to help you trade with confidence.
              </p>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/markets/stocks_cfd/stocks_3.png"
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

export default StockMarketContentFour;
