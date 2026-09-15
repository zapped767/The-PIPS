import React from "react";
import TopicOne from "../../../components/market-contents/forex-market-contents/TopicOne";

const ForexMarketContentOne = () => {
  return (
    <>
      {/* Add the TopicOne component here */}
      <TopicOne />

      <div className="how__work__market">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="content-left">
                <h3>How does Forex Trading work?</h3>
                <p>
                  Forex trading involves buying or selling one currency against
                  another without taking physical delivery of the underlying
                  asset.
                </p>
                <h3>Small Lot Sizes</h3>
                <p>
                  Trade flexible contract volumes starting as small as 1,000
                  units (one micro lot) to match your capital requirement.
                </p>
                <h3>Up to 1:1000 Leverage</h3>
                <p>
                  Utilize flexible margin options up to 1:1000 to optimize
                  capital efficiency, unlike traditional non-leveraged equity
                  markets.
                </p>
                <h3>Global Execution</h3>
                <p>
                  Execute positions instantly through institutional networks,
                  securing deep liquidity and stable pricing around the clock.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="thumb-right">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/forex_cfd/forex_1.png"
                  }
                  alt="computer images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForexMarketContentOne;
