import TopicTwo from "../../../components/platform-contents/meta-trader-4-mobile-contents/TopicTwo";

const MetaTrader4MobileContentFive = () => {
  return (
    <>
      {/* <TopicTwo /> */}

      <div className="how__work__platform">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Why Choose MetaTrader 4 Mobile with The Pips</h1>
            <p>
              The Pips enhances the world’s most recognized trading platform
              with next-level accessibility, performance, and personalized
              learning support.
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
                  <h4>Trade Anywhere</h4>
                </div>
                <p>Open and manage trades on the go.</p>
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
                  <h4>Reliable Speed</h4>
                </div>
                <p>Low latency and smooth performance in all conditions.</p>
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
                  <h4>Learn as You Trade</h4>
                </div>
                <p>Get tips, guides, and expert insights in-app.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaTrader4MobileContentFive;
