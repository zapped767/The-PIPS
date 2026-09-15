const ClientProtectionContentFour = () => {
  const tradingSteps = [
    {
      step: "Negative Balance Protection",
      title:
        "Enjoy risk, with a safety net. We prevent losses from exceeding your balance, no matter the market conditions.",
    },
    {
      step: "Stop Out Protection",
      title:
        "Power your positions with a proprietary feature that helps delay or even completely avoid stop outs, especially in volatile markets.",
    },
  ];

  return (
    <div className="trading-guide-section">
      <div className="trading-container">
        <div className="trading-header-row">
          <h2 className="trading-main-headline">Trading protection</h2>
          <p>
            Shield your strategy with our bespoke trading protection features.
          </p>
        </div>

        <div className="trading-visual-wrapper">
          <div className="trading-bg-image-position-center">
            <img
              src="/images/trading/client_protection/client_protection_3.jpg"
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

export default ClientProtectionContentFour;
