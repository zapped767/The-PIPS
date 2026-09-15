import TopicOne from "../meta-trader-4-mobile-contents/TopicOne";

const MetaTrader4MobileContentOne = () => {
  return (
    <>
      <TopicOne />

      <div className="how__work__platform">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="thumb-left">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/platforms/meta_trader_4_mobile/meta_trader_4_mobile_1.png"
                  }
                  alt="computer images"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="content-right">
                <h2>The Power of MT4 in Your Pocket</h2>
                <p>
                  MetaTrader 4 Mobile gives you full trading power on iOS and
                  Android. Trade easily with one-tap execution, live charts, and
                  real-time market updates. Stay in control with a simple
                  interface and instant alerts, so you can manage trades
                  anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaTrader4MobileContentOne;
