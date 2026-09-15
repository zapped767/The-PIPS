import { useEffect, useState } from "react";

const BornToTradePodcastContentThree = () => {
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
      title: "What is the Born to Trade Podcast?",
      text: `It’s The Pips’ official podcast series featuring trading insights, expert discussions, and strategy-focused conversations.`,
    },
    {
      title: "How often are new episodes released?",
      text: `New episodes are released weekly, covering current events, market shifts, and trading strategies.`,
    },
    {
      title: "Where can I listen to the podcast?",
      text: `You can listen directly through The Pips website or on major streaming platforms like Spotify, Apple Podcasts, and Google Podcasts.`,
    },
    {
      title: "Who are the hosts?",
      text: `Episodes are hosted by The Pips analysts and guest speakers from the global trading community.`,
    },
    {
      title: "Is the podcast suitable for beginners?",
      text: `Absolutely. Each episode is designed to be beginner-friendly while still offering advanced insights for experienced traders.`,
    },
    {
      title: "Can I suggest topics or guests?",
      text: `Yes! The Pips welcomes listener feedback and topic suggestions via our contact form.`,
    },
    // {
    //   title: "Does the podcast cover live trading or only discussions?",
    //   text: `Most episodes feature analytical discussions, but certain segments may include real-time trade breakdowns and analysis.`,
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
              <h2>Empowering Every Listener</h2>
              <p>
                Access simple, meaningful conversations on markets and
                strategies designed to help traders build knowledge and
                confidence.
              </p>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/born_to_trade_podcast/born_to_trade_4.png"
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

export default BornToTradePodcastContentThree;
