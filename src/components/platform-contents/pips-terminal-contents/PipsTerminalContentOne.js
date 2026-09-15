import TopicOne from "../../../components/platform-contents/pips-terminal-contents/TopicOne";
import { useEffect, useState } from "react";

const PipsTradeAppContentFive = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <TopicOne />

      <div className="how__work__platform">
        <div
          className="container"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/2.png"})`,
            backgroundSize: isMobile ? "90%" : "50%",
            backgroundPosition: isMobile ? "-105% 44%" : "100% 120%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row reverse-mobile">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="thumb-left">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/platforms/pips_terminal/pips_terminal_1.png"
                  }
                  alt="computer images"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="content-right">
                <h2>Watchlist</h2>
                <p>
                  Get real-time prices and movements on the pips Terminal
                  watchlist which hosts lists of all available trading
                  instruments.
                </p>
                <h2>One-click trading mode</h2>
                <p>
                  Open and close orders instantly choosing from a tile list of
                  instruments to trade and using the Limit Order field for
                  pending orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PipsTradeAppContentFive;
