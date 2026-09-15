import TopicTwo from "../client-protection-contents/TopicTwo";
import { useEffect, useState } from "react";

const ClientProtectionContentThree = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <TopicTwo />

      <div className="how__work__trading">
        <div
          className="container"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/6.png"})`,
            backgroundSize: isMobile ? "87%" : "71%",
            backgroundPosition: isMobile ? "265% 37%" : "7% 192%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="content-left">
                <h3>Seamless withdrawals</h3>
                <p>
                  Say goodbye to uncertainty. Your money is yours whenever you
                  want it, even on weekends. Get deposits and withdrawals
                  approved automatically, with no delays or hassle.
                </p>

                <h3>Segregated accounts</h3>
                <p>
                  We safeguard your funds by holding them segregated from our
                  own. Our funds are always larger, so we can meet your
                  withdrawal needs any time of the day.
                </p>

                <h3>3D Secure verification</h3>
                <p>
                  We ensure secure trading with 3D Secure debit card
                  transactions, offering extra fraud protection through a
                  one-time pin sent to your phone.
                </p>

                {/* <h3>PCI DSS compliance</h3>
                <p>
                  We're fully audited, adhering to all PCI DSS needs, ensuring
                  card data security through effective management, custom
                  security settings, and regular vulnerability scans.
                </p> */}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="thumb-right">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/trading/client_protection/client_protection_2.png"
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

export default ClientProtectionContentThree;
