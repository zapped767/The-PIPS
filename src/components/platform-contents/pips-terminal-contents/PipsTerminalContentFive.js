import TopicTwo from "../../../components/platform-contents/pips-terminal-contents/TopicTwo";

const PipsTerminalContentFive = () => {
  return (
    <>
      {/* <TopicTwo /> */}

      <div className="how__work__platform">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Why The Pips?</h1>
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
                  Stay in control of your funds. Simply choose your preferred
                  payment method and make a withdrawal request.
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
                  <h4>Ultra-fast execution</h4>
                </div>
                <p>
                  Get the most precise execution in the markets with spreads
                  that stay 4 times more stable during high-impact news.
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

export default PipsTerminalContentFive;
