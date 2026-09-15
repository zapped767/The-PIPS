import { useEffect, useState } from "react";

const ProfessionalAccountsContentTwo = () => {
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
      title: "Who is the Professional Account designed for?",
      text: "Active traders, scalpers, high-volume traders, and algorithmic system users.",
    },
    {
      title: "Do spreads differ across professional tiers?",
      text: "Yes, the higher the tier, the tighter the spreads.",
    },
    {
      title: "Can robots (EAs) be used?",
      text: "Absolutely. This account is optimized for automated trading.",
    },
    {
      title: "Is there a commission?",
      text: "No, spreads-only pricing across all tiers.",
    },
    {
      title: "Do I get a dedicated manager?",
      text: "Yes, starting from the Gold tier.",
    },
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
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/trading/professional_accounts/professional_acc.png"
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

export default ProfessionalAccountsContentTwo;
