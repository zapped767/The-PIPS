import { useEffect, useState } from "react";

const DepositsAndWithdrawalsContentFour = () => {
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
      title: "What do “instant” deposits and withdrawals mean?",
      text: "“Instant” means transactions at Pips are processed automatically, without manual intervention by our payment specialists. We approve your requests immediately, but the time it takes to send or receive funds depends on the payment method you've chosen.",
    },
    {
      title: "Why is my withdrawal taking longer than expected?",
      text: "Delays may occur if additional compliance checks are required to meet KYC (Know Your Customer) and anti–money laundering regulations. These checks help us ensure your funds remain secure.",
    },
    {
      title:
        "Can I withdraw to a different payment method than the one I used to deposit?",
      text: "You can withdraw up to your deposited amount using the same payment method. Profits, however, must be withdrawn to a verified bank account.",
    },
    {
      title: "How do I verify my bank account to withdraw profits?",
      text: "Simply go to ‘My Requests’ on the app or web platform and upload the required documents. Once verified, you can withdraw profits directly to that bank account.",
    },
    // {
    //   title: "Why can’t I withdraw profits to my card?",
    //   text: "Due to strict financial regulations and AML (Anti-Money Laundering) rules, profit withdrawals are only allowed to verified bank accounts, not debit or credit cards.",
    // },
    // {
    //   title: "What can I do to avoid withdrawal delays?",
    //   text: "Ensure your payment methods are verified, your account name matches your bank details, and respond promptly to any requests for additional documents or verification.",
    // },
  ];

  return (
    <div className="how__work__trading">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/5.png"})`,
          backgroundSize: isMobile ? "90%" : "60%",
          backgroundPosition: isMobile ? "160% 68%" : "154% 106%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/trading/deposits_and_withdrawals/deposit_n_withdrawals_3.png"
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

export default DepositsAndWithdrawalsContentFour;
