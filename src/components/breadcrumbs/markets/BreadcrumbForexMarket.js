import React from "react";
import PropTypes from "prop-types";

const BreadcrumbForexMarket = () => {
  const desktopImage =
    process.env.PUBLIC_URL + "/images/about/bull_right_side.png";

  return (
    <div
      className="ht__bradcaump__area_market pips-desktop-bull-all-devices forex-market-hero"
      style={{
        backgroundImage: `url(${desktopImage})`,
      }}
    >
      <div className="ht__bradcaump__container_market">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h1>Forex CFDs</h1>

              <p>
                The IC Forex offering is one of the most competitive in the
                world. Access the world’s largest and most liquid market with
                Raw spreads starting from 0.0 pips.
              </p>

              <div>
                <a
                  className="slide__btn dg__btn"
                  href="https://portal.thepips.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Trading Forex
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbForexMarket.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbForexMarket;