import React, { useEffect, useRef } from "react";

/* =========================================================
   CARD 1 - PLATFORM LOGOS
   CHANGE ONLY THE FILENAMES
========================================================= */

const CARD_1_LOGOS = [
  "/images/home/homeworks/logo-1.png",
  "/images/home/homeworks/logo-2.png",
  "/images/home/homeworks/logo-3.png",
  "/images/home/homeworks/logo-4.png",
  "/images/home/homeworks/logo-5.png",
  "/images/home/homeworks/logo-6.png",
  "/images/home/homeworks/logo-7.jpg",
  "/images/home/homeworks/logo-8.jpg",
  "/images/home/homeworks/logo-9.png",
  "/images/home/homeworks/logo-10.png",
];
/* =========================================================
   HOW WORKS
   6 CARDS
   DESKTOP = 3 COLUMNS × 2 ROWS
========================================================= */
/* =========================================================
   CARD 2 - MARKET / CURRENCY ITEMS

   CHANGE ONLY:
   countryLogo
   currencyLogo
   label
========================================================= */

const CARD_2_ROW_1 = [
  {
    countryLogo: "/images/home/homeworks/gold.png",
    currencyLogo: "/images/home/homeworks/usa.jpg",
    label: "XAU/USD",
  },
  {
    countryLogo: "/images/home/homeworks/europe.png",
    currencyLogo: "/images/home/homeworks/usa.jpg",
    label: "EUR/USD",
  },
  {
    countryLogo: "/images/home/homeworks/bitcoin.webp",
    currencyLogo: "/images/home/homeworks/usa.jpg",
    label: "BTC/USD",
  },
  {
    countryLogo: "/images/home/homeworks/xrp.webp",
    currencyLogo: "/images/home/homeworks/usa.jpg",
    label: "XRP/USD",
  },
];


const CARD_2_ROW_2 = [
  {
    countryLogo: "/images/home/homeworks/uk.jpg",
    currencyLogo: "/images/home/homeworks/gbp.jpg",
    label: "British Pound (6B)",
  },
  {
    countryLogo: "/images/home/homeworks/canada.webp",
    currencyLogo: "/images/home/homeworks/cad.webp",
    label: "Canadian Dollar (6C)",
  },
  {
    countryLogo: "/images/home/homeworks/europe.png",
    currencyLogo: "/images/home/homeworks/euro.jpg",
    label: "Euro FX (6E)",
  },
  {
    countryLogo: "/images/home/homeworks/australia.jpg",
    currencyLogo: "/images/home/homeworks/aud.webp",
    label: "Australian Dollar (6A)",
  },
];
const HowWorks = () => {
  const sectionRef = useRef(null);


  /* =====================================================
     CARD SCROLL REVEAL
  ===================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;


    const cards =
      section.querySelectorAll(".hw__bento-card");


    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "hw--visible"
              );
            }
          });
        },
        {
          threshold: 0.12,
        }
      );


    cards.forEach((card) => {
      observer.observe(card);
    });


    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <section
      className="hw__section"
      ref={sectionRef}
    >

      {/* =====================================================
          HEADING
      ===================================================== */}

      <div className="hw__heading">

        <h2>
          We Don't Just Help You Trade.
          <br />
          We Help You Understand
        </h2>


        <p>
          Diverse opportunities for all trading styles and experience levels
        </p>


        <div className="hw__heading-line" />

      </div>


      {/* =====================================================
          6 CARD GRID

          CARD 1 | CARD 2 | CARD 3
          CARD 4 | CARD 5 | CARD 6
      ===================================================== */}

      <div className="hw__bento-layout">


        {/* =================================================
            CARD 1
            SMART TRADING
        ================================================= */}

        <article
          className="hw__bento-card hw__card-1"
        >

          {/* ===============================================
              CARD 1 TOP-RIGHT IMAGE ONLY
          =============================================== */}

          <img
            src={
              process.env.PUBLIC_URL +
              "/images/home/homeworks/card-1-corner.png"
            }
            alt=""
            aria-hidden="true"
            className="hw__card-1-corner-image"
          />
{/* ===============================================
    CARD 1 - MOVING PLATFORM LOGOS
=============================================== */}

