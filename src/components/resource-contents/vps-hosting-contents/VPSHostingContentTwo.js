import { useEffect, useState } from "react";

const VPSHostingContentTwo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="how__work__resource">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/1.png"})`,
          backgroundSize: isMobile ? "120%" : "60%",
          backgroundPosition: isMobile ? "0% 35%" : "123% 106%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row reverse-mobile">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/vps_hosting/vps_hosting_2.png"
                }
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <h2>Consistent, Secure, and Always On</h2>
              <p>
                It delivers fast and stable execution for both manual and
                automated strategies, with strong security and continuous
                uptime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VPSHostingContentTwo;
