const CommoditiesMarketContentThree = () => {
  return (
    <>
      <div className="how__work__market">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Why Trade Commodities with The Pips</h1>
            <p>
              Trade energies, metals, and agriculture with speed, transparency,
              and institutional-grade conditions.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="contact__cards row">
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="contact__card">
                <div className="card-header">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/markets/instant_withdrawals.png"
                    }
                    alt="play icon"
                  />
                  <h4>Tight Spreads & Deep Liquidity</h4>
                </div>
                <p>
                  Access spreads as low as 0.0 pips across energies, metals, and
                  agriculture with minimal slippage.
                </p>
              </div>
            </div>

            {/* Email Inquiries */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="contact__card">
                <div className="card-header">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/markets/instant_withdrawals.png"
                    }
                    alt="play icon"
                  />
                  <h4>Spot & Futures CFDs</h4>
                </div>
                <p>
                  Choose between spot and futures commodity contracts - all
                  available from a single trading account.
                </p>
              </div>
            </div>

            {/* Our Office */}
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="contact__card">
                <div className="card-header">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/markets/instant_withdrawals.png"
                    }
                    alt="play icon"
                  />
                  <h4>Flexible High Leverage</h4>
                </div>
                <p>
                  Trade metals and energies with leverage up to 1:1000 and
                  agriculture CFDs with up to 1:100.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommoditiesMarketContentThree;
