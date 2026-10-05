import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TopicTwo from "./TopicTwo";
import styles from "./StandardAccountsContentOne.module.scss";
import StandardAccountsContentTwo from "./StandardAccountsContentTwo";
gsap.registerPlugin(ScrollTrigger);

/* SCROLL CONTROLS */
const NAVBAR_HEIGHT = 80;
const GAP_BELOW_NAVBAR = 24;
const SCROLL_DISTANCE_FACTOR = 0.85;

/* DEFAULT SETTINGS — individual cards can override these */
const cardDefaults = {
  radius: "36px",
  imageSize: "cover",
  imagePosition: "center",

  contentX: "0px",
  contentY: "0px",

  featuresX: "0px",
  featuresY: "0px",

  registerX: "0px",
  registerY: "0px",

  featureGap: "16px",
  registerGap: "24px",
};

const lightTheme = {
  titleColor: "#012d65",
  textColor: "#012d65",
  buttonBackground: "#012d65",
  buttonColor: "#ffffff",
  featuresBackground: "rgba(255, 255, 255, 0.8)",
  fill: "#ffffff",
};

const darkTheme = {
  titleColor: "#ffffff",
  textColor: "#ffffff",
  buttonBackground: "#ffffff",
  buttonColor: "#012d65",
  featuresBackground: "rgba(1, 45, 101, 0.5)",
  fill: "#012d65",
};

const accounts = [
  {
    ...cardDefaults,
    ...lightTheme,
    id: 1,
    badge: "STARTER",
    type: "ESSENTIAL",
    tagline: "Where Professional Trading Begins",
    instruments: "100+ instruments",
    spread: "Spreads from 1.4 pips",
    deposit: "$500",
    image: "/images/accounts/account-1.png",
    shadow: "0 12px 32px rgba(1, 45, 101, 0.14)",

    // Individual Card 1 adjustments:
    contentY: "0px",
    registerY: "0px",
  },
  {
    ...cardDefaults,
    ...lightTheme,
    id: 2,
    badge: "MOST POPULAR",
    type: "PRIME",
    tagline: "Enhanced Access. Superior Execution.",
    instruments: "250+ instruments",
    spread: "Spreads from 1.1 pips",
    deposit: "$2,500",
    image: "/images/accounts/account-2.png",

    contentY: "0px",
    registerY: "0px",
  },
  {
    ...cardDefaults,
    ...darkTheme,
    id: 3,
    badge: "ADVANCED",
    type: "PRESTIGE",
    tagline: "Precision Trading for Serious Investors",
    instruments: "500+ instruments",
    spread: "Spreads from 0.8 pips",
    deposit: "$25,000",
    image: "/images/accounts/account-3.png",

    contentY: "0px",
    registerY: "0px",
  },
  {
    ...cardDefaults,
    ...lightTheme,
    id: 4,
    badge: "PREMIUM",
    type: "BLACK",
    tagline: "Elite Trading Conditions. Institutional Experience.",
    instruments: "750+ instruments",
    spread: "Spreads from 0.5 pips",
    deposit: "$50,000",
    image: "/images/accounts/account-4.png",

    contentY: "0px",
    registerY: "0px",
  },
  {
    ...cardDefaults,
    ...darkTheme,
    id: 5,
    badge: "ELITE",
    type: "VIP ELITE",
    tagline: "Exclusive Privileges for High-Volume Traders",
    instruments: "1000+ instruments",
    spread: "Spreads from 0.2 pips",
    deposit: "$100,000",
    image: "/images/accounts/account-5.png",

    contentY: "0px",
    registerY: "0px",
  },
];

/*
 * EACH CARD'S MANUAL CONTROLS
 *
 * x: positive = RIGHT, negative = LEFT
 * y: positive = DOWN,  negative = UP
 *
 * name        = ESSENTIAL / PRIME / PRESTIGE...
 * title       = main headline
 * description = paragraph
 * features    = whole features container
 * featureText = each feature row, including its check icon
 */

