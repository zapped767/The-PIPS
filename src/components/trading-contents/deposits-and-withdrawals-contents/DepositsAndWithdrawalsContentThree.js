const DepositsAndWithdrawalsContentThree = () => {
  const tradingSteps = [
    {
      step: "Step 1",
      title: "Register and verify your account",
      // description:
      //   "Register an Pips Personal Area by clicking 'Try free demo' on this page.",
    },
    {
      step: "Step 2",
      title: "Choose one of the available payment methods",
      // description:
      //   "Click 'Demo account' and get a Standard MT5 demo account with $10,000 demo balance.",
    },
    {
      step: "Step 3",
      title: "Complete your deposit request",
      // description:
      //   "Choose a trading instrument, configure the chart to your liking and place your first demo trade.",
    },
  ];

  return (
    <div className="trading-guide-section">
      <div className="trading-container">
        <div className="trading-header-row">
          <h2 className="trading-main-headline">
            Deposit your funds in 3 easy steps
          </h2>
        </div>

        <div className="trading-visual-wrapper">
          <div className="trading-bg-image">
            <img
              src="/images/trading/deposits_and_withdrawals/deposit_n_withdrawals_2.jpg"
              alt="Trading Demo Account User"
            />
          </div>

          <div className="trading-cards-container">
            <div className="trading-cards-row">
              {tradingSteps.map((item, index) => (
                <div className="trading-step-card" key={index}>
                  <span className="trading-step-number">{item.step}</span>
                  <h3 className="trading-card-title">{item.title}</h3>
                  {/* <p className="trading-card-desc">{item.description}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositsAndWithdrawalsContentThree;
