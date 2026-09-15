import { useEffect, useState } from "react";

const CommoditiesMarketContentFour = () => {
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
      title: "What are commodities in trading?",
      text: `Commodities are raw materials or primary goods like gold, oil, silver, and agricultural products that can be bought or sold on global markets. They are often used to diversify trading portfolios and hedge against inflation.`,
    },
    {
      title: "How can I trade commodities with The Pips?",
      text: `You can trade commodities through CFDs (Contracts for Difference) on The Pips platform, allowing you to speculate on price movements without owning the underlying asset.`,
    },
    {
      title: "What are the most popular commodities to trade?",
      text: `Gold, crude oil, silver, natural gas, and copper are among the most actively traded commodities due to their global demand and liquidity.`,
    },
    {
      title: "What factors influence commodity prices?",
      text: `Commodity prices are affected by supply and demand, geopolitical tensions, currency fluctuations, and economic data releases. These drivers make the market dynamic and full of opportunity.`,
    },
    {
      title: "What are the trading hours for commodities?",
      text: `Commodities can be traded 24 hours a day, five days a week, with specific opening and closing times depending on the product. Check The Pips platform for exact market schedules.`,
    },
    {
      title: "What leverage options are available for commodity trading?",
      text: `The Pips offers flexible leverage depending on the commodity and your account type, giving you the ability to optimize capital efficiency while managing risk.`,
    },
    // {
    //   title: "Are there any fees or commissions on commodity trades?",
    //   text: `The Pips maintains transparent pricing with no hidden fees. You’ll only pay spreads or commissions as clearly stated in our trading conditions.`,
    // },
    // {
    //   title: "Is commodity trading suitable for beginners?",
    //   text: `Yes, but it’s important to start with a solid understanding of the market. The Pips provides educational resources, demo accounts, and real-time insights to help new traders learn safely before trading live.`,
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
                Learn how markets like gold, oil, and other commodities work,
                and how price movements are influenced by global supply, demand,
                and economic events explaining CFD trading and market access.
              </p>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/markets/commodities_cfd/commodities_3.png"
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

export default CommoditiesMarketContentFour;
