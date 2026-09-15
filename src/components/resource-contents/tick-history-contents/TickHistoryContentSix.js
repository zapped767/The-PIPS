import { useEffect, useState } from "react";

const TickHistoryContentSix = () => {
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
      title: "What is tick data?",
      text: `Tick data records every single price change (bid/ask) that occurs in the market for a given instrument.`,
    },
    {
      title: "How far back does The Pips Tick History go?",
      text: `Depending on the instrument, you can access up to several years of historical tick data.`,
    },
    {
      title: "Is the data downloadable?",
      text: `Yes. Traders can export tick history in structured file formats for in-depth analysis.`,
    },
    {
      title: "Which markets are covered?",
      text: `Forex, commodities, indices, and crypto markets are included in The Pips Tick History.`,
    },
    {
      title: "Is this data free to access?",
      text: `Historical data is freely available to all verified The Pips account holders.`,
    },
    {
      title: "Can I use tick data for algorithmic backtesting?",
      text: `Absolutely. The dataset is ideal for testing algorithmic strategies and optimizing performance.`,
    },
    // {
    //   title: "How frequently is new data added?",
    //   text: `The tick history is updated daily, ensuring all records remain fresh and complete.`,
    // },
  ];

  return (
    <div className="how__work__resource">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/4.png"})`,
          backgroundSize: isMobile ? "80%" : "65%",
          backgroundPosition: isMobile ? "160% 84%" : "209% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Why Tick Data Matters for Traders</h2>
              <p>
                Understand deeper market behaviour with granular data analysis,
                so you can make more informed trading decisions.
              </p>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/tick_history/tick_history_4.png"
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

export default TickHistoryContentSix;
