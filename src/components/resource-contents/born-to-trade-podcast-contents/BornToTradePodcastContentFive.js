const BornToTradePodcastContentFive = () => {
  return (
    <>
      <div className="how__work__resource">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>The Perfect Companion to Your Trading Journey</h1>
            <p>Learn and grow through practical market insights.</p>
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
                  <h4>Wide Market Coverage</h4>
                </div>
                <p>
                  Explore global markets and digital assets with clear,
                  structured insights.
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
                  <h4>Real Trader Stories</h4>
                </div>
                <p>
                  Learn from real experiences, challenges, and market
                  situations.
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
                  <h4>Grow With You</h4>
                </div>
                <p>
                  Content designed to support both beginners and advanced
                  traders at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BornToTradePodcastContentFive;
