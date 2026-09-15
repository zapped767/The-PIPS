const TickHistoryContentFour = () => {
  return (
    <div className="how__work__resource">
      <div className="container">
        <div className="contact__cards row">
          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="contact__card">
              <div className="card-header">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/instant_withdrawals.png"
                  }
                  alt="play icon"
                />
                <h4>Tick Data</h4>
              </div>
              <p>
                Detailed bid/ask prices with precise timestamps for accurate
                analysis.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="contact__card">
              <div className="card-header">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/instant_withdrawals.png"
                  }
                  alt="play icon"
                />
                <h4>Trusted Data</h4>
              </div>
              <p>Transparent market information from reliable sources</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="contact__card">
              <div className="card-header">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/instant_withdrawals.png"
                  }
                  alt="play icon"
                />
                <h4>Easy Backtesting</h4>
              </div>
              <p>Test and refine trading strategies using historical data.</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="contact__card">
              <div className="card-header">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/instant_withdrawals.png"
                  }
                  alt="play icon"
                />
                <h4>Multi-Asset Support</h4>
              </div>
              <p>Analyze and apply data across multiple markets.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickHistoryContentFour;
