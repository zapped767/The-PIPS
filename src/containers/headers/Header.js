import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../components/header/Logo";
import Navigation from "../../components/header/Navigation";
import HeaderBtn from "../../components/header/HeaderBtn";
import MobileMenu from "../../components/header/MobileMenu";

const Header = ({ theme }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const location = useLocation(); // 👈 get current route

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  // 👇 Conditional logo based on URL
  const getLogo = () => {
    const path = location.pathname;

    if (path.startsWith("/company")) {
      // return "/images/logo/logo_white.png";
      return "/images/logo/logo.png";
    } else if (path.startsWith("/trading")) {
      return "/images/logo/logo.png";
    } else if (path.startsWith("/markets")) {
      return "/images/logo/logo.png";
    } else if (path.startsWith("/platforms")) {
      return "/images/logo/logo.png";
    } else if (path.startsWith("/resources")) {
      return "/images/logo/logo.png";
    } else {
      // default logo
      return "/images/logo/logo.png";
    }
  };

  const getHeaderClass = () => {
    const path = location.pathname;

    if (path.startsWith("/company")) {
      return "space-right-left-header--white";
    } else if (path.startsWith("/trading")) {
      return "space-right-left-header--white";
    } else if (path.startsWith("/markets")) {
      return "space-right-left-header--white";
    } else if (path.startsWith("/platforms")) {
      return "space-right-left-header--white";
    } else if (path.startsWith("/resources")) {
      return "space-right-left-header--white";
    } else if (path.startsWith("/partners")) {
      return "space-right-left-header--white";
    }else {
      return "space-right-left";
    }
  };

  return (
    <header
      className={`dg__header header--absolute ${getHeaderClass()} ${
        scroll > headerTop ? "stick" : ""
      }`}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-2 col-xl-2 col-6">
            {/* logo */}
            <Logo image={getLogo()} />
          </div>

          <div className="col-lg-7 col-xl-8 d-none d-lg-block">
            {/* navigation */}
            <Navigation />
          </div>

          <div className="col-lg-3 col-xl-2 col-6">
            {/* header buttons */}
            <HeaderBtn />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

export default Header;
