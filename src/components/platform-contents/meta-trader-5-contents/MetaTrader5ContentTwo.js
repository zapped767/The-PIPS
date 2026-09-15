const MetaTrader5ContentTwo = () => {
  return (
    <div className="how__work__platform">
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
                <h4>Multi-Asset Trading</h4>
              </div>
              <p>Trade Forex, Stocks, Crypto, and more in one place.</p>
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
                <h4>Advanced Charts</h4>
              </div>
              <p>Use multiple timeframes and indicators for better analysis.</p>
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
                <h4>Smart Orders</h4>
              </div>
              <p>Execute advanced order types with more control.</p>
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
                <h4>Market Insights</h4>
              </div>
              <p>Access real-time data, economic updates, and market depth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaTrader5ContentTwo;
