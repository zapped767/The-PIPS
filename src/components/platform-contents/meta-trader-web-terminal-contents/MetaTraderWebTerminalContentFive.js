import TopicTwo from "../../../components/platform-contents/meta-trader-web-terminal-contents/TopicTwo";

const MetaTraderWebTerminalContentFive = () => {
  return (
    <>
      {/* <TopicTwo /> */}

      <div className="how__work__platform">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Why Traders Choose the MetaTrader Web Terminal</h1>
            <p>
              Fast, simple, and built for trading anywhere.
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
                  <h4>No Installation</h4>
                </div>
                <p>
                  Start trading instantly in your browser.
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
                  <h4>Works Everywhere</h4>
                </div>
                <p>
                  {" "}
                  Use it on any device or operating system.
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
                  <h4>Full Features</h4>
                </div>
                <p>
                  Access charts, tools, and trading controls online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaTraderWebTerminalContentFive;
