import React, { useEffect, useRef } from "react";
import TopicTwo from "./TopicTwo";

const StandardAccountsContentOne = () => {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const accounts = [
    {
      id: 1,
      badge: "STARTER",
      type: "ESSENTIAL",
      tagline: "Where Professional Trading Begins",
      instruments: "100+ instruments",
      spread: "Spreads from 1.4 pips",
      deposit: "$500",
    },
    {
      id: 2,
      badge: "MOST POPULAR",
      type: "PRIME",
      tagline: "Enhanced Access. Superior Execution.",
      instruments: "250+ instruments",
      spread: "Spreads from 1.1 pips",
      deposit: "$2,500",
    },
    {
      id: 3,
      badge: "ADVANCED",
      type: "PRESTIGE",
      tagline: "Precision Trading for Serious Investors",
      instruments: "500+ instruments",
      spread: "Spreads from 0.8 pips",
      deposit: "$25,000",
    },
    {
      id: 4,
      badge: "PREMIUM",
      type: "BLACK",
      tagline:
        "Elite Trading Conditions. Institutional Experience.",
      instruments: "750+ instruments",
      spread: "Spreads from 0.5 pips",
      deposit: "$50,000",
    },
    {
      id: 5,
      badge: "ELITE",
      type: "VIP ELITE",
      tagline:
        "Exclusive Privileges for High-Volume Traders",
      instruments: "1000+ instruments",
      spread: "Spreads from 0.2 pips",
      deposit: "$100,000",
    },
  ];

useEffect(() => {
  const section = sectionRef.current;
  const viewport = viewportRef.current;
  const track = trackRef.current;

  if (!section || !viewport || !track) return;

  const cards = Array.from(
    track.querySelectorAll(".pips-scroll-plan-card")
  );

  if (!cards.length) return;

  /* =====================================================
     MANUAL CONTROLS
  ===================================================== */

  const DESKTOP_MIN = 1200;

  /* Navbar height */
  const HEADER_OFFSET = 70;

  /*
    Mouse scroll sensitivity

    40 = very sensitive
    60 = recommended
    90 = more scrolling required
  */
  const WHEEL_THRESHOLD = 60;

  /*
    Card movement speed

    450 = fast
    650 = recommended
    900 = slow
  */
  const MOVE_DURATION = 650;


  let currentIndex = 0;

  let wheelAmount = 0;

  let isAnimating = false;

  let animationTimer = null;


  /* =====================================================
     MOVE SELECTED CARD TO CENTER
  ===================================================== */

  const moveToCard = (
    index,
    animated = true
  ) => {
    const card = cards[index];

    if (!card) return;


    /*
      Center of visible screen
    */
    const viewportCenter =
      viewport.clientWidth / 2;


    /*
      Center position of selected card
      inside horizontal track
    */
    const cardCenter =
      card.offsetLeft +
      card.offsetWidth / 2;


    /*
      Horizontal translation
    */
    const translateX =
      viewportCenter -
      cardCenter;


    track.style.transition =
      animated
        ? `transform ${MOVE_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1)`
        : "none";


    track.style.transform =
      `translate3d(${translateX}px, 0, 0)`;
  };


  /* =====================================================
     EXACT PAGE POSITION TO HOLD
  ===================================================== */

  const getLockPosition = () => {
    const rect =
      section.getBoundingClientRect();

    return (
      window.scrollY +
      rect.top -
      HEADER_OFFSET
    );
  };


  /* =====================================================
     WHEEL
  ===================================================== */

  const handleWheel = (event) => {

    /* DESKTOP ONLY */
    if (
      window.innerWidth <
      DESKTOP_MIN
    ) {
      return;
    }


    const rect =
      section.getBoundingClientRect();


    const scrollingDown =
      event.deltaY > 0;


    const scrollingUp =
      event.deltaY < 0;


    /*
      Only activate when account section
      reaches the navbar area.
    */
    const sectionIsActive =
      rect.top <=
        HEADER_OFFSET + 100 &&
      rect.bottom >=
        HEADER_OFFSET + 150;


    if (!sectionIsActive) {
      return;
    }


    const lastIndex =
      cards.length - 1;


    /*
      Should page stay locked?
    */
    const shouldLock =
      (
        scrollingDown &&
        currentIndex <
          lastIndex
      ) ||
      (
        scrollingUp &&
        currentIndex > 0
      );


    /*
      Card is currently moving.

      Keep page still until movement
      completes.
    */
    if (isAnimating) {

      event.preventDefault();

      window.scrollTo(
        0,
        getLockPosition()
      );

      return;
    }


    /*
      FIRST CARD + scrolling UP
      = leave section upward

      LAST CARD + scrolling DOWN
      = leave section downward

      So DO NOT prevent default here.
    */
    if (!shouldLock) {
      return;
    }


    /* STOP VERTICAL PAGE MOVEMENT */
    event.preventDefault();


    /* HOLD ACCOUNT SECTION */
    window.scrollTo(
      0,
      getLockPosition()
    );


    wheelAmount +=
      Math.abs(event.deltaY);


    /*
      Ignore tiny trackpad movement
    */
    if (
      wheelAmount <
      WHEEL_THRESHOLD
    ) {
      return;
    }


    wheelAmount = 0;


    /* NEXT CARD */
    if (scrollingDown) {

      currentIndex =
        Math.min(
          currentIndex + 1,
          lastIndex
        );

    }


    /* PREVIOUS CARD */
    if (scrollingUp) {

      currentIndex =
        Math.max(
          currentIndex - 1,
          0
        );

    }


    moveToCard(
      currentIndex,
      true
    );


    isAnimating = true;


    clearTimeout(
      animationTimer
    );


    animationTimer =
      setTimeout(() => {

        isAnimating = false;

      }, MOVE_DURATION + 80);
  };


  /* =====================================================
     RESIZE
  ===================================================== */

  const handleResize = () => {

    if (
      window.innerWidth <
      DESKTOP_MIN
    ) {

      track.style.transition =
        "none";

      track.style.transform =
        "none";

      return;
    }


    moveToCard(
      currentIndex,
      false
    );
  };


  /* =====================================================
     INITIAL POSITION
     ESSENTIAL IN CENTER
  ===================================================== */

  if (
    window.innerWidth >=
    DESKTOP_MIN
  ) {

    moveToCard(
      0,
      false
    );

  }


  /*
    IMPORTANT:
    passive:false allows preventDefault()
  */
  window.addEventListener(
    "wheel",
    handleWheel,
    {
      passive: false,
    }
  );


  window.addEventListener(
    "resize",
    handleResize
  );


  return () => {

    window.removeEventListener(
      "wheel",
      handleWheel
    );


    window.removeEventListener(
      "resize",
      handleResize
    );


    clearTimeout(
      animationTimer
    );

  };

}, []);

  return (
    <>
      {/* TRADING CONDITIONS */}
      <TopicTwo />


      {/* =================================================
          SCROLLING ACCOUNT CARDS
      ================================================= */}
      <section
        className="pips-scroll-accounts-section"
        ref={sectionRef}
      >

        {/* STICKY SCREEN */}
        <div className="pips-scroll-accounts-sticky">

          {/* VISIBLE WINDOW */}
          <div
            className="pips-scroll-accounts-viewport"
            ref={viewportRef}
          >

            {/* HORIZONTAL TRACK */}
            <div
              className="pips-scroll-accounts-track"
              ref={trackRef}
            >

              {accounts.map((account) => (

                <article
                  key={account.id}
                  className={`pips-scroll-plan-card pips-scroll-plan-card--${account.id}`}
                >

                  {/* TOP */}
                  <div className="pips-scroll-plan-top">

                    <div className="pips-scroll-plan-icon">
                      ↗
                    </div>

                    <span className="pips-scroll-plan-name">
                      {account.type}
                    </span>

                  </div>


                  {/* BODY */}
                  <div className="pips-scroll-plan-body">

                    {/* LEFT */}
                    <div className="pips-scroll-plan-left">

                      <span className="pips-scroll-plan-badge">
                        {account.badge}
                      </span>

                      <h3>
                        {account.tagline}
                      </h3>

                      <p>
                        Access professional trading
                        conditions designed for modern
                        traders.
                      </p>


                      <a
                        href="https://portal.thepips.com/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pips-scroll-plan-button"
                      >
                        Register
                      </a>

                    </div>


                    {/* RIGHT FEATURES */}
                    <div className="pips-scroll-plan-features">

                      <span className="pips-scroll-features-title">
                        FEATURES:
                      </span>


                      <div className="pips-scroll-feature">
                        <span>✓</span>
                        Minimum Deposit {account.deposit}
                      </div>


                      <div className="pips-scroll-feature">
                        <span>✓</span>
                        {account.instruments}
                      </div>


                      <div className="pips-scroll-feature">
                        <span>✓</span>
                        {account.spread}
                      </div>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default StandardAccountsContentOne;