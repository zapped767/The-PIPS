const MetaTrader4ContentFour = () => {
  return (
    <div className="how__work__platform">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb-left">
              <div className="content-left">
                <h2>What You Can Trade on MetaTrader 4</h2>

                <p>Trade global markets easily from one platform.</p>
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
              <p>Trade currency pairs with low spreads and high liquidity.</p>
              <hr className="black-line" />
              <h3> Commodities</h3>
              <p>Trade gold, oil, and other key assets.</p>
              <hr className="black-line" />
              <h3>Cryptocurrencies</h3>
              <p>Trade BTC, ETH, and more with real-time data.</p>
              <hr className="black-line" />
              <h3>Stocks</h3>
              <p>Access global companies with live market quotes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaTrader4ContentFour;
