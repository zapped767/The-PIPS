import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const BannerTwo = () => {
  const bannerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
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
      { threshold: 0.1 },
    );

    const content = bannerRef.current.querySelector(
      ".banner-content-reveal-right",
    );
    if (content) observer.observe(content);

    return () => observer.disconnect();
  }, []);

  const desktopImage = process.env.PUBLIC_URL + "/images/about/bull.jfif";
  const mobileImage = process.env.PUBLIC_URL + "/images/home/bull_mobile.jpg";

  return (
    <div
      className="ht__bradcaump__area__home__banner__two"
      ref={bannerRef}
      style={{
        background: isMobile
          ? `url(${mobileImage}) no-repeat center center / cover`
          : `rgba(0,0,0,0) url(${desktopImage}) no-repeat scroll center center / 105% 100%`,
      }}
    >
      <div className="ht__bradcaump__container__home__banner__two">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-9 ms-auto right banner-content-reveal-right text-end"
              style={
                isMobile
                  ? {
                      background: "#00000033",
                      padding: "9px",
                    }
                  : {}
              }
            >
              <h1>Step Into the Future of Crypto Trading</h1>
              <p>
                Access global markets with precision, speed, and total
                transparency. Trade top digital assets anytime and elevate your
                strategy with a platform engineered for effortless performance.
              </p>
              <a
                className="slide__btn dg__btn mt--30"
                href="https://portal.thepips.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Trading
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerTwo;
