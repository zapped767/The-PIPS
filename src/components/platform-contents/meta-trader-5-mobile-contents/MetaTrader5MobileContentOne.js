import React from "react";
import { Link } from "react-router-dom";
import TopicOne from "../meta-trader-5-mobile-contents/TopicOne";

const MetaTrader5MobileContentOne = () => {
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
                    "/images/platforms/meta_trader_5_mobile/meta_trader_5_mobile_1.png"
                  }
                  alt="computer images"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="content-right">
                <h2> Professional Trading On the Go</h2>
                <p>
                  MetaTrader 5 Mobile gives you powerful trading tools on your
                  phone or tablet. Trade Forex, Commodities, and Crypto with
                  real-time data, charts, and fast execution. Stay synced across
                  all devices, so you can continue trading anytime. Built for
                  speed and stability, it helps you trade confidently even in
                  fast-moving markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaTrader5MobileContentOne;
