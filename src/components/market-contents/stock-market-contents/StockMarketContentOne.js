import React from "react";
import TopicTwo from "../stock-market-contents/TopicTwo";

const StockMarketContentOne = () => {
  return (
    <>
      {/* Add the TopicTwo component here */}
      <TopicTwo />

      <div className="how__work__market">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="content-left">
                <h3>Over-the-Counter Trading</h3>
                <p>
                  Stock CFDs can be traded efficiently using flexible margin
                  solutions. These contracts are executed seamlessly
                  over-the-counter (OTC) rather than via physical exchanges.
                </p>
                <h3>Global Sector Allocation</h3>
                <p>
                  Participants are able to access premium stocks of individual
                  companies, building strategic, un-leveraged positions in an
                  individual company or specified sectors.
                </p>
                <h3>Diversification Strategies</h3>
                <p>
                  Participants often build strategies with long-term
                  diversification in mind to diversify away unsystematic risk
                  across a large number of global companies.
                </p>
                {/* <h3>Managing Market Volatility</h3>
                <p>
                  Investors may choose to build tactical positions in defensives
                  if they predict volatility, or build portfolios out of small
                  to mid-cap technology stocks.
                </p> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="thumb-right">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/stocks_cfd/stocks_1.png"
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

export default StockMarketContentOne;
