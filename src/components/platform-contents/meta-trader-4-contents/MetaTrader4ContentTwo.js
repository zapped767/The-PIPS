const MetaTrader4ContentTwo = () => {
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
                <h4>Advanced Charts</h4>
              </div>
              <p>
                Use interactive charts with 30+ indicators to analyze markets.
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
                <h4>Automated Trading</h4>
              </div>
              <p>Run expert advisors to trade automatically.</p>
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
                <h4>Fast Execution</h4>
              </div>
              <p>Place trades instantly, even in volatile markets.</p>
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
                <h4>Secure Platform</h4>
              </div>
              <p>Strong encryption keeps your data and funds safe.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaTrader4ContentTwo;
