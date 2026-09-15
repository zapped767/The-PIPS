import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import "./LoginPage.scss";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="pips-login-page">

      {/* =====================================================
          LEFT SIDE
      ====================================================== */}
      <div className="login-left-side">

        {/* BACKGROUND IMAGE */}
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/login/login-bg.png"
          }
          alt="The Pips"
          className="login-space-image"
        />


        {/* ===================================================
            CLICKABLE PIPS LOGO -> HOME
        ==================================================== */}
        <Link
          to={process.env.PUBLIC_URL + "/"}
          className="login-home-logo"
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


        {/* ===================================================
            LEFT MAIN TEXTS
            EACH TEXT CAN BE CONTROLLED SEPARATELY
        ==================================================== */}
        <div className="login-left-content">

          {/* THE PIPS */}
          <div className="login-text-small">
            THE PIPS
          </div>


          {/* MAIN TITLE */}
          <h1 className="login-text-title">
            Trade Smarter.
            <br />
            Go Further.
          </h1>


          {/* DESCRIPTION */}
          <p className="login-text-description">
            Access global markets through a secure,
            powerful and professional trading environment.
          </p>

        </div>


        {/* ===================================================
            LEFT BOTTOM TEXTS
        ==================================================== */}
        <div className="login-left-bottom">

          {/* LEFT BOTTOM */}
          <div className="login-bottom-left">

            <span className="login-fast-title">
              FAST & RELIABLE
            </span>

            <strong className="login-fast-value">
              Execution
            </strong>

          </div>


          {/* RIGHT BOTTOM */}
          <div className="login-bottom-right">

            <span className="login-secure-title">
              SECURE PLATFORM
            </span>

            <strong className="login-secure-value">
              Protected Access
            </strong>

          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT SIDE LOGIN FORM
      ====================================================== */}
      <div className="login-right-side">

        <div className="login-form-container">

          {/* HEADER */}
          <div className="login-form-heading">

            <h2>
              Welcome Back
            </h2>

            <p>
              Sign in to continue to your account.
            </p>

          </div>


          {/* =================================================
              EMAIL
          ================================================== */}
          <div className="login-field">

            <label>
              Email Address
            </label>

            <div className="login-input-box">

              <Mail
                size={18}
                strokeWidth={1.8}
              />

              <input
                type="email"
                placeholder="Enter your email address"
              />

            </div>

          </div>


          {/* =================================================
              PASSWORD
          ================================================== */}
          <div className="login-field">

            <div className="password-label">

              <label>
                Password
              </label>

              <a href="/forgot-password">
                Forgot Password?
              </a>

            </div>


            <div className="login-input-box">

              <Lock
                size={18}
                strokeWidth={1.8}
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
              />


              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label="Show or hide password"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>


          {/* =================================================
              SIGN IN
          ================================================== */}
          <button
            type="button"
            className="login-submit-btn"
          >
            Sign In
          </button>


          {/* =================================================
              DIVIDER
          ================================================== */}
          <div className="login-divider">

            <span>
              or continue with
            </span>

          </div>


          {/* =================================================
              GOOGLE
          ================================================== */}
          <button
            type="button"
            className="google-login-btn"
          >
            <FcGoogle size={24} />

            <span>
              Continue with Google
            </span>
          </button>


          {/* =================================================
              REGISTER LINK
          ================================================== */}
          <div className="login-create-account">

            <span>
              Don't have an account?
            </span>

            <Link
              to={
                process.env.PUBLIC_URL +
                "/register"
              }
            >
              Create Account
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LoginPage;