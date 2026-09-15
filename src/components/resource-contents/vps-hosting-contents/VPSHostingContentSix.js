import { useEffect, useState } from "react";

const VPSHostingContentSix = () => {
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
      title: "What is VPS Hosting?",
      text: `VPS (Virtual Private Server) Hosting allows traders to run their trading platforms on a remote server, ensuring 24/7 uptime and faster execution.`,
    },
    {
      title: "Who can use The Pips VPS service?",
      text: `Any trader using The Pips trading platform can apply for VPS access, especially beneficial for automated and algorithmic trading.`,
    },
    {
      title: "How do I access my VPS?",
      text: `Once your VPS is activated, you’ll receive login credentials to connect remotely via your preferred terminal.`,
    },
    {
      title: "Is there a cost for using The Pips VPS?",
      text: `VPS access may be offered free based on account type and trading activity. Check your account dashboard for details.`,
    },
    {
      title: "Which platforms are supported?",
      text: `The Pips VPS supports MetaTrader 4, MetaTrader 5, and The Pips Trade App.`,
    },
    {
      title: "Can I install my own Expert Advisors (EAs)?",
      text: `Yes. You can install and run your preferred EAs, scripts, and trading tools directly on the VPS.`,
    },
    // {
    //   title: "How secure is The Pips VPS?",
    //   text: `All data is protected through encrypted connections and hosted on secure, redundant servers.`,
    // },
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
              <h2>A Foundation for Automated Trading</h2>
              <p>
                It ensures fast and stable execution of your strategies so you
                can capture market opportunities without interruption.
              </p>
            </div>
            <div className="thumb-left">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/resources/vps_hosting/vps_hosting_4.png"
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

export default VPSHostingContentSix;
