import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import LayoutTwo from "../layouts/LayoutTwo";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import Logo from "../components/header/Logo";

const Login = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Login</title>
        <meta name="description" content="Login page for PIPS user portal." />
      </MetaTags>
      <section className="login__area">
        <div>
          <div className="row">
            {/* Left Content */}
            <div className="col-lg-6 col-md-12 col-12">
              <div className="login__content">
                <h2>Welcome Back!</h2>
                <p>
                  Sign in to your trading portal and continue your journey
                  toward smarter trading with The Pips.
                </p>

                <form className="login__form">
                  <div className="input__box">
                    <span>Email Address</span>
                    <input type="email" name="email" />
                  </div>
                  <div className="input__box">
                    <span>Password</span>
                    <input type="password" name="password" />
                  </div>

                  <div className="login__links">
                    <Link to="#">Lost your password?</Link>
                  </div>

                  <button className="account__btn">Login</button>

                  <p className="switch__text">
                    Don’t have an account?{" "}
                    <Link to="/register" className="switch__link">
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 col-md-12 col-12">
              <div className="login__image">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/login/login.png"
                  }
                  alt="login visual"
                  className="login__image__bg"
                />
                <div className="login__image__content">
                  <Logo image={"/images/logo/logo_white.png"} />
                  <h2>Your Gateway to Global Markets</h2>
                  <h1>
                    Trade with powerful tools and real-time insights in one place.
                  </h1>
                  <p>
                    Disclaimer: Trading financial products carries risk. Only
                    trade with capital you can afford to lose.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
