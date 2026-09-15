const StockMarketContentThree = () => {
  return (
    <>
      <div className="how__work__market">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Trade the World’s Most Popular Companies</h1>
            <p>
              Our single stock CFDs give traders the unique ability to trade
              global macro themes with advanced charting tools and superior
              multi-market execution.
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
                  <h4>+2100 Popular Stocks</h4>
                </div>
                <p>
                  Take positions across leading markets like Nvidia, Apple,
                  Meta, Microsoft, and BHP Billiton entirely through a single
                  trading account.
                </p>
              </div>
            </div>

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
                  <h4>ASX, NASDAQ & NYSE</h4>
                </div>
                <p>
                  Explore comprehensive listed opportunities across Australian
                  and US exchanges, including emerging market sectors and gold
                  miner baskets.
                </p>
              </div>
            </div>

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
                  <h4>Earn Account Dividends</h4>
                </div>
                <p>
                  Gain exclusive access to advanced platform features for new or
                  experienced traders while collecting full dividend payouts on
                  long holdings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockMarketContentThree;
