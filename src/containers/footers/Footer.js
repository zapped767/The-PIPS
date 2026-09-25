
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  MdExpandLess,
  MdClose,
} from "react-icons/md";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

/* ============================================================
   THE PIPS - PREMIUM FOOTER

   COMPANY LOGO
   SOCIAL MEDIA
   SIX NAVIGATION COLUMNS
   EIGHT PAYMENT METHODS IN ONE ROW
   COMPLETE LEGAL INFORMATION
   CERTIFICATE MODAL
   SCROLL TO TOP
============================================================ */


/* ============================================================
   1. FOOTER NAVIGATION
============================================================ */

const footerColumns = [
  {
    title: "Trading",
    links: [
      {
        label: "Types of Accounts",
        href: "/trading/types-of-accounts",
      },
      {
        label: "Demo Trading",
        href: "/trading/demo-trading-account",
      },
      {
        label: "Deposits & Withdrawals",
        href: "/trading/deposits-and-withdrawals",
      },
      {
        label: "Fees",
        href: "/trading/fees",
      },
      {
        label: "Client Protection",
        href: "/trading/client-protection",
      },
    ],
  },

  {
    title: "Markets",
    links: [
      {
        label: "Forex CFD",
        href: "/markets/forex-market",
      },
      {
        label: "Commodities CFD",
        href: "/markets/commodities-market",
      },
      {
        label: "Stocks CFD",
        href: "/markets/stock-market",
      },
      {
        label: "Indices CFD",
        href: "/markets/indices-market",
      },
      {
        label: "Crypto CFD",
        href: "/markets/crypto-market",
      },
    ],
  },

  {
    title: "Platforms",
    links: [
      {
        label: "PIPS Terminal",
        href: "/platforms/pips-terminal",
      },
      {
        label: "PIPS Trade App",
        href: "/platforms/pips-trade-app",
      },
    ],
  },

  {
    title: "Resources",
    links: [
      {
        label: "Analytical Tools",
        href: "/resources/analytical-tools",
      },
      {
        label: "Economic Calendar",
        href: "/resources/economic-calendar",
      },
      {
        label: "Trading Calculator",
        href: "/resources/trading-calculator",
      },
      {
        label: "Currency Converter",
        href: "/resources/currency-converter",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        label: "About Us",
        href: "/company/about",
      },
      {
        label: "Contact Us",
        href: "/company/contact",
      },
    ],
  },

  {
    title: "Legal",
    links: [
      {
        label: "Risk Disclosure",
        href: "#pipsfx-risk",
      },
      {
        label: "Restricted Regions",
        href: "#pipsfx-restrictions",
      },
      {
        label: "Company Registration",
        href: "#pipsfx-registration",
      },
    ],
  },
];


/* ============================================================
   2. PAYMENT METHODS

   ALL 8 PAYMENT LOGOS
   ONE HORIZONTAL ROW
============================================================ */

const paymentMethods = [
  {
    id: 1,
    src: "/images/referenceLogos/wt-10-1.png",
    alt: "Wire Transfer",
  },
  {
    id: 2,
    src: "/images/referenceLogos/neteller-logo-1.png",
    alt: "Neteller",
  },
  {
    id: 3,
    src: "/images/referenceLogos/binance-1.png",
    alt: "Binance",
  },
  {
    id: 4,
    src: "/images/referenceLogos/visa.png",
    alt: "Visa",
  },
  {
    id: 5,
    src: "/images/referenceLogos/pngegg.png",
    alt: "PayPal",
  },
  {
    id: 6,
    src: "/images/referenceLogos/skrill-logo-1.png",
    alt: "Skrill",
  },
  {
    id: 7,
    src:
      "/images/referenceLogos/PikPng.com_transparent-png-icons_4195720.png",
    alt: "UPI",
  },
  {
    id: 8,
    src: "/images/referenceLogos/mastercard-logo-1.png",
    alt: "Mastercard",
  },
];


/* ============================================================
   3. SOCIAL MEDIA

   Add official social media URLs when available.
============================================================ */

const socialLinks = [
  {
    name: "Facebook",
    Icon: FaFacebookF,
    url: "",
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    url: "",
  },
  {
    name: "YouTube",
    Icon: FaYoutube,
    url: "",
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedinIn,
    url: "",
  },
];


