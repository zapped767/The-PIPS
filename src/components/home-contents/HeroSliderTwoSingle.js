import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/* =========================================
   SLIDER SETTINGS
========================================= */

const AUTO_SLIDE_ENABLED = false; // Change to true later
const AUTO_SLIDE_DELAY = 5000;

const HeroSliderTwoSingle = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const total = data.length;

  /* =========================================
     SLIDER FUNCTIONS
  ========================================= */

  const goTo = useCallback(
    (index, dir = "next") => {
      if (animating) return;

      setDirection(dir);
      setAnimating(true);

      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 400);
    },
    [animating],
  );

  const next = useCallback(() => {
    goTo((current + 1) % total, "next");
  }, [current, total, goTo]);

  /* =========================================
     AUTO SLIDE
     Currently OFF
  ========================================= */

  useEffect(() => {
    if (!AUTO_SLIDE_ENABLED) return;

    const timer = setInterval(() => {
      next();
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(timer);
  }, [next]);

  const slide = data[current];

  return (
    <div
      className={`slide d-flex align__center poss--relative hero-image-slider ${
        slide.id === 3 || slide.id === 4 ? "hero-video-slide" : ""
      }`}
      style={{
        backgroundImage:
          slide.id === 3 || slide.id === 4
            ? "none"
            : `url(${process.env.PUBLIC_URL}${slide.image})`,
      }}
    >
      {/* =========================================
          SLIDE 3 VIDEO
      ========================================== */}
      {/* =========================================
    SLIDE 3 + SLIDE 4 VIDEO
========================================= */}

      {slide.id === 3 && (
        <video className="hero-slide-video" autoPlay muted loop playsInline>
          <source
            src={process.env.PUBLIC_URL + "/videos/slide-3.mp4"}
            type="video/mp4"
          />
        </video>
      )}

      {slide.id === 4 && (
        <video className="hero-slide-video" autoPlay muted loop playsInline>
          <source
            src={process.env.PUBLIC_URL + "/videos/slide-4.mp4"}
            type="video/mp4"
          />
        </video>
      )}

      {/* Background overlay */}
      <div className="hero-image-overlay" />

      <style>{`

        /* =========================================================
           BASE HERO
           Used by desktop / tablet
        ========================================================= */

        .hero-image-slider {
          position: relative;

          background-size: 100% auto;
          background-position: center 11%;
          background-repeat: no-repeat;
          background-color: #ffffff;

          min-height: 320px;

          transition: background-image 0.5s ease-in-out;
        }


        /* =========================================================
           SLIDE 3 VIDEO BACKGROUND
        ========================================================= */

        .hero-video-slide {
          overflow: hidden;
          background: #012d65;
        }

        .hero-slide-video {
          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center center;

          z-index: 0;
        }

        .hero-video-slide .container {
          position: relative;
          z-index: 2;
        }

        .hero-video-slide .hero-image-overlay {
          z-index: 1;
        }


        /* =========================================================
           IMAGE OVERLAY
        ========================================================= */

        .hero-image-overlay {
          position: absolute;
          inset: 0;

          background: transparent;

          z-index: 0;
          pointer-events: none;
        }


        /* =========================================================
           REGISTER NOW - YELLOW HOVER
        ========================================================= */

        .slide__btn.dg__btn:hover {
          background: #f7a901 !important;
          border-color: #f7a901 !important;
          color: #ffffff !important;
        }


        /* =========================================================
           SLIDER CONTENT ANIMATION
        ========================================================= */

        .hs-content {
          transition:
            opacity 0.4s ease,
            transform 0.4s ease;
        }

        .hs-content.hs-out-next {
          opacity: 0;
          transform: translateY(-18px);
        }

        .hs-content.hs-out-prev {
          opacity: 0;
          transform: translateY(18px);
        }

        .hs-content.hs-in {
          opacity: 1;
          transform: translateY(0);
        }


        /* =========================================================
           DESKTOP / TABLET VIEW
           768px AND ABOVE
        ========================================================= */

        @media (min-width: 768px) {

          /* =========================================
             DESKTOP - SLIDE 1
             Trade Smart. Grow Confident.
          ========================================= */

          .hero-slide-content.slide-1 {
            position: relative;

            /* LEFT / RIGHT */
            margin-left: -350px;

            /* UP / DOWN */
            top: -100px;

            max-width: 650px;
            text-align: left;
          }

          .hero-slide-content.slide-1 h1 {
            color: #ffffff !important;

            text-align: left;

            font-size: 58px;
            line-height: 1.05;
            font-weight: 700;

            margin-bottom: 20px;

            text-shadow:
              0 2px 12px rgba(0, 0, 0, 0.35);
          }

          .hero-slide-content.slide-1 p {
            color: #ffffff !important;

            text-align: left;

            font-size: 18px;
            line-height: 1.7;

            max-width: 600px;

            margin: 0;

            text-shadow:
              0 1px 8px rgba(0, 0, 0, 0.35);
          }


          /* =========================================
             DESKTOP - SLIDE 2
             Real Markets. Real Results.
          ========================================= */

          .hero-slide-content.slide-2 {
            position: relative;

            /* LEFT / RIGHT */
            margin-left: 420px;

            /* UP / DOWN */
            top: -60px;

            width: 760px;
            max-width: 760px;

            text-align: left;
          }

          .hero-slide-content.slide-2 h1 {
            color: #ffffff !important;

            font-size: 52px;
            line-height: 1.1;
            font-weight: 700;

            margin-bottom: 20px;
          }

          /* Desktop Slide 2:
             Real Markets.
             Real Results.
          */
          .hero-slide-content.slide-2 .slide-2-line {
            display: block;
            white-space: nowrap;
          }

          .hero-slide-content.slide-2 p {
            color: #ffffff !important;

            font-size: 18px;
            line-height: 1.55;

            width: 560px;
            max-width: 560px;

            margin: 0;
          }


          /* =========================================
             DESKTOP - SLIDE 2 REGISTER BUTTON
          ========================================= */

          .register-slide-2 {
            position: relative;

            /* LEFT / RIGHT */
            left: 520px;

            /* UP / DOWN */
            top: -40px;

            text-align: center !important;
          }

          .register-slide-2 .slide__btn {
            background: #ffffff !important;
            color: #012d65 !important;

            border: 1.5px solid #ffffff !important;

            min-width: 200px;
          }

          .register-slide-2 .slide__btn:hover {
            background: #f7a901 !important;
            color: #ffffff !important;
            border-color: #f7a901 !important;
          }


          /* =========================================
             DESKTOP - SLIDE 3
             Start Small. Dream Big.
          ========================================= */

          .hero-slide-content.slide-3 {
            position: relative;

            /* LEFT / RIGHT */
            margin-left: -350px;

            /* UP / DOWN */
            top: -60px;

            width: 650px;
            max-width: 650px;

            text-align: left;
          }

          .hero-slide-content.slide-3 h1 {
            text-align: left !important;
          }

          .hero-slide-content.slide-3 p {
            text-align: left !important;
            max-width: 600px;
          }


          /* =========================================
             DESKTOP - SLIDE 4
             Bonus
          ========================================= */

          .hero-slide-content.slide-4 {
            position: relative;

            /* LEFT / RIGHT */
            margin-left: -360px;

            /* UP / DOWN */
            top: -40px;

            width: 650px;
            max-width: 650px;

            text-align: left;
          }

          .hero-slide-content.slide-4 h1 {
            text-align: left !important;
          }

          .hero-slide-content.slide-4 p {
            text-align: left !important;
            max-width: 560px;
          }
        }


        /* =========================================================
           DESKTOP SLIDE INDICATORS
        ========================================================= */

        .hs-dots {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          margin-top: 28px;
        }

        .hs-dot {
          width: 36px;
          height: 5px;

          padding: 0;

          border: none;
          border-radius: 20px;

          background: #aeb4bd;

          cursor: pointer;

          transition:
            background 0.3s ease,
            width 0.3s ease,
            transform 0.2s ease;
        }

        .hs-dot:hover {
          background: #035391;
        }

        .hs-dot.active {
          width: 46px;
          height: 5px;

          background: #012d65;
        }


        /* =========================================================
           TABLET VIEW
           768px - 991px
        ========================================================= */

        @media (min-width: 768px) and (max-width: 991px) {
          .hero-image-slider {
            min-height: 650px;
          }
        }


        /* =========================================================
           MOBILE VIEW
           767px AND BELOW
        ========================================================= */

        @media (max-width: 767px) {

          /* =========================================
             MOBILE HERO CARD
          ========================================= */

          .hero-image-slider {
            /* Hide desktop image */
            background-image: none !important;

            /* Mobile white background */
            background-color: #ffffff !important;

            /* HERO HEIGHT */
            height: 200px !important;
            min-height: 200px !important;

            padding-top: 15px !important;
            padding-bottom: 15px !important;
          }


          /* =========================================
             MOBILE - HIDE SLIDE 3 VIDEO
          ========================================= */

          .hero-slide-video {
            display: none !important;
          }

          .hero-video-slide {
            background: #ffffff !important;
          }


          /* =========================================
             MOBILE - BASIC TEXT POSITION
          ========================================= */

          .hero-slide-content.slide-1,
          .hero-slide-content.slide-2,
          .hero-slide-content.slide-3,
          .hero-slide-content.slide-4 {
            position: relative !important;

            margin-left: 0 !important;
            left: 0 !important;

            width: 100% !important;
            max-width: 100% !important;

            text-align: center !important;
          }


          /* =========================================
             MOBILE - INDIVIDUAL TEXT POSITION

             Smaller top = move UP
             Bigger top  = move DOWN
          ========================================= */

          /* SLIDE 1 */
          .hero-slide-content.slide-1 {
            top: 10px !important;
          }

          /* SLIDE 2 */
          .hero-slide-content.slide-2 {
            top: 10px !important;
          }

          /* SLIDE 3 */
          .hero-slide-content.slide-3 {
            top: 10px !important;
          }

          /* SLIDE 4 */
          .hero-slide-content.slide-4 {
            top: 10px !important;
          }


          /* =========================================
             MOBILE - ALL HEADINGS

             Change font-size manually here.
          ========================================= */

          .hero-slide-content.slide-1 h1,
          .hero-slide-content.slide-2 h1,
          .hero-slide-content.slide-3 h1,
          .hero-slide-content.slide-4 h1 {
            color: #012d65 !important;

            /* HEADING SIZE */
            font-size: 16px !important;

            line-height: 1.1 !important;

            text-align: center !important;

            /* KEEP HEADING IN ONE LINE */
            white-space: nowrap !important;

            margin-bottom: 4px !important;

            /* Remove desktop shadow */
            text-shadow: none !important;
          }
/* SLIDE 4 MOBILE HEADING - MOVE LEFT */
.hero-slide-content.slide-4 h1 {
  position: relative !important;
  left: -6px !important;
}

          /* =========================================
             MOBILE - SLIDE 2 SPECIAL TITLE

             Desktop = 2 lines
             Mobile  = 1 line
          ========================================= */

          .hero-slide-content.slide-2 .slide-2-line {
            display: inline !important;
            white-space: nowrap !important;
          }

          .hero-slide-content.slide-2
          .slide-2-line
          + .slide-2-line {
            margin-left: 4px !important;
          }


          /* =========================================
             MOBILE - ALL SUB TEXT

             Change font-size manually here.
          ========================================= */

          .hero-slide-content.slide-1 p,
          .hero-slide-content.slide-2 p,
          .hero-slide-content.slide-3 p,
          .hero-slide-content.slide-4 p {
            color: #012d65 !important;

            /* SUB TEXT SIZE */
            font-size: 11px !important;

            line-height: 1.25 !important;

            text-align: center !important;

            max-width: 270px !important;

            margin: 0 auto !important;

            /* Remove desktop shadow */
            text-shadow: none !important;
          }


          /* =========================================
             MOBILE - INNER TEXT PADDING
          ========================================= */

          .slide__inner {
            padding: 0 18px !important;
          }


          /* =========================================
             MOBILE - REGISTER NOW BUTTON

             Adjust width / height / font-size here.
          ========================================= */

          .slide__btn.dg__btn {
            /* SPACE ABOVE BUTTON */
            margin-top: 25px !important;

            /* BUTTON WIDTH */
            width: 110px !important;
            min-width: 110px !important;
            max-width: 110px !important;

            /* BUTTON HEIGHT */
            height: 28px !important;
            min-height: 28px !important;

            padding: 0 8px !important;

            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;

            /* BUTTON TEXT SIZE */
            font-size: 8px !important;

            line-height: 1 !important;
          }


          /* =========================================
   MOBILE - SLIDE INDICATORS
========================================= */

.hs-dots {
  /* MOVE SLIDE DOTS DOWN */
  margin-top: 25px !important;
  margin-bottom: 0 !important;

  gap: 5px !important;
}

/* GRAY DOT BARS */
.hs-dot {
  width: 24px !important;
  height: 4px !important;
}

/* ACTIVE BLUE BAR */
.hs-dot.active {
  width: 30px !important;
  height: 4px !important;
}

      `}</style>

      {/* =========================================
          MAIN HERO CONTENT
      ========================================== */}

      <div className="container poss--relative z-1">
        <div className="row justify-content-center">
          {/* =========================================
              TITLE + DESCRIPTION
          ========================================== */}

          <div className="col-lg-8 col-xl-7 col-md-12 col-sm-12 col-12 d-flex align-items-center">
            <div
              className={`slide__inner hs-content hero-slide-content slide-${slide.id} ${
                animating
                  ? direction === "next"
                    ? "hs-out-next"
                    : "hs-out-prev"
                  : "hs-in"
              }`}
            >
              <h1>
                {slide.id === 2 ? (
                  <>
                    <span className="slide-2-line">Real Markets.</span>

                    <span className="slide-2-line">Real Results.</span>
                  </>
                ) : (
                  slide.title
                )}
              </h1>

              <p>{slide.text}</p>
            </div>
          </div>

          {/* =========================================
              REGISTER NOW BUTTON
          ========================================== */}

          <div
            className={`text-center w-100 hero-register-wrapper register-slide-${slide.id}`}
          >
            {/* =========================================
    REGISTER NOW
    Navigate to internal Register page
========================================= */}
            <Link
              className="slide__btn dg__btn"
              to={process.env.PUBLIC_URL + "/register"}
            >
              Register Now
            </Link>
          </div>

          {/* =========================================
              MANUAL SLIDE INDICATORS
          ========================================== */}

          <div className="w-100">
            <div className="hs-dots">
              {data.map((item, i) => (
                <button
                  key={item.id}
                  className={`hs-dot${i === current ? " active" : ""}`}
                  onClick={() => goTo(i, i > current ? "next" : "prev")}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM PROGRESS LINE
      ========================================== */}

      <div className="hs-progress">
        <div className="hs-progress-fill" />
      </div>
    </div>
  );
};

HeroSliderTwoSingle.propTypes = {
  data: PropTypes.array.isRequired,
};

export default HeroSliderTwoSingle;
