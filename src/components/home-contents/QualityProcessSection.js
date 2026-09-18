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
    Math.max(value, min),
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
     DESKTOP QUALITY ANIMATION CONTROL
  ========================================================= */

  const scrollProgressRef =
    useRef(0);

  const qualityLockedRef =
    useRef(false);

  const qualityLockYRef =
    useRef(null);


  /* =========================================================
     2 SCROLL STEP CONTROL

     STAGE 0
     FULL IMAGE

     STAGE 1
     PUSH IN + DIVIDE INTO 6 SLICES

     STAGE 2
     SMOOTH FLIP INTO 6 CARDS
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
     DESKTOP 2-SCROLL ANIMATION
  ========================================================= */

  useEffect(() => {

    const section =
      scrollSectionRef.current;

    const stage =
      stickyStageRef.current;


    if (
      !section ||
      !stage
    ) {
      return;
    }


    /* =====================================================
       EXACT STAGES

       0.0 = full image

       0.5 = pushed/divided 6 slices

       1.0 = flipped cards
    ===================================================== */

    const STAGE_PROGRESS = [
      0,
      0.5,
      1,
    ];


    /* =====================================================
       MANUAL SPEED

       Bigger number =
       slower animation.

       Scroll 1:
       Full image
       → push in
       → divide into six

       Scroll 2:
       Six pieces
       → smooth flip
    ===================================================== */

    const FIRST_SCROLL_DURATION =
      1250;

    const SECOND_SCROLL_DURATION =
      1450;


    const STAGE_DURATION = [
      FIRST_SCROLL_DURATION,
      SECOND_SCROLL_DURATION,
    ];


    /* =====================================================
       SET PROGRESS
    ===================================================== */

    const setProgress = (
      value
    ) => {

      const next =
        clamp(value);


      scrollProgressRef.current =
        next;


      setScrollProgress(
        next
      );
    };


    /* =====================================================
       PREMIUM EASE IN / OUT
    ===================================================== */

    const easeInOutCubic = (
      t
    ) => {

      return t < 0.5
        ? 4 * t * t * t
        : 1 -
            Math.pow(
              -2 * t + 2,
              3
            ) /
              2;
    };


    /* =====================================================
       ANIMATE TO STAGE
    ===================================================== */

    const animateToStage = (
      targetStage
    ) => {

      if (
        qualityAnimatingRef.current
      ) {
        return;
      }


      const safeStage =
        Math.max(
          0,
          Math.min(
            2,
            targetStage
          )
        );


      const from =
        scrollProgressRef.current;


      const to =
        STAGE_PROGRESS[
          safeStage
        ];


      if (
        from === to
      ) {

        qualityStageRef.current =
          safeStage;

        return;
      }


      qualityAnimatingRef.current =
        true;


      const oldStage =
        qualityStageRef.current;


      const durationIndex =
        safeStage >
        oldStage
          ? safeStage - 1
          : oldStage - 1;


      const duration =
        STAGE_DURATION[
          Math.max(
            0,
            Math.min(
              1,
              durationIndex
            )
          )
        ];


      let startTime =
        null;


      const animate = (
        time
      ) => {

        if (
          startTime === null
        ) {
          startTime =
            time;
        }


        const elapsed =
          time -
          startTime;


        const raw =
          clamp(
            elapsed /
              duration
          );


        const eased =
          easeInOutCubic(
            raw
          );


        const value =
          from +
          (
            to -
            from
          ) *
            eased;


        setProgress(
          value
        );


        if (
          raw < 1
        ) {

          qualityAnimationFrameRef.current =
            requestAnimationFrame(
              animate
            );

        } else {

          setProgress(
            to
          );


          qualityStageRef.current =
            safeStage;


          qualityAnimatingRef.current =
            false;
        }
      };


      qualityAnimationFrameRef.current =
        requestAnimationFrame(
          animate
        );
    };


    /* =====================================================
       READ YOUR EXISTING STICKY TOP

       SCSS:
       top: 100px;
    ===================================================== */

    const getStickyTop =
      () => {

        const styles =
          window.getComputedStyle(
            stage
          );


        const value =
          parseFloat(
            styles.top
          );


        return Number.isFinite(
          value
        )
          ? value
          : 100;
      };


    /* =====================================================
       LOCK PAGE
    ===================================================== */

    const lockAt = (
      scrollY
    ) => {

      qualityLockedRef.current =
        true;


      qualityLockYRef.current =
        scrollY;
    };


    /* =====================================================
       UNLOCK PAGE
    ===================================================== */

    const unlock = () => {

      qualityLockedRef.current =
        false;


      qualityLockYRef.current =
        null;
    };


    /* =====================================================
       ONE WHEEL GESTURE = ONE STAGE

       Helps mouse wheel / trackpad
       not trigger both stages together.
    ===================================================== */

    const waitForNextWheel =
      () => {

        if (
          qualityWheelTimerRef.current
        ) {

          clearTimeout(
            qualityWheelTimerRef.current
          );
        }


        qualityWheelTimerRef.current =
          setTimeout(
            () => {

              qualityWheelReadyRef.current =
                true;

            },
            240
          );
      };


    /* =====================================================
       WHEEL HANDLER
    ===================================================== */

    const handleWheel = (
      event
    ) => {

      /* DESKTOP ONLY */

      if (
        window.innerWidth <
        1200
      ) {

        unlock();

        return;
      }


      const stageRect =
        stage.getBoundingClientRect();


      const stickyTop =
        getStickyTop();


      const directionDown =
        event.deltaY > 0;


      const directionUp =
        event.deltaY < 0;


      const atLockPosition =
        stageRect.top <=
          stickyTop + 3 &&
        stageRect.bottom >
          stickyTop;


      /* =================================================
         ALREADY LOCKED
      ================================================= */

      if (
        qualityLockedRef.current
      ) {

        const currentStage =
          qualityStageRef.current;


        /* ===============================================
           STAGE 2 COMPLETE

           NEXT DOWN SCROLL =
           CONTINUE PAGE
        =============================================== */

        if (
          directionDown &&
          currentStage >= 2 &&
          !qualityAnimatingRef.current
        ) {

          unlock();

          return;
        }


        /* ===============================================
           BACK TO FULL IMAGE

           NEXT UP SCROLL =
           CONTINUE TO PREVIOUS SECTION
        =============================================== */

        if (
          directionUp &&
          currentStage <= 0 &&
          !qualityAnimatingRef.current
        ) {

          unlock();

          return;
        }


        event.preventDefault();

        event.stopPropagation();


        if (
          qualityLockYRef.current !==
          null
        ) {

          window.scrollTo(
            0,
            qualityLockYRef.current
          );
        }


        waitForNextWheel();


        if (
          !qualityWheelReadyRef.current ||
          qualityAnimatingRef.current
        ) {
          return;
        }


        qualityWheelReadyRef.current =
          false;


        /* ===============================================
           SCROLL DOWN
           NEXT STAGE
        =============================================== */

        if (
          directionDown
        ) {

          animateToStage(
            currentStage +
              1
          );

          return;
        }


        /* ===============================================
           SCROLL UP
           PREVIOUS STAGE
        =============================================== */

        if (
          directionUp
        ) {

          animateToStage(
            currentStage -
              1
          );

          return;
        }


        return;
      }


      /* =================================================
         ENTERING SECTION FROM ABOVE

         FIRST SCROLL:
         IMAGE PUSH + 6 SLICES
      ================================================= */

      if (
        directionDown &&
        qualityStageRef.current <
          2
      ) {

        const nextTop =
          stageRect.top -
          event.deltaY;


        const crossing =
          stageRect.top >
            stickyTop &&
          nextTop <=
            stickyTop;


        if (
          crossing ||
          atLockPosition
        ) {

          event.preventDefault();

          event.stopPropagation();


          const exactScrollY =
            window.scrollY +
            stageRect.top -
            stickyTop;


          window.scrollTo({
            top:
              exactScrollY,

            behavior:
              "auto",
          });


          lockAt(
            exactScrollY
          );


          qualityWheelReadyRef.current =
            false;


          waitForNextWheel();


          /* =============================================
             SCROLL 1

             FULL IMAGE
             ↓
             PUSH IN
             ↓
             DIVIDE INTO 6
          ============================================= */

          animateToStage(
            1
          );


          return;
        }
      }


      /* =================================================
         RETURNING FROM BELOW

         SAME 2 STAGES IN REVERSE
      ================================================= */

      if (
        directionUp &&
        qualityStageRef.current >
          0
      ) {

        const nextTop =
          stageRect.top -
          event.deltaY;


        const crossing =
          stageRect.top <
            stickyTop &&
          nextTop >=
            stickyTop;


        if (
          crossing ||
          atLockPosition
        ) {

          event.preventDefault();

          event.stopPropagation();


          const exactScrollY =
            window.scrollY +
            stageRect.top -
            stickyTop;


          window.scrollTo({
            top:
              exactScrollY,

            behavior:
              "auto",
          });


          lockAt(
            exactScrollY
          );


          qualityWheelReadyRef.current =
            false;


          waitForNextWheel();


          animateToStage(
            qualityStageRef.current -
              1
          );


          return;
        }
      }
    };


    /* =====================================================
       RESIZE
    ===================================================== */

    const handleResize =
      () => {

        const desktop =
          window.innerWidth >=
          1200;


        setIsDesktop(
          desktop
        );


        if (
          !desktop
        ) {

          unlock();


          qualityStageRef.current =
            0;


          scrollProgressRef.current =
            0;


          setScrollProgress(
            0
          );
        }
      };


    handleResize();


    const wheelOptions = {
      passive: false,
      capture: true,
    };


    window.addEventListener(
      "wheel",
      handleWheel,
      wheelOptions
    );


    window.addEventListener(
      "resize",
      handleResize
    );


    return () => {

      window.removeEventListener(
        "wheel",
        handleWheel,
        wheelOptions
      );


      window.removeEventListener(
        "resize",
        handleResize
      );


      if (
        qualityAnimationFrameRef.current
      ) {

        cancelAnimationFrame(
          qualityAnimationFrameRef.current
        );
      }


      if (
        qualityWheelTimerRef.current
      ) {

        clearTimeout(
          qualityWheelTimerRef.current
        );
      }
    };

  }, []);


  /* =========================================================
     2 SCROLL ANIMATION TIMELINE

     0.00 → 0.50

     SCROLL 1:
     FULL IMAGE
     ↓
     PUSH IN
     ↓
     DIVIDE INTO 6 SLICES


     0.50 → 1.00

     SCROLL 2:
     SIX SLICES
     ↓
     SMOOTH FLIP
     ↓
     SIX FEATURE CARDS
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

     RELEASE PUSH WHILE
     DIVIDING INTO SIX

     Final cards return to original size.
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
     0.035 = recommended
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
     SCROLL 1C

     DIVIDE IMAGE INTO SIX PARTS
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

     No flip happens in Scroll 1.
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
     INITIAL X OFFSETS

     Desktop CSS gap = 16px.

     These values connect all six slices
     so initially they appear as one image.
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
     FINAL CARD VERTICAL POSITIONS
     YOUR EXISTING VALUES
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
     FINAL CARD ROTATIONS
     YOUR EXISTING VALUES
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
          PART 1 - BLUE HEADER
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
          PART 2

          FULL IMAGE
          ↓
          PUSH + SIX IMAGE SLICES
          ↓
          SMOOTH FLIP
          ↓
          SIX FEATURE CARDS
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
                   IMAGE SLICE SEPARATION
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
                   SMALL SEQUENTIAL FLIP DELAY

                   Smaller value =
                   cards flip more together.

                   Bigger value =
                   stronger wave effect.
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
                   SMOOTHERSTEP EASING

                   Very smooth start + finish
                   for the flip.
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


                /* =========================================
                   FLIP ANGLE

                   0deg
                   image slice

                   90deg
                   side edge

                   180deg
                   feature card
                ========================================= */

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

                    {/* =====================================
                        3D FLIP HOLDER
                    ===================================== */}

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

                      {/* ===================================
                          FRONT IMAGE SLICE
                      =================================== */}

                      <div
                        className="quality-card-front"
                        aria-hidden="true"
                      />


                      {/* ===================================
                          BACK FEATURE CARD
                      =================================== */}

                      <div
                        className="quality-card-back"
                      >

                        {/* ===============================
                            TITLE
                        =============================== */}

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


                        {/* ===============================
                            DESCRIPTION
                        =============================== */}

                        <div
                          className="quality-hover-content"
                        >

                          <p>
                            {card.description}
                          </p>

                        </div>


                        {/* ===============================
                            BOTTOM RIGHT IMAGE
                        =============================== */}

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