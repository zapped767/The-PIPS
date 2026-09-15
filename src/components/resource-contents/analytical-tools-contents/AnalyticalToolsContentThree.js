import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AnalyticalToolsContentThree = () => {
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
              <h2>Market news by FXStreet</h2>
              <p>
                Stay up-to-date with a real-time feed of market news and the
                latest updates from the team at FXStreet News.
              </p>
              <p>
                Available in your Personal Area or{" "}
                <a href="/platforms/pips-trade-app" rel="noopener noreferrer">
                  The Pips Trade app
                </a>
                .
              </p>
              <div>
                <a
                  className="slide__btn dg__btn"
                  href="https://portal.thepips.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discover the Tools
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="thumb-right">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/analytical_tools/analytical_tools_3.png"
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

export default AnalyticalToolsContentThree;
