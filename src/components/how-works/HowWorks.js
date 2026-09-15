import React from "react";
import { Link } from "react-router-dom";

const HowWorks = () => {
  return (
    <div className="how__work">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-left">
              <h2>Knowledge Builds Confidence</h2>
              <p>
                From video tutorials to expert-led sessions, The Pips Academy
                helps you master the art of trading at your own pace. At The
                Pips, we make learning to trade simple and practical. Our
                beginner-friendly courses and detailed trading guides walk you
                through every concept, while real-world examples and
                step-by-step tutorials help you apply what you learn. Plus,
                you’ll gain valuable insights and mentorship from experienced
                traders who are here to guide your journey.
              </p>
              <a
                className="dg__btn btn--black btn--theme hw__cta-link"
                href="https://portal.thepips.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join With Us
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb-right">
              <img
                src={process.env.PUBLIC_URL + "/images/home/home2.png"}
                alt="computer images"
              />
            </div>
          </div>
        </div>
      </div>
      <br></br> <br></br>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb-left">
              <img
                src={process.env.PUBLIC_URL + "/images/home/home1.png"}
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <h2>We Don’t Just Help You Trade. We Help You Understand</h2>
              <p>
                Our goal is simple: to guide beginners toward confident,
                informed, and responsible trading. With over 1,000 active
                learners and round-the-clock support, The Pips is trusted by
                traders worldwide. We cover three major markets, Forex, Crypto,
                and Stocks, ensuring diverse opportunities for every trader. Our
                90% satisfaction rate reflects our commitment to delivering a
                reliable and rewarding trading experience.
              </p>
              <a
                className="dg__btn btn--black btn--theme hw__cta-link"
                href="https://portal.thepips.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
