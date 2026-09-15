// import TopicOne from "../pips-terminal-contents/TopicOne";
import { useEffect, useState } from "react";

const PipsTradeAppContentOne = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* <TopicOne /> */}

      <div className="how__work__platform">
        <div
          className="container"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/2.png"})`,
            backgroundSize: isMobile ? "70%" : "50%",
            backgroundPosition: isMobile ? "8% 25%" : "110% 110%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row reverse-mobile">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="thumb-left">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/platforms/pips_trade_app/trade_app_1.png"
                  }
                  alt="computer images"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="content-right">
                <h2>Upgrade your mobile trading experience</h2>
                <p>
                  The Pips Trade app is designed for easy access to financial
                  markets. With our user-friendly platform, low fees and
                  comprehensive range of trading options, we are committed to
                  empowering you to trade with confidence.
                </p>
                <p>
                  Download our app today and discover the full suite of
                  innovative features and better-than-market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PipsTradeAppContentOne;
