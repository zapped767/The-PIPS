const FeesContentThree = () => {
  const securityFeatures = [
    {
      title: "Currencies",
      text: "Trade the world’s largest market with tight and stable spreads",
    },
    {
      title: "Commodities",
      text: "Diversify your portfolio and trade oil, natural gas and metals",
    },
    {
      title: "Stocks",
      text: "Trade stocks of the biggest names in the international stock market with low transaction costs",
    },
    {
      title: "Indices",
      text: "Capitalize on the biggest names in tech and other industries",
    },
    {
      title: "Cryptocurrencies",
      text: "24/7 swap-free trading on top cryptocurrencies including Bitcoin and Ethereum",
    },
  ];

  return (
    <div className="sm-security-section">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/3.png"})`,
          backgroundSize: "70%",
          backgroundPositionX: "0%",
          backgroundPositionY: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="sm-content-center">
          <h2 className="sm-main-title">Commissions and spreads</h2>
          <p className="sm-intro-text">
            Learn more about commission and spreads for individual instruments
          </p>
        </div>

        <div className="sm-feature-list">
          {securityFeatures.map((item, index) => (
            <div key={index} className="sm-feature-item">
              <div className="sm-feature-row">
                <div className="sm-feature-title">
                  <h3>{item.title}</h3>
                </div>
                <div className="sm-feature-desc">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FeesContentThree;
