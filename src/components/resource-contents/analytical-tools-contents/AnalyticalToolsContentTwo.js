import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AnalyticalToolsContentTwo = () => {
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
                  "/images/resources/analytical_tools/analytical_tools_2.png"
                }
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <h2>Trading signals by Trading Central</h2>

              <p>
                Use Trading Centrals signals to develop your strategies and plan
                your trades. The signals incorporate a variety of analytical
                approaches, providing a valuable tool for traders under all
                market conditions and timeframes.
              </p>
              <p>
                Available in your Personal Area or{" "}
                <a href="/platforms/pips-trade-app" rel="noopener noreferrer">
                  The Pips Trade app
                </a>
                .
              </p>

              <a
                className="slide__btn dg__btn"
                href="https://portal.thepips.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticalToolsContentTwo;