const cardControls = {
  // CARD 1 — ESSENTIAL
  1: {
    name:         { color: "#012d65", x: "0px", y: "0px" },
    badge:        { color: "#c27b00", x: "0px", y: "0px" },
    title:        { color: "#012d65", x: "0px", y: "180px" },
    description:  { color: "#012d65", x: "0px", y: "190px" },
    features:     { background: "rgba(255,255,255,0.85)", x: "20px", y: "0px",width: "10px",},
    featureTitle: { color: "#012d65", x: "0px", y: "0px" },
    featureText:  { color: "#012d65", x: "0px", y: "0px", gap: "16px" },
    button:       { color: "#ffffff", background: "#012d65", x: "0px", y: "190px", gap: "24px" },
  },

  // CARD 2 — PRIME
  2: {
    name:         { color: "#012d65", x: "0px", y: "0px" },
    badge:        { color: "#c27b00", x: "0px", y: "0px" },
    title:        { color: "#012d65", x: "0px", y: "0px" },
    description:  { color: "#012d65", x: "0px", y: "0px" },
    features:     { background: "rgba(58, 117, 194, 0.55)", x: "0px", y: "0px" },
    featureTitle: { color: "#012d65", x: "0px", y: "0px" },
    featureText:  { color: "#012d65", x: "0px", y: "0px", gap: "16px" },
    button:       { color: "#ffffff", background: "#012d65", x: "400px", y: "190px", gap: "24px" },
  },

  // CARD 3 — PRESTIGE
  3: {
    name:         { color: "#ffffff", x: "0px", y: "0px" },
    badge:        { color: "#ffbf47", x: "0px", y: "0px" },
    title:        { color: "#ffffff", x: "0px", y: "180px" },
    description:  { color: "#ffffff", x: "0px", y: "190px" },
    features:     { background: "rgba(255,255,255,0.85)", x: "0px", y: "0px" },
    featureTitle: { color: "#012d65", x: "0px", y: "0px" },
    featureText:  { color: "#012d65", x: "0px", y: "0px", gap: "16px" },
    button:       { color: "#012d65", background: "#ffffff", x: "0px", y: "190px", gap: "24px" },
  },

  // CARD 4 — BLACK
  4: {
    name:         { color: "#ffffff", x: "0px", y: "0px" },
    badge:        { color: "#c27b00", x: "0px", y: "0px" },
    title:        { color: "#ffffff", x: "0px", y: "0px" },
    description:  { color: "#ffffff", x: "0px", y: "0px" },
    features:     { background: "rgba(255,255,255,0.85)", x: "0px", y: "0px" },
    featureTitle: { color: "#012d65", x: "0px", y: "0px" },
    featureText:  { color: "#012d65", x: "0px", y: "0px", gap: "16px" },
    button:       { color: "#012d65", background: "#ffffff", x: "0px", y: "140px", gap: "24px" },
  },

  // CARD 5 — VIP ELITE
  5: {
    name:         { color: "#012d65", x: "0px", y: "0px" },
    badge:        { color: "#ffbf47", x: "0px", y: "0px" },
    title:        { color: "#012d65", x: "0px", y: "0px" },
    description:  { color: "#012d65", x: "0px", y: "0px" },
    features:     { background: "rgba(58, 117, 194, 0.55)", x: "0px", y: "0px" },
    featureTitle: { color: "#012d65", x: "0px", y: "0px" },
    featureText:  { color: "#012d65", x: "0px", y: "0px", gap: "16px" },
    button:       { color: "#ffffff", background: "#012d65", x: "0px", y: "190px", gap: "24px" },
  },
};

/* Converts the settings above into CSS variables. */
const getCardControls = (id) =>
  Object.fromEntries(
    Object.entries(cardControls[id] || {}).flatMap(
      ([element, settings]) =>
        Object.entries(settings).map(([property, value]) => [
          `--ta26-${element}-${property}`,
          value,
        ])
    )
  );

