const CommoditiesMarketContentFive = () => {
  const tradingSteps = [
    {
      title: "Established in 2008",
      step: "Benefit from a proven track record of providing serious traders with the conditions they need.",
    },
    {
      title: "24/7 support",
      step: "Receive answers when you need them most from trained professionals, in 15 languages.",
    },
    {
      title: "Multiple regulatory licences",
      step: "Trade with a broker licensed and regulated by top global authorities.",
    },
  ];

  return (
    <div className="trading-guide-section">
      <div className="trading-container">
        <div className="trading-header-row">
          <h2 className="trading-main-headline">
            Regulated. Reliable. Renowned.
          </h2>
          <p>
            Leverage our expertise and reliability to focus on what matters
            most: your trading strategy.
          </p>
        </div>

        <div className="trading-visual-wrapper">
          <div className="trading-bg-image">
            <img
              src="/images/markets/commodities_cfd/commodities_4.png"
              alt="Trading Demo Account User"
            />
          </div>

          <div className="trading-cards-container">
            <div className="trading-cards-row">
              {tradingSteps.map((item, index) => (
                <div className="trading-step-card" key={index}>
                  <h3 className="trading-card-title">{item.title}</h3>
                  <span className="trading-step-number">{item.step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommoditiesMarketContentFive;
