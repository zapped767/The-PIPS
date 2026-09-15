import { useEffect, useState } from "react";

const CurrencyConverterContentSix = () => {
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
      title: "How is the exchange rate calculated?",
      text: `Exchange rates are determined by either a floating or fixed rate. Floating rates are calculated based on supply and demand in the global markets. A high demand for a currency will increase its value while low demands will drive the price down. This is the type of rate offered by The Pips. On the other hand, a fixed rate is when a currency is set against another major currency, such as the Japanese yen or US dollar, by a government through its central bank.`,
    },
    {
      title: "What day of the week is the best time to exchange currency?",
      text: `There is no one specific day that is the best time to exchange currency as forex pricing is based on numerous factors, such as economic and political events, news releases, investors’ confidence, and more.`,
    },
    {
      title: "Which currency converter is the best?",
      text: `A reliable currency converter, like The Pips Currency Converter, is ideal for checking the most recently available exchange rates and making quick conversions.`,
    },
    {
      title:
        "How often are the exchange rates in the currency converter updated?",
      text: `The Pips Currency Converter refreshes frequently and provides estimated conversions using current indicative exchange rates, allowing traders to compare up to six different currencies at once. Keep in mind that exact conversion rates are determined only at the time of deposit or withdrawal.`,
    },
  ];

  return (
    <div className="how__work__resource">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/4.png"})`,
          backgroundSize: isMobile ? "80%" : "65%",
          backgroundPosition: isMobile ? "160% 84%" : "209% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          {/* LEFT SIDE IMAGE + TEXT */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Frequently asked questions</h2>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/currency_converter/currency_converter_4.png"
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

export default CurrencyConverterContentSix;
