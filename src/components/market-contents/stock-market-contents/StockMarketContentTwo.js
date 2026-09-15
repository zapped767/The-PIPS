import React from "react";
import { useEffect, useState } from "react";

const StockMarketContentTwo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="how__work__market">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/2.png"})`,
          backgroundSize: isMobile ? "90%" : "50%",
          backgroundPosition: isMobile ? "-125% 87%" : "105% 105%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb-left">
              <div
                className="content-left"
                style={{ order: isMobile ? 1 : "unset" }}
              >
                <h2>Stocks Trading Example</h2>
                <p>
                  Review a real-world long position example buying Apple Inc
                  (NASDAQ: AAPL). Understand how anticipated product launches
                  boost prices, how underlying contract points scale, and how
                  overnight position interest changes depending on your market
                  outlook.
                </p>
              </div>
              <img
                style={{ order: isMobile ? 2 : "unset" }}
                src={
                  process.env.PUBLIC_URL +
                  "/images/markets/stocks_cfd/stocks_2.png"
                }
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <h3>Opening the Position</h3>
              <p>
                Apple trades at 150/152. Expecting a sales boost, you buy 100
                shares of AAPL at 152. Each contract point movement equals $1
                USD.
              </p>
              <hr className="black-line" />
              <h3>Position Risk Profiles</h3>
              <p>
                With 100 contracts, every point that the bid quote on AAPL rises
                above 152 yields a $100 profit, while every point below 152
                loses $100.
              </p>
              <hr className="black-line" />
              <h3>Closing the Position</h3>
              <p>
                One month later, following strong sales, the AAPL price
                increases to 170/172. You close out and lock in your returns by
                selling the 100 contracts at 170.
              </p>
              <hr className="black-line" />
              <h3>Gross Profit Calculations</h3>
              <p>
                Opening value stands at $15,200; closing value settles at
                $17,000. Your final gross transaction yields an absolute net
                cash profit on trade of $1,800.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockMarketContentTwo;
