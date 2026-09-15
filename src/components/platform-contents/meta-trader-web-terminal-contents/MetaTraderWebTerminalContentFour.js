const MetaTraderWebTerminalContentFour = () => {
  return (
    <div className="how__work__platform">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb-left">
              <div className="content-left">
                <h2>Access the World’s Most Popular Markets</h2>

                <p>
                  Trade global markets easily from one browser-based platform.
                </p>
              </div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/platforms/meta_trader_web_terminal/meta_trader_web_terminal_03.png"
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
              <p>Invest in global companies with flexible leverage.</p>
              <hr className="black-line" />
              <h3>Commodities</h3>
              <p>Trade energy, metals, and agriculture with live data.</p>
              <hr className="black-line" />
              <h3>Indices</h3>
              <p>Track and trade major global market movements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaTraderWebTerminalContentFour;
