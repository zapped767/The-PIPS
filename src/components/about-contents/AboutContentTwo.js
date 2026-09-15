import React from "react";
import { Link } from "react-router-dom";

const AboutContentTwo = () => {
  return (
    <div className="how__work__about">
      {/* <div className="container"> */}
      <div className="ceo-quote-container-about">
        {/* Left Column: Image */}

        {/* Right Column: Content */}
        <div className="ceo-content-wrapper-about">
          <div className="ceo-content-inner-about">
            {/* Yellow Quote Icon */}
            <div className="quote-icon-about">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 11L8 11C8.55 8.5 9.9 7.75 11 7.5V5.5C8 6 6 8.5 6 11V17H11V11ZM18 11L16 11C16.55 8.5 17.9 7.75 19 7.5V5.5C16 6 14 8.5 14 11V17H19V11Z"
                  fill="#012d65"
                />
              </svg>
            </div>

            {/* Quote Text */}
            <div className="quote-message-about">
              <h3>A Message from the Founder & CEO</h3>

              <p>
                <strong>Welcome to THEPIPS.</strong>
              </p>

              <p>
                At THEPIPS, we believe that financial markets should be
                accessible, transparent, and empowering for every trader. Our
                vision is to create a trusted global trading environment where
                innovation, integrity, and client success come together.
              </p>

              <p>
                We founded THEPIPS with a commitment to delivering exceptional
                trading experiences through advanced technology, competitive
                trading conditions, and dedicated customer support. Whether you
                are a beginner taking your first steps or an experienced trader
                seeking new opportunities, our mission is to provide the tools
                and resources you need to achieve your financial goals.
              </p>

              <p>
                Trust is the foundation of every successful relationship. That
                is why we remain focused on maintaining the highest standards of
                professionalism, transparency, and service excellence in
                everything we do.
              </p>

              <p>
                As we continue to grow, our commitment remains unchanged: to put
                our clients first, embrace innovation, and create long-term
                value for our global trading community.
              </p>

              <p>
                Thank you for choosing THEPIPS as your trusted trading partner.
                We look forward to supporting your journey and celebrating your
                success.
              </p>

              <p>
                <strong>Warm regards,</strong>
              </p>

              <div className="quote-author-about">
                <h5 className="author-name-about">COOK, Garry Joseph</h5>
                <p className="author-title-about">
                  Founder & Chief Executive Officer
                  <br />
                  THEPIPS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ceo-image-wrapper-about">
          <img
            src={
              process.env.PUBLIC_URL + "/images/company/about_us/about_us_2.png"
            }
            alt="Petr Valov, Founder and CEO"
            className="ceo-image-about"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
              e.target.parentNode.style.backgroundColor = "#333"; // Fallback if image missing
            }}
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default AboutContentTwo;
