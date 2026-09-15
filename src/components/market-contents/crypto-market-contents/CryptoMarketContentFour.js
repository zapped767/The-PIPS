import { useEffect, useState } from "react";

const CryptoMarketContentFour = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "What cryptocurrencies can I trade on The Pips?",
      text: `You can trade major cryptocurrencies like Bitcoin, Ethereum, Litecoin, Ripple, Cardano, and Solana, with more assets being added regularly.`,
    },
    {
      title: "Is cryptocurrency trading available 24/7?",
      text: `Yes! Unlike traditional markets, the crypto market operates round the clock, allowing you to trade anytime.`,
    },
    {
      title: "How is crypto trading different from forex or stocks?",
      text: `Crypto trading is decentralized and operates 24/7 with higher volatility, offering both increased risk and greater opportunity.`,
    },
    {
      title: "What is the minimum deposit required to trade crypto?",
      text: `You can start trading crypto with the same minimum deposit required for your Pips trading account, making it accessible for every trader.`,
    },
    {
      title: "Does The Pips charge any overnight fees on crypto trades?",
      text: `Yes, overnight swap fees may apply, depending on the asset and position size. Check your trading dashboard for details.`,
    },
  ];

  return (
    <div className="how__work__market">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/9.png"})`,
          backgroundSize: isMobile ? "90%" : "65%",
          backgroundPosition: isMobile ? "-170% 86%" : "130% 133%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Frequently Asked Questions</h2>
              <p>
                New to crypto trading or curious how The Pips helps you stay
                ahead? Here are answers to some of the most common questions.
              </p>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/markets/crypto_cfd/crypto_3.png"
                }
                alt="computer images"
              />
            </div>
          </div>

          {/* RIGHT SIDE ACCORDION */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <hr className="black-line" />
              {sections.map((section, index) => (
                <div key={index} className="accordion-section">
                  <button
                    className="accordion-header"
                    onClick={() => toggleSection(index)}
                  >
                    <h3>{section.title}</h3>
                    <span
                      className={`arrow ${openIndex === index ? "open" : ""}`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`accordion-content ${
                      openIndex === index ? "show" : ""
                    }`}
                  >
                    <p>{section.text}</p>
                  </div>

                  <hr className="black-line" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoMarketContentFour;
