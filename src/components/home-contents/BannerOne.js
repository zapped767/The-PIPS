import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const BannerOne = () => {
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

    const content = bannerRef.current.querySelector(".banner-content-reveal");
    if (content) observer.observe(content);

    return () => observer.disconnect();
  }, []);

  const desktopImage = process.env.PUBLIC_URL + "/images/home/banner1.jpg";
  const mobileImage = process.env.PUBLIC_URL + "/images/home/phone_image.jpg";

  return (
    <div
      className="ht__bradcaump__area__home__banner__one"
      ref={bannerRef}
      style={{
        background: isMobile
          ? `url(${mobileImage}) no-repeat center center / cover`
          : `rgba(0,0,0,0) url(${desktopImage}) no-repeat scroll center center / 105% 100%`,
      }}
    >
      <div className="ht__bradcaump__container__home__banner__one">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-8 banner-content-reveal"
              style={
                isMobile
                  ? {
                      background: "rgb(255 255 255 / 64%)",
                      padding: "9px",
                    }
                  : {}
              }
            >
              <h1>Unlock Smarter Crypto Trading - Anytime, Anywhere</h1>
              <p>
                Take control of your financial future with fast execution,
                real-time market insights, and access to the world's most
                powerful crypto assets - all on a platform built for traders who
                demand more.
              </p>
              <a
                className="slide__btn dg__btn mt--30"
                href="https://portal.thepips.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
