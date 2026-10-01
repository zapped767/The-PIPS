import PropTypes from "prop-types";
import React from "react";

const BreadcrumbPartners = () => {
  const desktopImage =
    process.env.PUBLIC_URL + "/images/about/bull_right_side.png";

  return (
    <div
      className="ht__bradcaump__area__about partners-page-hero pips-bull-responsive-hero"
      style={{
        backgroundImage: `url(${desktopImage})`,
      }}
    >
      <div className="ht__bradcaump__container__about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Partner With The Pips</h1>

              <p>
                Grow with a trusted, transparent trading platform.
              </p>
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