import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const BreadcrumbMetaTrader5Mobile = () => {
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
      className="ht__bradcaump__area__platform"
      style={{
        background: `rgba(0,0,0,0) url(${
          isMobile ? mobileImage : desktopImage
        }) no-repeat scroll center center / ${isMobile ? "cover" : "105% 100%"}`,
      }}
    >
      <div className="ht__bradcaump__container__platform">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>MetaTrader 5 Mobile</h1>
              <p>
                Manage your portfolio, analyze markets, and execute trades
                instantly on the go.
              </p>
              <Link
                className="slide__btn dg__btn"
                to={process.env.PUBLIC_URL + "/company/contact"}
              >
                Download MT5 Mobile
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

BreadcrumbMetaTrader5Mobile.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbMetaTrader5Mobile;
