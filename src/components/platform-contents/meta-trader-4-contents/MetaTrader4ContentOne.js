import TopicOne from "../meta-trader-4-contents/TopicOne";

const MetaTrader4ContentOne = () => {
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
                    "/images/platforms/meta_trader_4/meta_trader_4_01.png"
                  }
                  alt="computer images"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="content-right">
                <h2>A Proven Platform for Confident Trading</h2>
                <p>
                  MetaTrader 4 (MT4) by The Pips lets you trade Forex,
                  Commodities, Stocks, and Crypto with ease. Use powerful
                  charts, real-time data, and automated tools to trade with
                  confidence. Customize your setup, apply technical indicators,
                  and even automate strategies with Expert Advisors. Built for
                  speed and stability, MT4 ensures smooth trading even in
                  volatile markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaTrader4ContentOne;
