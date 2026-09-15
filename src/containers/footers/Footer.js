import { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { MdExpandLess, MdClose } from "react-icons/md";
import {} from // FaFacebookSquare,
// FaLinkedin,
// FaTwitterSquare,
// FaVimeoSquare,
// FaTumblrSquare,
// FaHeart,
"react-icons/fa";

const Footer = ({ theme }) => {
  const [scroll, setScroll] = useState(0);
  const [top] = useState(100);
  const [showCertModal, setShowCertModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!showCertModal) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowCertModal(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [showCertModal]);

  const scrollToTop = () => animateScroll.scrollToTop();

  // Helper function to build links using the base path
  const buildLink = (path) => `${process.env.PUBLIC_URL}${path}`;

  const certificatePdfPath = buildLink("/documents/THEPIPS_2026-00403.jpg");

  return (
    <footer
      className={`footer-area ${theme === "blue" ? "footer--2" : "footer--1"}`}
    >
      <div
        className={`dg__footer__container ${
          theme === "blue" ? "bg--blue" : "bg__color--2"
        }`}
      >
        <div className="container">
          <div className="row gy-4">
            {/* Column 1: Trading Accounts */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer__widget">
                <h4>Trading Accounts</h4>
                <ul className="ft__menu">
                  <li>
                    <a href={buildLink("/trading/types-of-accounts")}>
                      Types of Accounts
                    </a>
                  </li>
                  <li>
                    <a href={buildLink("/trading/demo-trading-account")}>
                      Demo trading accounts
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Trading Info */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer__widget">
                <h4>Trading Info</h4>
                <ul className="ft__menu">
                  <li>
                    <a href={buildLink("/trading/deposits-and-withdrawals")}>
                      Deposits and withdrawals
                    </a>
                  </li>
                  <li>
                    <a href={buildLink("/trading/fees")}>Fees</a>
                  </li>
                  <li>
                    <a href={buildLink("/trading/client-protection")}>
                      Client protection
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Markets */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer__widget">
                <h4>Markets</h4>
                <ul className="ft__menu">
                  <li>
                    <a href={buildLink("/markets/forex-market")}>Forex CFD</a>
                  </li>
                  <li>
                    <a href={buildLink("/markets/commodities-market")}>
                      Commodities CFD
                    </a>
                  </li>
                  <li>
                    <a href={buildLink("/markets/stock-market")}>Stocks CFD</a>
                  </li>
                  <li>
                    <a href={buildLink("/markets/indices-market")}>
                      Indices CFD
                    </a>
                  </li>
                  <li>
                    <a href={buildLink("/markets/crypto-market")}>Crypto CFD</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Platforms */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer__widget">
                <h4>Platforms</h4>
                <ul className="ft__menu">
                  <li>
                    <a href={buildLink("/platforms/pips-terminal")}>
                      Pips Terminal
                    </a>
                  </li>
                  <li>
                    <a href={buildLink("/platforms/pips-trade-app")}>
                      Pips Trade App
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 5: Resources */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer__widget">
                <h4>Resources</h4>
                <ul className="ft__menu">
                  <li>
                    <a href={buildLink("/resources/analytical-tools")}>
                      Analytical Tools
                    </a>
                  </li>
                  <li>
                    <a href={buildLink("/resources/economic-calendar")}>
                      Economic Calendar
                    </a>
                  </li>
                  <li>
                    <a href={buildLink("/resources/trading-calculator")}>
                      Trading Calculator
                    </a>
                  </li>
                  <li>
                    <a href={buildLink("/resources/currency-converter")}>
                      Currency Converter
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 6: Company & Partners (Combined) */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="footer__widget">
                <h4>Company</h4>
                <ul className="ft__menu">
                  <li>
                    <a href={buildLink("/company/about")}>About Us</a>
                  </li>
                  <li>
                    <a href={buildLink("/company/contact")}>Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dg__footer__p mt-5 space-y-4 text-sm leading-6 text-gray-600">
            <p>
              ThePips Inc, registered and governed by the law of Saint Lucia
              under business reg. number{" "}
              <span
                className="incorporation-link"
                role="button"
                tabIndex={0}
                onClick={() => setShowCertModal(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setShowCertModal(true);
                  }
                }}
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "inherit",
                }}
              >
                2026-00403
              </span>{" "}
              , operates the website thepips.com.
            </p>

            <p>
              <strong>Registered address:</strong> offices of Robin Kelton
              Building, Choc Bay P.O Box CP5600, Castries, Saint Lucia.
            </p>

            <p>
              <strong>Restricted regions:</strong> the entity above does not
              provide services to, including but not limited to residents of
              Canada, the European Union, Iran, Israel, Japan, Myanmar, New
              Zealand, North Korea, the Philippines, the United Kingdom, and the
              United States of America. Individuals accessing this site from
              these or other restricted jurisdictions must comply with local
              laws.
            </p>

            <p>
              The content on this website, including translations, should not be
              considered a solicitation or offer for investment activities or
              investment advice or recommendation.
            </p>

            <p>
              <strong>Risk disclosure:</strong> Trading leveraged financial
              products involves significant risk and may result in the loss of
              all invested capital. These instruments are not suitable for all
              investors. We strongly advise that you fully understand the risks
              associated with such trading and only invest capital that you are
              prepared to lose. Past performance should not be considered
              indicative of future results.
            </p>

            <p>
              Our leverage is dynamic and may change at any time. Such changes
              may affect your positions and margin requirements. You are
              responsible for monitoring your positions and maintaining
              sufficient margin at all times.
            </p>

            <p>
              ThePips Inc employs Transport Layer Security (TLS) encryption to
              protect all transaction data transmitted through the platform.
              This industry-standard encryption protocol ensures the
              confidentiality and integrity of your sensitive information during
              transmission, safeguarding it against unauthorised access and
              interception.
            </p>
          </div>
        </div>
        {/* Copyright */}
        <div
          className={`copyright ${theme === "blue" ? "bg--blue" : "bg--black"}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-12">
                <div className="copyright__inner">
                  <p className="copyright-text">
                    &copy; Copyright 2026 - The Pips
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll To Top */}
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <MdExpandLess />
      </button>

      {/* Certificate of Incorporation Modal */}
      {showCertModal && (
        <div
          className="cert-modal-overlay"
          onClick={() => setShowCertModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.6)",
            zIndex: 1050,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "8px",
              width: "100%",
              maxWidth: "900px",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="cert-modal-header"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 16px",
                borderBottom: "1px solid #eee",
                flexShrink: 0,
              }}
            >
              <h5 style={{ margin: 0 }}>Certificate of Incorporation</h5>
              <button
                aria-label="Close"
                onClick={() => setShowCertModal(false)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "22px",
                  lineHeight: 1,
                }}
              >
                <MdClose />
              </button>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "auto",
                background: "#f5f5f5",
                padding: "16px",
                minHeight: 0,
              }}
            >
              <img
                src={certificatePdfPath}
                alt="ThePips Inc Certificate of Incorporation"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
