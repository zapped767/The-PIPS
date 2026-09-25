import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const BreadcrumbStandardAccounts = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopImage =
    process.env.PUBLIC_URL + "/images/about/bull_right_side.png";
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
            <div>
              <h1>Types of Accounts</h1>
              <p>Simple. Powerful. Built for every Trader.</p>
              <div>
                <a
                  className="slide__btn dg__btn"
                  href="https://portal.thepips.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbStandardAccounts.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbStandardAccounts;
