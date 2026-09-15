import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const BreadcrumbThePipsInsights = () => {
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
      className="ht__bradcaump__area__resource"
      style={{
        background: `rgba(0,0,0,0) url(${
          isMobile ? mobileImage : desktopImage
        }) no-repeat scroll center center / ${isMobile ? "cover" : "105% 100%"}`,
      }}
    >
      <div className="ht__bradcaump__container__resource">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>The Pips Insights</h1>
              <p>
                Stay informed with easy-to-understand market perspectives and
                educational insights to help you trade with greater clarity and
                confidence.
              </p>
              <Link
                className="slide__btn dg__btn"
                to={process.env.PUBLIC_URL + "/company/contact"}
              >
                Explore Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbThePipsInsights.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbThePipsInsights;
