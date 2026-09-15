import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const BreadcrumbCurrencyConverter = () => {
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
              <h1>Currency Converter</h1>
              <p>
                Check the most recently available exchange rates and make quick,
                accurate conversions - with rates refreshed in real time to
                reflect current market conditions.
              </p>
              <div>
                <a
                  className="slide__btn dg__btn"
                  href="/resources/currency-converter#currency-converter-section"
                >
                  Convert Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbCurrencyConverter.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbCurrencyConverter;
