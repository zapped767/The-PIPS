import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import "./QualityProcessSection.scss";

import {
  FiBookOpen,
  FiTrendingUp,
  FiUsers,
  FiGrid,
  FiShield,
  FiZap,
} from "react-icons/fi";


/* =========================================================
   CARD DATA
========================================================= */

const MAIN_IMAGE =
  `${process.env.PUBLIC_URL}/images/home/quality/quality-main.png`;


const serviceCards = [
  {
    id: 1,
    title: "Beginner-Focused Learning",
    description:
      "Easy resources that simplify trading concepts.",
    icon: <FiBookOpen />,
    image:
      "/images/home/quality/feature-1.png",
  },

  {
    id: 2,
    title: "Guided by experts",
    description:
      "Learn and grow with experienced trader support.",
    icon: <FiUsers />,
    image:
      "/images/home/quality/feature-2.png",
  },

  {
    id: 3,
    title: "Secure and transparent",
    description:
      "Trade safely with strong security and clear pricing.",
    icon: <FiShield />,
    image:
      "/images/home/quality/feature-3.png",
  },

  {
    id: 4,
    title: "Real-time insights",
    description:
      "Get live data and updates to make smarter decisions.",
    icon: <FiTrendingUp />,
    image:
      "/images/home/quality/feature-4.png",
  },

  {
    id: 5,
    title: "All-in-one platform",
    description:
      "Trade Forex, Crypto, and Stocks in one place.",
    icon: <FiGrid />,
    image:
      "/images/home/quality/feature-5.png",
  },

  {
    id: 6,
    title: "Seamless Experience",
    description:
      "Enjoy fast execution, smooth navigation, and 24/7 support.",
    icon: <FiZap />,
    image:
      "/images/home/quality/feature-6.png",
  },
];


/* =========================================================
   HELPER
========================================================= */

const clamp = (
  value,
  min = 0,
  max = 1
) => {
  return Math.min(
    Math.max(
      value,
      min
    ),
    max
  );
};


/* =========================================================
   COMPONENT
========================================================= */

