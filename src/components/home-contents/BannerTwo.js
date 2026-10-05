import React from "react";

const BannerTwo = () => {
  const bannerImage =
    process.env.PUBLIC_URL +
    "/images/home/banner-two-blue-glass.png";

  return (
    <>
      <style>
        {`
          /* =====================================================
             HOME BANNER TWO — IMAGE VERSION
             UNIQUE STYLES
          ===================================================== */

          .pips-banner-two-image26 {
            /* =========================================
               MANUAL CONTROLS
            ========================================= */

            --banner-two-height: 520px;

            /* BACKGROUND IMAGE POSITION */
            --banner-two-bg-x: 50%;
            --banner-two-bg-y: 30%;

            /* CONTENT MOVEMENT */
            --banner-two-content-x: -200px;
            --banner-two-content-y: 0px;

            /* LEFT CONTENT WIDTH */
            --banner-two-content-width: 650px;


            position: relative;

            display: flex;
            align-items: center;

            width: 100%;

            height: var(--banner-two-height);
            min-height: var(--banner-two-height);

            overflow: hidden;

            background-repeat: no-repeat;
            background-size: cover;

            background-position:
              var(--banner-two-bg-x)
              var(--banner-two-bg-y);

            box-sizing: border-box;
          }


          /* =====================================================
             OPTIONAL LEFT DARK GRADIENT
             Helps white text stay readable
          ===================================================== */

          .pips-banner-two-image26::before {
            content: "";

            position: absolute;
            inset: 0;

            z-index: 1;

            background:
              linear-gradient(
                90deg,
                rgba(1, 20, 45, 0.60) 0%,
                rgba(1, 20, 45, 0.25) 38%,
                rgba(1, 20, 45, 0.00) 68%
              );

            pointer-events: none;
          }


          /* =====================================================
             CONTENT WRAPPER
          ===================================================== */

          .pips-banner-two-image26__inner {
            position: relative;

            z-index: 2;

            width: 100%;
            max-width: 1440px;

            margin: 0 auto;

            padding:
              0
              70px;

            box-sizing: border-box;
          }


          /* =====================================================
             LEFT CONTENT
          ===================================================== */

          .pips-banner-two-image26__content {
            width: 100%;
            max-width:
              var(--banner-two-content-width);

            text-align: left;

            transform:
              translate(
                var(--banner-two-content-x),
                var(--banner-two-content-y)
              );
          }


          /* =====================================================
             TITLE
          ===================================================== */

          .pips-banner-two-image26__title {
            margin:
              0
              0
              18px;

            color: #ffffff !important;

            font-size: 48px;
            line-height: 1.08;

            font-weight: 800;

            text-align: left !important;
          }


          /* =====================================================
             DESCRIPTION
          ===================================================== */

          .pips-banner-two-image26__description {
            max-width: 620px;

            margin:
              0
              0
              28px;

            color:
              rgba(255, 255, 255, 0.95) !important;

            font-size: 16px;
            line-height: 1.65;

            text-align: left !important;
          }


          /* =====================================================
             BUTTON
          ===================================================== */

          .pips-banner-two-image26__button {
            display: inline-flex;

            align-items: center;
            justify-content: center;

            min-width: 190px;
            height: 52px;

            padding:
              0
              28px;

            border:
              1px solid
              rgba(255, 255, 255, 0.75);

            border-radius: 4px;

            background: #012d65;

            color: #ffffff !important;

            font-size: 14px;
            font-weight: 800;

            line-height: 1;

            white-space: nowrap;

            text-decoration: none !important;

            text-transform: uppercase;

            transition:
              transform 0.3s ease,
              background-color 0.3s ease,
              box-shadow 0.3s ease;
          }


          .pips-banner-two-image26__button:hover {
            background: #035391;

            color: #ffffff !important;

            transform:
              translateY(-2px);

            box-shadow:
              0 10px 25px
              rgba(0, 0, 0, 0.20);
          }


          /* =====================================================
             TABLET
          ===================================================== */

          @media (max-width: 991px) {

            .pips-banner-two-image26 {
              --banner-two-height: 460px;

              --banner-two-bg-x: 58%;
              --banner-two-bg-y: 50%;

              --banner-two-content-width: 520px;
            }


            .pips-banner-two-image26__inner {
              padding:
                0
                40px;
            }


            .pips-banner-two-image26__title {
              font-size: 38px;
            }


            .pips-banner-two-image26__description {
              max-width: 500px;

              font-size: 15px;
            }

          }


          /* =====================================================
             MOBILE
          ===================================================== */

          @media (max-width: 767px) {

            .pips-banner-two-image26 {
              /* =====================================
                 MANUAL MOBILE CONTROLS
              ===================================== */

              --banner-two-height: 430px;

              --banner-two-bg-x: 64%;
              --banner-two-bg-y: 50%;

              --banner-two-content-x: 0px;
              --banner-two-content-y: 0px;

              --banner-two-content-width: 100%;
            }


            .pips-banner-two-image26::before {
              background:
                linear-gradient(
                  90deg,
                  rgba(1, 20, 45, 0.74) 0%,
                  rgba(1, 20, 45, 0.42) 55%,
                  rgba(1, 20, 45, 0.10) 100%
                );
            }


            .pips-banner-two-image26__inner {
              padding:
                0
                22px;
            }


            .pips-banner-two-image26__title {
              max-width: 290px;

              margin-bottom: 14px;

              font-size: 28px;
              line-height: 1.12;
            }


            .pips-banner-two-image26__description {
              max-width: 285px;

              margin-bottom: 22px;

              font-size: 13px;
              line-height: 1.55;
            }


            .pips-banner-two-image26__button {
              min-width: 165px;
              height: 46px;

              padding:
                0
                20px;

              font-size: 12px;
            }

          }
        `}
      </style>


      <section
        className="pips-banner-two-image26"
        style={{
          backgroundImage: `url("${bannerImage}")`,
        }}
      >
        <div className="pips-banner-two-image26__inner">

          <div className="pips-banner-two-image26__content">

            <h1 className="pips-banner-two-image26__title">
              Step Into the Future of Crypto Trading
            </h1>


            <p className="pips-banner-two-image26__description">
              Access global markets with precision, speed, and total
              transparency. Trade top digital assets anytime and
              elevate your strategy with a platform engineered for
              effortless performance.
            </p>


            <a
              className="pips-banner-two-image26__button"
              href="https://portal.thepips.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Trading
            </a>

          </div>

        </div>
      </section>
    </>
  );
};

export default BannerTwo;