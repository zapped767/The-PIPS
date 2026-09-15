import TopicOne from "../../resource-contents/economic-calendar-contents/TopicOne";
import { useEffect, useState } from "react";
const EconomicCalendarContentOne = () => {
  const iframeSrc =
    "https://sslecal2.investing.com" +
    "?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous" +
    "&features=datepicker,timezone,filters" +
    "&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5" +
    "&calType=day" +
    "&timeZone=58" +
    "&lang=1";

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <TopicOne />

      <section
        id="economic-calendar-section"
        className="ec-widget-section"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/11.png"})`,
          backgroundSize: isMobile ? "90%" : "60%",
          backgroundPosition: isMobile ? "-164% 107%" : "112% 120%",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="ec-widget-header">
            <div className="ec-widget-header-left">
              <span className="ec-widget-live-dot" />
              <h3 className="ec-widget-title">Economic Calendar</h3>
            </div>
            <p className="ec-widget-subtitle">
              Real-time economic events &amp; data releases
            </p>
          </div>
        <div className="ec-widget-container">
          

          <div className="ec-widget-wrapper">
            <iframe
              src={iframeSrc}
              width="660"
              height="720"
              frameBorder="0"
              allowTransparency="true"
              marginWidth="0"
              marginHeight="0"
              title="Economic Calendar"
            />
          </div>

          <div className="ec-widget-footer">
            <span>
              Powered by&nbsp;
              <a
                href="https://www.investing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ec-investing-link"
              >
                Investing.com
              </a>
            </span>
            <span className="ec-data-note">
              Data updated in real time. Always verify before trading.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default EconomicCalendarContentOne;
