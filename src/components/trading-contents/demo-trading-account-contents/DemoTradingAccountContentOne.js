const DemoTradingAccountContentOne = () => {
  const accountTypes = [
    {
      title: "Risk-free practice",
      description:
        "Learn to trade without financial risk, refining strategies and learning from mistakes.",
      image:
        process.env.PUBLIC_URL +
        "/images/trading/demo_trading_account/demo_acc_1.png",
    },

    {
      title: "Skill development",
      description:
        "Hone trading abilities, from market analysis to decision-making.",
      image:
        process.env.PUBLIC_URL +
        "/images/trading/demo_trading_account/demo_acc_2.png",
    },
    {
      title: "Platform orientation",
      description: "Get comfortable with trading platform tools and features.",
      image:
        process.env.PUBLIC_URL +
        "/images/trading/demo_trading_account/demo_acc_3.png",
    },
    {
      title: "Strategy testing",
      description:
        "Experiment with various strategies in real  market conditions.",
      image:
        process.env.PUBLIC_URL +
        "/images/trading/demo_trading_account/demo_acc_4.png",
    },
  ];

  return (
    <div className="quality-section-trading">
      <div className="quality-header-trading">
        <h1>Benefits of using an Pips demo trading account</h1>
        <p>
          Our demo trading account can be your “secret weapon” to test out
          strategies and hone your skills with zero risk. Here’s how you’ll
          benefit
        </p>
      </div>

      <div className="image-cards-container">
        {accountTypes.map((account, index) => (
          <div
            key={index}
            className="image-trading-card"
            style={{ backgroundImage: `url(${account.image})` }}
          >
            <div className="card-header">
              <div className="title-row">
                <h2 className="card-title">{account.title}</h2>
              </div>
              <p className="card-description">{account.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoTradingAccountContentOne;
