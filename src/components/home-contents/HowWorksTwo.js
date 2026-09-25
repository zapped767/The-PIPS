
import React from "react";

const steps = [
  {
    id: "register",
    label: "Register",
    para: "Open your account effortlessly.",
    image: process.env.PUBLIC_URL + "/images/home/Register1.png",
    imageAlt: "Register for a trading account",
    buttonText: "Register Now",
    link: "https://portal.thepips.com/login",
  },
  {
    id: "fund",
    label: "Fund",
    para: "Quick deposits and withdrawals with local payment providers.",
    image: process.env.PUBLIC_URL + "/images/home/Fund1.png",
    imageAlt: "Manage your trading account funds",
    buttonText: "Fund Your Account",
    link: "https://portal.thepips.com/login",
  },
  {
    id: "trade",
    label: "Trade",
    para: "Join a community of over 20 million traders.",
    image: process.env.PUBLIC_URL + "/images/home/Trade1.png",
    imageAlt: "Explore trading opportunities",
    buttonText: "Start Trading",
    link: "https://portal.thepips.com/login",
  },
];

const StartTrading = () => {
  return (
    <section
      className="st-section"
      aria-labelledby="st-section-heading"
    >
      <div className="st-container">

        {/* SECTION HEADING */}

        <h2
          id="st-section-heading"
          className="st-heading"
        >
          Start Trading Today
        </h2>

        {/* EXPANDABLE ACCORDION ROWS */}

        <div className="st-accordion">

          {steps.map((step, index) => (
            <article
              className="st-row"
              key={step.id}
              tabIndex={0}
              aria-label={`${step.label}: ${step.para}`}
            >

              {/* DESKTOP: NUMBER AND HEADING */}

              <div className="st-row__left">

                <span className="st-row__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="st-row__title">
                  {step.label}
                </h3>

              </div>

              {/* IMAGE */}

              <div className="st-row__media">

                <img
                  className="st-row__image"
                  src={step.image}
                  alt={step.imageAlt}
                  loading="lazy"
                />

                {/* MOBILE: IMAGE GRADIENT */}

                <div className="st-row__gradient" />

                {/* MOBILE: NUMBER AND TITLE */}

                <div className="st-row__mobile-label">

                  <span className="st-row__mobile-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="st-row__mobile-title">
                    {step.label}
                  </h3>

                </div>

              </div>

              {/* DESCRIPTION + BUTTON */}

              <div className="st-row__content">

                <h4 className="st-row__content-title">
                  {step.label}
                </h4>

                <p className="st-row__description">
                  {step.para}
                </p>

                <a
                  className="st-row__button"
                  href={step.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {step.buttonText}

                  <span aria-hidden="true">
                    ↗
                  </span>

                </a>

              </div>

              {/* DESKTOP: ARROW */}

              <span
                className="st-row__arrow"
                aria-hidden="true"
              >
                ↗
              </span>

            </article>
          ))}

        </div>

        {/* MAIN START TRADING BUTTON */}

        <div className="st-main-cta">

          <a
            className="st-main-cta__button"
            href="https://portal.thepips.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Trading

            <span aria-hidden="true">
              ↗
            </span>

          </a>

        </div>

        {/* RISK WARNING */}

        <p className="st-risk-warning">
          Risk warning: Our services involve a significant
          risk and can result in the loss of your invested
          capital.
        </p>

      </div>
    </section>
  );
};

export default StartTrading;