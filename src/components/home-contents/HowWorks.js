import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ─── Feature data ─────────────────────────────────────────── */
const LEFT_FEATURES = [
  {
    icon: "📈",
    title: "Smart Trading",
    text: "Guided approach to confident and informed trading decisions.",
  },
  {
    icon: "🛡️",
    title: "Responsible Practices",
    text: "Focus on responsible trading with disciplined risk management.",
  },
  {
    icon: "🌐",
    title: "Global Markets",
    text: "Access to Forex, Crypto, and Stock markets all in one place.",
  },
];

const RIGHT_FEATURES = [
  {
    icon: "🏆",
    title: "1,000+ Learners",
    text: "Trusted by active traders and learners across the globe.",
  },
  {
    icon: "🕐",
    title: "24/7 Support",
    text: "Round-the-clock assistance for continuous trading confidence.",
  },
  {
    icon: "⭐",
    title: "90% Satisfaction",
    text: "Strong satisfaction rate reflecting deep user trust and results.",
  },
];

/* ─── Component ────────────────────────────────────────────── */
const HowWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hw--visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const cards = sectionRef.current?.querySelectorAll(".hw__feat-card");
    cards?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hw__section" ref={sectionRef}>
      {/* Heading */}
      <div className="hw__heading">
        <h2>
          We Don't Just Help You Trade.
          <br />
          We Help You Understand
        </h2>
        <p>
          Diverse opportunities for all trading styles and experience levels
        </p>
        <div className="hw__heading-line" />
      </div>

      {/* Three-column layout */}
      <div className="hw__layout">
        {/* Left cards */}
        <div className="hw__col hw__col--left">
          {LEFT_FEATURES.map((feat, i) => (
            <div className="hw__feat-card" key={i}>
              <span className="hw__feat-icon">{feat.icon}</span>
              <p className="hw__feat-title">{feat.title}</p>
              <p className="hw__feat-text">{feat.text}</p>
            </div>
          ))}
        </div>

        {/* Center image - properly wrapped */}
        <div className="hw__center">
          <div className="hw__img-wrap">
            <img
              src={process.env.PUBLIC_URL + "/images/home/man.png"}
              alt="Trading guide"
              className="hw__center-img"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            {/* Fallback silhouette */}
            <div className="hw__circle-fallback">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="30" r="18" />
                <path d="M15 95 Q15 60 50 58 Q85 60 85 95Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right cards */}
        <div className="hw__col hw__col--right">
          {RIGHT_FEATURES.map((feat, i) => (
            <div className="hw__feat-card" key={i}>
              <span className="hw__feat-icon">{feat.icon}</span>
              <p className="hw__feat-title">{feat.title}</p>
              <p className="hw__feat-text">{feat.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="hw__cta-wrap">
        <a
          className="dg__btn btn--black btn--theme hw__cta-link"
          href="https://portal.thepips.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join With Us
        </a>
      </div>
    </section>
  );
};

export default HowWorks;
