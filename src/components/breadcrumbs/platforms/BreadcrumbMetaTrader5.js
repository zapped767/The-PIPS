import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BreadcrumbMetaTrader5 = () => {
  const desktopImage =
    process.env.PUBLIC_URL + "/images/about/bull_right_side.png";

  return (
    <div
      className="ht__bradcaump__area__platform pips-desktop-bull-all-devices mt5-platform-hero"
      style={{
        backgroundImage: `url(${desktopImage})`,
      }}
    >
      <div className="ht__bradcaump__container__platform">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>MetaTrader 5 (MT5)</h1>

              <p>
                Next-gen trading with powerful, multi-asset features.
              </p>

              <Link
                className="slide__btn dg__btn"
                to={process.env.PUBLIC_URL + "/company/contact"}
              >
                Download Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbMetaTrader5.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbMetaTrader5;