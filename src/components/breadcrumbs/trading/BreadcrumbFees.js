import React from "react";

const BreadcrumbFees = () => {
  const bannerImage =
    process.env.PUBLIC_URL +
    "/images/home/accounts-header-blue4.png";

  return (
    <>
      <style>
        {`
          /* =====================================================
             PIPS FEES HERO
             UNIQUE TO THIS PAGE ONLY
          ===================================================== */

          .pips-fees26-hero {
            /* =============================
               MANUAL DESKTOP CONTROLS
            ============================= */

            --fees26-height: 100vh;
            --fees26-radius: 72px;

            --fees26-title-size: 60px;
            --fees26-description-size: 17px;

            --fees26-button-width: 230px;
            --fees26-button-height: 56px;


            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;

            height: var(--fees26-height);
            min-height: var(--fees26-height);

            margin: 0;

            padding:
              110px
              40px
              70px;

            box-sizing: border-box;


            /* =============================
               BACKGROUND IMAGE
            ============================= */

            background-color: #012d65;

            background-repeat: no-repeat;

            background-size: cover;

            background-position:
              center
              center;


            /* =============================
               BOTTOM CURVE
            ============================= */

            border-radius:
              0
              0
              var(--fees26-radius)
              var(--fees26-radius);

            overflow: hidden;
          }


          /* =====================================================
             CONTENT
          ===================================================== */

          .pips-fees26-content {
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

          .pips-fees26-title {
            margin:
              0
              0
              18px;

            padding: 0;

            color: #ffffff !important;

            font-size:
              var(--fees26-title-size);

            line-height: 1.08;

            font-weight: 800;

            letter-spacing: -1.3px;

            text-align: center !important;
          }


          /* =====================================================
             DESCRIPTION
          ===================================================== */

          .pips-fees26-description {
            width: 100%;

            max-width: 850px;

            margin:
              0
              auto
              30px;

            color:
              rgba(255, 255, 255, 0.95) !important;

            font-size:
              var(--fees26-description-size);

            line-height: 1.6;

            text-align: center !important;
          }


          /* =====================================================
             BUTTON
          ===================================================== */

          .pips-fees26-button {
            display: inline-flex;

            align-items: center;
            justify-content: center;

            width:
              var(--fees26-button-width);

            min-width:
              var(--fees26-button-width);

            height:
              var(--fees26-button-height);

            margin: 0 auto;

            padding:
              0
              28px;

            border: 0;

            border-radius: 6px;

            background: #ffffff;

            color: #012d65 !important;

            font-size: 15px;

            font-weight: 800;

            line-height: 1;

            white-space: nowrap;

            text-align: center;

            text-decoration: none !important;

            text-transform: uppercase;

            box-sizing: border-box;

            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }


          .pips-fees26-button:hover {
            background: #ffffff;

            color: #012d65 !important;

            text-decoration: none !important;

            transform: translateY(-2px);

            box-shadow:
              0 10px 28px
              rgba(0, 0, 0, 0.16);
          }


          /* =====================================================
             NAVBAR — FEES PAGE ONLY

             NOT SCROLLED
             LIGHT BLUE + BLUR
          ===================================================== */

          body:has(.pips-fees26-hero)
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
             NAVBAR — AFTER SCROLL
             WHITE
          ===================================================== */

          body:has(.pips-fees26-hero)
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
          ===================================================== */

          body:has(.pips-fees26-hero)
          .dg__header
          .logo
          .logo-img {

            opacity: 1 !important;

            visibility: visible !important;

            filter: none !important;
          }


          /* =====================================================
             HAMBURGER ALWAYS BLUE
          ===================================================== */

          body:has(.pips-fees26-hero)
          .mobile-aside-button,

          body:has(.pips-fees26-hero)
          .mobile-aside-button svg,

          body:has(.pips-fees26-hero)
          .mobile-aside-button svg * {

            color: #012d65 !important;

            fill: #012d65 !important;

            stroke: #012d65 !important;
          }


          /* =====================================================
             LAPTOP
          ===================================================== */

          @media (min-width: 992px) and (max-width: 1199px) {

            .pips-fees26-hero {

              --fees26-height: 100vh;

              --fees26-radius: 58px;

              --fees26-title-size: 50px;

              --fees26-description-size: 16px;

              --fees26-button-width: 220px;

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

            .pips-fees26-hero {

              --fees26-height: 100vh;

              --fees26-radius: 46px;

              --fees26-title-size: 42px;

              --fees26-description-size: 15px;

              --fees26-button-width: 215px;

              padding:
                90px
                28px
                50px;
            }


            .pips-fees26-description {
              max-width: 650px;
            }

          }


          /* =====================================================
             MOBILE
          ===================================================== */

          @media (max-width: 767px) {

            .pips-fees26-hero {

              /* =============================
                 MANUAL MOBILE CONTROLS
              ============================= */

              --fees26-height: 100svh;

              --fees26-radius: 32px;

              --fees26-title-size: 30px;

              --fees26-description-size: 13px;

              --fees26-button-width: 200px;

              --fees26-button-height: 48px;


              height:
                var(--fees26-height);

              min-height:
                var(--fees26-height);


              padding:
                90px
                18px
                42px;


              background-size:
                cover;

              background-position:
                center
                center;


              border-radius:
                0
                0
                var(--fees26-radius)
                var(--fees26-radius);
            }


            .pips-fees26-content {
              max-width: 100%;
            }


            .pips-fees26-title {

              margin-bottom: 12px;

              font-size:
                var(--fees26-title-size);

              line-height: 1.12;

              letter-spacing: -0.4px;
            }


            .pips-fees26-description {

              max-width: 295px;

              margin-bottom: 24px;

              font-size:
                var(--fees26-description-size);

              line-height: 1.5;
            }


            .pips-fees26-button {

              width:
                var(--fees26-button-width);

              min-width:
                var(--fees26-button-width);

              height:
                var(--fees26-button-height);

              padding:
                0
                20px;

              font-size: 13px;

              white-space: nowrap;
            }

          }
        `}
      </style>


      <section
        className="pips-fees26-hero"
        style={{
          backgroundImage:
            `url("${bannerImage}")`,
        }}
        aria-labelledby="pips-fees26-title"
      >

        <div className="pips-fees26-content">

          <h1
            id="pips-fees26-title"
            className="pips-fees26-title"
          >
            Pips Fees
          </h1>


          <p className="pips-fees26-description">
            Focus on trading, not on paying. We've created a
            trading environment that ensures the lowest possible
            costs for our clients.
          </p>


          <a
            className="pips-fees26-button"
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

export default BreadcrumbFees;