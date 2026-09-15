import { useEffect, useState } from "react";
const PipsTradeAppContentFour = () => {
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
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/12.png"})`,
          backgroundSize: isMobile ? "102%" : "60%",
          backgroundPosition: isMobile ? "283% 104%" : "200% 122%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb-left">
              <div
                className="content-left"
                style={{ order: isMobile ? 1 : "unset" }}
              >
                <h2>Account management</h2>

                <p>
                  Manage your account and get the support you need with just a
                  few clicks.
                </p>
              </div>
              <img
                style={{ order: isMobile ? 2 : "unset" }}
                src={
                  process.env.PUBLIC_URL +
                  "/images/platforms/pips_trade_app/trade_app_3.png"
                }
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <h3>Manage your account settings</h3>
              <p>
                Register, create and manage your accounts in-app with just a few
                clicks.
              </p>
              <hr className="black-line" />
              <h3>Make deposits & withdrawals</h3>
              <p>
                Enjoy hassle-free deposits and withdrawals with a wide range of
                payment options.
              </p>
              <hr className="black-line" />
              <h3>Get support from live in-app chat</h3>
              <p>
                Access our 24/7 in-app support available in multiple languages
                through live chat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipsTradeAppContentFour;
