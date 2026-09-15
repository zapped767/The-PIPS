const MetaTrader4MobileContentTwo = () => {
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
                <h4>Simple Interface</h4>
              </div>
              <p>Easy-to-use design for managing trades and charts.</p>
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
              <p>Live data with 30+ indicators and multiple timeframes.</p>
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
              <p>Place orders instantly, even in volatile markets.</p>
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
                <h4>Instant Alerts</h4>
              </div>
              <p>
                Get real-time updates and trade notifications on your phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaTrader4MobileContentTwo;
