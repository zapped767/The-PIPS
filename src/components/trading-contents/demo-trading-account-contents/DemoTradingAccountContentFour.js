const DemoTradingAccountContentFive = () => {
  const tradingSteps = [
    {
      step: "Step 1",
      title: "Register",
      description:
        "Register an Pips Personal Area by clicking ‘Try free demo’ on this page.",
    },
    {
      step: "Step 2",
      title: "Get demo balance",
      description: "Choose a demo, select your platform, and set your balance.",
    },
    {
      step: "Step 3",
      title: "Explore the platform",
      description:
        "vChoose a trading instrument, configure the chart to your liking and place your first demo trade.",
    },
  ];

  return (
    <div className="trading-guide-section">
      <div className="trading-container">
        <div className="trading-header-row">
          <h2 className="trading-main-headline">
            How to open an Pips demo trading account
          </h2>
        </div>

        <div className="trading-visual-wrapper">
          <div className="trading-bg-image">
            <img
              src="/images/trading/demo_trading_account/demo_acc_5.jpg"
              alt="Trading Demo Account User"
            />
          </div>

          <div className="trading-cards-container">
            <div className="trading-cards-row">
              {tradingSteps.map((item, index) => (
                <div className="trading-step-card" key={index}>
                  <span className="trading-step-number">{item.step}</span>
                  <h3 className="trading-card-title">{item.title}</h3>
                  <p className="trading-card-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoTradingAccountContentFive;
