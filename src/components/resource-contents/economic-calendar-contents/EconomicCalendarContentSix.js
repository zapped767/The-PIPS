import { useEffect, useState } from "react";

const EconomicCalendarContentSix = () => {
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
      title: "How to use the economic calendar",
      text: `The economic calendar lists past, current, and future events expected to impact markets. Use the drop-down menus to filter by timezone, timeframe, country, level of impact, and event type.<br /><br />
             The calendar displays the time and location of these events, along with their titles or a description of the event. The predicted impact level of that event (low, medium, high), as well as the actual and forecast changes, are also available.<br /><br />  
             You can reset your chosen filters at any time by clicking the X in the top-right corner of the filter list.`,
    },
    {
      title: "Stay up to date with market-moving events",
      text: `We notify traders before upcoming events, news, and data releases to keep them informed of the time and instruments that may be affected. You can find these notifications under the "Mailbox" tab on your trading platform. Please keep in mind that the impact of economic news and indicators can vary across instruments.`,
    },
    // {
    //   title: "Can I filter events to match my trading focus?",
    //   text: `Yes. You can filter the calendar using dropdown menus to sort by timezone, timeframe, country, impact level, and event type. You can reset all filters at any time by clicking the X in the top-right corner of the filter list.`,
    // },
    // {
    //   title: "What information is shown for each event?",
    //   text: `Each event displays its scheduled time, country of origin, event title or description, predicted impact rating (low, medium, or high), and both forecast and actual values. You can also click the graph icon to view a detailed description and historical chart for any event.`,
    // },
    // {
    //   title: "Which countries and markets does the calendar cover?",
    //   text: `The calendar covers major economies worldwide, including Australia, Canada, China, France, Germany, Japan, Mexico, New Zealand, South Africa, Switzerland, the United Kingdom, and the United States, among others.`,
    // },
    // {
    //   title: "Will I be notified before important events?",
    //   text: `Yes. The Pips notifies traders before upcoming events, news, and data releases so you are always informed of the timing and which instruments may be affected - helping you plan your trades with confidence.`,
    // },
    // {
    //   title: "Does the Economic Calendar support multiple time zones?",
    //   text: `Yes, it automatically adjusts to your local time zone for convenient global tracking.`,
    // },
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
              <h2>Plan your trading with the Pips economic calendar</h2>
              {/* <p>
                It is indispensable for keeping track of upcoming news, reports,
                and announcements at a glance - so you can plan your trades and
                react to volatility before it happens.
              </p> */}
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/economic_calendar/economic_calendar_4.png"
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

export default EconomicCalendarContentSix;
