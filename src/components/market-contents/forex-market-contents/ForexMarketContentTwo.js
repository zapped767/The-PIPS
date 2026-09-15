import React from "react";
import { useEffect, useState } from "react";

const ForexMarketContentTwo = () => {
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
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/1.png"})`,
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
                <h2>Forex Trading Examples</h2>
                <p>
                  Review a real-world short position example selling the EUR/USD 
                  currency pair. Understand how initial calculations, underlying market adjustments, 
                  and contract finalization determine gross transaction performance.
                </p>
              </div>
              <img
                style={{ order: isMobile ? 2 : "unset" }}
                src={
                  process.env.PUBLIC_URL +
                  "/images/markets/forex_cfd/forex_2.png"
                }
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <h3>Opening the Position</h3>
              <p>
                The EUR/USD price is 1.33623/1.33624. You sell 2 standard lots 
                (equivalent to €200,000) at the market rate of 1.33623.
              </p>
              <hr className="black-line" />
              <h3>Closing the Position</h3>
              <p>
                One week later, the Euro drops to 1.32128/1.32129. You lock in 
                gains by buying back your 2 standard lots at 1.32129.
              </p>
              <hr className="black-line" />
              <h3>Gross Profit Calculations</h3>
              <p>
                Opening value equals USD $267,246, while closing value settles at 
                USD $264,258. Your net contract financial difference yields a total positive gain.
              </p>
              <hr className="black-line" />
              <h3>Final Trade Results</h3>
              <p>
                Subtracting values shows a gross profit on trade of $2,988, 
                demonstrating shorting performance without holding physical currencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForexMarketContentTwo;