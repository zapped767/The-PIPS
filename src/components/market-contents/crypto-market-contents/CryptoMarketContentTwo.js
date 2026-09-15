import { useEffect, useState } from "react";

const CryptoMarketContentTwo = () => {
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
                <h2>Bitcoin CFD Trading Example</h2>

                <p>
                  Review a live transaction scenario executing a buy position on
                  Bitcoin against the US Dollar (BTCUSD). Understand how price
                  fluctuations per contract influence total trade values, margin
                  calculations, and the gross returns generated over the
                  lifespan of a running position.
                </p>
              </div>
              <img
                style={{ order: isMobile ? 2 : "unset" }}
                src={
                  process.env.PUBLIC_URL +
                  "/images/markets/crypto_cfd/crypto_2.png"
                }
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <h3>Opening the Position</h3>
              <p>
                The market price of Bitcoin CFD against the US Dollar sits at
                3900.25/3910.25. Anticipating upward momentum, you buy 2
                contracts at the ask price of 3910.25, establishing an initial
                entry point value of $7,820.50.
              </p>
              <hr className="black-line" />

              <h3>Closing the Position</h3>
              <p>
                One month later, the Bitcoin CFD valuation has successfully
                increased to 4200.50/4210.50. You close out your market exposure
                to capture the accrued profits by selling your 2 contracts at
                the current bid rate of 4200.50 each.
              </p>
              <hr className="black-line" />

              <h3>Gross Profit Calculation</h3>
              <p>
                Your final closing price values your total assets at USD
                $8,401.00. Subtracting your opening execution price of $7,820.50
                from your closing price value yields an exact final gross profit
                of USD $580.50 on the trade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoMarketContentTwo;
