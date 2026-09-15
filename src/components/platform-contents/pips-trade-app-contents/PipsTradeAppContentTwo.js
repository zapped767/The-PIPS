import TopicOne from "../pips-terminal-contents/TopicOne";

const PipsTradeAppContentTwo = () => {
  return (
    <>
      <TopicOne />

      <div className="how__work__platform">
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
                  <h4>Advanced charting</h4>
                </div>
                <p>
                  Take advantage of advanced charting tools including popular
                  indicators.
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
                  <h4>Price alerts</h4>
                </div>
                <p>
                  Set up push notifications to be informed when an asset reaches
                  a certain rate.
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
                  <h4>In-app trading calculator</h4>
                </div>
                <p>
                  Calculate your margins, spreads and swaps quickly and
                  efficiently in-app.
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
                  <h4>Trading notification</h4>
                </div>
                <p>
                  Control your trading and stay informed on the status of your
                  positions.
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
                  <h4>Detailed order overview</h4>
                </div>
                <p>
                  Review your trading history with a detailed overview of each
                  previous order.
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
                  <h4>Favorites and top movers</h4>
                </div>
                <p>
                  Bookmark your favorite instruments and view those with
                  significant price shifts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PipsTradeAppContentTwo;
