import { useState } from "react";

const FeesContentFour = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Is Pips free?",
      text: `We work to keep costs as low as possible for our clients, removing many of the expected charges implemented by other brokers. Like all online trading platforms, Pips charges spreads and commissions on selected instruments.`,
    },
    {
      title: "Does Pips charge management fees?",
      text: `No. We don't charge any management fees and it's completely free to open an account with us.`,
    },
  ];

  return (
    <div className="how__work__trading">
      <div
        className="container"
        // style={{
        //   backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/2.png"})`,
        //   backgroundSize: "40%",
        //   backgroundPositionX: "-25%",
        //   backgroundPositionY: "120%",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="row">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Frequently Asked Questions</h2>
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

export default FeesContentFour;
