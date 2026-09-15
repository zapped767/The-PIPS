import { useEffect, useState } from "react";

const TradingCalculatorContentSix = () => {
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
      title: "What is the trading calculator?",
      text: "The trading calculator helps estimate key trading costs and requirements, including margin, spread, commission, swaps, and pip value before placing a trade.",
    },
    {
      title: "What do the trading calculator results mean?",
      text: "The calculator displays estimated margin, spread cost, commission, swap rates, and pip value in your account currency, helping you evaluate trade costs and potential exposure.",
    },
    {
      title: "Why is leverage disabled for some instruments?",
      text: "Some instruments have fixed leverage set by the broker. In these cases, leverage cannot be adjusted and remains the same regardless of account settings.",
    },
    {
      title: "How accurate is the trading calculator?",
      text: "The calculator provides estimates using near real-time market data. Actual trading costs and values may vary based on market conditions at execution.",
    },
    {
      title: "Can I account for different investment scenarios?",
      text: "Yes. You can adjust factors such as account type, currency, instrument, lot size, and leverage to compare different trading scenarios.",
    },
    {
      title: "How to calculate pips?",
      text: "Pip value is calculated using: Lots × Contract Size × Pip Size. It helps measure the impact of a one-pip price movement on a trade.",
    },
    {
      title: "What is pip value?",
      text: "Pip value represents the monetary value of a one-pip price change and helps traders estimate potential profits or losses.",
    },
  ];

  return (
    <div className="how__work__resource">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/2.png"})`,
          backgroundSize: isMobile ? "90%" : "50%",
          backgroundPosition: isMobile ? "-105% 84%" : "102% 105%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Frequently asked questions</h2>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/trading_calculator/trading_calculator_4.png"
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

export default TradingCalculatorContentSix;
