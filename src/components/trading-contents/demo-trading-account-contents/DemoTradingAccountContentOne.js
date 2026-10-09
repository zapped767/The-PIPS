import React from "react";

const DemoTradingAccountContentOne = () => {
  const accountTypes = [
    {
      title: "Risk-free practice",
      description:
        "Learn to trade without financial risk, refining strategies and learning from mistakes.",
      image:
        process.env.PUBLIC_URL +
        "/images/trading/demo_trading_account/demo_acc_1.png",
    },
    {
      title: "Skill development",
      description:
        "Hone trading abilities, from market analysis to decision-making.",
      image:
        process.env.PUBLIC_URL +
        "/images/trading/demo_trading_account/demo_acc_2.png",
    },
    {
      title: "Platform orientation",
      description:
        "Get comfortable with trading platform tools and features.",
      image:
        process.env.PUBLIC_URL +
        "/images/trading/demo_trading_account/demo_acc_3.png",
    },
    {
      title: "Strategy testing",
      description:
        "Experiment with various strategies in real market conditions.",
      image:
        process.env.PUBLIC_URL +
        "/images/trading/demo_trading_account/demo_acc_4.png",
    },
  ];

  return (
    <>
      <style>
        {`
          .pips-demo-old-benefits26 {
            width: 100%;
            padding: 70px 24px 90px;
            background: #ffffff;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          .pips-demo-old-benefits26__header {
            width: 100%;
            max-width: 1000px;
            margin: 0 auto 48px;
            text-align: center;
          }

          .pips-demo-old-benefits26__title {
            margin: 0 0 14px;

            color: #111111 !important;

            font-size: 42px;
            font-weight: 700;
            line-height: 1.18;
          }

          .pips-demo-old-benefits26__description {
            max-width: 900px;
            margin: 0 auto;

            color: #8b8b8b !important;

            font-size: 15px;
            font-weight: 400;
            line-height: 1.6;
          }

          /* ==========================================
             DESKTOP
             2 COLUMNS × 2 ROWS
          ========================================== */

          .pips-demo-old-benefits26__grid {
            display: grid;

            grid-template-columns:
              repeat(2, 550px);

            gap: 28px;

            width: max-content;
            max-width: 100%;

            margin: 0 auto;
          }

          .pips-demo-old-benefits26__card {
            position: relative;

            width: 550px;
            height: 550px;

            overflow: hidden;

            border: 1px solid #e5e5e5;
            border-radius: 4px;

            background-color: #f4f4f4;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;

            box-sizing: border-box;
          }

          .pips-demo-old-benefits26__content {
            position: relative;
            z-index: 2;

            width: 100%;

            padding: 28px 30px;

            box-sizing: border-box;
          }

          .pips-demo-old-benefits26__card-title {
            margin: 0 0 8px;

            color: #111111 !important;
            -webkit-text-fill-color: #111111 !important;

            font-size: 28px;
            font-weight: 700;
            line-height: 1.25;
          }

          .pips-demo-old-benefits26__card-description {
            max-width: 470px;

            margin: 0;

            color: #8a8a8a !important;
            -webkit-text-fill-color: #8a8a8a !important;

            font-size: 15px;
            font-weight: 400;
            line-height: 1.55;
          }

          /* ==========================================
             LAPTOP
          ========================================== */

          @media (min-width: 992px) and (max-width: 1199px) {
            .pips-demo-old-benefits26__grid {
              grid-template-columns:
                repeat(2, minmax(0, 1fr));

              width: 100%;
              max-width: 940px;

              gap: 22px;
            }

            .pips-demo-old-benefits26__card {
              width: 100%;
              height: 460px;
            }

            .pips-demo-old-benefits26__title {
              font-size: 38px;
            }
          }

          /* ==========================================
             TABLET
          ========================================== */

          @media (min-width: 768px) and (max-width: 991px) {
            .pips-demo-old-benefits26 {
              padding: 55px 20px 70px;
            }

            .pips-demo-old-benefits26__grid {
              grid-template-columns:
                repeat(2, minmax(0, 1fr));

              width: 100%;
              max-width: 760px;

              gap: 18px;
            }

            .pips-demo-old-benefits26__card {
              width: 100%;
              height: 370px;
            }

            .pips-demo-old-benefits26__title {
              font-size: 34px;
            }

            .pips-demo-old-benefits26__card-title {
              font-size: 23px;
            }

            .pips-demo-old-benefits26__card-description {
              font-size: 13px;
            }
          }

          /* ==========================================
             MOBILE
          ========================================== */

          @media (max-width: 767px) {
            .pips-demo-old-benefits26 {
              padding: 45px 15px 55px;
            }

            .pips-demo-old-benefits26__header {
              margin-bottom: 30px;
            }

            .pips-demo-old-benefits26__title {
              font-size: 27px;
            }

            .pips-demo-old-benefits26__description {
              font-size: 13px;
            }

            .pips-demo-old-benefits26__grid {
              grid-template-columns: 1fr;

              width: 100%;
              max-width: 430px;

              gap: 18px;
            }

            .pips-demo-old-benefits26__card {
              width: 100%;
              height: 390px;
            }

            .pips-demo-old-benefits26__content {
              padding: 22px 20px;
            }

            .pips-demo-old-benefits26__card-title {
              font-size: 21px;
            }

            .pips-demo-old-benefits26__card-description {
              font-size: 13px;
            }
          }

          @media (max-width: 420px) {
            .pips-demo-old-benefits26__card {
              height: 350px;
            }

            .pips-demo-old-benefits26__title {
              font-size: 25px;
            }
          }
        `}
      </style>

      <section className="pips-demo-old-benefits26">
        <div className="pips-demo-old-benefits26__header">
          <h1 className="pips-demo-old-benefits26__title">
            Benefits of using an Pips demo trading account
          </h1>

          <p className="pips-demo-old-benefits26__description">
            Our demo trading account can be your “secret weapon” to test out
            strategies and hone your skills with zero risk. Here’s how you’ll
            benefit
          </p>
        </div>

        <div className="pips-demo-old-benefits26__grid">
          {accountTypes.map((account) => (
            <article
              key={account.title}
              className="pips-demo-old-benefits26__card"
              style={{
                backgroundImage: `url("${account.image}")`,
              }}
            >
              <div className="pips-demo-old-benefits26__content">
                <h2 className="pips-demo-old-benefits26__card-title">
                  {account.title}
                </h2>

                <p className="pips-demo-old-benefits26__card-description">
                  {account.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default DemoTradingAccountContentOne;