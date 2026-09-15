import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AboutContent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="how__work__about">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/1.png"})`,
          backgroundSize: isMobile ? "120%" : "60%",
          backgroundPosition: isMobile ? "0% 35%" : "123% 106%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-2 order-lg-1">
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/company/about_us/about_us_1.png"
                }
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40 order-1 order-lg-2">
            <div className="content-right">
              <h2>Who We Are</h2>
              <p>
                The Pips is a modern trading platform built to make financial
                markets simple, transparent, and accessible to everyone. Whether
                you're trading Forex, Crypto, Commodities, Indices, or Stocks,
                we give you the tools, technology, and expert guidance to
                navigate the markets with confidence. We believe every trader
                deserves a clear path forward — so we combine powerful trading
                infrastructure with real educational resources, helping you
                understand the markets, manage your risk, and grow consistently
                over time.
              </p>
              <a
                className="slide__btn dg__btn"
                href="https://portal.thepips.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
