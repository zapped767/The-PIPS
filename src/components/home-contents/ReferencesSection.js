
import React, { useEffect, useRef } from "react";

/* =========================================================
   THE PIPS - PAYMENT LOGOS
========================================================= */

const logoData = [
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

/* =========================================================
   REPEAT LOGOS TO FILL WIDE DESKTOP SCREENS

   Each moving group contains 16 logos.

   The track has TWO identical groups,
   allowing a continuous infinite loop.
========================================================= */

const scrollingLogos = [
  ...logoData,
  ...logoData,
];

/* =========================================================
   PAYMENT LOGO CARD
========================================================= */

const PaymentCard = ({ logo }) => (
  <div className="references-payment-card">
    <img
      src={process.env.PUBLIC_URL + logo.src}
      alt={logo.alt}
      draggable="false"
      loading="eager"
    />
  </div>
);

/* =========================================================
   STAY CONNECTED SECTION
========================================================= */

const ReferencesSection = () => {
  const sectionRef = useRef(null);

  /* =====================================================
     HEADING RISE ANIMATION
  ===================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      section.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("is-visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="references-section"
    >
      {/* =================================================
          1. HEADING
      ================================================= */}

      <div className="references-header">
        <h2>
          Stay Connected with The Pips
        </h2>

        <p>
          Get the latest updates all in one place
        </p>
      </div>

      {/* =================================================
          2. INFINITE PAYMENT LOGO ANIMATION

          LEFT TO RIGHT

          Visible area controlled in home.scss.

          START: 5%
          END: 95%
      ================================================= */}

      <div
        className="references-payment-marquee"
        role="img"
        aria-label="Payment methods: Wire Transfer, Neteller, Binance, Visa, PayPal, Skrill, UPI and Mastercard"
      >
        <div className="references-payment-track">

          {/* FIRST GROUP */}

          <div
            className="references-payment-group"
            aria-hidden="true"
          >
            {scrollingLogos.map((logo, index) => (
              <PaymentCard
                key={`first-${index}`}
                logo={logo}
              />
            ))}
          </div>

          {/* IDENTICAL SECOND GROUP */}

          <div
            className="references-payment-group"
            aria-hidden="true"
          >
            {scrollingLogos.map((logo, index) => (
              <PaymentCard
                key={`second-${index}`}
                logo={logo}
              />
            ))}
          </div>

        </div>
      </div>

      {/* =================================================
          3. MORE BUTTON

          NO VIDEO SECTION
      ================================================= */}

      <div className="references-more-wrap">
        <a
          href="https://portal.thepips.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="references-more-button"
        >
          More

          <span aria-hidden="true">
            →
          </span>
        </a>
      </div>

    </section>
  );
};

export default ReferencesSection;