const QualityProcessSection = () => {

  const scrollSectionRef =
    useRef(null);

  const stickyStageRef =
    useRef(null);


  /* =========================================================
     DESKTOP QUALITY CONTROL
  ========================================================= */

  const scrollProgressRef =
    useRef(0);

  const qualityLockedRef =
    useRef(false);

  const qualityLockYRef =
    useRef(null);


  /* =========================================================
     STAGES

     0 = MAIN IMAGE

     1 = PUSH +
         DIVIDE INTO 6

     2 = FLIPPED CARDS
  ========================================================= */

  const qualityStageRef =
    useRef(0);

  const qualityAnimatingRef =
    useRef(false);

  const qualityAnimationFrameRef =
    useRef(null);

  const qualityWheelReadyRef =
    useRef(true);

  const qualityWheelTimerRef =
    useRef(null);


  const [
    scrollProgress,
    setScrollProgress,
  ] = useState(0);


  const [
    isDesktop,
    setIsDesktop,
  ] = useState(
    typeof window !== "undefined"
      ? window.innerWidth >= 1200
      : true
  );


  /* =========================================================
     DESKTOP QUALITY: EXACTLY TWO WHEEL GESTURES

     Down: image -> six slices -> flipped cards -> normal page.
     Up:   cards -> six slices -> full image -> normal page.

     The Live Market section does NOT take the wheel.
     Your card dimensions and SCSS remain untouched.
  ========================================================= */

  useEffect(() => {
    const section = scrollSectionRef.current;
    const stage = stickyStageRef.current;
    if (!section || !stage) return undefined;

    const OWNER_KEY = "__PIPS_SCROLL_OWNER__";

    /* MANUAL CONTROLS: larger numbers = slower animation. */
    const FIRST_SCROLL_DURATION = 1150;
    const SECOND_SCROLL_DURATION = 1750;
    const GESTURE_IDLE_MS = 260;
    const ENTRY_ZONE = 180;

    let disposed = false;
    let desktopMode = window.innerWidth >= 1200;

    const clampProgress = (value) =>
      Math.min(1, Math.max(0, value));

    const setProgress = (value) => {
      const next = clampProgress(value);
      scrollProgressRef.current = next;
      setScrollProgress(next);
    };

    /* Continuous velocity near both endpoints: gentle start and finish. */
    const smootherstep = (t) => {
      const x = clampProgress(t);
      return x * x * x * (x * (x * 6 - 15) + 10);
    };

    /*
      Derive the lock from the SECTION document top, not
      stage.offsetTop. A sticky element's offset/rect can change
      after it starts sticking and must not move the lock point.
    */
    const getLockY = () => {
      const sectionTop =
        window.scrollY + section.getBoundingClientRect().top;
      const paddingTop =
        parseFloat(window.getComputedStyle(section).paddingTop) || 0;
      const stickyTop =
        parseFloat(window.getComputedStyle(stage).top) || 0;
      return Math.max(0, sectionTop + paddingTop - stickyTop);
    };

    const ownsLock = () => window[OWNER_KEY] === "quality";

    const unlock = () => {
      qualityLockedRef.current = false;
      qualityLockYRef.current = null;
      if (ownsLock()) delete window[OWNER_KEY];
    };

    const lockAt = (y) => {
      window[OWNER_KEY] = "quality";
      qualityLockedRef.current = true;
      qualityLockYRef.current = y;
      window.scrollTo({ top: y, behavior: "instant" });
    };

    /*
      Every new WHEEL BURST starts exactly one stage. Trackpad/mouse
      momentum cannot trigger the second stage or prematurely exit.
    */
    const markWheelBusy = () => {
      qualityWheelReadyRef.current = false;
      if (qualityWheelTimerRef.current !== null) {
        clearTimeout(qualityWheelTimerRef.current);
      }
      qualityWheelTimerRef.current = setTimeout(() => {
        qualityWheelReadyRef.current = true;
        qualityWheelTimerRef.current = null;
      }, GESTURE_IDLE_MS);
    };

    const finishFrame = () => {
      if (qualityAnimationFrameRef.current !== null) {
        cancelAnimationFrame(qualityAnimationFrameRef.current);
        qualityAnimationFrameRef.current = null;
      }
      qualityAnimatingRef.current = false;
    };

    const animateToStage = (targetStage) => {
      if (qualityAnimatingRef.current || disposed) return;

      const target = Math.max(0, Math.min(2, targetStage));
      const start = scrollProgressRef.current;
      const destination = target / 2;

      if (Math.abs(start - destination) < 0.00001) {
        setProgress(destination);
        qualityStageRef.current = target;
        return;
      }

      const duration =
        Math.max(qualityStageRef.current, target) === 2
          ? SECOND_SCROLL_DURATION
          : FIRST_SCROLL_DURATION;

      qualityAnimatingRef.current = true;
      let startTime = null;

      const frame = (time) => {
        if (disposed) return;
        if (startTime === null) startTime = time;

        const elapsed = (time - startTime) / duration;
        const fraction = clampProgress(elapsed);
        setProgress(start + (destination - start) * smootherstep(fraction));

        if (fraction < 1) {
          qualityAnimationFrameRef.current = requestAnimationFrame(frame);
        } else {
          qualityAnimationFrameRef.current = null;
          setProgress(destination);
          qualityStageRef.current = target;
          qualityAnimatingRef.current = false;
        }
      };

      qualityAnimationFrameRef.current = requestAnimationFrame(frame);
    };

    const wheelDelta = (event) => {
      const multiplier =
        event.deltaMode === 1 ? 16 :
        event.deltaMode === 2 ? window.innerHeight : 1;
      return event.deltaY * multiplier;
    };

    const consume = (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
    };

    const handleWheel = (event) => {
      if (window.innerWidth < 1200 || event.ctrlKey) return;
      if (window[OWNER_KEY] && !ownsLock()) return;

      const delta = wheelDelta(event);
      if (!delta) return;

      const down = delta > 0;
      const currentY = window.scrollY;
      const anchorY = getLockY();

      if (qualityLockedRef.current) {
        /*
          While animating, keep the page stationary. Never use an old
          stage value to start a second or opposite animation.
        */
        if (qualityAnimatingRef.current) {
          consume(event);
          markWheelBusy();
          return;
        }

        const stageIndex = qualityStageRef.current;

        /*
          Leaving the LAST stage needs a FRESH wheel gesture.
          Do not catch the trailing wheel events of the flip animation.
        */
        if ((down && stageIndex === 2) ||
            (!down && stageIndex === 0)) {
          if (!qualityWheelReadyRef.current) {
            /* Wait for the gesture gate; do not perpetually re-arm it. */
            consume(event);
            return;
          }

          unlock();
          /* Do NOT preventDefault: the same wheel scrolls the page. */
          return;
        }

        consume(event);

        if (qualityLockYRef.current !== null &&
            Math.abs(window.scrollY - qualityLockYRef.current) > 2) {
          window.scrollTo({
            top: qualityLockYRef.current,
            behavior: "instant",
          });
        }

        if (!qualityWheelReadyRef.current) {
          /* Never get stuck by extending the same cooldown forever. */
          return;
        }

        markWheelBusy();
        animateToStage(stageIndex + (down ? 1 : -1));
        return;
      }

      /*
        Only enter Quality while crossing the fixed anchor.
        Leaving stage 2 downward NEVER re-locks the same section.
        Leaving stage 0 upward NEVER re-locks from below.
      */
      const crossingDown =
        down &&
        qualityStageRef.current === 0 &&
        ((currentY <= anchorY && currentY + delta >= anchorY) ||
         (currentY > anchorY && currentY <= anchorY + ENTRY_ZONE));

      const crossingUp =
        !down &&
        qualityStageRef.current === 2 &&
        ((currentY >= anchorY && currentY + delta <= anchorY) ||
         (currentY < anchorY && currentY >= anchorY - ENTRY_ZONE));

      if (!crossingDown && !crossingUp) return;

      consume(event);
      lockAt(anchorY);
      markWheelBusy();

      /* Entering also counts as scroll 1; no extra empty scroll. */
      animateToStage(1);
    };

    const syncOffscreenStage = () => {
      if (qualityLockedRef.current || qualityAnimatingRef.current) return;
      const anchorY = getLockY();

      /* Handle browser scroll restoration or direct scrollbar jumps. */
      if (window.scrollY > anchorY + window.innerHeight &&
          qualityStageRef.current !== 2) {
        qualityStageRef.current = 2;
        setProgress(1);
      } else if (window.scrollY < anchorY - window.innerHeight &&
                 qualityStageRef.current !== 0) {
        qualityStageRef.current = 0;
        setProgress(0);
      }
    };

    const handleResize = () => {
      const isNowDesktop = window.innerWidth >= 1200;
      setIsDesktop(isNowDesktop);

      if (!isNowDesktop) {
        unlock();
        finishFrame();
        qualityStageRef.current = 0;
        setProgress(0);
        qualityWheelReadyRef.current = true;
      } else if (!desktopMode) {
        syncOffscreenStage();
      }
      desktopMode = isNowDesktop;
    };

    /* On refresh below this section, show already-flipped cards. */
    if (desktopMode && window.scrollY > getLockY() + ENTRY_ZONE) {
      qualityStageRef.current = 2;
      setProgress(1);
    } else {
      qualityStageRef.current = 0;
      setProgress(0);
    }

    const wheelOptions = { passive: false, capture: true };
    window.addEventListener("wheel", handleWheel, wheelOptions);
    window.addEventListener("scroll", syncOffscreenStage, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      disposed = true;
      window.removeEventListener("wheel", handleWheel, wheelOptions);
      window.removeEventListener("scroll", syncOffscreenStage);
      window.removeEventListener("resize", handleResize);
      unlock();
      finishFrame();
      if (qualityWheelTimerRef.current !== null) {
        clearTimeout(qualityWheelTimerRef.current);
        qualityWheelTimerRef.current = null;
      }
    };
  }, []);


  /* =========================================================
     TWO-SCROLL TIMELINE

     0.00 → 0.50

     SCROLL 1:
     MAIN IMAGE
        ↓
     PUSH
        ↓
     DIVIDE


     0.50 → 1.00

     SCROLL 2:
     SIX SLICES
        ↓
     FLIP
        ↓
     SIX CARDS
  ========================================================= */


  /* =========================================================
     SCROLL 1 MASTER PROGRESS
  ========================================================= */

  const firstScrollProgress =
    clamp(
      scrollProgress /
      0.5
    );


  /* =========================================================
     SCROLL 1A
     PUSH IMAGE IN
  ========================================================= */

  const pushInProgress =
    clamp(
      firstScrollProgress /
      0.30
    );


  const pushInEase =
    pushInProgress *
    pushInProgress *
    (
      3 -
      2 *
      pushInProgress
    );


  /* =========================================================
     SCROLL 1B
     RELEASE PUSH WHILE DIVIDING
  ========================================================= */

  const pushReleaseProgress =
    clamp(
      (
        firstScrollProgress -
        0.30
      ) /
      0.70
    );


  const pushReleaseEase =
    pushReleaseProgress *
    pushReleaseProgress *
    (
      3 -
      2 *
      pushReleaseProgress
    );


  /* =========================================================
     MANUAL PUSH AMOUNT

     0.025 = small
     0.035 = current
     0.050 = stronger
  ========================================================= */

  const pushAmount =
    0.035;


  const pushScale =
    1 -
    (
      pushAmount *
      pushInEase *
      (
        1 -
        pushReleaseEase
      )
    );


  /* =========================================================
     DIVIDE IMAGE INTO SIX
  ========================================================= */

  const separateProgress =
    clamp(
      (
        firstScrollProgress -
        0.18
      ) /
      0.82
    );


  const separateEase =
    separateProgress *
    separateProgress *
    (
      3 -
      2 *
      separateProgress
    );


  /* =========================================================
     SCROLL 2
     FLIP ONLY
  ========================================================= */

  const flipProgress =
    clamp(
      (
        scrollProgress -
        0.5
      ) /
      0.5
    );


  /* =========================================================
     INITIAL CONNECTED IMAGE OFFSETS

     KEEP YOUR CURRENT VALUES
  ========================================================= */

  const connectedX = [
    40,
    24,
    8,
    -8,
    -24,
    -40,
  ];


  /* =========================================================
     FINAL Y POSITIONS

     KEEP YOUR CURRENT VALUES
  ========================================================= */

  const cardFinalY = [
    14,
    -4,
    4,
    -3,
    5,
    14,
  ];


  /* =========================================================
     FINAL ROTATIONS

     KEEP YOUR CURRENT VALUES
  ========================================================= */

  const cardFinalRotation = [
    -5,
    -2.5,
    -0.8,
    0.8,
    2.5,
    5,
  ];


  /* =========================================================
     JSX
  ========================================================= */

  return (

    <section
      className="quality-section"
    >

      {/* =====================================================
          BLUE HEADER
      ===================================================== */}

      <div
        className="quality-header-section"
      >

        <div
          className="quality-header-layout"
        >

          <div
            className="quality-header-content"
          >

            <h2>

              <span
                className="trade-yellow"
              >
                Trade
              </span>

              {" "}

              with Confidence

            </h2>


            <p>
              Take control with simple tools, transparent pricing,
              and reliable support from The Pips.
            </p>

          </div>


          <div
            className="quality-header-watermark"
          >
            PIPS
          </div>

        </div>

      </div>


      {/* =====================================================
          MAIN IMAGE
            ↓
          PUSH + DIVIDE
            ↓
          SMOOTH FLIP
            ↓
          SIX CARDS
      ===================================================== */}

      <div
        ref={scrollSectionRef}
        className="quality-cards-section"
      >

        <div
          ref={stickyStageRef}
          className="quality-sticky-stage"
        >

          <div
            className="quality-grid"

            style={{
              "--quality-main-image":
                `url("${MAIN_IMAGE}")`,

              transform:
                isDesktop
                  ? `scale(${pushScale}) translateZ(0)`
                  : undefined,

              transformOrigin:
                "center center",
            }}
          >

            {serviceCards.map(
              (
                card,
                index
              ) => {

                /* =========================================
                   IMAGE SLICE POSITION
                ========================================= */

                const translateX =
                  connectedX[
                    index
                  ] *
                  (
                    1 -
                    separateEase
                  );


                const translateY =
                  cardFinalY[
                    index
                  ] *
                  separateEase;


                const rotation =
                  cardFinalRotation[
                    index
                  ] *
                  separateEase;


                /* =========================================
                   SMALL FLIP DELAY
                ========================================= */

                const flipDelay =
                  index *
                  0.02;


                const localFlipProgress =
                  clamp(
                    (
                      flipProgress -
                      flipDelay
                    ) /
                    (
                      1 -
                      flipDelay
                    )
                  );


                /* =========================================
                   SMOOTHERSTEP
                ========================================= */

                const localFlipEase =
                  localFlipProgress *
                  localFlipProgress *
                  localFlipProgress *
                  (
                    localFlipProgress *
                    (
                      localFlipProgress *
                      6 -
                      15
                    ) +
                    10
                  );


                const flipAngle =
                  localFlipEase *
                  180;


                return (

                  <div
                    key={
                      card.id
                    }

                    className={
                      `quality-premium-card quality-premium-card-${card.id}`
                    }

                    style={
                      isDesktop
                        ? {
                            transform: `
                              translate3d(
                                ${translateX}px,
                                ${translateY}px,
                                0
                              )
                              rotate(${rotation}deg)
                            `,

                            "--separate":
                              separateEase,
                          }
                        : undefined
                    }
                  >

                    {/* 3D HOLDER */}

                    <div
                      className="quality-flip-inner"

                      style={
                        isDesktop
                          ? {
                              transform:
                                `rotateY(${flipAngle}deg) translateZ(0)`,
                            }
                          : undefined
                      }
                    >

                      {/* FRONT IMAGE SLICE */}

                      <div
                        className="quality-card-front"
                        aria-hidden="true"
                      />


                      {/* BACK CARD */}

                      <div
                        className="quality-card-back"
                      >

                        <div
                          className="quality-normal-content"
                        >

                          <div
                            className="quality-card-icon"
                          >
                            {card.icon}
                          </div>


                          <h3>
                            {card.title}
                          </h3>


                          <div
                            className="quality-card-line"
                          />

                        </div>


                        <div
                          className="quality-hover-content"
                        >

                          <p>
                            {card.description}
                          </p>

                        </div>


                        <img
                          src={
                            card.image
                          }

                          alt=""

                          aria-hidden="true"

                          className="quality-card-corner-image"
                        />

                      </div>

                    </div>

                  </div>
                );
              }
            )}

          </div>

        </div>

      </div>

    </section>
  );
};


export default QualityProcessSection;