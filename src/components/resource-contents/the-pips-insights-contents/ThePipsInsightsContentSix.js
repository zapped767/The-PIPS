import { useEffect, useState } from "react";

const ThePipsInsightsContentSix = () => {
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
      title: "What are The Pips Analytical Tools?",
      text: `They are a suite of advanced market analysis tools designed to help traders make data-informed decisions through real-time insights and trend visualization.`,
    },
    {
      title: "What is The Pips Insights?",
      text: `It’s The Pips’ dedicated research and analysis hub offering daily and weekly updates on global market trends.`,
    },
    {
      title: "Who writes The Pips Insights articles?",
      text: `Our team of in-house analysts, market strategists, and guest contributors with real-world trading experience.`,
    },
    {
      title: "How often is new content published?",
      text: `New insights are released multiple times a week, depending on market activity and global events.`,
    },
    {
      title: "Can beginners understand the content?",
      text: `Yes. Every article is written to be accessible for beginners while still offering depth for advanced traders.`,
    },
    {
      title: "Does The Pips Insights provide financial advice?",
      text: `No. All content is for educational and informational purposes, not personalized investment advice.`,
    },
  ];

  return (
    <div className="how__work__resource">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/2.png"})`,
          backgroundSize: isMobile ? "90%" : "50%",
          backgroundPosition: isMobile ? "-105% 84%" : "102% 105%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Bringing Clarity to Complexity.</h2>
              <p>
                We break down complex market data into clear, structured
                insights, so you can make more informed and confident trading
                decisions.
              </p>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/the_pips_insights/resources_insights_4.png"
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

export default ThePipsInsightsContentSix;
