import React from "react";
import { useLocation } from "react-router-dom";

const SubscribeEmail = () => {
  const location = useLocation();

  let title = "Your Trading Journey Starts Here";
  let desc =
    "With The PIPS by your side, explore global markets with fast execution, advanced tools, and a premium trading experience.";
  let button = "Register Now";

  if (location.pathname === "/markets/forex-market") {
    title = "Trade Forex Smarter";
    desc =
      "Access fast execution, transparent pricing, and powerful tools built for smarter forex trading.";
    button = "Start Trading Forex";
  }

  if (location.pathname === "/markets/crypto-market") {
    title = "Trade Top Cryptos Instantly";
    desc =
      "Experience fast execution, clear pricing, and 24/7 access to leading cryptocurrencies.";
    button = "Start Trading Crypto";
  }

  if (location.pathname === "/markets/stock-market") {
    title = "Trade Global Stocks Easily";
    desc =
      "Access leading global equities through a secure and intuitive trading platform.";
    button = "Start Trading Stocks";
  }

  if (location.pathname === "/markets/indices-market") {
    title = "Trade Global Indices";
    desc =
      "Get broad market exposure with tight spreads, fast execution, and powerful analytics.";
    button = "Start Trading Indices";
  }

  if (location.pathname === "/markets/commodities-market") {
    title = "Trade Commodities with Confidence";
    desc =
      "Diversify with gold, oil, and more — powered by fast execution and real-time market insights.";
    button = "Start Trading Commodities";
  }

  if (location.pathname === "/trading/types-of-accounts") {
    title = "Choose the Right Trading Account";
    desc =
      "Select your account type and take your first step toward a smarter trading experience.";
    button = "Open Your Account";
  }

  if (location.pathname === "/trading/professional-accounts") {
    title = "Ready to Trade Like a Professional?";
    desc =
      "Unlock next-level execution, pricing, and features with a Professional Account.";
    button = "Upgrade to Pro";
  }

  if (location.pathname === "/trading/demo-trading-account") {
    title = "Ready to Turn Practice Into Progress?";
    desc =
      "Build confidence and improve your strategy with a demo trading account.";
    button = "Start Practicing";
  }

  if (location.pathname === "/trading/deposits-and-withdrawals") {
    title = "Move Your Money With Confidence";
    desc =
      "Fast processing, strict security, and verification built around trader protection.";
    button = "Register";
  }

  if (location.pathname === "/trading/fees") {
    title = "Trade Smart. Trade with Fee Transparency";
    desc =
      "Built for traders who demand clarity. No confusion, no hidden costs.";
    button = "Register";
  }

  if (location.pathname === "/trading/client-protection") {
    title = "Stay Protected. Stay in Control.";
    desc = "Trade with confidence, backed by strong security and protection.";
    button = "Start Trading";
  }

  if (location.pathname === "/trading/order-execution") {
    title = "Trade With Confidence";
    desc =
      "Experience fast execution and real-time market access through The PIPS.";
    button = "Register";
  }

  return (
    <section className="tp-subscribe-cta">
      <div className="container">
        <div className="tp-subscribe-cta__box">
          <span className="tp-subscribe-cta__eyebrow">
            Subscribe for latest updates
          </span>

          <h2 className="tp-subscribe-cta__title">{title}</h2>

          <p className="tp-subscribe-cta__desc">{desc}</p>

          <a
            href="https://portal.thepips.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="tp-subscribe-cta__button"
          >
            <span>{button}</span>
            <span className="tp-subscribe-cta__arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SubscribeEmail;