import React from "react";

const BreadcrumbClientProtection = () => {
  const bannerImage =
    process.env.PUBLIC_URL +
    "/images/home/accounts-header-blue5.png";

  return (
    <>
      <style>
        {`
          /* =====================================================
             CLIENT PROTECTION HERO
             UNIQUE TO THIS PAGE ONLY
          ===================================================== */

          .pips-protect26-hero {
            /* =============================
               MANUAL DESKTOP CONTROLS
            ============================= */

            --protect26-height: 100vh;
            --protect26-radius: 72px;

            --protect26-title-size: 68px;
            --protect26-description-size: 17px;

            --protect26-button-width: 180px;
            --protect26-button-height: 54px;

            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;

            height: var(--protect26-height);
            min-height: var(--protect26-height);

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
            background-position: center center;

            /* =============================
               BOTTOM CURVE
            ============================= */

            border-radius:
              0
              0
              var(--protect26-radius)
              var(--protect26-radius);

            overflow: hidden;
          }


          /* =====================================================
             CENTER CONTENT
          ===================================================== */

          .pips-protect26-content {
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

          .pips-protect26-title {
            margin:
              0
              0
              18px;

            padding: 0;

            color: #ffffff !important;

            font-size:
              var(--protect26-title-size);

            line-height: 1.08;

            font-weight: 800;

            letter-spacing: -1.3px;

            text-align: center !important;
          }


          /* =====================================================
             DESCRIPTION
          ===================================================== */

          .pips-protect26-description {
            width: 100%;
            max-width: 850px;

            margin:
              0
              auto
              30px;

            color:
              rgba(255, 255, 255, 0.95) !important;

            font-size:
              var(--protect26-description-size);

            line-height: 1.6;

            text-align: center !important;
          }


          /* =====================================================
             REGISTER BUTTON
          ===================================================== */

          .pips-protect26-button {
            display: inline-flex;

            align-items: center;
            justify-content: center;

            width:
              var(--protect26-button-width);

            min-width:
              var(--protect26-button-width);

            height:
              var(--protect26-button-height);

            margin: 0 auto;

            padding:
              0
              26px;

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


          .pips-protect26-button:hover {
            background: #ffffff;

            color: #012d65 !important;

            text-decoration: none !important;

            transform: translateY(-2px);

            box-shadow:
              0 10px 28px
              rgba(0, 0, 0, 0.16);
          }


          /* =====================================================
             NAVBAR — CLIENT PROTECTION PAGE ONLY
             NOT SCROLLED
          ===================================================== */

          body:has(.pips-protect26-hero)
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
          ===================================================== */

          body:has(.pips-protect26-hero)
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

          body:has(.pips-protect26-hero)
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

          body:has(.pips-protect26-hero)
          .mobile-aside-button,

          body:has(.pips-protect26-hero)
          .mobile-aside-button svg,

          body:has(.pips-protect26-hero)
          .mobile-aside-button svg * {

            color: #012d65 !important;

            fill: #012d65 !important;

            stroke: #012d65 !important;
          }


          /* =====================================================
             LAPTOP
          ===================================================== */

          @media (min-width: 992px) and (max-width: 1199px) {

            .pips-protect26-hero {

              --protect26-height: 100vh;

              --protect26-radius: 58px;

              --protect26-title-size: 50px;

              --protect26-description-size: 16px;

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

            .pips-protect26-hero {

              --protect26-height: 100vh;

              --protect26-radius: 46px;

              --protect26-title-size: 42px;

              --protect26-description-size: 15px;

              padding:
                90px
                28px
                50px;
            }


            .pips-protect26-description {
              max-width: 650px;
            }

          }


          /* =====================================================
             MOBILE
          ===================================================== */

          @media (max-width: 767px) {

            .pips-protect26-hero {

              /* =============================
                 MANUAL MOBILE CONTROLS
              ============================= */

              --protect26-height: 100svh;

              --protect26-radius: 32px;

              --protect26-title-size: 29px;

              --protect26-description-size: 13px;

              --protect26-button-width: 155px;

              --protect26-button-height: 46px;


              height:
                var(--protect26-height);

              min-height:
                var(--protect26-height);


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
                var(--protect26-radius)
                var(--protect26-radius);
            }


            .pips-protect26-content {
              max-width: 100%;
            }


            .pips-protect26-title {

              margin-bottom: 12px;

              font-size:
                var(--protect26-title-size);

              line-height: 1.12;

              letter-spacing: -0.4px;
            }


            .pips-protect26-description {

              max-width: 295px;

              margin-bottom: 24px;

              font-size:
                var(--protect26-description-size);

              line-height: 1.5;
            }


            .pips-protect26-button {

              width:
                var(--protect26-button-width);

              min-width:
                var(--protect26-button-width);

              height:
                var(--protect26-button-height);

              padding:
                0
                18px;

              font-size: 13px;

              white-space: nowrap;
            }

          }
        `}
      </style>


      <section
        className="pips-protect26-hero"
        style={{
          backgroundImage:
            `url("${bannerImage}")`,
        }}
        aria-labelledby="pips-protect26-title"
      >

        <div className="pips-protect26-content">

          <h1
            id="pips-protect26-title"
            className="pips-protect26-title"
          >
            Account Security and Client Protection
          </h1>


          <p className="pips-protect26-description">
            We are committed to providing a secure trading
            environment, with enhanced account safety, fund
            protection and 24/7 customer support to put you at ease.
          </p>


          <a
            className="pips-protect26-button"
            href="https://portal.thepips.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>

        </div>

      </section>
    </>
  );
};

export default BreadcrumbClientProtection;