import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ThePipsInsightsContentThree = () => {
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
              <h2>Empowering Every Trader</h2>
              <p>
                Understand trends, risks, and opportunities in Forex, Crypto,
                Stocks, and Commodities with easy-to-follow market updates, so
                you can make clearer, smarter trading decisions.
              </p>
              <Link
                className="slide__btn dg__btn"
                to={process.env.PUBLIC_URL + "/company/contact"}
              >
                Discover Market Updates
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="thumb-right">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/the_pips_insights/resources_insights_3.png"
                }
                alt="computer images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // </>
  );
};

export default ThePipsInsightsContentThree;
