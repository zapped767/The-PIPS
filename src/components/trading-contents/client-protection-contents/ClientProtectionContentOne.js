import TopicOne from "../client-protection-contents/TopicOne";
import { useEffect, useState } from "react";

const ClientProtectionContentOne = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <TopicOne />

      <div className="how__work__trading">
        <div
          className="container"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/2.png"})`,
            backgroundSize: isMobile ? "90%" : "50%",
            backgroundPosition: isMobile ? "-115% 30%" : "-35% 108%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="content-left">
                <h3>Regulations</h3>
                <p>
                  If you’ve been wondering, ‘is Pips legit?’, you can rest
                  assured that we are a licensed broker, regulated by leading
                  international governing bodies globally.
                </p>
                <h3>Account security</h3>
                <p>
                  Prevent unauthorized access to your secure trading accounts by
                  choosing a security option – either phone or email – during
                  your registration process.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="thumb-right">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/trading/client_protection/client_protection_1.png"
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

export default ClientProtectionContentOne;