/* ============================================================
   4. FOOTER COMPONENT
============================================================ */

const Footer = () => {

  const [showScrollTop, setShowScrollTop] =
    useState(false);

  const [showCertModal, setShowCertModal] =
    useState(false);


  /* ==========================================================
     SCROLL TO TOP VISIBILITY
  ========================================================== */

  useEffect(() => {

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);


  /* ==========================================================
     CERTIFICATE MODAL

     ESC KEY CLOSE
     DISABLE BACKGROUND SCROLL
  ========================================================== */

  useEffect(() => {

    if (!showCertModal) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        setShowCertModal(false);
      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        previousOverflow;

    };

  }, [showCertModal]);


  /* ==========================================================
     5. IMAGE PATHS
  ========================================================== */

  const logoImage =
    process.env.PUBLIC_URL +
    "/images/logo/logo_white.png";

  const certificateImage =
    process.env.PUBLIC_URL +
    "/documents/THEPIPS_2026-00403.jpg";


  /* ==========================================================
     SCROLL FUNCTION
  ========================================================== */

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  /* ==========================================================
     FOOTER JSX
  ========================================================== */

  return (

    <footer
      id="pipsfx-footer"
      className="pipsfx-footer"
    >

      <div className="pipsfx-container">


        {/* ====================================================
            TOP FOOTER
            COMPANY BRAND + SIX NAVIGATION COLUMNS
        ==================================================== */}

        <div className="pipsfx-top">


          {/* ================================================
              LEFT SIDE - COMPANY BRAND
          ================================================ */}

          <div className="pipsfx-brand">


            {/* OFFICIAL THE PIPS LOGO */}

            <Link
              to="/"
              className="pipsfx-brand__logo"
              aria-label="The PIPS Home"
            >

              <img
                src={logoImage}
                alt="THE PIPS"
                className="pipsfx-logo-image"
              />

            </Link>


            {/* COMPANY DESCRIPTION */}

            <p className="pipsfx-brand__description">

              Built for traders who value clarity,
              technology and access to global markets.

            </p>


            {/* SOCIAL MEDIA ICONS */}

            <div className="pipsfx-social">

              {socialLinks.map((social) => {

                const SocialIcon = social.Icon;

                return social.url ? (

                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >

                    <SocialIcon />

                  </a>

                ) : (

                  <span
                    key={social.name}
                    className="pipsfx-social__inactive"
                    title={social.name}
                    aria-hidden="true"
                  >

                    <SocialIcon />

                  </span>

                );

              })}

            </div>


          </div>


          {/* ================================================
              RIGHT SIDE - FOOTER NAVIGATION
          ================================================ */}

          <nav
            className="pipsfx-navigation"
            aria-label="Footer navigation"
          >

            {footerColumns.map((column) => (

              <div
                className="pipsfx-nav-column"
                key={column.title}
              >


                {/* COLUMN HEADING */}

                <h3 className="pipsfx-nav-title">

                  {column.title}

                </h3>


                {/* COLUMN LINKS */}

                <ul className="pipsfx-nav-list">

                  {column.links.map((link) => (

                    <li key={link.label}>

                      {link.href.startsWith("#") ? (

                        <a href={link.href}>

                          {link.label}

                        </a>

                      ) : (

                        <Link to={link.href}>

                          {link.label}

                        </Link>

                      )}

                    </li>

                  ))}

                </ul>


              </div>

            ))}

          </nav>


        </div>


        {/* ====================================================
            PAYMENT METHODS

            FULL WIDTH SECTION
            ALL 8 PAYMENT IMAGES IN ONE ROW

            THIS IS OUTSIDE THE BRAND COLUMN
        ==================================================== */}

        <div
          className="pipsfx-payments"
          aria-label="Payment methods"
        >


          {/* PAYMENT HEADING */}

          <div className="pipsfx-payments__heading">

            <span className="pipsfx-payments__label">

              PAYMENT METHODS

            </span>

            {/* <p>

              Supported payment methods

            </p> */}

          </div>


          {/* HORIZONTAL PAYMENT ROW */}

          <div className="pipsfx-payments__scroll">

<div className="pipsfx-payments__images">

  {/* FIRST SET */}
  <div className="pipsfx-payments__group">
    {paymentMethods.map((payment) => (

      <div
        className="pipsfx-payment-item"
        key={`first-${payment.id}`}
        title={payment.alt}
      >

        <img
          src={
            process.env.PUBLIC_URL +
            payment.src
          }
          alt={payment.alt}
          loading="lazy"
        />

      </div>

    ))}
  </div>


  {/* DUPLICATE SET - MOBILE AUTO LOOP */}
  <div
    className="pipsfx-payments__group pipsfx-payments__group--duplicate"
    aria-hidden="true"
  >
    {paymentMethods.map((payment) => (

      <div
        className="pipsfx-payment-item"
        key={`second-${payment.id}`}
        title={payment.alt}
      >

        <img
          src={
            process.env.PUBLIC_URL +
            payment.src
          }
          alt=""
          loading="lazy"
        />

      </div>

    ))}
  </div>

</div>

          </div>


        </div>


        {/* ====================================================
            DIVIDER BETWEEN PAYMENT AND LEGAL SECTION
        ==================================================== */}

        <div className="pipsfx-divider" />

{/* =========================================================
    MOBILE ONLY - LEGAL & RISK DISCLOSURES
========================================================= */}

<section className="pipsfx-mobile-legal">

  <div className="pipsfx-mobile-legal__block">
    <span className="pipsfx-mobile-legal__label">
      LEGAL & RISK DISCLOSURES
    </span>

    <p>
      ThePips Inc, registered and governed by the law of Saint Lucia under
      business reg. number <strong>2026-00403</strong>, operates the website
      thepips.com.
    </p>

    <p>
      <strong>Registered address:</strong> offices of Robin Kelton Building,
      Choc Bay P.O Box CP5600, Castries, Saint Lucia.
    </p>

    <p>
      <strong>Restricted regions:</strong> the entity above does not provide
      services to, including but not limited to residents of Canada, the
      European Union, Iran, Israel, Japan, Myanmar, New Zealand, North Korea,
      the Philippines, the United Kingdom, and the United States of America.
      Individuals accessing this site from these or other restricted
      jurisdictions must comply with local laws.
    </p>

    <p>
      The content on this website, including translations, should not be
      considered a solicitation or offer for investment activities or investment
      advice or recommendation.
    </p>
  </div>


  <div className="pipsfx-mobile-legal__block">
    <span className="pipsfx-mobile-legal__label">
      RISK DISCLOSURE
    </span>

    <p>
      <strong>Risk disclosure:</strong> Trading leveraged financial products
      involves significant risk and may result in the loss of all invested
      capital. These instruments are not suitable for all investors. We strongly
      advise that you fully understand the risks associated with such trading
      and only invest capital that you are prepared to lose. Past performance
      should not be considered indicative of future results.
    </p>

    <p>
      Our leverage is dynamic and may change at any time. Such changes may
      affect your positions and margin requirements. You are responsible for
      monitoring your positions and maintaining sufficient margin at all times.
    </p>
  </div>


  <div className="pipsfx-mobile-legal__block">
    <span className="pipsfx-mobile-legal__label">
      SECURITY
    </span>

    <p>
      ThePips Inc employs Transport Layer Security (TLS) encryption to protect
      all transaction data transmitted through the platform. This industry-standard
      encryption protocol ensures the confidentiality and integrity of your
      sensitive information during transmission, safeguarding it against
      unauthorised access and interception.
    </p>
  </div>


  <div className="pipsfx-mobile-legal__copyright">
    © Copyright 2026 - The Pips
  </div>

</section>
        {/* ====================================================
            COMPLETE LEGAL INFORMATION
        ==================================================== */}

        <section
          className="pipsfx-legal"
          aria-labelledby="pipsfx-legal-heading"
        >


          {/* LEGAL HEADING */}

          <h2
            id="pipsfx-legal-heading"
            className="pipsfx-legal__heading"
          >

            Legal &amp; Risk Disclosures

          </h2>


          <div className="pipsfx-legal__content">


            {/* ==============================================
                COMPANY REGISTRATION
            ============================================== */}

            <p id="pipsfx-registration">

              ThePips Inc, registered and governed
              by the law of Saint Lucia under
              business reg. number{" "}

              <button
                type="button"
                className="pipsfx-certificate-link"
                onClick={() => setShowCertModal(true)}
              >

                2026-00403

              </button>

              , operates the website thepips.com.

            </p>


            {/* ==============================================
                REGISTERED ADDRESS
            ============================================== */}

            <p>

              <strong>
                Registered address:
              </strong>{" "}

              offices of Robin Kelton Building,
              Choc Bay P.O Box CP5600,
              Castries, Saint Lucia.

            </p>


            {/* ==============================================
                RESTRICTED REGIONS
            ============================================== */}

            <p id="pipsfx-restrictions">

              <strong>
                Restricted regions:
              </strong>{" "}

              the entity above does not provide
              services to, including but not limited
              to residents of Canada, the European
              Union, Iran, Israel, Japan, Myanmar,
              New Zealand, North Korea, the Philippines,
              the United Kingdom, and the United States
              of America. Individuals accessing this
              site from these or other restricted
              jurisdictions must comply with local laws.

            </p>


            {/* ==============================================
                GENERAL DISCLAIMER
            ============================================== */}

            <p>

              The content on this website, including
              translations, should not be considered
              a solicitation or offer for investment
              activities or investment advice or
              recommendation.

            </p>


            {/* ==============================================
                RISK DISCLOSURE
            ============================================== */}

            <p id="pipsfx-risk">

              <strong>
                Risk disclosure:
              </strong>{" "}

              Trading leveraged financial products
              involves significant risk and may result
              in the loss of all invested capital.
              These instruments are not suitable for
              all investors. We strongly advise that
              you fully understand the risks associated
              with such trading and only invest capital
              that you are prepared to lose. Past
              performance should not be considered
              indicative of future results.

            </p>


            {/* ==============================================
                DYNAMIC LEVERAGE
            ============================================== */}

            <p>

              Our leverage is dynamic and may change
              at any time. Such changes may affect
              your positions and margin requirements.
              You are responsible for monitoring your
              positions and maintaining sufficient
              margin at all times.

            </p>


            {/* ==============================================
                SECURITY
            ============================================== */}

            <p>

              ThePips Inc employs Transport Layer
              Security (TLS) encryption to protect
              all transaction data transmitted through
              the platform. This industry-standard
              encryption protocol ensures the
              confidentiality and integrity of your
              sensitive information during transmission,
              safeguarding it against unauthorised
              access and interception.

            </p>


          </div>


        </section>


        {/* ====================================================
            COPYRIGHT SECTION
        ==================================================== */}

        <div className="pipsfx-bottom">


          {/* COPYRIGHT TEXT */}

          <p>

            © Copyright 2026 - The Pips

          </p>


          {/* BOTTOM LINKS */}

          <div className="pipsfx-bottom__links">

            <Link to="/company/about">

              About Us

            </Link>

            <span aria-hidden="true">

              |

            </span>

            <Link to="/company/contact">

              Contact Us

            </Link>

          </div>


        </div>


      </div>


      {/* ====================================================
          SCROLL TO TOP BUTTON
      ==================================================== */}

      <button
        type="button"
        className={`pipsfx-scroll-top ${
          showScrollTop
            ? "pipsfx-scroll-top--visible"
            : ""
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >

        <MdExpandLess />

      </button>


      {/* ====================================================
          CERTIFICATE OF INCORPORATION MODAL
      ==================================================== */}

      {showCertModal && (

        <div
          className="pipsfx-modal-overlay"
          onClick={() => setShowCertModal(false)}
        >


          <div
            className="pipsfx-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pipsfx-cert-title"
            onClick={(event) => event.stopPropagation()}
          >


            {/* MODAL HEADER */}

            <div className="pipsfx-modal__header">

              <h3 id="pipsfx-cert-title">

                Certificate of Incorporation

              </h3>


              <button
                type="button"
                aria-label="Close certificate"
                onClick={() => setShowCertModal(false)}
              >

                <MdClose />

              </button>


            </div>


            {/* CERTIFICATE IMAGE */}

            <div className="pipsfx-modal__body">

              <img
                src={certificateImage}
                alt="ThePips Inc Certificate of Incorporation"
              />

            </div>


          </div>


        </div>

      )}


    </footer>

  );

};

export default Footer;