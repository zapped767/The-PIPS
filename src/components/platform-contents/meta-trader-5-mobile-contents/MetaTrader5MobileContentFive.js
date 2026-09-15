import TopicTwo from "../../../components/platform-contents/meta-trader-5-mobile-contents/TopicTwo";

const MetaTrader5MobileContentFive = () => {
  return (
    <>
      {/* <TopicTwo /> */}

      <div className="how__work__platform">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Why Choose MetaTrader 5 Mobile with The Pips</h1>
            <p>Fast, secure, and powerful trading on the go.</p>
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
                  <h4>Sync Across Devices</h4>
                </div>
                <p>
                  Keep trades and charts updated on mobile, web, and desktop.
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
                  <h4>Strong Security</h4>
                </div>
                <p>
                  Bank-level encryption protects your data and transactions.
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
                  <h4>High Performance</h4>
                </div>
                <p>Fast, smooth execution even in volatile markets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaTrader5MobileContentFive;
