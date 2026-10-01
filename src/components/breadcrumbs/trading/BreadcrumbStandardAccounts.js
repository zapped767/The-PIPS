import React from "react";
import PropTypes from "prop-types";

const BreadcrumbStandardAccounts = () => {
  const desktopImage =
    process.env.PUBLIC_URL + "/images/home/hero-slide-23.png";

  return (
    <div
      className="ht__bradcaump__area_market pips-desktop-bull-all-devices standard-accounts-hero"
      style={{
        backgroundImage: `url(${desktopImage})`,
      }}
    >
      <div className="ht__bradcaump__container_market">
        <div className="container">
          <div className="row">
            <div>
              <h1>Types of Accounts</h1>

              <p>
                Simple. Powerful. Built for every Trader.
              </p>

              <div>
                <a
                  className="slide__btn dg__btn"
                  href="https://portal.thepips.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AUTO MOVING THE PIPS */}
      <div className="pips-hero-marquee" aria-hidden="true">
        <div className="pips-hero-marquee-track">

          <div className="pips-hero-marquee-group">
            <span>THE PIPS</span>
            <span>THE PIPS</span>
            <span>THE PIPS</span>
            <span>THE PIPS</span>
          </div>

          <div className="pips-hero-marquee-group">
            <span>THE PIPS</span>
            <span>THE PIPS</span>
            <span>THE PIPS</span>
            <span>THE PIPS</span>
          </div>

        </div>
      </div>

    </div>
  );
};

BreadcrumbStandardAccounts.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbStandardAccounts;