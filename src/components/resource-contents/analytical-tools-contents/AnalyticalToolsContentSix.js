import { useEffect, useState } from "react";

const AnalyticalToolsContentSix = () => {
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
      title: "How do Trading Signals work?",
      text: `
              Our trading signals incorporate a variety of analytical approaches - technical, fundamental, and sentiment.<br /><br />
              Signals are generated using advanced market analysis and help identify potential trading opportunities.<br /><br />
              They are suitable for both beginner and experienced traders.
            `,
    },
    {
      title: "Which analytical tool is the best?",
      text: `
              Many traders use a combination of fundamental and technical analysis tools to predict the price movements of currency pairs and other instruments. The Pips gives you access to the top trading tools so that you can plan your trades confidently.<br /><br />
              The analytical tools we provide include the Economic Calendar, Trading Central WebTV and FXStreet News, which are free to use and easily accessible.<br /><br />
            `,
    },
    {
      title: "Where can I get free trading signals?",
      text: `
              Available in your Personal Area and in The Pips Trade app, you can freely use the trading signals from Trading Central to plan your strategies and trades.<br /><br />
              The signals incorporate a variety of analytical approaches and are able to give you insights on expected trends. They are considered valuable trading tools for both beginners and experienced traders.<br /><br />
            `,
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
              <h2>Frequently asked questions</h2>
              {/* <p>
                Designed to give you the edge - whatever your experience level.
              </p> */}
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/analytical_tools/analytical_tools_4.png"
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
                    <p dangerouslySetInnerHTML={{ __html: section.text }} />
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

export default AnalyticalToolsContentSix;
