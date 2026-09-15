import TopicThree from "../../../components/market-contents/forex-market-contents/TopicThree";

const ForexMarketContentThree = () => {
  return (
    <>
      <div className="how__work__market">
        <div className="quality-section-market">
          <TopicThree />
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
                  <h4>Tight Spreads from 0.0 Pips</h4>
                </div>
                <p>
                  Access direct institutional pricing over 61+ currency pairs
                  with deep liquidity and maximum transparency.
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
                  <h4>Up to 1:1000 Leverage</h4>
                </div>
                <p>
                  Maximize your trading capital efficiency with competitive
                  margin conditions across multiple global majors.
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
                  <h4>24/5 Continuous Market</h4>
                </div>
                <p>
                  Trade twenty-four hours a day, five days a week, executing
                  positions seamlessly in real-time markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </>
  );
};

export default ForexMarketContentThree;
