import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

const BreadcrumbContact = () => {
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
      className="ht__bradcaump__area__contact"
      style={{
        background: `rgba(0,0,0,0) url(${
          isMobile ? mobileImage : desktopImage
        }) no-repeat scroll center center / ${isMobile ? "cover" : "105% 100%"}`,
      }}
    >
      <div className="ht__bradcaump__container__contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Contact Us</h1>
              <p>
                Our support team is here to help you anytime with trading or
                platform questions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbContact.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbContact;
