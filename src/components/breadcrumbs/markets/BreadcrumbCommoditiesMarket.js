import React from "react";
import PropTypes from "prop-types";

const BreadcrumbCommoditiesMarket = () => {
  const desktopImage =
    process.env.PUBLIC_URL + "/images/about/bull_right_side.png";

  return (
    <div
      className="ht__bradcaump__area_market commodities-market-hero"
      style={{
        backgroundImage: `url(${desktopImage})`,
      }}
    >
      <div className="ht__bradcaump__container_market">
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <h1>Commodities CFDs</h1>

              <p>
                Trade the most popular CFDs on Commodities from around the
                world, including energies, agriculture and metals. IC combines
                tight pricing and flexible conditions to give you one powerful
                product.
              </p>

              <div>
                <a
                  className="slide__btn dg__btn"
                  href="https://portal.thepips.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Trading Commodities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbCommoditiesMarket.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbCommoditiesMarket;