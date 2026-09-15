import { useEffect, useState } from "react";

const PipsTerminalContentFour = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
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
                    "/images/platforms/pips_terminal/pips_terminal_3.png"
                  }
                  alt="computer images"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="content-right">
                <h2>Trading account management</h2>
                <p>
                  View your account details such as trading history, balance,
                  equity, margin, free margin, margin level, and leverage
                  settings in real-time.
                </p>
                <h2>Account types</h2>
                <p>
                  Enjoy flexibility on a web trader platform that is compatible
                  with all pips trading account types that are supported by
                  MetaTrader 5.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PipsTerminalContentFour;
