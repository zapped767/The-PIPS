import React, { useMemo, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

import Select from "react-select";
import countryList from "react-select-country-list";

import { Mail, Phone, Hash } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import "./Register.scss";

const Register = () => {
  /* =========================================================
     ALL COUNTRIES
  ========================================================= */

  const countries = useMemo(() => {
    return countryList()
      .getData()
      .map((country) => ({
        value: country.value,
        label: country.label,
      }));
  }, []);


  /* =========================================================
     DEFAULT COUNTRY = UNITED ARAB EMIRATES
  ========================================================= */

  const defaultCountry = {
    value: "AE",
    label: "United Arab Emirates",
  };


  const [selectedCountry, setSelectedCountry] =
    useState(defaultCountry);


  return (
    <>
      <MetaTags>

        <title>
          PIPS | Register
        </title>

        <meta
          name="description"
          content="Create your PIPS account."
        />

      </MetaTags>


      <div className="pips-register-page">

        {/* ===================================================
            LEFT SIDE
        ==================================================== */}
        <div className="register-left-side">

          {/* BACKGROUND IMAGE */}
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/login/register-bg.png"
            }
            alt="The Pips"
            className="register-background-image"
          />


          {/* =================================================
              CLICKABLE LOGO -> HOME
          ================================================== */}
          <Link
            to={process.env.PUBLIC_URL + "/"}
            className="register-home-logo"
            aria-label="Go to The Pips home page"
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/logo/logo.png"
              }
              alt="The Pips"
            />
          </Link>


          {/* =================================================
              LEFT MAIN TEXTS
          ================================================== */}
          <div className="register-left-content">

            {/* THE PIPS */}
            <div className="register-text-small">
              THE PIPS
            </div>


            {/* MAIN TITLE */}
            <h1 className="register-text-title">
              Build Your Future.
              <br />
              Start Today.
            </h1>


            {/* DESCRIPTION */}
            <p className="register-text-description">
              Create your account and access a secure,
              professional platform designed to support
              your trading journey.
            </p>

          </div>


          {/* =================================================
              LEFT BOTTOM TEXTS
          ================================================== */}
          <div className="register-left-bottom">

            <div className="register-bottom-left">

              <span className="register-fast-title">
                FAST & RELIABLE
              </span>

              <strong className="register-fast-value">
                Execution
              </strong>

            </div>


            <div className="register-bottom-right">

              <span className="register-secure-title">
                SECURE PLATFORM
              </span>

              <strong className="register-secure-value">
                Protected Access
              </strong>

            </div>

          </div>

        </div>


        {/* ===================================================
            RIGHT SIDE REGISTER FORM
        ==================================================== */}
        <div className="register-right-side">

          <div className="register-form-container">

            {/* HEADER */}
            <div className="register-form-heading">

              <h2>
                Create Account
              </h2>

              <p>
                Enter your details to create your account.
              </p>

            </div>


            {/* =================================================
                FIRST + LAST NAME
            ================================================== */}
            <div className="register-name-row">

              <div className="register-field">

                <label>
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="First name"
                />

              </div>


              <div className="register-field">

                <label>
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Last name"
                />

              </div>

            </div>


            {/* =================================================
                EMAIL
            ================================================== */}
            <div className="register-field">

              <label>
                Email Address
              </label>

              <div className="register-input-box">

                <Mail
                  size={17}
                  strokeWidth={1.8}
                />

                <input
                  type="email"
                  placeholder="Enter your email address"
                />

              </div>

            </div>


            {/* =================================================
                COUNTRY
            ================================================== */}
            <div className="register-field">

              <label>
                Country
              </label>

              <Select
                className="country-select-container"
                classNamePrefix="country-select"
                options={countries}
                value={selectedCountry}
                onChange={setSelectedCountry}
                isSearchable
                placeholder="Search country..."
                noOptionsMessage={() =>
                  "No country found"
                }
              />

            </div>


            {/* =================================================
                PHONE
            ================================================== */}
            <div className="register-field">

              <label>
                Phone Number
              </label>

              <div className="register-input-box">

                <Phone
                  size={17}
                  strokeWidth={1.8}
                />

                <input
                  type="tel"
                  placeholder="+971 00 000 0000"
                />

              </div>

            </div>


            {/* =================================================
                REFERRAL
            ================================================== */}
            <div className="register-field">

              <label>
                Referral Code

                <span className="optional-text">
                  {" "} (Optional)
                </span>
              </label>


              <div className="register-input-box">

                <Hash
                  size={17}
                  strokeWidth={1.8}
                />

                <input
                  type="text"
                  placeholder="Enter referral code"
                />

              </div>

            </div>


            {/* REGISTER */}
            <button
              type="button"
              className="register-submit-btn"
            >
              Register
            </button>


            {/* DIVIDER */}
            <div className="register-divider">

              <span>
                or continue with
              </span>

            </div>


            {/* GOOGLE */}
            <button
              type="button"
              className="register-google-btn"
            >
              <FcGoogle size={22} />

              <span>
                Continue with Google
              </span>
            </button>


            {/* LOGIN */}
            <div className="register-login-link">

              <span>
                Already have an account?
              </span>

              <Link
                to={
                  process.env.PUBLIC_URL +
                  "/login"
                }
              >
                Login
              </Link>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Register;