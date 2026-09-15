import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const DemoTradingAccountContentTwo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopImage =
    process.env.PUBLIC_URL + "/images/about/bull_right_side_ai_1.png";
  const mobileImage =
    process.env.PUBLIC_URL + "/images/about/bull_right_side_ai_1_mobile.jpg";

  return (
    <div
      className="ht__bradcaump__area_market"
      style={{
        background: isMobile
          ? `linear-gradient(rgba(34, 34, 34, 0.5), rgba(39, 38, 38, 0.5)), url(${mobileImage}) no-repeat center center / cover`
          : `rgba(0,0,0,0) url(${desktopImage}) no-repeat scroll center center / 105% 100%`,
      }}
    >
      <div className="ht__bradcaump__container_market">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h1>Explore Pips assets and markets</h1>
              <p>
                Learn to trade with our various assets from leading global
                financial markets with the same conditions as on live trading
                accounts.
              </p>
              <div>
                <a
                  className="slide__btn dg__btn"
                  href="https://portal.thepips.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Practicing Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DemoTradingAccountContentTwo.propTypes = {
  title: PropTypes.string,
};

export default DemoTradingAccountContentTwo;
