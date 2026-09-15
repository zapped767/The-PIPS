import { Link } from "react-router-dom";
import TopicOne from "../../resource-contents/analytical-tools-contents/TopicOne";
import { useEffect, useState } from "react";

const AnalyticalToolsContentOne = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <TopicOne />
      <div className="how__work__resource">
        <div
          className="container"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/3.png"})`,
            backgroundSize: isMobile ? "120%" : "60%",
            backgroundPosition: isMobile ? "0% 19%" : "bottom left",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="content-left">
                <h2>Economic Calendar</h2>
                <p>
                  Keep track of high impact news, market-moving economic events
                  and data releases with our Economic Calendar.
                </p>
                <p>
                  Access it on our{" "}
                  <a href="/resources/economic-calendar" rel="noopener noreferrer">
                    website{" "}
                  </a>
                  or the{" "}
                  <a href="/platforms/pips-trade-app" rel="noopener noreferrer">
                    The Pips Trade app
                  </a>
                  .
                </p>
                <a
                  className="slide__btn dg__btn"
                  href="/resources/economic-calendar#economic-calendar-section"
                >
                  Start Analyzing
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="thumb-right">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/resources/analytical_tools/analytical_tools_1.png"
                  }
                  alt="computer images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticalToolsContentOne;
