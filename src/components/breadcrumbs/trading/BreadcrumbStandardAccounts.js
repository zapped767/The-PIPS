import React from "react";
import PropTypes from "prop-types";

const BreadcrumbStandardAccounts = ({
  title = "Types of Accounts",
}) => {
  const bannerImage =
    process.env.PUBLIC_URL + "/images/home/accounts-header-blue.png";

  return (
    <section
      className="pips-accounts-banner"
      aria-labelledby="pips-accounts-banner-title"
    >
      <div
        className="pips-accounts-banner__surface"
        style={{
          backgroundImage: `url("${bannerImage}")`,
        }}
      >
        <div className="pips-accounts-banner__content">
          <h1
            id="pips-accounts-banner-title"
            className="pips-accounts-banner__title"
          >
            {title}
          </h1>

          <p className="pips-accounts-banner__subtitle">
            Simple. Powerful. Built for every Trader.
          </p>

          <a
            className="pips-accounts-banner__button"
            href="https://portal.thepips.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Now
          </a>
        </div>
      </div>
    </section>
  );
};

BreadcrumbStandardAccounts.propTypes = {
  title: PropTypes.string,
};

export default BreadcrumbStandardAccounts;