<div className="hw__card-1-logo-window">

  {/* BLUR / GLASS BACKGROUND */}
  <div className="hw__card-1-logo-glass">

    <div className="hw__card-1-logo-track">

      {/* FIRST SET */}
      {CARD_1_LOGOS.map((logo, index) => (
        <div
          className="hw__card-1-logo-box"
          key={`first-${index}`}
        >
          <img
            src={process.env.PUBLIC_URL + logo}
            alt={`Trading platform ${index + 1}`}
            className="hw__card-1-logo"
          />
        </div>
      ))}

      {/* DUPLICATE SET FOR SMOOTH LOOP */}
      {CARD_1_LOGOS.map((logo, index) => (
        <div
          className="hw__card-1-logo-box"
          key={`second-${index}`}
          aria-hidden="true"
        >
          <img
            src={process.env.PUBLIC_URL + logo}
            alt=""
            className="hw__card-1-logo"
          />
        </div>
      ))}

    </div>

  </div>
</div>

          {/* ===============================================
              CARD 1 CONTENT
          =============================================== */}

          <div className="hw__card-content">

            <h3>
              Smart Trading
            </h3>


            <p>
              Guided approach to confident and informed trading decisions.
            </p>

          </div>

        </article>


        {/* =================================================
    CARD 2
    RESPONSIBLE PRACTICES
================================================= */}

<article
  className="hw__bento-card hw__card-2"
>

  {/* ===============================================
      CARD 2 - TWO MOVING MARKET ROWS
  =============================================== */}

  <div className="hw__card-2-market-window">


    {/* =============================================
        ROW 1
        RIGHT → LEFT
    ============================================= */}

    <div className="hw__card-2-row hw__card-2-row--one">

      <div className="hw__card-2-track hw__card-2-track--rtl">

        {/* FIRST COPY */}
        {CARD_2_ROW_1.map((item, index) => (
          <div
            className="hw__market-pill"
            key={`row1-first-${index}`}
          >

            {/* COUNTRY LOGO */}
            <span className="hw__market-logo-circle">
              <img
                src={
                  process.env.PUBLIC_URL +
                  item.countryLogo
                }
                alt=""
              />
            </span>


            {/* CURRENCY LOGO */}
            <span className="hw__market-logo-circle">
              <img
                src={
                  process.env.PUBLIC_URL +
                  item.currencyLogo
                }
                alt=""
              />
            </span>


            {/* LABEL */}
            <span className="hw__market-label">
              {item.label}
            </span>

          </div>
        ))}


        {/* DUPLICATE COPY FOR SMOOTH LOOP */}
        {CARD_2_ROW_1.map((item, index) => (
          <div
            className="hw__market-pill"
            key={`row1-second-${index}`}
            aria-hidden="true"
          >

            <span className="hw__market-logo-circle">
              <img
                src={
                  process.env.PUBLIC_URL +
                  item.countryLogo
                }
                alt=""
              />
            </span>

            <span className="hw__market-logo-circle">
              <img
                src={
                  process.env.PUBLIC_URL +
                  item.currencyLogo
                }
                alt=""
              />
            </span>

            <span className="hw__market-label">
              {item.label}
            </span>

          </div>
        ))}

      </div>

    </div>


    {/* =============================================
        ROW 2
        LEFT → RIGHT
    ============================================= */}

    <div className="hw__card-2-row hw__card-2-row--two">

      <div className="hw__card-2-track hw__card-2-track--ltr">

        {/* FIRST COPY */}
        {CARD_2_ROW_2.map((item, index) => (
          <div
            className="hw__market-pill"
            key={`row2-first-${index}`}
          >

            <span className="hw__market-logo-circle">
              <img
                src={
                  process.env.PUBLIC_URL +
                  item.countryLogo
                }
                alt=""
              />
            </span>

            <span className="hw__market-logo-circle">
              <img
                src={
                  process.env.PUBLIC_URL +
                  item.currencyLogo
                }
                alt=""
              />
            </span>

            <span className="hw__market-label">
              {item.label}
            </span>

          </div>
        ))}


        {/* DUPLICATE COPY */}
        {CARD_2_ROW_2.map((item, index) => (
          <div
            className="hw__market-pill"
            key={`row2-second-${index}`}
            aria-hidden="true"
          >

            <span className="hw__market-logo-circle">
              <img
                src={
                  process.env.PUBLIC_URL +
                  item.countryLogo
                }
                alt=""
              />
            </span>

            <span className="hw__market-logo-circle">
              <img
                src={
                  process.env.PUBLIC_URL +
                  item.currencyLogo
                }
                alt=""
              />
            </span>

            <span className="hw__market-label">
              {item.label}
            </span>

          </div>
        ))}

      </div>

    </div>

  </div>


  {/* ===============================================
      CARD 2 CONTENT
  =============================================== */}

  <div className="hw__card-content">

    <h3>
      Global Markets
    </h3>

    <p>
      Access to Forex, Crypto, and Stock markets all in one place.
    </p>

  </div>

