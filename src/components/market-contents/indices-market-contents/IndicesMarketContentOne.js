import React from "react";
import { Link } from "react-router-dom";
import TopicOne from "../../market-contents/indices-market-contents/TopicOne";

const IndicesMarketContentOne = () => {
  return (
    <>
      {/* Add the TopicOne component here */}
      <TopicOne />

      <div className="how__work__market">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="content-left">
                <h3>Indices Spreads</h3>
                <p>
                  Get competitive spreads across cash Indices, including the
                  E-mini S&P 500 Index from 0.4 points, FTSE 100 from 1 point,
                  and Xetra DAX from 1 point.
                </p>

                <h3>Futures Indices</h3>
                <p>
                  In addition to Equity Indices, explore global Futures Indices
                  instruments, including the ICE Dollar Index and the liquid VIX
                  Index.
                </p>

                <h3>Ex-Dividend Adjustments</h3>
                <p>
                  To receive a dividend adjustment, a client must have an open
                  position before the specified ex-dividend date and keep it
                  open through the payout.
                </p>

                {/* <h3>Dividend Variances</h3>
                <p>
                  While the index AUS200 adjustment provides AUD $2.44 per lot,
                  alternative indices like the US500 yield USD $2.44 per lot
                  based on asset sheets.
                </p> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="thumb-right">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/indices_cfd/indices_1.png"
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

export default IndicesMarketContentOne;
