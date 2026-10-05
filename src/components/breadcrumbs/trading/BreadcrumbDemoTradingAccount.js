import React from "react";

const BreadcrumbDemoTradingAccount = () => {
  const bannerImage =
    process.env.PUBLIC_URL +
    "/images/home/accounts-header-blue2.png";

  return (
    <>
      <style>
        {`
          /* =====================================================
             DEMO TRADING ACCOUNT HERO
             UNIQUE TO THIS PAGE ONLY
          ===================================================== */

          .pips-demo26-hero {
            /* =========================================
               MANUAL DESKTOP CONTROLS
            ========================================= */

            --demo26-height: 100vh;
            --demo26-radius: 72px;

            --demo26-title-size: 68px;
            --demo26-description-size: 17px;

            --demo26-button-width: 230px;
            --demo26-button-height: 56px;


            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;

            height: var(--demo26-height);
            min-height: var(--demo26-height);

            margin: 0;

            padding:
              110px
              40px
              70px;

            box-sizing: border-box;


            /* =========================================
               BACKGROUND
            ========================================= */

            background-color: #012d65;

            background-repeat: no-repeat;

            background-size: cover;

            background-position:
              center
              center;


            /* =========================================
               BOTTOM CURVE
            ========================================= */

            border-radius:
              0
              0
              var(--demo26-radius)
              var(--demo26-radius);

            overflow: hidden;
          }


          /* =====================================================
             HERO CONTENT
          ===================================================== */

          .pips-demo26-content {
            position: relative;

            z-index: 2;

            display: flex;

            flex-direction: column;

            align-items: center;

            justify-content: center;

            width: 100%;

            max-width: 1050px;

            margin: 0 auto;

            text-align: center;
          }


          /* =====================================================
             TITLE
          ===================================================== */

          .pips-demo26-title {
            margin:
              0
              0
              18px;

            padding: 0;

            color: #ffffff !important;

            font-size:
              var(--demo26-title-size);

            line-height: 1.15;

            font-weight: 1000;

            letter-spacing: -1.3px;

            text-align: center !important;
          }


          /* =====================================================
             DESCRIPTION
          ===================================================== */

          .pips-demo26-description {
            width: 100%;

            max-width: 850px;

            margin:
              0
              auto
              30px;

            color:
              rgba(255, 255, 255, 0.95) !important;

            font-size:
              var(--demo26-description-size);

            line-height: 1.6;

            text-align: center !important;
          }


          /* =====================================================
             BUTTON
          ===================================================== */

          .pips-demo26-button {
            display: inline-flex;

            align-items: center;

            justify-content: center;

            width:
              var(--demo26-button-width);

            min-width:
              var(--demo26-button-width);

            height:
              var(--demo26-button-height);

            margin: 0 auto;

            padding:
              0
              22px;

            border: 0;

            border-radius: 6px;

            background: #ffffff;

            color: #012d65 !important;

            font-size: 16px;

            font-weight: 800;

            line-height: 1.1;

            text-align: center;

            text-decoration: none !important;

            text-transform: uppercase;

            box-sizing: border-box;

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }


          .pips-demo26-button:hover {
            background: #ffffff;

            color: #012d65 !important;

            text-decoration: none !important;

            transform: translateY(-2px);

            box-shadow:
              0 10px 28px
              rgba(0, 0, 0, 0.16);
          }


          /* =====================================================
             DEMO PAGE NAVBAR ONLY

             IMPORTANT:
             .sticky is your normal header class.
             .stick is the SCROLLED class.

             So we ONLY use .stick for scroll detection.
          ===================================================== */


          /* =====================================================
             NOT SCROLLED
             SAME LOOK LIKE TYPES OF ACCOUNTS IMAGE 1
          ===================================================== */

          body:has(.pips-demo26-hero)
          .dg__header.header--absolute:not(.stick) {
            background:
              rgba(151, 177, 210, 0.88) !important;

            background-color:
              rgba(151, 177, 210, 0.88) !important;

            backdrop-filter:
              blur(15px)
              saturate(120%) !important;

            -webkit-backdrop-filter:
              blur(15px)
              saturate(120%) !important;

            box-shadow:
              none !important;

            border-bottom:
              1px solid
              rgba(255, 255, 255, 0.12) !important;
          }


          /* =====================================================
             SCROLLED
             SAME LOOK LIKE IMAGE 2
          ===================================================== */

          body:has(.pips-demo26-hero)
          .dg__header.header--absolute.stick {
            background:
              #ffffff !important;

            background-color:
              #ffffff !important;

            backdrop-filter:
              none !important;

            -webkit-backdrop-filter:
              none !important;

            box-shadow:
              0 5px 20px
              rgba(1, 45, 101, 0.08) !important;

            border-bottom:
              1px solid
              rgba(1, 45, 101, 0.05) !important;
          }


          /* =====================================================
             LOGO
             SAME BLUE LOGO BEFORE + AFTER SCROLL
          ===================================================== */

          body:has(.pips-demo26-hero)
          .dg__header
          .logo
          .logo-img {
            opacity: 1 !important;

            visibility: visible !important;

            filter: none !important;
          }


          /* =====================================================
             MOBILE HAMBURGER
             ALWAYS BLUE
          ===================================================== */

          body:has(.pips-demo26-hero)
          .mobile-aside-button,

          body:has(.pips-demo26-hero)
          .mobile-aside-button svg,

          body:has(.pips-demo26-hero)
          .mobile-aside-button svg * {
            color: #012d65 !important;

            fill: #012d65 !important;

            stroke: #012d65 !important;
          }


          /* =====================================================
             LAPTOP
          ===================================================== */

          @media (min-width: 992px) and (max-width: 1199px) {

            .pips-demo26-hero {
              --demo26-height: 700px;

              --demo26-radius: 58px;

              --demo26-title-size: 48px;

              --demo26-description-size: 15px;

              padding:
                100px
                35px
                60px;
            }

          }


          /* =====================================================
             TABLET
          ===================================================== */

          @media (min-width: 768px) and (max-width: 991px) {

            .pips-demo26-hero {
              --demo26-height: 620px;

              --demo26-radius: 46px;

              --demo26-title-size: 40px;

              --demo26-description-size: 14px;

              padding:
                90px
                28px
                50px;
            }


            .pips-demo26-description {
              max-width: 650px;
            }

          }


          /* =====================================================
             MOBILE
          ===================================================== */

          @media (max-width: 767px) {

            .pips-demo26-hero {
              /* =====================================
                 MANUAL MOBILE CONTROLS
              ===================================== */

              --demo26-height: 610px;

              --demo26-radius: 32px;

              --demo26-title-size: 29px;

              --demo26-description-size: 13px;

              --demo26-button-width: 158px;

              --demo26-button-height: 44px;


              height:
                var(--demo26-height);

              min-height:
                var(--demo26-height);


              padding:
                88px
                18px
                40px;


              background-size:
                cover;

              background-position:
                center
                center;


              border-radius:
                0
                0
                var(--demo26-radius)
                var(--demo26-radius);
            }


            .pips-demo26-content {
              max-width: 100%;
            }


            .pips-demo26-title {
              margin-bottom: 12px;

              font-size:
                var(--demo26-title-size);

              line-height: 1.1;

              letter-spacing: -0.4px;
            }


            .pips-demo26-description {
              max-width: 292px;

              margin-bottom: 24px;

              font-size:
                var(--demo26-description-size);

              line-height: 1.5;
            }


            .pips-demo26-button {
              width:
                var(--demo26-button-width);

              min-width:
                var(--demo26-button-width);

              height:
                var(--demo26-button-height);

              padding:
                0
                14px;

              font-size: 10px;
            }

          }
        `}
      </style>


      <section
        className="pips-demo26-hero"
        style={{
          backgroundImage:
            `url("${bannerImage}")`,
        }}
        aria-labelledby="pips-demo26-title"
      >

        <div className="pips-demo26-content">

          <h1
            id="pips-demo26-title"
            className="pips-demo26-title"
          >
            Demo Trading Accounts
          </h1>


          <p className="pips-demo26-description">
            The Pips risk-free demo trading account offers you
            the benefit of sharpening your trading skills and
            strategies, as well as mastering Pips unique trading
            tools without financial risk.
          </p>


          <a
            className="pips-demo26-button"
            href="https://portal.thepips.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Trading Forex
          </a>

        </div>

      </section>
    </>
  );
};

export default BreadcrumbDemoTradingAccount;