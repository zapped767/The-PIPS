import { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Link, useLocation } from "react-router-dom";

const useTypewriter = (text, speed = 30, repeatInterval = 2000) => {
  const [displayed, setDisplayed] = useState(text.slice(0, 1));

  useEffect(() => {
    let i = 1;
    let typing;
    let repeat;

    const startTyping = () => {
      setDisplayed(text.slice(0, 1)); // always show first letter instantly
      i = 1;
      typing = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(typing);
        }
      }, speed);
    };

    startTyping();
    repeat = setInterval(() => {
      clearInterval(typing);
      startTyping();
    }, repeatInterval);

    return () => {
      clearInterval(typing);
      clearInterval(repeat);
    };
  }, [text, speed, repeatInterval]);

  return displayed;
};

const CustomForm = ({ status, message, onValidated }) => {
  const location = useLocation();

  let title = "Your Trading Journey Starts Here";
  let desc =
    "With The Pips by your side, you're not just trading, you're building a future of financial freedom.";
  let button = "Register Now";

  // Change content based on URL
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
    title = "Ready to Start Trading with Power?";
    desc =
      "Diversify with gold, oil, and more-powered by fast execution and real-time market insights.";
    button = "Start Trading Commodities";
  }

  if (location.pathname === "/trading/types-of-accounts") {
    title = "Ready to Start Trading with Power?";
    desc =
      "Choose your tier, open your Standard Account, and take your first step into a faster, smarter trading experience.";
    button = "Open Your Standard Account";
  }

  if (location.pathname === "/trading/professional-accounts") {
    title = "Ready to Trade Like a Professional?";
    desc =
      "Unlock next-level execution, pricing, and power with a Professional Account.";
    button = "Upgrade to Pro";
  }
  if (location.pathname === "/trading/demo-trading-account") {
    title = "Ready to Turn Practice Into Profit?";
    desc = "Start trading with confidence, master the markets the smart way.";
    button = "Start Practicing";
  }
  if (location.pathname === "/trading/deposits-and-withdrawals") {
    title = "Move Your Money With Confidence";
    desc =
      "Fast processing, strict security, and verification built around trader protection.";
    button = "Register";
  }
  if (location.pathname === "/trading/fees") {
    title = "Trade Smart. Trade Secure. Trade with Total Fee Transparency";
    desc =
      "Built for traders who demand clarity. No confusion, no hidden costs.";
    button = "Register";
  }
  if (location.pathname === "/trading/client-protection") {
    title = "Stay Protected. Stay in Control.";
    desc = "Trade with Confidence, Backed by World-Class Security";
    button = "Start Trading Commodities";
  }
  if (location.pathname === "/trading/order-execution") {
    title = "Trade Commodities Confidently";
    desc =
      "Diversify with gold, oil, and more-powered by fast execution and real-time market insights.";
    button = "Register";
  }

  // speed=30ms per letter, repeats every 2000ms after typing completes
  const animatedTitle = useTypewriter(title, 80, 5000);

  return (
    <div className="container poss--relative z-1">
      <div className="row justify-content-center">
        <div className="slide__inner text-center">
          <h1>{animatedTitle}</h1>
          <p>{desc}</p>
        </div>

        <div className="text-center">
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
  );
};

const SubscribeEmail = ({ mailchimpUrl }) => {
  return (
    <div>
      <MailchimpSubscribe
        url={mailchimpUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default SubscribeEmail;
