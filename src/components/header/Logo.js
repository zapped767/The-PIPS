import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ image }) => {
  return (
    <div className="logo">
      <Link to={process.env.PUBLIC_URL + "/"}>
        <picture>
          {/* Mobile white logo */}
          <source
            media="(max-width: 767px)"
            srcSet={
              process.env.PUBLIC_URL + "/images/logo/logo_white.png"
            }
          />

          {/* Desktop original blue logo */}
          <img
            src={process.env.PUBLIC_URL + image}
            alt="The Pips"
            className="logo-img"
          />
        </picture>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  image: PropTypes.string,
};

export default Logo;