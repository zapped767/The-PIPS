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
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/3.png"})`,
          backgroundSize: isMobile ? "70%" : "50%",
          backgroundPosition: isMobile ? "8% 26%" : "0% 110%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Analytical resources</h2>

              <p className="intro-text">
                Build your portfolio with confidence with our up-to-date market
                analysis and other resources.
              </p>

              <div className="resource-list">
                <div className="resource-item">
                  <h4>Trading Central signals</h4>
                  <p>
                    Plan strategies with signals that incorporate various
                    analytical approaches.
                  </p>
                </div>

                <div className="resource-item">
                  <h4>Economic calendar</h4>
                  <p>
                    Track high-impact news, key economic events, and data
                    releases.
                  </p>
                </div>

                <div className="resource-item">
                  <h4>FXStreet market news</h4>
                  <p>
                    Stay current with real-time market news and latest updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="thumb-right">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/platforms/pips_trade_app/trade_app_2.png"
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
