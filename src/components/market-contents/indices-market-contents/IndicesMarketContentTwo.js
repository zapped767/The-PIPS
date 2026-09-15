import React from "react";
import { useEffect, useState } from "react";

const IndicesMarketContentTwo = () => {
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
                <h2>Indices Trading Example</h2>
                <p>
                  Review a practical long position example buying the Australia
                  200 Index. Understand how believing blue-chip shares are
                  undervalued allows you to capitalize on index points, and see
                  how contract point scaling impacts your overall return with
                  zero commissions charged on major indices.
                </p>
              </div>
              <img
                style={{ order: isMobile ? 2 : "unset" }}
                src={
                  process.env.PUBLIC_URL +
                  "/images/markets/indices_cfd/indices_2.png"
                }
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <h3>Opening the Position</h3>
              <p>
                The Australia 200 Index trades at 4950.00/4951.00. Expecting a
                market rally, you decide to purchase 2 contracts at the ask
                price of 4951.00.
              </p>
              <hr className="black-line" />

              <h3>Contract Point Value</h3>
              <p>
                For this instrument, one contract is equal to $1 per index
                point. No commission is charged on Indices, keeping your
                transaction structure highly competitive.
              </p>
              <hr className="black-line" />

              <h3>Closing the Position</h3>
              <p>
                Four days later, the Australia 200 Index rises to
                4970.00/4971.00. You close your profitable position by selling
                your 2 contracts at the bid price of 4970.00.
              </p>
              <hr className="black-line" />

              <h3>Gross Profit on Trade</h3>
              <p>
                The difference between your entries is 19 points. Your gross
                profit is calculated as 19.00 points × 2 contracts ($2 per
                point), yielding a total of AUD $38.00.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicesMarketContentTwo;