const StandardAccountsContentOne = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !stage || !viewport || !track) {
      return undefined;
    }

    const topOffset = NAVBAR_HEIGHT + GAP_BELOW_NAVBAR;
    const media = gsap.matchMedia();
    let disposed = false;

    media.add(
      "(min-width: 900px) and (min-height: 600px) " +
        "and (prefers-reduced-motion: no-preference)",
      () => {
        const firstCard = track.firstElementChild;
        if (!firstCard) return undefined;

        const copiedProperties = [
          "--ta26-card-width",
          "--ta26-card-height",
          "--ta26-card-gap",
          "--ta26-edge-space",
        ];

        /*
         * Preserve inherited sizing when ScrollTrigger moves
         * the pinned stage outside a clipping parent.
         */
        const prepareLayout = () => {
          const sectionStyle = window.getComputedStyle(section);

          copiedProperties.forEach((property) => {
            stage.style.setProperty(
              property,
              sectionStyle.getPropertyValue(property).trim()
            );
          });

          const stageStyle = window.getComputedStyle(stage);

          const verticalPadding =
            (parseFloat(stageStyle.paddingTop) || 0) +
            (parseFloat(stageStyle.paddingBottom) || 0);

          stage.style.setProperty(
            "--ta26-fit-height",
            `${
              window.innerHeight -
              topOffset -
              verticalPadding -
              16
            }px`
          );
        };

        prepareLayout();

        gsap.set(viewport, {
          overflowX: "hidden",
          scrollSnapType: "none",
        });

        gsap.set(track, {
          willChange: "transform",
        });

        viewport.scrollLeft = 0;

        // Start with half of Card 1 visible at the right edge.
        const startX = () => {
          const paddingLeft =
            parseFloat(
              window.getComputedStyle(track).paddingLeft
            ) || 0;

          return (
            viewport.clientWidth -
            firstCard.getBoundingClientRect().width / 2 -
            paddingLeft
          );
        };

        // End with the last card fully visible.
        const endX = () =>
          Math.min(
            0,
            viewport.clientWidth - track.scrollWidth
          );

        const animation = gsap.fromTo(
          track,
          { x: startX },
          {
            x: endX,
            ease: "none",
            scrollTrigger: {
              trigger: stage,
              start: () => `top ${topOffset}px`,
              end: () =>
                `+=${Math.max(
                  500,
                  (startX() - endX()) *
                    SCROLL_DISTANCE_FACTOR
                )}`,

              pin: stage,
              pinType: "fixed",
              pinReparent: true,
              pinSpacing: true,

              scrub: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onRefreshInit: prepareLayout,
            },
          }
        );

        // Make offscreen card links reachable with the keyboard.
        const handleFocus = (event) => {
          const card = event.target.closest("[data-account-card]");
          const trigger = animation.scrollTrigger;

          if (!card || !trigger) return;

          const cardLeft =
            card.getBoundingClientRect().left -
            track.getBoundingClientRect().left;

          const desiredX =
            (viewport.clientWidth - card.offsetWidth) / 2 -
            cardLeft;

          const progress = gsap.utils.clamp(
            0,
            1,
            (startX() - desiredX) / (startX() - endX())
          );

          viewport.scrollLeft = 0;

          trigger.scroll(
            trigger.start +
              (trigger.end - trigger.start) * progress
          );

          ScrollTrigger.update();
        };

        track.addEventListener("focusin", handleFocus);

        return () => {
          track.removeEventListener("focusin", handleFocus);

          copiedProperties.forEach((property) => {
            stage.style.removeProperty(property);
          });

          stage.style.removeProperty("--ta26-fit-height");
        };
      }
    );

    if (document.fonts) {
      document.fonts.ready.then(() => {
        if (!disposed) ScrollTrigger.refresh();
      });
    }

    return () => {
      disposed = true;
      media.revert();
    };
  }, []);

  return (
    <>
      <TopicTwo />

      <section
        ref={sectionRef}
        className={styles.accountsSection}
        aria-label="Trading account options"
      >
        <div ref={stageRef} className={styles.stickyArea}>
          <div
            ref={viewportRef}
            className={styles.viewport}
            tabIndex={0}
            aria-label="Scroll through trading accounts"
          >
            <div ref={trackRef} className={styles.track}>
              {accounts.map((account) => (
                <article
                  key={account.id}
                  data-account-card
                  className={styles.cardShell}
                  aria-label={`${account.type} account`}
                  style={{
                    "--ta26-image":
                      `url("${process.env.PUBLIC_URL}${account.image}")`,
                    "--ta26-title-color": account.titleColor,
                    "--ta26-text-color": account.textColor,
                    "--ta26-button-bg": account.buttonBackground,
                    "--ta26-button-color": account.buttonColor,
                    "--ta26-features-bg": account.featuresBackground,
                    "--ta26-fill": account.fill,
                    "--ta26-radius": account.radius,
                    "--ta26-image-size": account.imageSize,
                    "--ta26-image-position": account.imagePosition,
                    "--ta26-card-shadow": account.shadow,
                    "--ta26-content-x": account.contentX,
                    "--ta26-content-y": account.contentY,
                    "--ta26-features-x": account.featuresX,
                    "--ta26-features-y": account.featuresY,
                    "--ta26-register-x": account.registerX,
                    "--ta26-register-y": account.registerY,
                    "--ta26-feature-gap": account.featureGap,
                    "--ta26-register-gap": account.registerGap,
                    ...getCardControls(account.id),
                    
                  }}
                >
                  <div className={styles.cardSurface}>
                    <div className={styles.cardTop}>
                      <span
                        className={styles.arrow}
                        aria-hidden="true"
                      >
                        ↗
                      </span>

                      <h2 className={styles.accountName}>
                        {account.type}
                      </h2>
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.leftContent}>
                        <span className={styles.badge}>
                          {account.badge}
                        </span>

                        <h3 className={styles.title}>
                          {account.tagline}
                        </h3>

                        <p className={styles.description}>
                          Access professional trading conditions
                          designed for modern traders.
                        </p>

                        <a
                          className={styles.registerButton}
                          href="https://portal.thepips.com/login"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Register for ${account.type}`}
                        >
                          Register
                        </a>
                      </div>

                      <div className={styles.featuresBox}>
                        <span className={styles.featuresTitle}>
                          FEATURES:
                        </span>

                        {[
                          `Minimum Deposit ${account.deposit}`,
                          account.instruments,
                          account.spread,
                        ].map((feature) => (
                          <div
                            key={feature}
                            className={styles.feature}
                          >
                            <span
                              className={styles.checkIcon}
                              aria-hidden="true"
                            >
                              ✓
                            </span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <StandardAccountsContentTwo />
    </>
  );
};

export default StandardAccountsContentOne;