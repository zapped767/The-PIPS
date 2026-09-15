import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    id: "register",
    label: "Register",
    para: "Open your account effortlessly.",
    image: process.env.PUBLIC_URL + "/images/home/Register1.webp",
    imageAlt: "Woman smiling while holding a phone with trading chart overlay",
    revealText: "Create your account →",
    overlay: null,
  },
  {
    id: "fund",
    label: "Fund",
    para: "Quick deposits and withdrawals with local payment providers.",
    image: process.env.PUBLIC_URL + "/images/home/Fund1.webp",
    imageAlt: "Man looking at phone showing deposit and withdraw confirmations",
    revealText: "Deposit now →",
    overlay: null,
  },
  {
    id: "trade",
    label: "Trade",
    para: "Join a community of over 20 million traders.",
    image: process.env.PUBLIC_URL + "/images/home/Trade1.webp",
    imageAlt: "Mobile phone showing a trading app markets screen",
    revealText: "Start trading →",
    overlay: null,
  },
];

const StartTrading = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("st-visible");
          } else {
            entry.target.classList.remove("st-visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    const targets = section.querySelectorAll(".st-animate");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* ── 3D tilt on all cards ── */
  useEffect(() => {
    const isTouch = window.matchMedia(
      "(hover: none) and (pointer: coarse)",
    ).matches;
    if (isTouch) return;

    const cleanups = cardRefs.current.map((card) => {
      if (!card) return () => {};

      const onMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
        card.style.transition = "transform 0.08s ease, box-shadow 0.4s ease";
      };

      const onLeave = () => {
        card.style.transform = "";
        card.style.transition =
          "transform 0.45s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease";
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);

      return () => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      };
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section
      className="st-section"
      ref={sectionRef}
      aria-label="Start Trading Today"
    >
      <h2 className="st-heading st-animate">Start Trading Today</h2>

      <div className="st-grid">
        {steps.map((step, index) => (
          <div
            className="st-step st-animate"
            key={step.id}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div
              className="st-card"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <img
                className="st-card__image"
                src={step.image}
                alt={step.imageAlt}
              />
              {step.overlay && (
                <div className="st-card__overlay">{step.overlay}</div>
              )}
              {/* <div className="st-card__reveal">
                <span className="st-card__reveal-text">{step.revealText}</span>
              </div> */}
            </div>
            <p className="st-step__label">{step.label}</p>
            <p className="st-step__description">{step.para}</p>
          </div>
        ))}
      </div>

      <div className="st-animate">
        <a
          className="slide__btn dg__btn mt--30"
          href="https://portal.thepips.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Trading
        </a>
      </div>
      <p className="st-step__description mt--30">
        Risk warning: Our services involve a significant risk and can result in
        the loss of your invested capital.
      </p>
    </section>
  );
};

export default StartTrading;
