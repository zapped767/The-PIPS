const ClientProtectionContentFour = () => {
  const tradingSteps = [
    {
      step: "Trading Mobile Application",
      title: "Trading Mobile Application",
      // description:
      //   "Register an Pips Personal Area by clicking 'Try free demo' on this page.",
    },
    {
      step: "Professional Web Terminal",
      title: "Professional Web Terminal",
      // description:
      //   "Click 'Demo account' and get a Standard MT5 demo account with $10,000 demo balance.",
    },
  ];

  return (
    <div className="trading-guide-section">
      <div className="trading-container">
        <div className="trading-header-row">
          <h2 className="trading-main-headline">More Ways We Protect You</h2>
          <p>
            We go beyond platform security to protect your identity, data, and
            trading experience with layered safeguards.
          </p>
        </div>

        <div className="trading-visual-wrapper">
          <div className="trading-bg-image">
            <img
              src={
                process.env.PUBLIC_URL + "/images/partners/partners_image.png"
              }
              alt="computer images"
            />
          </div>

          <div className="trading-cards-container">
            <div className="trading-cards-row">
              {tradingSteps.map((item, index) => (
                <div className="trading-step-card" key={index}>
                  {/* <span className="trading-step-number">{item.step}</span> */}
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
