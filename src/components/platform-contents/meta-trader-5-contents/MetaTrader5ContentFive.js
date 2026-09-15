import TopicTwo from "../../../components/platform-contents/meta-trader-5-contents/TopicTwo";

const MetaTrader5ContentFive = () => {
  return (
    <>
      {/* <TopicTwo /> */}

      <div className="how__work__platform">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Why Trade with MetaTrader 5 on The Pips</h1>
            <p>Fast, reliable trading with powerful tools for every trader.</p>
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
                  <h4>More Markets</h4>
                </div>
                <p>Trade multiple assets from one platform.</p>
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
                  <h4>Flexible Tools</h4>
                </div>
                <p>Supports automated trading and different strategies.</p>
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
                <p>Instant trades with clear, transparent pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaTrader5ContentFive;
