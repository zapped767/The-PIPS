import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/* =========================================
   SLIDER SETTINGS
========================================= */

const AUTO_SLIDE_ENABLED = false;
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
  ========================================= */

  useEffect(() => {
    if (!AUTO_SLIDE_ENABLED) return;

    const timer = setInterval(() => {
      next();
    }, AUTO_SLIDE_DELAY);

    return () => clearInterval(timer);
  }, [next]);

  /* =========================================
     CURRENT SLIDE
  ========================================= */

  const slide = data[current];

  /*
    MEDIA COMES FROM:

    src/data/hero-sliders/hero-slider-two.json

    Slide 1 = image
    Slide 2 = video
    Slide 3 = image
    Slide 4 = video
  */

  const isVideoSlide = slide.mediaType === "video";
  const isImageSlide = slide.mediaType === "image";

  return (
    <div
      className={`slide d-flex align__center poss--relative hero-image-slider ${
        isVideoSlide ? "hero-video-slide" : "hero-image-slide"
      }`}
      style={{
        backgroundImage:
          isImageSlide && slide.media
            ? `url(${process.env.PUBLIC_URL}${slide.media})`
            : "none",
      }}
    >
      {/* =========================================
          DESKTOP / TABLET / LAPTOP VIDEO
      ========================================== */}

      {isVideoSlide && slide.media && (
        <video
          key={`desktop-video-${slide.id}`}
          className="hero-slide-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={process.env.PUBLIC_URL + slide.media}
            type="video/mp4"
          />
        </video>
      )}

      {/* =========================================
          BACKGROUND OVERLAY
      ========================================== */}

      <div className="hero-image-overlay" />

      <style>{`

        /* =========================================================
           BASE HERO
        ========================================================= */

        .hero-image-slider {
          position: relative;

          background-size: 100% auto;
          background-position: center 11%;
          background-repeat: no-repeat;
          background-color: #ffffff;

          min-height: 320px;

          transition:
            background-image 0.5s ease-in-out;
        }


        /* =========================================================
           VIDEO BACKGROUND
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
           MOBILE MEDIA
           HIDDEN ABOVE MOBILE
        ========================================================= */

        .mobile-hero-media {
          display: none;
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
           REGISTER NOW HOVER
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

          transform:
            translateY(-18px);
        }


        .hs-content.hs-out-prev {
          opacity: 0;

          transform:
            translateY(18px);
        }


        .hs-content.hs-in {
          opacity: 1;

          transform:
            translateY(0);
        }


        /* =========================================================
           DESKTOP BASE
           768PX AND ABOVE
        ========================================================= */

        @media (min-width: 768px) {

          /* =====================================================
             DESKTOP - SLIDE 1
          ====================================================== */

          .hero-slide-content.slide-1 {
            position: relative;

            margin-left: -350px;

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
              0 2px 12px
              rgba(0, 0, 0, 0.35);
          }


          .hero-slide-content.slide-1 p {
            color: #ffffff !important;

            text-align: left;

            font-size: 18px;

            line-height: 1.7;

            max-width: 600px;

            margin: 0;

            text-shadow:
              0 1px 8px
              rgba(0, 0, 0, 0.35);
          }


          /* =====================================================
             DESKTOP - SLIDE 2
             BLACK TEXT + LEFT SIDE
          ====================================================== */

          .hero-slide-content.slide-2 {
            position: relative;

            /* LEFT / RIGHT CONTROL */
            margin-left: -350px;

            /* UP / DOWN CONTROL */
            top: -60px;

            width: 650px;
            max-width: 650px;

            text-align: left !important;
          }


          .hero-slide-content.slide-2 h1 {
            color: #000000 !important;

            font-size: 52px;

            line-height: 1.1;

            font-weight: 700;

            margin-bottom: 20px;

            text-align: left !important;
          }


          .hero-slide-content.slide-2
          .slide-2-line {
            display: block;

            white-space: nowrap;
          }


          .hero-slide-content.slide-2 p {
            color: #000000 !important;

            font-size: 18px;

            line-height: 1.55;

            width: 560px;
            max-width: 560px;

            margin: 0;

            text-align: left !important;
          }


          /* =====================================================
             DESKTOP - SLIDE 2 REGISTER BUTTON
          ====================================================== */

          .register-slide-2 {
            position: relative;

            left: -580px;

            top: -40px;

            text-align: center !important;
          }


          .register-slide-2
          .slide__btn {
            background: #012d65!important;

            color: #ffffff !important;

            border:
              1.5px solid
              #ffffff !important;

            min-width: 200px;
          }


          .register-slide-2
          .slide__btn:hover {
            background: #f7a901 !important;

            color: #ffffff !important;

            border-color: #f7a901 !important;
          }


          /* =====================================================
             DESKTOP - SLIDE 3
          ====================================================== */

          .hero-slide-content.slide-3 {
            position: relative;

            margin-left: 520px;

            top: -60px;

            width: 650px;
            max-width: 650px;

            text-align: left;
          }


          .hero-slide-content.slide-3 h1 {
            text-align: left !important;
          }


        .hero-slide-content.slide-3 p {
          color: #ffffff !important;

          margin: 0 !important;

          width: 420px !important;
          max-width: 420px !important;

          font-size: 14px !important;

          line-height: 1.45 !important;

          text-align: left !important;
        }

        /* =====================================================
   LAPTOP - SLIDE 3 REGISTER
   RIGHT SIDE / WHITE BUTTON
===================================================== */

.register-slide-3 {
  position: relative !important;

  /* + = RIGHT / - = LEFT */
  left: 245px !important;

  /* - = UP / + = DOWN */
  top: -100px !important;

  width: 100% !important;

  text-align: center !important;
}


.register-slide-3 .slide__btn {
  background: #ffffff !important;

  color: #012d65 !important;

  border: 1.5px solid #ffffff !important;

  width: 150px !important;
  min-width: 150px !important;

  height: 42px !important;
  min-height: 42px !important;

  padding: 0 12px !important;

  font-size: 12px !important;

  display: inline-flex !important;

  align-items: center !important;
  justify-content: center !important;
}


.register-slide-3 .slide__btn:hover {
  background: #f7a901 !important;

  border-color: #f7a901 !important;

  color: #ffffff !important;
}


          /* =====================================================
             DESKTOP - SLIDE 4
          ====================================================== */

          .hero-slide-content.slide-4 {
            position: relative;

            margin-left: -360px;

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
   SLIDE 3 - LARGE DESKTOP ONLY
   1200PX AND ABOVE

   MANUAL CONTROLS:
   HEADING, PARAGRAPH AND BUTTON

   OTHER VIEWS UNCHANGED
========================================================= */

@media (min-width: 1200px) {

  /* =====================================================
     1. WHOLE TEXT CONTAINER

     Move heading + paragraph TOGETHER.

     LEFT:
       + = move RIGHT
       - = move LEFT

     TOP:
       + = move DOWN
       - = move UP
  ===================================================== */

  .hero-image-slider
  .hero-slide-content.slide-3 {

    position: relative !important;

    /* MANUAL WHOLE TEXT POSITION */

    margin-left: 450px !important;

    top: -60px !important;

    /* CONTENT WIDTH */

    width: 750px !important;

    max-width: 750px !important;

    text-align: left !important;
  }


  /* =====================================================
     2. HEADING - START SMALL. DREAM BIG.

     MANUAL HEADING SIZE:
     38px = smaller
     44px = medium
     48px = bigger

     HEADING POSITION:
     left: + RIGHT / - LEFT
     top:  + DOWN  / - UP
  ===================================================== */

  .hero-image-slider
  .hero-slide-content.slide-3 h1 {

    position: relative !important;

    /* MANUAL H1 POSITION */

    left: 0px !important;

    top: 0px !important;

    /* MANUAL H1 FONT SIZE */

    font-size: 44px !important;

    line-height: 1.15 !important;

    font-weight: 700 !important;

    letter-spacing: -0.5px;

    /* BLACK TEXT */

    color: #000000 !important;

    -webkit-text-fill-color: #000000 !important;

    /* KEEP TITLE IN ONE LINE */

    white-space: nowrap !important;

    width: max-content !important;

    max-width: none !important;

    margin: 0 0 18px !important;

    text-align: left !important;

    text-shadow: none !important;
  }


  /* HEADING SPANS - SAME LINE */

  .hero-image-slider
  .hero-slide-content.slide-3
  .slide-3-line {

    display: inline !important;

    white-space: nowrap !important;
  }


  /* SPACE BETWEEN START SMALL. AND DREAM BIG. */

  .hero-image-slider
  .hero-slide-content.slide-3
  .slide-3-line + .slide-3-line::before {

    content: " ";

    white-space: pre;
  }


  /* =====================================================
     3. PARAGRAPH

     MANUAL P SIZE:
     16px = smaller
     18px = medium
     20px = bigger

     LEFT:
       + = move RIGHT
       - = move LEFT

     TOP:
       + = move DOWN
       - = move UP
  ===================================================== */

  .hero-image-slider
  .hero-slide-content.slide-3 p {

    position: relative !important;

    /* MANUAL PARAGRAPH POSITION */

    left: 0px !important;

    top: 0px !important;

    /* MANUAL PARAGRAPH FONT SIZE */

    font-size: 18px !important;

    line-height: 1.5 !important;

    /* MANUAL PARAGRAPH WIDTH */

    width: 650px !important;

    max-width: 650px !important;

    /* BLACK TEXT */

    color: #000000 !important;

    -webkit-text-fill-color: #000000 !important;

    margin: 0 !important;

    text-align: left !important;

    text-shadow: none !important;
  }


  /* HIDE ORIGINAL PARAGRAPH ON LARGE DESKTOP */

  .hero-image-slider
  .hero-slide-content.slide-3
  .slide-3-desktop-paragraph {

    display: none !important;
  }


  /* SHOW YOUR NEW DESKTOP PARAGRAPH */

  .hero-image-slider
  .hero-slide-content.slide-3
  .slide-3-large-desktop-paragraph {

    display: inline !important;

    color: #000000 !important;
  }


  /* =====================================================
     4. REGISTER NOW BUTTON POSITION

     MANUAL BUTTON POSITION:

     LEFT:
       + = move RIGHT
       - = move LEFT

     TOP:
       + = move DOWN
       - = move UP
  ===================================================== */

  .hero-image-slider
  .register-slide-3 {

    position: relative !important;

    /* MANUAL BUTTON POSITION */

    left: 450px !important;

    top: -40px !important;

    width: 100% !important;

    text-align: center !important;
  }


  /* =====================================================
     5. REGISTER NOW BUTTON SIZE + COLOR
  ===================================================== */

  .hero-image-slider
  .register-slide-3
  .slide__btn.dg__btn {

    /* BLUE BACKGROUND + WHITE TEXT */

    background: #012d65 !important;

    color: #ffffff !important;

    -webkit-text-fill-color: #ffffff !important;

    border: 1.5px solid #012d65 !important;

    /* MANUAL BUTTON SIZE */

    min-width: 200px !important;

    height: 48px !important;

    padding: 0 25px !important;

    /* MANUAL BUTTON TEXT SIZE */

    font-size: 14px !important;

    font-weight: 700 !important;

    display: inline-flex !important;

    align-items: center !important;

    justify-content: center !important;

    text-decoration: none !important;
  }


  /* BUTTON HOVER */

  .hero-image-slider
  .register-slide-3
  .slide__btn.dg__btn:hover {

    background: #035391 !important;

    color: #ffffff !important;

    -webkit-text-fill-color: #ffffff !important;

    border-color: #035391 !important;
  }

}
        /* =========================================================
           SLIDE INDICATORS
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
           TABLET VIEW ONLY
           768PX - 991PX
        ========================================================= */

        @media
        (min-width: 768px)
        and
        (max-width: 991px) {

          .hero-image-slider {
            min-height: 430px;
          }


          /* =====================================================
             TABLET - SLIDE 1
          ====================================================== */

          .hero-slide-content.slide-1 {
            margin-left: 0 !important;

            left: 15px !important;

            top: -20px !important;

            width: 360px !important;
            max-width: 360px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-1 h1 {
            font-size: 32px !important;

            line-height: 1.1 !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-1 p {
            font-size: 14px !important;

            line-height: 1.45 !important;

            width: 330px !important;
            max-width: 330px !important;

            text-align: left !important;
          }


          /* =====================================================
             TABLET - SLIDE 2
             BLACK TEXT + LEFT SIDE
          ====================================================== */

          .hero-slide-content.slide-2 {
            margin-left: 0 !important;

            /* LEFT / RIGHT CONTROL */
            left: 15px !important;

            /* UP / DOWN CONTROL */
            top: -15px !important;

            width: 360px !important;
            max-width: 360px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-2 h1 {
            color: #000000 !important;

            font-size: 31px !important;

            line-height: 1.1 !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-2 p {
            color: #000000 !important;

            width: 330px !important;
            max-width: 330px !important;

            font-size: 14px !important;

            line-height: 1.45 !important;

            text-align: left !important;
          }


          /* =====================================================
             TABLET - SLIDE 2 REGISTER BUTTON
          ====================================================== */

          .register-slide-2 {
            position: relative !important;

            top: -10px !important;

            left: 250px !important;

            width: 100% !important;

            text-align: center !important;
          }


          .register-slide-2
          .slide__btn {
            min-width: 150px !important;
            width: 150px !important;

            height: 42px !important;
            min-height: 42px !important;

            font-size: 12px !important;

            padding: 0 12px !important;

            display: inline-flex !important;

            align-items: center !important;
            justify-content: center !important;

            line-height: 1 !important;
          }

/* =====================================================
   TABLET - SLIDE 3 ONLY
   WHITE TEXT + RIGHT SIDE
===================================================== */

.hero-slide-content.slide-3 {
  margin-left: 0 !important;

  /* LEFT / RIGHT
     bigger value = more right
  */
  left: 360px !important;

  /* UP / DOWN */
  top: -15px !important;

  width: 360px !important;
  max-width: 360px !important;

  text-align: left !important;
}


.hero-slide-content.slide-3 h1 {
  color: #ffffff !important;

  font-size: 32px !important;

  line-height: 1.05 !important;

  margin-bottom: 8px !important;

  text-align: left !important;
}


.hero-slide-content.slide-3 p {
  color: #ffffff !important;

  font-size: 14px !important;

  line-height: 1.45 !important;

  width: 330px !important;
  max-width: 330px !important;

  margin: 0 !important;

  text-align: right !important;
}

/* =====================================================
   TABLET - SLIDE 3 REGISTER
===================================================== */

.register-slide-3 {
  position: relative !important;

  /* LEFT / RIGHT */
  left: 250px !important;

  /* BUTTON UP / DOWN
     smaller negative = more down
  */
  top: 10px !important;

  width: 100% !important;

  text-align: center !important;
}
          /* =====================================================
             TABLET - SLIDE 4
          ====================================================== */

          .hero-slide-content.slide-4 {
            margin-left: 0 !important;

            left: 15px !important;

            top: -15px !important;

            width: 360px !important;
            max-width: 360px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-4 h1 {
            font-size: 28px !important;

            line-height: 1.1 !important;

            margin-bottom: 8px !important;

            width: 360px !important;
            max-width: 360px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-4 p {
            font-size: 14px !important;

            line-height: 1.45 !important;

            width: 330px !important;
            max-width: 330px !important;

            text-align: left !important;
          }
        }


        /* =========================================================
           LAPTOP VIEW ONLY
           992PX - 1199PX
        ========================================================= */

        @media
        (min-width: 992px)
        and
        (max-width: 1199px) {

          /* =====================================================
             LAPTOP - VIDEO HEIGHT
             SLIDE 2 + SLIDE 4
          ====================================================== */

          .hero-video-slide {
            height: 430px !important;

            min-height: 430px !important;
          }


          /* =====================================================
             LAPTOP - SLIDE 1
          ====================================================== */

          .hero-slide-content.slide-1 {
            margin-left: -110px !important;

            top: -125px !important;

            width: 470px !important;
            max-width: 470px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-1 h1 {
            font-size: 40px !important;

            line-height: 1.08 !important;

            margin-bottom: 12px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-1 p {
            width: 430px !important;
            max-width: 430px !important;

            font-size: 13px !important;

            line-height: 1.45 !important;

            text-align: left !important;
          }


          /* =====================================================
             LAPTOP - SLIDE 2
             BLACK TEXT + LEFT SIDE
          ====================================================== */

          .hero-slide-content.slide-2 {
            /* LEFT / RIGHT CONTROL */
            margin-left: -110px !important;

            /* UP / DOWN CONTROL */
            top: -60px !important;

            width: 430px !important;
            max-width: 430px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-2 h1 {
            color: #000000 !important;

            font-size: 40px !important;

            line-height: 1.08 !important;

            margin-bottom: 12px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-2 p {
            color: #000000 !important;

            width: 390px !important;
            max-width: 390px !important;

            font-size: 16px !important;

            line-height: 1.45 !important;

            text-align: left !important;
          }


          /* =====================================================
             LAPTOP - SLIDE 2 REGISTER
          ====================================================== */

        .register-slide-2 {
          position: relative !important;

          /* LEFT / RIGHT */
          left: -245px !important;

          /* UP / DOWN */
          top: -65px !important;

          width: 100% !important;

          text-align: center !important;
        }


          .register-slide-2
          .slide__btn {
            width: 150px !important;
            min-width: 150px !important;

            height: 42px !important;
            min-height: 42px !important;

            padding: 0 12px !important;

            font-size: 12px !important;

            display: inline-flex !important;

            align-items: center !important;
            justify-content: center !important;

            line-height: 1 !important;
          }


          /* =====================================================
             LAPTOP - SLIDE 3
          ====================================================== */

          .hero-slide-content.slide-3 {
            /* + = RIGHT / - = LEFT */
            margin-left: 350px !important;

            /* - = UP / + = DOWN */
            top: -100px !important;

            width: 500px !important;
            max-width: 500px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-3 h1 {
            color: #ffffff !important;

            font-size: 42px !important;

            line-height: 1.05 !important;

            font-weight: 700 !important;

            margin-bottom: 12px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-3 p {
            margin: 0 !important;

            width: 380px !important;
            max-width: 380px !important;

            font-size: 13px !important;

            line-height: 1.45 !important;

            text-align: left !important;
          }
          /* SLIDE 3 TITLE - EXACTLY TWO LINES */
          .hero-slide-content.slide-3 .slide-3-line {
            display: block !important;

            white-space: nowrap !important;
          }

          /* =====================================================
             LAPTOP - SLIDE 4
          ====================================================== */

          .hero-slide-content.slide-4 {
            margin-left: -110px !important;

            top: -100px !important;

            width: 480px !important;
            max-width: 480px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-4 h1 {
            margin:
              0 0 10px 0 !important;

            font-size: 40px !important;

            line-height: 1.08 !important;

            width: 470px !important;
            max-width: 470px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-4 p {
            margin: 0 !important;

            width: 390px !important;
            max-width: 390px !important;

            font-size: 13px !important;

            line-height: 1.45 !important;

            text-align: left !important;
          }
        }


        /* =========================================================
           MOBILE VIEW ONLY
           767PX AND BELOW

           DO NOT AFFECT DESKTOP / TABLET / LAPTOP
        ========================================================= */

        @media (max-width: 767px) {

          /* =====================================================
             MOBILE HERO
          ====================================================== */

          .hero-image-slider {
            display: block !important;

            background-image: none !important;
            background-color: #ffffff !important;

            height: auto !important;
            min-height: 0 !important;

            padding-top: 0 !important;
            padding-bottom: 15px !important;

            overflow: hidden !important;
          }


          /* =====================================================
             HIDE DESKTOP BACKGROUND VIDEO
          ====================================================== */

          .hero-slide-video {
            display: none !important;
          }


          .hero-video-slide {
            background: #ffffff !important;
          }


          /* =====================================================
             MOBILE CONTAINER
          ====================================================== */

          .hero-image-slider .container {
            width: 100% !important;
            max-width: 100% !important;

            padding-left: 0 !important;
            padding-right: 0 !important;
          }


          .hero-image-slider .row {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }


          /* =====================================================
             MOBILE SLIDE CONTENT
          ====================================================== */

          .hero-slide-content.slide-1,
          .hero-slide-content.slide-2,
          .hero-slide-content.slide-3,
          .hero-slide-content.slide-4 {
            position: relative !important;

            margin-left: 0 !important;

            left: 0 !important;
            top: 50px !important;

            width: 100% !important;
            max-width: 100% !important;

            padding: 0 18px !important;

            box-sizing: border-box;

            text-align: center !important;
          }


          /* =====================================================
             MOBILE HEADINGS
          ====================================================== */

          .hero-slide-content.slide-1 h1,
          .hero-slide-content.slide-2 h1,
          .hero-slide-content.slide-3 h1,
          .hero-slide-content.slide-4 h1 {
            position: relative !important;

            left: 0 !important;

            margin:
              0 0 5px 0 !important;

            color: #012d65 !important;

            font-size: 16px !important;

            line-height: 1.15 !important;

            font-weight: 700 !important;

            text-align: center !important;

            white-space: normal !important;

            text-shadow: none !important;
          }


          /* =====================================================
             MOBILE SLIDE 2 TITLE
          ====================================================== */

          .hero-slide-content.slide-2
          .slide-2-line {
            display: inline !important;

            white-space: nowrap !important;
          }


          .hero-slide-content.slide-2
          .slide-2-line
          + .slide-2-line {
            margin-left: 4px !important;
          }


          /* =====================================================
             MOBILE DESCRIPTION
          ====================================================== */

          .hero-slide-content.slide-1 p,
          .hero-slide-content.slide-2 p,
          .hero-slide-content.slide-3 p,
          .hero-slide-content.slide-4 p {
            color: #012d65 !important;

            font-size: 11px !important;

            line-height: 1.3 !important;

            text-align: center !important;

            width: auto !important;

            max-width: 285px !important;

            margin: 0 auto !important;

            text-shadow: none !important;
          }


          /* =====================================================
             MOBILE IMAGE / VIDEO
          ====================================================== */

          .mobile-hero-media {
            display: block !important;

            position: relative !important;

            width: calc(100% + 50px) !important;
            max-width: none !important;

            margin-left: -25px !important;
            margin-right: -25px !important;

            margin-top: -75px !important;

            padding: 0 !important;

            overflow: hidden !important;

            background: transparent !important;
          }


          .hero-image-slider
          .row
          > .mobile-hero-media {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }


          .mobile-hero-media img,
          .mobile-hero-media video {
            display: block !important;

            width: 100% !important;

            /* GENERAL MOBILE MEDIA HEIGHT */
            height: 400px !important;

            object-fit: cover !important;

            object-position:
              center center !important;

            margin: 0 !important;

            padding: 0 !important;

            border: 0 !important;

            background: transparent !important;
          }


          /* =====================================================
             MOBILE - SLIDE 2 VIDEO ONLY
          ====================================================== */

          .mobile-hero-media-2 video {
            /* SLIDE 2 VIDEO HEIGHT */
            height: 440px !important;

            /*
              VIDEO LEFT / RIGHT:

              50% = center
              55% = little shift
              60% = more
              65% = current
            */

            object-position:
              65% center !important;
          }


          /* =====================================================
             MOBILE REGISTER WRAPPER
             BUTTON ON IMAGE / VIDEO
          ====================================================== */

          .hero-register-wrapper {
            position: relative !important;

            left: 0 !important;
            top: 0 !important;

            width: 100% !important;

            margin: 0 !important;

            text-align: center !important;

            z-index: 10 !important;

            transform:
              translateY(-55px) !important;
          }


          /* =====================================================
             MOBILE REGISTER BUTTON
          ====================================================== */

          .slide__btn.dg__btn {
            margin-top: 0 !important;

            width: 110px !important;
            min-width: 110px !important;
            max-width: 110px !important;

            height: 28px !important;
            min-height: 28px !important;

            padding: 0 8px !important;

            display: inline-flex !important;

            align-items: center !important;
            justify-content: center !important;

            font-size: 8px !important;

            line-height: 1 !important;
          }


          /* =====================================================
             MOBILE DOTS
          ====================================================== */

          .hs-dots {
            margin-top: 15px !important;
            margin-bottom: 0 !important;

            gap: 5px !important;
          }


          .hs-dot {
            width: 24px !important;

            height: 4px !important;
          }


          .hs-dot.active {
            width: 30px !important;

            height: 4px !important;
          }
        }
/* MOBILE VERSION HIDDEN BY DEFAULT */
.slide-3-mobile-paragraph {
  display: none;
}

.slide-3-desktop-paragraph {
  display: inline;
}

        /* =========================================================
           MOBILE CUSTOM SLIDE SETTINGS ONLY

           TABLET / LAPTOP / DESKTOP NOT AFFECTED
        ========================================================= */

        @media (max-width: 767px) {

          /* =====================================================
             MOBILE SLIDE 1
          ====================================================== */

          .hero-slide-content.slide-1 {
            /*
              + TOP = DOWN
              - TOP = UP
            */

            top: 80px !important;

            /*
              + LEFT = RIGHT
              - LEFT = LEFT
            */

            left: -25px !important;

            text-align: center !important;
          }


          .hero-slide-content.slide-1 h1 {
            color: #ffffff !important;

            font-size: 20px !important;

            text-align: left !important;
          }


          .hero-slide-content.slide-1 p {
            color: #ffffff !important;

            font-size: 11px !important;

            text-align: left !important;

            /* MOVE P ONLY - IMAGE WILL NOT MOVE */

            transform:
              translate(0px, 15px) !important;
          }


            /* =====================================================
              MOBILE SLIDE 2
            ===================================================== */

            .hero-slide-content.slide-2 {
              /* TEXT UP / DOWN */
              top: 100px !important;

              /* WHOLE TEXT LEFT / RIGHT */
              left: -10px !important;

              text-align: center !important;
            }

            .hero-slide-content.slide-2 h1 {
              color: #000000 !important;

              /* MANUAL H1 SIZE */
              font-size: 20px !important;

              line-height: 1.1 !important;

              text-align: left !important;
            }

            .hero-slide-content.slide-2 p {
              color: #000000 !important;

              /* MANUAL P SIZE */
              font-size: 12px !important;

              line-height: 1.3 !important;

              text-align: left !important;
            }


            /* SLIDE 2 MOBILE BUTTON */

            .register-slide-2 {
              /* + = RIGHT / - = LEFT */
              left: 0px !important;

              /* BUTTON POSITION
                -55px = current
                -40px = DOWN
                -25px = MORE DOWN
              */
              transform: translateY(-35px) !important;
            }


          /* =====================================================
            MOBILE SLIDE 3
          ===================================================== */

          .hero-slide-content.slide-3 {
            /* TEXT DOWN */
            top: 65px !important;

            /* TEXT LEFT / RIGHT */
            left: 20px !important;

            text-align: right !important;
          }

          .hero-slide-content.slide-3 h1 {
            color: #ffffff !important;

            /* MANUAL H1 SIZE */
            font-size: 17px !important;

            line-height: 1.1 !important;

            text-align: right !important;
          }

          .hero-slide-content.slide-3 p {
            color: #ffffff !important;
          
            /* MANUAL P SIZE */
            font-size: 10px !important;

            line-height: 1.3 !important;

            text-align:right !important;
          }


          /* SLIDE 3 MOBILE BUTTON */

          .register-slide-3 {
            /* BUTTON LEFT / RIGHT */
            left: 0px !important;

            /* BUTTON DOWN */
            transform: translateY(-40px) !important;
          }
          /* SLIDE 3 - MOBILE PARAGRAPH EXACTLY 5 LINES */

          .slide-3-desktop-paragraph {
            display: none !important;
          }

          .slide-3-mobile-paragraph {
            display: inline !important;
          }

          /* =====================================================
          MOBILE SLIDE 3 REGISTER BUTTON ONLY
        ===================================================== */

        .register-slide-3 .slide__btn {
          background: #ffffff !important;

          color: #012d65 !important;

          
        }

        .register-slide-3 .slide__btn:hover {
          background: #f7a901 !important;

          border-color: #f7a901 !important;

          color: #ffffff !important;
        }
          /* =====================================================
   MOBILE SLIDE 4 ONLY
===================================================== */

.hero-slide-content.slide-4 {

  /* ==================================
     WHOLE TEXT UP / DOWN
     + value = DOWN
     smaller value = UP
  ================================== */
  top: 95px !important;

  /* ==================================
     WHOLE TEXT LEFT / RIGHT
     - value = LEFT
     + value = RIGHT
  ================================== */
  left: -10px !important;

  text-align: left !important;
}


/* ==================================
   SLIDE 4 H1
================================== */

.hero-slide-content.slide-4 h1 {
  color: #000000 !important;

  /* MANUAL H1 SIZE */
  font-size: 20px !important;

  line-height: 1.1 !important;

  font-weight: 700 !important;

  text-align: left !important;

  margin-bottom: 8px !important;
}


/* ==================================
   SLIDE 4 PARAGRAPH
================================== */

.hero-slide-content.slide-4 p {
  color: #000000 !important;

  /* MANUAL PARAGRAPH SIZE */
  font-size: 12px !important;

  line-height: 1.35 !important;

  text-align: left !important;

  /* IMPORTANT - REMOVE CENTER ALIGNMENT */
  margin: 0 !important;

  width: 280px !important;
  max-width: 280px !important;
}


/* ==================================
   SLIDE 4 MOBILE BUTTON POSITION
================================== */

.register-slide-4 {

  /* BUTTON LEFT / RIGHT */
  left: 0px !important;

  /*
    BUTTON UP / DOWN

    -55px = UP
    -40px = little down
    -30px = more down
    -15px = further down
     0px  = much further down
  */
  transform: translateY(-50px) !important;
}
/* =========================================================
   DESKTOP ONLY - SLIDE 3
   1200PX AND ABOVE
========================================================= */

@media (min-width: 1200px) {

  /* SLIDE 3 TEXT */
  .hero-slide-content.slide-3 {
    position: relative;

    /* + = RIGHT / - = LEFT */
    margin-left: 560px !important;

    /* - = UP / + = DOWN */
    top: -60px !important;

    width: 620px !important;
    max-width: 620px !important;

    text-align: left !important;
  }

  .hero-slide-content.slide-3 h1 {
    color: #ffffff !important;

    /* INCREASE TITLE SIZE */
    font-size: 58px !important;

    line-height: 1.05 !important;

    font-weight: 700 !important;

    margin-bottom: 18px !important;

    text-align: left !important;
  }

  /* EXACTLY TWO LINES */
  .hero-slide-content.slide-3 .slide-3-line {
    display: block !important;

    white-space: nowrap !important;
  }

  .hero-slide-content.slide-3 p {
    color: #ffffff !important;

    font-size: 17px !important;

    line-height: 1.5 !important;

    width: 500px !important;
    max-width: 500px !important;

    margin: 0 !important;

    text-align: left !important;
  }


  /* =====================================================
     SLIDE 3 REGISTER - RIGHT SIDE
  ====================================================== */

  .register-slide-3 {
    position: relative !important;

    /* + = RIGHT / - = LEFT */
    left: 500px !important;

    /* - = UP / + = DOWN */
    top: -40px !important;

    width: 100% !important;

    text-align: center !important;
  }

  .register-slide-3 .slide__btn {
    background: #ffffff !important;

    color: #012d65 !important;

    border: 1.5px solid #ffffff !important;

    min-width: 200px !important;
  }

  .register-slide-3 .slide__btn:hover {
    background: #f7a901 !important;

    border-color: #f7a901 !important;

    color: #ffffff !important;
  }
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
      <span className="slide-2-line">
        Real Markets.
      </span>

      <span className="slide-2-line">
        Real Results.
      </span>
    </>
  ) : slide.id === 3 ? (
    <>
      <span className="slide-3-line">
        Start Small.
      </span>

      <span className="slide-3-line">
        Dream Big.
      </span>
    </>
  ) : (
    slide.title
  )}
</h1>

              <p>
  {slide.id === 3 ? (
    <>
      {/* EXISTING TABLET + LAPTOP PARAGRAPH */}
<span className="slide-3-desktop-paragraph">
  {slide.text}
</span>

{/* NEW DESKTOP-ONLY PARAGRAPH */}
<span className="slide-3-large-desktop-paragraph">
  Whether you're investing $50 or $50,000, The Pips gives
  you the tools, insights, and support to grow your wealth
  step by step.
</span>
    </>
  ) : (
    slide.text
  )}
</p>

            </div>

          </div>


          {/* =========================================
              MOBILE MEDIA

              Slide 1 → Image
              Slide 2 → Video
              Slide 3 → Image
              Slide 4 → Video
          ========================================== */}

          <div
            className={`mobile-hero-media mobile-hero-media-${slide.id}`}
          >

            {isVideoSlide ? (

              <video
                key={`mobile-video-${slide.id}`}
                autoPlay
                muted
                loop
                playsInline
              >

                <source
                  src={
                    process.env.PUBLIC_URL +
                    slide.media
                  }
                  type="video/mp4"
                />

              </video>

            ) : (

              <img
                key={`mobile-image-${slide.id}`}
                src={
                  process.env.PUBLIC_URL +
                  slide.media
                }
                alt={slide.title}
              />

            )}

          </div>


          {/* =========================================
              REGISTER NOW BUTTON
          ========================================== */}

          <div
            className={`text-center w-100 hero-register-wrapper register-slide-${slide.id}`}
          >

            <Link
              className="slide__btn dg__btn"
              to={
                process.env.PUBLIC_URL +
                "/register"
              }
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

                  className={`hs-dot${
                    i === current
                      ? " active"
                      : ""
                  }`}

                  onClick={() =>
                    goTo(
                      i,
                      i > current
                        ? "next"
                        : "prev",
                    )
                  }

                  aria-label={`Go to slide ${
                    i + 1
                  }`}
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