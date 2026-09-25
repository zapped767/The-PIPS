import React, { useEffect, useRef } from "react";

const BannerTwo = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const section = bannerRef.current;

    if (!section) return;

    const content = section.querySelector(
      ".banner-content-reveal-right"
    );

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
      {
        threshold: 0.1,
      }
    );

    observer.observe(content);

    return () => observer.disconnect();
  }, []);

  const bannerVideo =
    process.env.PUBLIC_URL +
    "/images/home/banner-two-video.mp4";

  return (
    <section
      className="ht__bradcaump__area__home__banner__two banner-two-video-section"
      ref={bannerRef}
    >
      {/* BACKGROUND VIDEO */}
      <video
        className="banner-two-bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src={bannerVideo}
          type="video/mp4"
        />
      </video>

      {/* BLUE DARK OVERLAY */}
      <div className="banner-two-video-overlay" />

      <div className="ht__bradcaump__container__home__banner__two">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 ms-auto right banner-content-reveal-right text-end">
              <h1>
                Step Into the Future of Crypto Trading
              </h1>

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
    </section>
  );
};

export default BannerTwo;