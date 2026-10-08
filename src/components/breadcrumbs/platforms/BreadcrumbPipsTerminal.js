import React from "react";

const BreadcrumbPipsTerminal = () => {
  const desktopImage =
    process.env.PUBLIC_URL +
    "/images/home/accounts-header-blue3.png";

  return (
    <>
      <style>
        {`
          /* =========================================================
             THE PIPS — PIPS TERMINAL HERO
             UNIQUE PAGE STYLES
          ========================================================= */

          .pips-terminal-hero26 {
            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;

            min-height: 100vh;
            min-height: 100svh;

            padding:
              135px
              32px
              80px;

            background-color: #012d65;

            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            border-radius:
              0
              0
              70px
              70px;

            overflow: hidden;

            box-sizing: border-box;
          }


          /* =========================================================
             LIGHT OVERLAY
          ========================================================= */

          .pips-terminal-hero26::before {
            content: "";

            position: absolute;
            inset: 0;

            background:
              linear-gradient(
                90deg,
                rgba(1, 45, 101, 0.08) 0%,
                rgba(1, 45, 101, 0.02) 50%,
                rgba(1, 45, 101, 0.04) 100%
              );

            pointer-events: none;

            z-index: 0;
          }


          /* =========================================================
             CONTENT
          ========================================================= */

          .pips-terminal-hero26__content {
            position: relative;
            z-index: 1;

            display: flex;
            flex-direction: column;

            align-items: center;
            justify-content: center;

            width: 100%;
            max-width: 1100px;

            margin: 0 auto;

            text-align: center;
          }


          /* =========================================================
             TITLE
          ========================================================= */

          .pips-terminal-hero26__title {
            width: 100%;

            margin:
              0
              0
              22px;

            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;

            font-size: clamp(48px, 5vw, 84px);
            font-weight: 800;

            line-height: 1.05;

            letter-spacing: -0.035em;

            text-align: center;
          }


          /* =========================================================
             DESCRIPTION
          ========================================================= */

          .pips-terminal-hero26__description {
            width: 100%;
            max-width: 720px;

            margin:
              0
              auto
              34px;

            color:
              rgba(255, 255, 255, 0.96) !important;

            -webkit-text-fill-color:
              rgba(255, 255, 255, 0.96) !important;

            font-size: clamp(16px, 1.25vw, 21px);
            font-weight: 400;

            line-height: 1.6;

            text-align: center;
          }


          /* =========================================================
             BUTTON
          ========================================================= */

          .pips-terminal-hero26__button {
            display: inline-flex;

            align-items: center;
            justify-content: center;

            min-width: 235px;
            min-height: 54px;

            padding:
              14px
              30px;

            background: #ffffff;

            color: #012d65 !important;
            -webkit-text-fill-color: #012d65 !important;

            border:
              1px solid
              rgba(255, 255, 255, 0.85);

            border-radius: 6px;

            font-size: 15px;
            font-weight: 800;

            line-height: 1;

            text-align: center;

            text-decoration: none !important;

            text-transform: uppercase;

            white-space: nowrap;

            box-shadow:
              0 10px 30px
              rgba(0, 0, 0, 0.10);

            transition:
              background-color 0.25s ease,
              color 0.25s ease,
              transform 0.25s ease,
              box-shadow 0.25s ease;
          }


          .pips-terminal-hero26__button:hover {
            background: #035391;

            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;

            border-color: #035391;

            transform: translateY(-2px);

            box-shadow:
              0 14px 34px
              rgba(0, 0, 0, 0.16);
          }


          /* =========================================================
             PIPS TERMINAL PAGE NAVBAR
             TOP = LIGHT BLUE GLASS
             SCROLL = WHITE
          ========================================================= */

          body:has(.pips-terminal-hero26)
          .dg__header.header--absolute,
          body:has(.pips-terminal-hero26)
          .header--absolute {
            position: fixed !important;

            top: 0 !important;
            left: 0 !important;
            right: 0 !important;

            width: 100% !important;

            margin-top: 0 !important;

            z-index: 1000 !important;

            transition:
              background-color 0.3s ease,
              box-shadow 0.3s ease,
              backdrop-filter 0.3s ease !important;
          }


          /* =========================================================
             BEFORE SCROLL
          ========================================================= */

          body:has(.pips-terminal-hero26)
          .dg__header.header--absolute:not(.stick),
          body:has(.pips-terminal-hero26)
          .header--absolute:not(.stick) {
            background:
              rgba(147, 174, 207, 0.72) !important;

            backdrop-filter:
              blur(16px)
              saturate(125%) !important;

            -webkit-backdrop-filter:
              blur(16px)
              saturate(125%) !important;

            box-shadow:
              0 1px 0
              rgba(255, 255, 255, 0.30) !important;
          }


          /* =========================================================
             AFTER SCROLL
          ========================================================= */

          body:has(.pips-terminal-hero26)
          .dg__header.header--absolute.stick,
          body:has(.pips-terminal-hero26)
          .header--absolute.stick {
            background: #ffffff !important;

            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;

            box-shadow:
              0 6px 24px
              rgba(1, 45, 101, 0.10) !important;
          }


          /* =========================================================
             NAVIGATION TEXT
          ========================================================= */

          body:has(.pips-terminal-hero26)
          .header--absolute
          nav a,
          body:has(.pips-terminal-hero26)
          .header--absolute
          .mainmenu a {
            color: #111111 !important;
            -webkit-text-fill-color: #111111 !important;
          }


          /* =========================================================
             LOGO
          ========================================================= */

          body:has(.pips-terminal-hero26)
          .header--absolute
          .logo img {
            opacity: 1 !important;
            filter: none !important;
          }


          /* =========================================================
             MOBILE HAMBURGER
          ========================================================= */

          body:has(.pips-terminal-hero26)
          .mobile-aside-button {
            color: #012d65 !important;

            background: transparent !important;

            border: 0 !important;
          }


          body:has(.pips-terminal-hero26)
          .mobile-aside-button svg,
          body:has(.pips-terminal-hero26)
          .mobile-aside-button svg * {
            color: #012d65 !important;

            fill: #012d65 !important;
            stroke: #012d65 !important;
          }


          /* =========================================================
             LAPTOP / TABLET
          ========================================================= */

          @media (max-width: 1199px) {

            .pips-terminal-hero26 {
              min-height: 720px;

              padding:
                125px
                28px
                70px;

              background-position: center;

              border-radius:
                0
                0
                52px
                52px;
            }


            .pips-terminal-hero26__title {
              font-size: clamp(44px, 6vw, 68px);
            }


            .pips-terminal-hero26__description {
              max-width: 640px;

              font-size: 17px;
            }

          }


          /* =========================================================
             TABLET
          ========================================================= */

          @media (max-width: 991px) {

            .pips-terminal-hero26 {
              min-height: 650px;

              padding:
                115px
                24px
                60px;

              border-radius:
                0
                0
                42px
                42px;
            }


            .pips-terminal-hero26__title {
              margin-bottom: 18px;

              font-size: 48px;
            }


            .pips-terminal-hero26__description {
              max-width: 560px;

              margin-bottom: 28px;

              font-size: 16px;
            }

          }


          /* =========================================================
             MOBILE
          ========================================================= */

          @media (max-width: 767px) {

            .pips-terminal-hero26 {
              min-height: 560px;

              padding:
                105px
                20px
                50px;

              background-position: 62% center;

              border-radius:
                0
                0
                30px
                30px;
            }


            .pips-terminal-hero26__content {
              max-width: 100%;
            }


            .pips-terminal-hero26__title {
              margin-bottom: 16px;

              font-size: clamp(34px, 9vw, 44px);

              line-height: 1.08;
            }


            .pips-terminal-hero26__description {
              max-width: 330px;

              margin-bottom: 26px;

              font-size: 14px;

              line-height: 1.5;
            }


            .pips-terminal-hero26__button {
              min-width: 220px;
              min-height: 48px;

              padding:
                12px
                20px;

              font-size: 12px;
            }

          }


          /* =========================================================
             REDUCED MOTION
          ========================================================= */

          @media (prefers-reduced-motion: reduce) {

            .pips-terminal-hero26__button,
            body:has(.pips-terminal-hero26)
            .header--absolute {
              transition: none !important;
            }

          }
        `}
      </style>


      <section
        className="pips-terminal-hero26"
        style={{
          backgroundImage: `url("${desktopImage}")`,
        }}
      >

        <div className="pips-terminal-hero26__content">

          <h1 className="pips-terminal-hero26__title">
            The Pips Terminal
          </h1>


          <p className="pips-terminal-hero26__description">
            Unleash your trading potential with The Pips web
            trading terminal, built with powerful tools, advanced
            functionality and a seamless trading experience.
          </p>


          <a
            className="pips-terminal-hero26__button"
            href="https://portal.thepips.com/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch The Pips Terminal
          </a>

        </div>

      </section>
    </>
  );
};

export default BreadcrumbPipsTerminal;