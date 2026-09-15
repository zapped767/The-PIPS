import React from "react";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const HeaderBtn = () => {
  /* =========================================================
     OPEN MOBILE MENU
  ========================================================= */
  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );

    if (offcanvasMobileMenu) {
      offcanvasMobileMenu.classList.add("active");
    }
  };

  return (
    <div className="header-btn-wrapper">

      {/* =====================================================
          DESKTOP NAVBAR BUTTONS
      ====================================================== */}
      <ul className="accounts d-none d-lg-flex">

        {/* LOGIN */}
        <li>
          <Link
            className="header-login-btn"
            to={process.env.PUBLIC_URL + "/login"}
          >
            Login
          </Link>
        </li>

        {/* REGISTER */}
        <li>
          <Link
            className="header-signin-btn"
            to={process.env.PUBLIC_URL + "/register"}
          >
            Register
          </Link>
        </li>

      </ul>


      {/* =====================================================
          MOBILE HAMBURGER
      ====================================================== */}
      <div className="mobile-button-wrapper d-block d-xl-none text-right">

        <button
          type="button"
          className="mobile-aside-button"
          onClick={triggerMobileMenu}
          aria-label="Open mobile menu"
        >
          <IoIosMenu />
        </button>

      </div>

    </div>
  );
};

export default HeaderBtn;