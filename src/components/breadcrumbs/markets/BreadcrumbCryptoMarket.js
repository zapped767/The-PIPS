import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const BreadcrumbCryptoMarket = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopImage =
    process.env.PUBLIC_URL + "/images/about/bull_right_side.jpg";
  const mobileImage =
    process.env.PUBLIC_URL + "/images/about/bull_right_side_mobile.jpg";

  return (
    <div
      className="ht__bradcaump__area_market"
      style={{
        background: `rgba(0,0,0,0) url(${
          isMobile ? mobileImage : desktopImage
        }) no-repeat scroll center center / ${isMobile ? "cover" : "105% 100%"}`,
      }}
    >
      <div className="ht__bradcaump__container_market">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <h1>Cryptocurrency CFDs</h1>
              <p>
                Cryptocurrencies are volatile, unregulated, decentralised and
                controlled almost exclusively by retail speculators. Trade the
                world’s newest and most exciting asset class as CFDs with an FSA
                regulated Forex CFD Provider.
              </p>
              <div>
                <a
                  className="slide__btn dg__btn"
                  href="https://portal.thepips.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Trading Crypto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbCryptoMarket.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbCryptoMarket;
