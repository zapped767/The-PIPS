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
             DEMO TRADING ACCOUNT
             EXPLORE ASSETS AND MARKETS
             UNIQUE COMPONENT CSS ONLY
          ===================================================== */

          .pips-demo-assets26 {
            /* =====================================
               DESKTOP MANUAL CONTROLS
            ===================================== */

            --demo-assets-height: 550px;

            --demo-assets-content-left: 100px;
            --demo-assets-content-top: 100px;

            --demo-assets-title-size: 48px;
            --demo-assets-title-width: 620px;

            --demo-assets-desc-size: 15px;
            --demo-assets-desc-width: 650px;

            --demo-assets-button-width: 200px;
            --demo-assets-button-height: 52px;
            --demo-assets-button-font: 13px;

            --demo-assets-bg-x: 50%;
            --demo-assets-bg-y: 50%;

            position: relative;

            display: flex;
            align-items: flex-start;

            width: 100%;

            height: var(--demo-assets-height);
            min-height: var(--demo-assets-height);

            overflow: hidden;

            background-color: #ffffff;

            background-image:
              var(--demo-assets-desktop-image);

            background-repeat: no-repeat;

            background-size: 105% 100%;

            background-position:
              var(--demo-assets-bg-x)
              var(--demo-assets-bg-y);

            box-sizing: border-box;
          }


          /* =====================================================
             CONTENT WRAPPER
          ===================================================== */

          .pips-demo-assets26__inner {
            position: relative;

            z-index: 2;

            width: 100%;

            padding-top:
              var(--demo-assets-content-top);

            padding-left:
              var(--demo-assets-content-left);

            padding-right: 40px;

            box-sizing: border-box;
          }


          .pips-demo-assets26__content {
            width: 100%;
            max-width: 720px;

            text-align: left;
          }


          /* =====================================================
             TITLE
          ===================================================== */

          .pips-demo-assets26__title {
            width: 100%;
            max-width:
              var(--demo-assets-title-width);

            margin:
              0
              0
              14px;

            padding: 0;

            color: #012d65 !important;

            font-size:
              var(--demo-assets-title-size);

            font-weight: 700;

            line-height: 1.15;

            letter-spacing: -0.5px;

            text-align: left;
          }


          /* =====================================================
             DESCRIPTION
          ===================================================== */

          .pips-demo-assets26__description {
            width: 100%;
            max-width:
              var(--demo-assets-desc-width);

            margin:
              0
              0
              30px;

            padding: 0;

            color: #012d65 !important;

            font-size:
              var(--demo-assets-desc-size);

            font-weight: 400;

            line-height: 1.65;

            text-align: left;
          }


          /* =====================================================
             BUTTON
          ===================================================== */

          .pips-demo-assets26__button {
            display: inline-flex;

            align-items: center;
            justify-content: center;

            width:
              var(--demo-assets-button-width);

            min-width:
              var(--demo-assets-button-width);

            height:
              var(--demo-assets-button-height);

            padding:
              0
              22px;

            border:
              1.5px solid
              #012d65;

            border-radius: 3px;

            background:
              #012d65;

            color:
              #ffffff !important;

            -webkit-text-fill-color:
              #ffffff !important;

            font-size:
              var(--demo-assets-button-font);

            font-weight: 700;

            line-height: 1;

            text-align: center;

            text-transform: uppercase;

            text-decoration: none !important;

            white-space: nowrap;

            box-sizing: border-box;

            transition:
              background-color 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease,
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }


          /* =====================================================
             BUTTON HOVER
          ===================================================== */

          .pips-demo-assets26__button:hover {
            background:
              #f7a901 !important;

            color:
              #012d65 !important;

            -webkit-text-fill-color:
              #012d65 !important;

            border-color:
              #f7a901 !important;

            text-decoration: none !important;

            transform:
              translateY(-2px);

            box-shadow:
              0 8px 20px
              rgba(1, 45, 101, 0.15);
          }


          .pips-demo-assets26__button:focus {
            background:
              #f7a901 !important;

            color:
              #012d65 !important;

            -webkit-text-fill-color:
              #012d65 !important;

            border-color:
              #f7a901 !important;

            outline: none;
          }


          /* =====================================================
             LARGE LAPTOP
          ===================================================== */

          @media (min-width: 1200px) and (max-width: 1500px) {

            .pips-demo-assets26 {
              --demo-assets-height: 540px;

              --demo-assets-content-left: 80px;
              --demo-assets-content-top: 95px;

              --demo-assets-title-size: 44px;

              --demo-assets-desc-size: 14px;

              background-size:
                105% 100%;
            }

          }


          /* =====================================================
             LAPTOP
          ===================================================== */

          @media (min-width: 992px) and (max-width: 1199px) {

            .pips-demo-assets26 {
              --demo-assets-height: 500px;

              --demo-assets-content-left: 55px;
              --demo-assets-content-top: 80px;

              --demo-assets-title-size: 40px;

              --demo-assets-title-width: 520px;

              --demo-assets-desc-size: 14px;
              --demo-assets-desc-width: 540px;

              --demo-assets-button-width: 185px;
              --demo-assets-button-height: 48px;

              background-size:
                105% 100%;
            }

          }


          /* =====================================================
             TABLET
          ===================================================== */

          @media (min-width: 768px) and (max-width: 991px) {

            .pips-demo-assets26 {
              --demo-assets-height: 440px;

              --demo-assets-content-left: 35px;
              --demo-assets-content-top: 55px;

              --demo-assets-title-size: 32px;

              --demo-assets-title-width: 430px;

              --demo-assets-desc-size: 13px;
              --demo-assets-desc-width: 430px;

              --demo-assets-button-width: 175px;
              --demo-assets-button-height: 44px;
              --demo-assets-button-font: 11px;

              background-size:
                105% 100%;
            }

          }


          /* =====================================================
             MOBILE
          ===================================================== */

          @media (max-width: 767px) {

            .pips-demo-assets26 {
              /* =============================
                 MOBILE MANUAL CONTROLS
              ============================= */

              --demo-assets-height: 380px;

              --demo-assets-content-left: 18px;
              --demo-assets-content-top: 0px;

              --demo-assets-title-size: 22px;
              --demo-assets-title-width: 220px;

              --demo-assets-desc-size: 11px;
              --demo-assets-desc-width: 225px;

              --demo-assets-button-width: 155px;
              --demo-assets-button-height: 40px;
              --demo-assets-button-font: 10px;

              --demo-assets-bg-x: 50%;
              --demo-assets-bg-y: 50%;

              align-items: center;

              height:
                var(--demo-assets-height);

              min-height:
                var(--demo-assets-height);

              background-image:
                linear-gradient(
                  rgba(34, 34, 34, 0.45),
                  rgba(39, 38, 38, 0.45)
                ),
                var(--demo-assets-mobile-image);

              background-size:
                cover;

              background-position:
                var(--demo-assets-bg-x)
                var(--demo-assets-bg-y);
            }


            .pips-demo-assets26__inner {
              padding-top:
                var(--demo-assets-content-top);

              padding-left:
                var(--demo-assets-content-left);

              padding-right: 15px;
            }


            .pips-demo-assets26__title {
              margin-bottom: 9px;

              color:
                #ffffff !important;

              font-size:
                var(--demo-assets-title-size);

              line-height: 1.15;
            }


            .pips-demo-assets26__description {
              margin-bottom: 18px;

              color:
                #ffffff !important;

              font-size:
                var(--demo-assets-desc-size);

              line-height: 1.5;
            }


            .pips-demo-assets26__button {
              width:
                var(--demo-assets-button-width);

              min-width:
                var(--demo-assets-button-width);

              height:
                var(--demo-assets-button-height);

              padding:
                0
                14px;

              font-size:
                var(--demo-assets-button-font);
            }

          }


          /* =====================================================
             VERY SMALL MOBILE
          ===================================================== */

          @media (max-width: 420px) {

            .pips-demo-assets26 {
              --demo-assets-height: 350px;

              --demo-assets-content-left: 15px;

              --demo-assets-title-size: 20px;

              --demo-assets-desc-size: 10px;

              --demo-assets-button-width: 145px;
              --demo-assets-button-height: 38px;
              --demo-assets-button-font: 9px;
            }

          }
        `}
      </style>


      <section
        className="pips-demo-assets26"
        style={{
          "--demo-assets-desktop-image":
            `url("${desktopImage}")`,

          "--demo-assets-mobile-image":
            `url("${mobileImage}")`,
        }}
      >

        <div className="pips-demo-assets26__inner">

          <div className="pips-demo-assets26__content">

            <h1 className="pips-demo-assets26__title">
              Explore Pips Assets And Markets
            </h1>


            <p className="pips-demo-assets26__description">
              Learn to trade with our various assets from leading
              global financial markets with the same conditions as
              on live trading accounts.
            </p>


            <a
              className="pips-demo-assets26__button"
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