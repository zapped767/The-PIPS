import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BreadcrumbAnalyticalTools = () => {
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
            <div className="col-lg-9">
              <h1>Analytical Tools</h1>
              <p>
                We provide you with access to the top fundamental and technical
                analysis trading tools so you can plan your trades with
                confidence.
              </p>
              <div>
                <a
                  className="slide__btn dg__btn"
                  href="https://portal.thepips.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Tools
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbAnalyticalTools.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbAnalyticalTools;
