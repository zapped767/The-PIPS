import PropTypes from "prop-types";
import React from "react";

const BreadcrumbAboutUs = () => {
  const desktopImage =
    process.env.PUBLIC_URL + "/images/about/bull_right_side.png";

  return (
    <div
      className="ht__bradcaump__area__about about-page-hero pips-bull-responsive-hero"
      style={{
        backgroundImage: `url(${desktopImage})`,
      }}
    >
      <div className="ht__bradcaump__container__about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>We are the Pips</h1>

              <p>
                Making financial markets simple and accessible for everyone,
                from beginners to pros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbAboutUs.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbAboutUs;