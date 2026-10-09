import React from "react";

const DemoTradingAccountContentTwo = () => {
  const desktopImage =
    process.env.PUBLIC_URL +
    "/images/about/bull_right_side_ai_1.png";

  const mobileImage =
    process.env.PUBLIC_URL +
    "/images/about/bull_right_side_ai_1_mobile.jpg";

  return (
    <>
      <style>
        {`
          /* =====================================================
             DEMO PAGE - EXPLORE PIPS ASSETS
             UNIQUE COMPONENT CSS
             WILL NOT OVERRIDE OTHER PAGES
          ===================================================== */

          .pips-demo-old-assets26 {
            --demo-assets-height: 550px;

            position: relative;

            width: 100%;
            height: var(--demo-assets-height);
            min-height: var(--demo-assets-height);

            display: flex;
            align-items: center;

            overflow: hidden;

            background-color: #071425;
            background-image: var(--demo-assets-desktop-image);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;

            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          /* Dark left overlay only for text readability */
          .pips-demo-old-assets26::before {
            content: "";

            position: absolute;
            inset: 0;

            z-index: 1;

            background:
              linear-gradient(
                90deg,
                rgba(0, 8, 24, 0.72) 0%,
                rgba(0, 8, 24, 0.50) 28%,
                rgba(0, 8, 24, 0.10) 55%,
                rgba(0, 8, 24, 0) 72%
              );

            pointer-events: none;
          }

          .pips-demo-old-assets26__inner {
            position: relative;
            z-index: 2;

            width: 100%;
            max-width: 1440px;

            margin: 0 auto;
            padding: 0 70px;

            box-sizing: border-box;
          }

          .pips-demo-old-assets26__content {
            width: 100%;
            max-width: 650px;

            text-align: left;
          }

          .pips-demo-old-assets26__title {
            max-width: 570px;

            margin: 0 0 18px;

            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;

            font-size: 46px;
            font-weight: 700;
            line-height: 1.15;
          }

          .pips-demo-old-assets26__description {
            max-width: 650px;

            margin: 0 0 30px;

            color: rgba(255, 255, 255, 0.78) !important;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.78) !important;

            font-size: 15px;
            font-weight: 400;
            line-height: 1.7;
          }

          /* =============================================
             BUTTON
          ============================================= */

          .pips-demo-old-assets26__button {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            min-width: 210px;
            height: 52px;

            padding: 0 24px;

            border: 1.5px solid #012d65;
            border-radius: 4px;

            background: #012d65 !important;

            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;

            font-size: 13px;
            font-weight: 700;
            line-height: 1;

            text-transform: uppercase;
            text-decoration: none !important;

            box-sizing: border-box;

            transition:
              background-color 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease,
              transform 0.3s ease;
          }

          .pips-demo-old-assets26__button:hover,
          .pips-demo-old-assets26__button:focus-visible {
            background: #f7a901 !important;

            color: #012d65 !important;
            -webkit-text-fill-color: #012d65 !important;

            border-color: #f7a901 !important;

            text-decoration: none !important;

            transform: translateY(-2px);
          }

          .pips-demo-old-assets26__button:active {
            transform: translateY(0);
          }

          /* =============================================
             LAPTOP
          ============================================= */

          @media (min-width: 992px) and (max-width: 1199px) {
            .pips-demo-old-assets26 {
              --demo-assets-height: 500px;
            }

            .pips-demo-old-assets26__inner {
              padding: 0 50px;
            }

            .pips-demo-old-assets26__title {
              font-size: 40px;
              max-width: 500px;
            }

            .pips-demo-old-assets26__description {
              max-width: 520px;
              font-size: 14px;
            }
          }

          /* =============================================
             TABLET
          ============================================= */

          @media (min-width: 768px) and (max-width: 991px) {
            .pips-demo-old-assets26 {
              --demo-assets-height: 450px;
            }

            .pips-demo-old-assets26__inner {
              padding: 0 35px;
            }

            .pips-demo-old-assets26__content {
              max-width: 470px;
            }

            .pips-demo-old-assets26__title {
              font-size: 34px;
              max-width: 440px;
            }

            .pips-demo-old-assets26__description {
              max-width: 450px;
              font-size: 13px;
            }

            .pips-demo-old-assets26__button {
              min-width: 185px;
              height: 46px;
              font-size: 11px;
            }
          }

          /* =============================================
             MOBILE
          ============================================= */

          @media (max-width: 767px) {
            .pips-demo-old-assets26 {
              --demo-assets-height: 390px;

              background-image:
                var(--demo-assets-mobile-image);

              background-position: center center;
            }

            .pips-demo-old-assets26::before {
              background:
                linear-gradient(
                  90deg,
                  rgba(0, 8, 24, 0.78) 0%,
                  rgba(0, 8, 24, 0.55) 55%,
                  rgba(0, 8, 24, 0.18) 100%
                );
            }

            .pips-demo-old-assets26__inner {
              padding: 0 20px;
            }

            .pips-demo-old-assets26__content {
              max-width: 300px;
            }

            .pips-demo-old-assets26__title {
              max-width: 270px;

              font-size: 27px;
            }

            .pips-demo-old-assets26__description {
              max-width: 290px;

              font-size: 12px;
              line-height: 1.55;
            }

            .pips-demo-old-assets26__button {
              min-width: 165px;
              height: 42px;

              padding: 0 17px;

              font-size: 10px;
            }
          }

          @media (max-width: 420px) {
            .pips-demo-old-assets26 {
              --demo-assets-height: 360px;
            }

            .pips-demo-old-assets26__title {
              font-size: 24px;
            }

            .pips-demo-old-assets26__description {
              font-size: 11px;
            }
          }
        `}
      </style>

      <section
        className="pips-demo-old-assets26"
        style={{
          "--demo-assets-desktop-image": `url("${desktopImage}")`,
          "--demo-assets-mobile-image": `url("${mobileImage}")`,
        }}
      >
        <div className="pips-demo-old-assets26__inner">
          <div className="pips-demo-old-assets26__content">
            <h2 className="pips-demo-old-assets26__title">
              Explore Pips assets and markets
            </h2>

            <p className="pips-demo-old-assets26__description">
              Learn to trade with our various assets from leading global
              financial markets with the same conditions as on live trading
              accounts.
            </p>

            <a
              className="pips-demo-old-assets26__button"
              href="https://portal.thepips.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Practicing Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoTradingAccountContentTwo;