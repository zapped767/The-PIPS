import TopicTwo from "../../../components/platform-contents/pips-trade-app-contents/TopicTwo";

const PipsTradeAppContentFive = () => {
  return (
    <>
      {/* <TopicTwo /> */}

      <div className="how__work__platform">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Why the Pips?</h1>
            <p>Upgrade your trading with better-than-market conditions.</p>
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
                  <h4>Fastest withdrawals</h4>
                </div>
                <p>
                  Simply choose your preferred payment method and make a
                  withdrawal request
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
                  <h4>Reliable execution</h4>
                </div>
                <p>
                  Get the most precise execution in the market³ with over 3x
                  less slippage and tight spreads.
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
                  <h4>Stop Out Protection</h4>
                </div>
                <p>
                  Trade volatility with an edge. Delay or avoid stop outs during
                  volatile markets with our proprietary Stop Out Protection
                  feature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PipsTradeAppContentFive;
