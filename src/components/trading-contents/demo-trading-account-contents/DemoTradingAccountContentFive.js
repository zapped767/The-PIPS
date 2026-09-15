import { useEffect, useState } from "react";

const DemoTradingAccountContentFour = () => {
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
      title: "What is the difference between a real and demo trading account?",
      text: "The key difference is that real accounts involve trading with real money, while demo accounts use virtual money without any real value. Market conditions are the same for both account types, making demos perfect for strategy practice. Demo accounts are available for all account types except Standard Cent.",
    },
    {
      title: "How do I top up my demo trading account?",
      text: "Top up your demo trading account by logging into your Pips Personal Area. Click ‘Set Balance’ on the demo trading account in the ‘My Accounts’ tab. It is also possible to do this with the Pips Trade app.",
    },
    {
      title: "Can I use real money on a demo trading account?",
      text: "No. Demo accounts are virtual trading accounts that mimic real trading conditions, allowing traders to practice without using real funds. When you register an Pips account, you get an MT5-based demo account with $10,000 in virtual funds by default.",
    },
    // {
    //   title: "How long can I use the demo?",
    //   text: "As long as you need. There’s no expiry.",
    // },
    // {
    //   title: "Can I switch from demo to live instantly?",
    //   text: "Yes, you can upgrade to a real account with one click.",
    // },
    // {
    //   title: "Are all instruments available in the demo?",
    //   text: "Yes, Forex, commodities, crypto, indices, and more.",
    // },
    // {
    //   title: "Can I practice with different tiers?",
    //   text: "Yes, simulate any account tier from Basic to Exclusive.",
    // },
  ];

  return (
    <div className="how__work__trading">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/2.png"})`,
          backgroundSize: isMobile ? "80%" : "60%",
          backgroundPosition: isMobile ? "-25% 76%" : "123% 106%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Demo Account FAQs</h2>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/trading/demo_trading_account/demo_acc_6.png"
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

export default DemoTradingAccountContentFour;
