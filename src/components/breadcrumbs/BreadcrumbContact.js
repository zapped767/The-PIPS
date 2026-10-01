import PropTypes from "prop-types";
import React from "react";

const BreadcrumbContact = () => {
  const desktopImage =
    process.env.PUBLIC_URL + "/images/about/bull_right_side.png";

  return (
    <div
      className="ht__bradcaump__area__contact contact-page-hero pips-bull-responsive-hero"
      style={{
        backgroundImage: `url(${desktopImage})`,
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