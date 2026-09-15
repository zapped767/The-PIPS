import { useEffect, useState } from "react";

const IndicesMarketContentFour = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track which section is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Content data (to avoid repeating text)
  const sections = [
    {
      title: "What are indices, and how do they work?",
      text: `Indices represent the performance of a group of stocks from a specific market or sector. Instead of trading individual shares, you trade on the overall movement of the index, giving you broad exposure to market trends.`,
    },
    {
      title: "What indices can I trade with The Pips?",
      text: `The Pips offers access to major global indices such as the S&P 500, NASDAQ 100, FTSE 100, DAX 40, and Nikkei 225, all with competitive spreads and real-time data.`,
    },
    {
      title: "What are the trading hours for indices?",
      text: `Trading hours vary depending on the index and its underlying exchange. However, The Pips provides extended trading sessions with market updates so you can stay connected to global movements around the clock.`,
    },
    {
      title: "How are index prices determined?",
      text: `Index prices are calculated based on the weighted average performance of the constituent stocks. Economic data, market sentiment, and company earnings can all influence price movements.`,
    },
    {
      title: "Can I trade indices using leverage?",
      text: `Yes. The Pips provides flexible leverage options on index CFDs, allowing traders to open larger positions with smaller capital. However, it’s important to use leverage responsibly to manage risk effectively.`,
    },
    {
      title:
        "What are the benefits of trading indices instead of individual stocks?",
      text: `Trading indices helps reduce exposure to the volatility of single companies. It allows traders to speculate on overall market performance and take advantage of macroeconomic trends rather than company-specific events.`,
    },
    // {
    //   title: "Are there any overnight fees for holding index positions?",
    //   text: `Yes, overnight fees (swap rates) may apply for positions held beyond the trading day. These rates are transparently displayed within your trading account and updated daily.`,
    // },
    // {
    //   title: "How can I start trading indices with The Pips?",
    //   text: `Simply register for a free account, verify your details, and fund your wallet. Once your account is active, you can trade indices directly through The Pips’ platform or mobile app using real-time market data.`,
    // },
  ];

  return (
    <div className="how__work__market">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/9.png"})`,
          backgroundSize: isMobile ? "90%" : "65%",
          backgroundPosition: isMobile ? "-170% 86%" : "130% 133%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Frequently Asked Questions</h2>
              <p>
                Learn how our platform works, along with key details on markets,
                tools, and trading conditions, helping you trade with
                confidence.
              </p>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/markets/indices_cfd/indices_3.png"
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

export default IndicesMarketContentFour;
