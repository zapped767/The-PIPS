import { Link } from "react-router-dom";
import TopicOne from "../../resource-contents/born-to-trade-podcast-contents/TopicOne";
import { useEffect, useState } from "react";

const BornToTradePodcastContentOne = () => {
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
                <h2>Your Weekly Dose of Trading Intelligence</h2>
                <p>
                  Hear from traders and analysts as they break down Forex,
                  Crypto, Stocks, and Commodities, offering practical ideas and
                  real-world perspectives to help you trade with more clarity
                  and confidence.
                </p>
                <Link
                  className="slide__btn dg__btn"
                  to={process.env.PUBLIC_URL + "/company/contact"}
                >
                  Explore Episodes
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="thumb-right">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/resources/born_to_trade_podcast/born_to_trade_1.png"
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

export default BornToTradePodcastContentOne;
