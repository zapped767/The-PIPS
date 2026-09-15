const MetaTrader5ContentFour = () => {
  return (
    <div className="how__work__platform">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb-left">
              <div className="content-left">
                <h2>What You Can Trade on MetaTrader 5</h2>

                <p>Access global markets from one powerful platform.</p>
              </div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/platforms/meta_trader_4/meta_trader_4_03.png"
                }
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <h3>Forex</h3>
              <p>Trade currency pairs with tight spreads and fast execution.</p>
              <hr className="black-line" />
              <h3> Stocks</h3>
              <p>Invest in top global companies with real-time pricing.</p>
              <hr className="black-line" />
              <h3>Commodities</h3>
              <p>Trade gold, oil, silver, and more for diversification.</p>
              <hr className="black-line" />
              <h3>Cryptocurrencies</h3>
              <p>
                Trade Bitcoin, Ethereum, and other digital assets in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaTrader5ContentFour;
