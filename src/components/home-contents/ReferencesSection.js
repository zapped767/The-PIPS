import React, { useEffect, useRef } from "react";
// import "./style.scss";

const logoData = [
  { id: 1, src: "/images/referenceLogos/wt-10-1.png", alt: "Wire Transfer" },
  { id: 2, src: "/images/referenceLogos/neteller-logo-1.png", alt: "Neteller" },
  { id: 3, src: "/images/referenceLogos/binance-1.png", alt: "Binance" },
  { id: 4, src: "/images/referenceLogos/visa.png", alt: "Visa" },
  { id: 5, src: "/images/referenceLogos/pngegg.png", alt: "PayPal" },
  { id: 6, src: "/images/referenceLogos/skrill-logo-1.png", alt: "Skrill" },
  {
    id: 7,
    src: "/images/referenceLogos/PikPng.com_transparent-png-icons_4195720.png",
    alt: "UPI",
  },
  {
    id: 8,
    src: "/images/referenceLogos/mastercard-logo-1.png",
    alt: "Mastercard",
  },
];

const ReferencesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.2 }, // Triggers when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="references-section" ref={sectionRef}>
      <div className="references-header">
        <h1>Stay Connected with The Pips</h1>
        <p>Get the latest updates all in one place</p>
      </div>

      <div className="diamond-grid">
        <div className="column column-1">
          <LogoCard src={logoData[0].src} delay="0.1s" />
        </div>
        <div className="column column-2">
          <LogoCard src={logoData[1].src} delay="0.2s" />
          <LogoCard src={logoData[2].src} delay="0.3s" />
        </div>
        <div className="column column-3">
          <LogoCard src={logoData[3].src} delay="0.4s" />
          <LogoCard src={logoData[4].src} delay="0.5s" />
          <a
            href="https://portal.thepips.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="see-all-card"
            style={{ transitionDelay: "0.6s" }}
          >
            More <span className="arrow">→</span>
          </a>
        </div>
        <div className="column column-4">
          <LogoCard src={logoData[5].src} delay="0.7s" />
          <LogoCard src={logoData[6].src} delay="0.8s" />
        </div>
        <div className="column column-5">
          <LogoCard src={logoData[7].src} delay="0.9s" />
        </div>
      </div>
    </section>
  );
};

const LogoCard = ({ src, delay }) => (
  <div className="logo-card" style={{ transitionDelay: delay }}>
    <img src={src} alt="logo" />
  </div>
);

export default ReferencesSection;
