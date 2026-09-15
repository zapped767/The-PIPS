const VPSHostingContentFive = () => {
  return (
    <>
      <div className="how__work__resource">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Why Choose The Pips VPS</h1>
            <p>
              Reliable hosting designed for serious, performance-driven traders.
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
                  <h4>Always On</h4>
                </div>
                <p>Maintain 24/7 trading without downtime or interruptions.</p>
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
                  <h4>Fast Execution</h4>
                </div>
                <p>Execute trades in milliseconds with reduced slippage.</p>
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
                  <h4>Scalable</h4>
                </div>
                <p>Easily support single or multiple accounts with flexible resources.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VPSHostingContentFive;
