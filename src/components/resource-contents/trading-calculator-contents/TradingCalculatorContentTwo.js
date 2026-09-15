import { useEffect, useState } from "react";

const TradingCalculatorContentTwo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="how__work__resource">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/1.png"})`,
          backgroundSize: isMobile ? "120%" : "60%",
          backgroundPosition: isMobile ? "0% 35%" : "123% 106%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row reverse-mobile">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/trading_calculator/trading_calculator_2.png"
                }
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <h2>What is a trading calculator in forex?</h2>
              <p>
                A forex trade calculator is an essential preparation tool that
                helps traders estimate key metrics such as the required margin,
                trading costs, and pip value before entering a trade.
              </p>

              <p>
                A solid trading plan is essential in the unpredictable forex
                market. With high liquidity amplifying even minor price shifts,
                the trading calculator becomes a vital tool for managing risk
                and exposure.
              </p>

              <p>
                Forex calculations revolve around pip value and movement, which
                directly impact your returns and margin. With high leverage and
                liquidity, even small price changes can lead to significant
                gains or losses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingCalculatorContentTwo;
