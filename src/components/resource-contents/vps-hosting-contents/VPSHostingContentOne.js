import { Link } from "react-router-dom";
import TopicOne from "../../resource-contents/vps-hosting-contents/TopicOne";
import { useEffect, useState } from "react";

const VPSHostingContentOne = () => {
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
                <h2>Optimized for Professional and Automated Traders</h2>
                <p>
                  Hosted on high-speed servers close to major financial centers,
                  it helps reduce latency and improve execution efficiency.
                  Designed for automated trading, it supports Expert Advisors
                  and algorithmic strategies with secure, reliable access.
                </p>
                <Link
                  className="slide__btn dg__btn"
                  to={process.env.PUBLIC_URL + "/company/contact"}
                >
                  Request VPS Access
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="thumb-right">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/resources/vps_hosting/vps_hosting_1.png"
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

export default VPSHostingContentOne;
