import React from "react";
import PropTypes from "prop-types";

const BreadcrumbDepositsAndWithdrawals = () => {
  const desktopImage =
    process.env.PUBLIC_URL + "/images/about/bull_right_side.png";

  return (
    <div
      className="ht__bradcaump__area_market pips-desktop-bull-all-devices deposits-withdrawals-hero"
      style={{
        backgroundImage: `url(${desktopImage})`,
      }}
    >
      <div className="ht__bradcaump__container_market">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h1>Your money, when you want it</h1>

              <p>
                Stay in control with 24/7 access to your funds. Get requests
                approved automatically using secure local and global payment
                methods.
              </p>

              <div>
                <a
                  className="slide__btn dg__btn"
                  href="https://portal.thepips.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BreadcrumbDepositsAndWithdrawals.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbDepositsAndWithdrawals;