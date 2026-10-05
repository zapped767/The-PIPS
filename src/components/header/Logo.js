import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  const logoImage =
    process.env.PUBLIC_URL + "/images/logo/logo.png";

  return (
    <div className="logo">
      <Link
        to={process.env.PUBLIC_URL + "/"}
        aria-label="The PIPS Home"
      >
        <img
          src={logoImage}
          alt="The PIPS"
          className="logo-img"
        />
      </Link>
    </div>
  );
};

export default Logo;