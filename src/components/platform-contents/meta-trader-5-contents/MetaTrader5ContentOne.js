import TopicOne from "../meta-trader-5-contents/TopicOne";

const MetaTrader5ContentOne = () => {
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
                <h2>The Pips MT5 - Power Meets Precision</h2>
                <p>
                  MT5 by The Pips is an advanced, all-in-one platform for
                  multi-asset trading. Trade Forex, Stocks, Crypto, and
                  Commodities with fast execution and powerful tools. Enjoy
                  advanced charts, flexible features, and smooth performance
                  across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaTrader5ContentOne;
