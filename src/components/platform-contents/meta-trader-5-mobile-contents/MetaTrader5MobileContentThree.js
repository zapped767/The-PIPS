import React from "react";
import { Link } from "react-router-dom";

const MetaTrader5MobileContentThree = () => {
  return (
    <div className="how__work__platform">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Trade Anytime, Anywhere</h2>
              <p>
                MetaTrader 5 Mobile lets you trade on iOS and Android with full
                flexibility. Stay synced with desktop and web platforms so you
                never lose track of your trades. Get real-time alerts, advanced
                charts, and fast execution, all in a smooth, stable app that
                keeps you connected wherever you are.
              </p>
              <Link
                className="slide__btn dg__btn"
                to={process.env.PUBLIC_URL + "/company/contact"}
              >
                Download for iOS / Android
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="thumb-right">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/platforms/meta_trader_5_mobile/meta_trader_5_mobile_2.png"
                }
                alt="computer images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaTrader5MobileContentThree;
