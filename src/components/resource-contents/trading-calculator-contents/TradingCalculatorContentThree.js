import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TradingCalculatorContentThree = () => {
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
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/5.png"})`,
          backgroundSize: isMobile ? "72%" : "65%",
          backgroundPosition: isMobile ? "77% 15%" : "-20% 110%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>What other tools are available to help with my trades?</h2>
              <p>
                To stay on top of market news, our detailed economic calendar
                lists all the scheduled economic releases, while a real-time
                feed of FXStreet market updates keeps you informed on the latest
                developments in your Personal Area or the app. You can also find
                Trading Central trading signals with various analytical
                approaches for traders under all market conditions and
                timeframes.
              </p>
              <a
                className="slide__btn dg__btn"
                href="https://portal.thepips.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try It Now
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="thumb-right">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/trading_calculator/trading_calculator_3.png"
                }
                alt="computer images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingCalculatorContentThree;
