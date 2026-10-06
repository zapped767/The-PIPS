import React from "react";

const DemoTradingAccountContentOne = () => {
  const accountTypes = [
    {
      title: "Risk-free Practice",
      description:
        "Learn to trade without financial risk, refining strategies and learning from mistakes.",
      image:
        process.env.PUBLIC_URL +
        "/images/trading/demo_trading_account/demo_acc_1.png",
    },
    {
      title: "Skill Development",
      description:
        "Hone trading abilities, from market analysis to decision-making.",
      image:
        process.env.PUBLIC_URL +
        "/images/trading/demo_trading_account/demo_acc_2.png",
    },
    {
      title: "Platform Orientation",
      description: "Get comfortable with trading platform tools and features.",
      image:
        process.env.PUBLIC_URL +
        "/images/trading/demo_trading_account/demo_acc_3.png",
    },
    {
      title: "Strategy Testing",
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
          .pips-demo-benefits26 {
            --demo-benefits-max-width: 1500px;
            --demo-benefits-padding-top: 70px;
            --demo-benefits-padding-bottom: 80px;
            --demo-benefits-title-size: 48px;
            --demo-benefits-description-size: 15px;
            --demo-benefits-card-height: 400px;
            --demo-benefits-card-radius: 10px;

            width: 100%;
            padding: var(--demo-benefits-padding-top) 24px var(--demo-benefits-padding-bottom);
            background: #ffffff;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          .pips-demo-benefits26__header {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto 48px;
            text-align: center;
          }

          .pips-demo-benefits26__title {
            margin: 0 0 16px;
            color: #012d65 !important;
            font-size: var(--demo-benefits-title-size);
            font-weight: 800;
            line-height: 1.15;
            letter-spacing: -1px;
            text-align: center;
          }

          .pips-demo-benefits26__subtitle {
            max-width: 1000px;
            margin: 0 auto;
            color: #626b78 !important;
            font-size: var(--demo-benefits-description-size);
            font-weight: 400;
            line-height: 1.65;
            text-align: center;
          }

          .pips-demo-benefits26__grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 18px;
            width: 100%;
            max-width: var(--demo-benefits-max-width);
            margin: 0 auto;
          }

          .pips-demo-benefits26__card {
            position: relative;
            width: 100%;
            height: var(--demo-benefits-card-height);
            overflow: hidden;
            border-radius: var(--demo-benefits-card-radius);
            background-color: #012d65;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            box-sizing: border-box;
            transition: transform 0.35s ease, box-shadow 0.35s ease;
          }

          .pips-demo-benefits26__card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 45px rgba(1, 45, 101, 0.18);
          }

          .pips-demo-benefits26__card-content {
            position: relative;
            z-index: 2;
            width: 100%;
            padding: 24px 22px;
            box-sizing: border-box;
          }

          .pips-demo-benefits26__card-title {
            margin: 0 0 8px;
            color: #012d65 !important;
            font-size: 22px;
            font-weight: 700;
            line-height: 1.25;
          }

          .pips-demo-benefits26__card-description {
            max-width: 100%;
            margin: 0;
            color: #354359 !important;
            font-size: 13px;
            font-weight: 400;
            line-height: 1.55;
          }

          /* Card 1 text white */
          .pips-demo-benefits26__card--1 .pips-demo-benefits26__card-title,
          .pips-demo-benefits26__card--1 .pips-demo-benefits26__card-description {
            color: #012d65 !important;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          }

          /* Card 2 text white */
          .pips-demo-benefits26__card--2 .pips-demo-benefits26__card-title,
          .pips-demo-benefits26__card--2 .pips-demo-benefits26__card-description {
            color: #ffffff !important;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          }

          /* Card 3 text white */
          .pips-demo-benefits26__card--3 .pips-demo-benefits26__card-title,
          .pips-demo-benefits26__card--3 .pips-demo-benefits26__card-description {
            color: #ffffff !important;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          }

          @media (max-width: 1199px) {
            .pips-demo-benefits26 {
              --demo-benefits-title-size: 42px;
              --demo-benefits-card-height: 390px;
            }

            .pips-demo-benefits26__grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              max-width: 950px;
              gap: 20px;
            }
          }

          @media (max-width: 991px) {
            .pips-demo-benefits26 {
              --demo-benefits-padding-top: 55px;
              --demo-benefits-padding-bottom: 65px;
              --demo-benefits-title-size: 36px;
              padding-left: 20px;
              padding-right: 20px;
            }

            .pips-demo-benefits26__header {
              margin-bottom: 38px;
            }
          }

          @media (max-width: 767px) {
            .pips-demo-benefits26 {
              --demo-benefits-padding-top: 45px;
              --demo-benefits-padding-bottom: 55px;
              --demo-benefits-title-size: 29px;
              --demo-benefits-description-size: 13px;
              --demo-benefits-card-height: 390px;
              padding-left: 15px;
              padding-right: 15px;
            }

            .pips-demo-benefits26__header {
              margin-bottom: 30px;
            }

            .pips-demo-benefits26__title {
              line-height: 1.2;
              letter-spacing: -0.4px;
            }

            .pips-demo-benefits26__subtitle {
              max-width: 340px;
              line-height: 1.55;
            }

            .pips-demo-benefits26__grid {
              grid-template-columns: 1fr;
              max-width: 430px;
              gap: 18px;
            }

            .pips-demo-benefits26__card-content {
              padding: 22px 20px;
            }

            .pips-demo-benefits26__card-title {
              font-size: 21px;
            }

            .pips-demo-benefits26__card-description {
              font-size: 13px;
            }
          }

          @media (max-width: 420px) {
            .pips-demo-benefits26 {
              --demo-benefits-title-size: 26px;
              --demo-benefits-card-height: 360px;
            }

            .pips-demo-benefits26__card-title {
              font-size: 19px;
            }
          }
            /* CARD 3 - MOVE BACKGROUND IMAGE DOWN */
.pips-demo-benefits26__card--3 {
  background-position: center 30px;
}
        `}
      </style>

      <section className="pips-demo-benefits26">
        <div className="pips-demo-benefits26__header">
          <h1 className="pips-demo-benefits26__title">
            Benefits of Using A Pips Demo Trading Account
          </h1>

          <p className="pips-demo-benefits26__subtitle">
            Our Demo Trading Account Can Be Your “Secret Weapon” To Test Out
            Strategies And Hone Your Skills With Zero Risk. Here’s How You’ll
            Benefit
          </p>
        </div>

        <div className="pips-demo-benefits26__grid">
          {accountTypes.map((account, index) => (
            <article
              key={account.title}
              className={`pips-demo-benefits26__card pips-demo-benefits26__card--${
                index + 1
              }`}
              style={{
                backgroundImage: `url("${account.image}")`,
              }}
            >
              <div className="pips-demo-benefits26__card-content">
                <h2 className="pips-demo-benefits26__card-title">
                  {account.title}
                </h2>

                <p className="pips-demo-benefits26__card-description">
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