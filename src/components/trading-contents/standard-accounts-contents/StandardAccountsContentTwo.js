import { useState } from "react";

const StandardAccountsContentTwo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "What account types are available at The Pips?",
      text:
        "The Pips offers Essential, Prime, Prestige, Black, and VIP Elite accounts to suit traders with different experience levels and investment goals.",
    },
    {
      title: "How do I choose the right account type?",
      text:
        "Choose an account based on your preferred trading conditions, available capital, and the range of instruments you wish to access.",
    },
    {
      title: "What is the minimum deposit for each account?",
      text:
        "Minimum deposits start from $500 for Essential accounts and increase across higher tiers, reaching $100,000 for VIP Elite accounts.",
    },
    {
      title: "Do higher-tier accounts offer better trading conditions?",
      text:
        "Yes, higher-tier accounts provide access to more instruments and tighter spreads, offering enhanced trading conditions for active traders.",
    },
    {
      title: "Can I upgrade my account type later?",
      text:
        "Yes, you can move to a higher account tier by meeting the relevant deposit and account requirements.",
    },
    {
      title: "What markets can I trade with these accounts?",
      text:
        "Depending on your account type, you can access a wide range of instruments across Forex, Commodities, Indices, Stocks, Cryptocurrencies, and more.",
    },
  ];

  const faqImage =
    process.env.PUBLIC_URL +
    "/images/trading/standard_accounts/standard_acc.png";

  return (
    <>
      <style>
        {`
          /* =========================================================
             THE PIPS PREMIUM FAQ
             UNIQUE STYLES
             WHITE CARDS + BLUE TEXT
          ========================================================= */

          .pips-faq-premium26 {
            position: relative;

            width: 100%;

            margin: 0;
            padding: 76px 0 90px;

            background: #012d65;

            /* ONLY BOTTOM CURVE */
            border-radius:
              0
              0
              64px
              64px;

            overflow: hidden;

            box-sizing: border-box;
          }


          /* =========================================================
             MAIN CONTAINER
          ========================================================= */

          .pips-faq-premium26__container {
            position: relative;

            width: calc(100% - 80px);
            max-width: 1500px;

            margin: 0 auto;

            box-sizing: border-box;
          }


          /* =========================================================
             CENTERED FAQ TITLE
          ========================================================= */

          .pips-faq-premium26__heading {
            display: flex;

            align-items: center;
            justify-content: center;

            width: 100%;

            margin: 0 0 48px;

            text-align: center;
          }


          .pips-faq-premium26__heading-text {
            width: 100%;

            margin: 0;

            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;

            font-size: clamp(38px, 3.5vw, 60px);
            font-weight: 800;

            line-height: 1.08;

            letter-spacing: -0.025em;

            text-align: center !important;
          }


          /* =========================================================
             LEFT IMAGE + RIGHT FAQ
          ========================================================= */

          .pips-faq-premium26__grid {
            display: grid;

            grid-template-columns:
              minmax(0, 0.95fr)
              minmax(0, 1.05fr);

            gap: 48px;

            align-items: stretch;
          }


          /* =========================================================
             LEFT WHITE IMAGE CONTAINER
          ========================================================= */

          .pips-faq-premium26__visual {
            position: relative;

            width: 100%;
            min-height: 610px;

            padding: 18px;

            display: flex;
            align-items: center;
            justify-content: center;

            background: #ffffff;

            border: none;

            border-radius: 30px;

            box-shadow:
              0 18px 45px
              rgba(0, 0, 0, 0.12);

            overflow: hidden;

            box-sizing: border-box;
          }


          .pips-faq-premium26__visual img {
            display: block;

            width: 100%;
            max-width: 620px;

            height: 100%;
            max-height: 650px;

            object-fit: cover;
            object-position: center;

            border-radius: 22px;
          }


          /* =========================================================
             RIGHT WHITE FAQ CONTAINER
          ========================================================= */

          .pips-faq-premium26__content {
            width: 100%;

            padding: 24px;

            background: #ffffff;

            border: none;

            border-radius: 30px;

            box-shadow:
              0 18px 45px
              rgba(0, 0, 0, 0.12);

            box-sizing: border-box;
          }


          /* =========================================================
             FAQ ITEM
          ========================================================= */

          .pips-faq-premium26__item {
            width: 100%;

            margin-bottom: 12px;

            background: #ffffff;

            border:
              1px solid
              rgba(1, 45, 101, 0.14);

            border-radius: 16px;

            overflow: hidden;

            transition:
              border-color 0.25s ease,
              box-shadow 0.25s ease,
              transform 0.25s ease;
          }


          .pips-faq-premium26__item:last-child {
            margin-bottom: 0;
          }


          .pips-faq-premium26__item:hover {
            border-color:
              rgba(1, 45, 101, 0.34);

            box-shadow:
              0 8px 24px
              rgba(1, 45, 101, 0.08);
          }


          .pips-faq-premium26__item--open {
            border-color: #035391;

            box-shadow:
              0 10px 28px
              rgba(1, 45, 101, 0.10);
          }


          /* =========================================================
             FAQ QUESTION BUTTON
          ========================================================= */

          .pips-faq-premium26__question {
            width: 100%;
            min-height: 74px;

            padding:
              18px
              20px;

            display: flex;

            align-items: center;
            justify-content: space-between;

            gap: 20px;

            background: #ffffff;

            border: none;

            cursor: pointer;

            text-align: left;

            box-sizing: border-box;
          }


          .pips-faq-premium26__question h3 {
            margin: 0;

            color: #012d65 !important;
            -webkit-text-fill-color: #012d65 !important;

            font-size: clamp(15px, 1.15vw, 18px);
            font-weight: 700;

            line-height: 1.4;

            text-transform: none;
          }


          /* =========================================================
             PLUS / MINUS ICON
          ========================================================= */

          .pips-faq-premium26__icon {
            flex:
              0
              0
              38px;

            width: 38px;
            height: 38px;

            display: inline-flex;

            align-items: center;
            justify-content: center;

            border-radius: 50%;

            background: #012d65;

            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;

            font-size: 23px;
            font-weight: 500;

            line-height: 1;

            transition:
              transform 0.3s ease,
              background-color 0.3s ease;
          }


          .pips-faq-premium26__item:hover
          .pips-faq-premium26__icon {
            background: #035391;
          }


          .pips-faq-premium26__item--open
          .pips-faq-premium26__icon {
            transform: rotate(180deg);
          }


          /* =========================================================
             ANSWER
          ========================================================= */

          .pips-faq-premium26__answer {
            display: grid;

            grid-template-rows: 0fr;

            background: #ffffff;

            transition:
              grid-template-rows 0.35s ease;
          }


          .pips-faq-premium26__answer--open {
            grid-template-rows: 1fr;
          }


          .pips-faq-premium26__answer-inner {
            overflow: hidden;
          }


          .pips-faq-premium26__answer p {
            margin:
              0
              20px
              20px;

            padding:
              18px
              0
              0;

            border-top:
              1px solid
              rgba(1, 45, 101, 0.12);

            color: #012d65 !important;
            -webkit-text-fill-color: #012d65 !important;

            font-size: 15px;
            font-weight: 400;

            line-height: 1.7;
          }


          /* =========================================================
             TABLET
             <= 991PX
          ========================================================= */

          @media (max-width: 991px) {

            .pips-faq-premium26 {
              padding:
                60px
                0
                72px;

              border-radius:
                0
                0
                48px
                48px;
            }


            .pips-faq-premium26__container {
              width: calc(100% - 48px);
            }


            .pips-faq-premium26__heading {
              margin-bottom: 36px;
            }


            .pips-faq-premium26__heading-text {
              font-size: clamp(34px, 5vw, 48px);
            }


            .pips-faq-premium26__grid {
              grid-template-columns: 1fr;

              gap: 28px;
            }


            .pips-faq-premium26__visual {
              min-height: 0;

              padding: 16px;

              border-radius: 26px;
            }


            .pips-faq-premium26__visual img {
              width: 100%;
              max-width: 650px;

              height: auto;

              aspect-ratio: 1 / 1;

              object-fit: cover;

              border-radius: 20px;
            }


            .pips-faq-premium26__content {
              padding: 18px;

              border-radius: 26px;
            }

          }


          /* =========================================================
             MOBILE
             <= 767PX
          ========================================================= */

          @media (max-width: 767px) {

            .pips-faq-premium26 {
              padding:
                44px
                0
                54px;

              border-radius:
                0
                0
                32px
                32px;
            }


            .pips-faq-premium26__container {
              width: calc(100% - 28px);
            }


            .pips-faq-premium26__heading {
              margin-bottom: 28px;
            }


            .pips-faq-premium26__heading-text {
              font-size: 30px;
              line-height: 1.1;
            }


            .pips-faq-premium26__grid {
              gap: 20px;
            }


            .pips-faq-premium26__visual {
              padding: 10px;

              border-radius: 22px;
            }


            .pips-faq-premium26__visual img {
              border-radius: 16px;
            }


            .pips-faq-premium26__content {
              padding: 12px;

              border-radius: 22px;
            }


            .pips-faq-premium26__item {
              margin-bottom: 9px;

              border-radius: 13px;
            }


            .pips-faq-premium26__question {
              min-height: 64px;

              padding:
                15px
                14px;

              gap: 12px;
            }


            .pips-faq-premium26__question h3 {
              font-size: 14px;
              line-height: 1.4;
            }


            .pips-faq-premium26__icon {
              flex-basis: 32px;

              width: 32px;
              height: 32px;

              font-size: 19px;
            }


            .pips-faq-premium26__answer p {
              margin:
                0
                14px
                16px;

              padding-top: 14px;

              font-size: 13px;
              line-height: 1.6;
            }

          }
        `}
      </style>


      <section className="pips-faq-premium26">

        <div className="pips-faq-premium26__container">


          {/* =========================================
              CENTERED TITLE
          ========================================== */}

          <div className="pips-faq-premium26__heading">

            <h2 className="pips-faq-premium26__heading-text">
              Frequently Asked Questions
            </h2>

          </div>


          {/* =========================================
              LEFT IMAGE + RIGHT FAQ
          ========================================== */}

          <div className="pips-faq-premium26__grid">


            {/* LEFT WHITE IMAGE CONTAINER */}

            <div className="pips-faq-premium26__visual">

              <img
                src={faqImage}
                alt="The PIPS trading accounts"
              />

            </div>


            {/* RIGHT WHITE FAQ CONTAINER */}

            <div className="pips-faq-premium26__content">

              {sections.map((section, index) => {

                const isOpen = openIndex === index;

                return (

                  <div
                    key={index}
                    className={`pips-faq-premium26__item ${
                      isOpen
                        ? "pips-faq-premium26__item--open"
                        : ""
                    }`}
                  >

                    <button
                      type="button"
                      className="pips-faq-premium26__question"
                      onClick={() => toggleSection(index)}
                      aria-expanded={isOpen}
                    >

                      <h3>
                        {section.title}
                      </h3>


                      <span
                        className="pips-faq-premium26__icon"
                        aria-hidden="true"
                      >
                        {isOpen ? "−" : "+"}
                      </span>

                    </button>


                    <div
                      className={`pips-faq-premium26__answer ${
                        isOpen
                          ? "pips-faq-premium26__answer--open"
                          : ""
                      }`}
                    >

                      <div className="pips-faq-premium26__answer-inner">

                        <p>
                          {section.text}
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default StandardAccountsContentTwo;