import React, { useEffect, useRef } from "react";

const BannerOne = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const section = bannerRef.current;
    if (!section) return;

    const content = section.querySelector(".banner-content-reveal");

    if (!content) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(content);

    return () => observer.disconnect();
  }, []);

  // ===== CHANGE THESE IMAGE PATHS IF YOUR FILE NAMES ARE DIFFERENT =====
 const mapImage =
  process.env.PUBLIC_URL + "/images/home/banner-world-map.png";

  const mainPhoneImage =
    process.env.PUBLIC_URL + "/images/home/banner-phone-main.png";



  return (
    <section className="pips-app-banner-section" ref={bannerRef}>
      <div className="container">
<div
  className="pips-app-banner-card"
  style={{
    backgroundImage: `url("${mapImage}")`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
          <div className="row align-items-center">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-6">
              <div className="banner-content-reveal pips-app-banner-content">
                <h1>Unlock Smarter Crypto Trading - Anytime, Anywhere</h1>

                <p>
                  Take control of your financial future with fast execution,
                  real-time market insights, and access to the world's most
                  powerful crypto assets - all on a platform built for traders
                  who demand more.
                </p>

                <a
                  className="pips-banner-btn"
                  href="https://portal.thepips.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started Now
                </a>
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="col-lg-6 col-md-6">
              <div className="pips-app-banner-visual">
                {/* RIGHT SIDE - BOTH PHONES IN ONE IMAGE */}

              <img
                src={mainPhoneImage}
                alt="The PIPS mobile trading platform"
                className="pips-banner-phone-main"
                draggable="false"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;