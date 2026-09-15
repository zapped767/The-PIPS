const TickHistoryContentFive = () => {
  return (
    <>
      <div className="how__work__resource">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Unlock Historical Market Intelligence.</h1>
            <p>
              Use reliable tick data to make more informed trading decisions.
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
                  <h4>Accurate Data</h4>
                </div>
                <p>
                  {" "}
                  Precise tick-level information with millisecond timestamps for
                  detailed analysis.
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
                  <h4>Wide Coverage</h4>
                </div>
                <p>
                  Historical data across multiple asset classes for broader
                  market insight.
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
                  <h4>Easy Export</h4>
                </div>
                <p>
                  Download data in structured formats for use in your preferred
                  analysis tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TickHistoryContentFive;
