const ThePipsInsightsContentFive = () => {
  return (
    <>
      <div className="how__work__resource">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Your Strategic Advantage</h1>
            <p>Clear, actionable insights to support every trading decision.</p>
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
                  <h4>Macro & Micro View</h4>
                </div>
                <p>
                  Understand both broader economic trends and detailed market
                  movements.
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
                  <h4>Full Analysis</h4>
                </div>
                <p>
                  Combines technical chart analysis with fundamental data for a
                  complete market perspective.
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
                  <h4>Trader Focused</h4>
                </div>
                <p>
                  Practical insights designed to be applied directly to real
                  trading decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThePipsInsightsContentFive;