</article>


        {/* =================================================
    CARD 3
    24/7 SUPPORT
================================================= */}

<article
  className="hw__bento-card hw__card-3"
>

  {/* CARD 3 TOP-RIGHT IMAGE */}
  <img
    src={
      process.env.PUBLIC_URL +
      "/images/home/homeworks/card-3-corner.png"
    }
    alt=""
    aria-hidden="true"
    className="hw__card-3-corner-image"
  />


  {/* CARD 3 CONTENT */}
  <div className="hw__card-content">

    <h3>
      24/7 Support
    </h3>

    <p>
      Round-the-clock assistance for continuous trading confidence.
    </p>

  </div>

</article>


{/* =================================================
    CARD 4
    1,000+ LEARNERS
================================================= */}

<article
  className="hw__bento-card hw__card-4"
>

 {/* =================================================
    CARD 4 RIGHT-MIDDLE VIDEO
================================================= */}

<video
  className="hw__card-4-middle-video"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  aria-hidden="true"
>
  <source
    src={
      process.env.PUBLIC_URL +
      "/images/home/homeworks/card-4-video.mp4"
    }
    type="video/mp4"
  />
</video>

  {/* CARD 4 CONTENT */}
  <div className="hw__card-content">

    <h3>
      1,000+ Learners
    </h3>

    <p>
      Trusted by active traders and learners across the globe.
    </p>

  </div>

</article>


        {/* =================================================
            CARD 5
            24/7 SUPPORT
        ================================================= */}
<article className="hw__bento-card hw__card-5">

  {/* FULL CARD IMAGE */}
  <img
    src={
      process.env.PUBLIC_URL +
      "/images/home/homeworks/card-5-full.png"
    }
    alt=""
    aria-hidden="true"
    className="hw__card-5-full-image"
  />

  {/* TEXT */}
  <div className="hw__card-content">

    <h3>
      Responsible Practices
    </h3>

    <p>
      Trade with discipline, transparency, and responsible risk awareness.
    </p>

  </div>

</article>


{/* =================================================
    CARD 6
    90% SATISFACTION
================================================= */}

<article
  className="hw__bento-card hw__card-6"
>

  {/* FULL CARD IMAGE */}

  <img
    src={
      process.env.PUBLIC_URL +
      "/images/home/homeworks/card-6-full.png"
    }
    alt=""
    aria-hidden="true"
    className="hw__card-6-full-image"
  />


  {/* TEXT */}

  <div className="hw__card-content">

    <h3>
      90%
    </h3>

    <p>
      Strong satisfaction rate reflecting deep user trust and results.
    </p>

  </div>

</article>

      </div>


      {/* =====================================================
          CTA
      ===================================================== */}

      <div className="hw__cta-wrap">

        <a
          className="dg__btn btn--black btn--theme hw__cta-link"
          href="https://portal.thepips.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join With Us
        </a>

      </div>

    </section>
  );
};


export default HowWorks;