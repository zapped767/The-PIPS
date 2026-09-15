// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PipsTradeAppContentThree = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="how__work__platform">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/5.png"})`,
          backgroundSize: isMobile ? "90%" : "50%",
          backgroundPosition: isMobile ? "185% 20%" : "-11% 106%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Portfolio area</h2>
              <p>
                Track your orders in the portfolio area with details like type,
                volume, prices, take profit, stop loss, open time, swap, and
                profit and loss.
              </p>
              <h2>Instruments tabs </h2>
              <p>
                Choose from multiple available chart types and customize them
                with indicators, drawing tools and more. Charting is provided by
                TradingView.
              </p>
              {/* <Link
                className="slide__btn dg__btn"
                to={process.env.PUBLIC_URL + "/company/contact"}
              >
                Access The Terminal Now
              </Link> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="thumb-right">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/platforms/pips_terminal/pips_terminal_2.png"
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

export default PipsTradeAppContentThree;
