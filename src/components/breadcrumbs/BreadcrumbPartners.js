import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const BreadcrumbPartners = () => {
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
      className="ht__bradcaump__area__about"
      style={{
        background: `rgba(0,0,0,0) url(${
          isMobile ? mobileImage : desktopImage
        }) no-repeat scroll center center / ${isMobile ? "cover" : "105% 100%"}`,
      }}
    >
      <div className="ht__bradcaump__container__about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Partner With The Pips</h1>
              <p>Grow with a trusted, transparent trading platform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbPartners.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbPartners;
