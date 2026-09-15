import { Link } from "react-router-dom";

const MetaTraderWebTerminalContentThree = () => {
  return (
    <div className="how__work__platform">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Trade Anytime, Anywhere</h2>
              <p>
                The MetaTrader Web Terminal lets you trade easily from any
                browser. Access charts, indicators, and live trading tools
                without installation. Your data syncs across devices in real
                time, so you stay updated anywhere. Built for speed and
                stability, it works smoothly even on low connections, helping
                you trade without missing opportunities.
              </p>
              <Link
                className="slide__btn dg__btn"
                to={process.env.PUBLIC_URL + "/company/contact"}
              >
                Launch Web Terminal
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="thumb-right">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/platforms/meta_trader_web_terminal/meta_trader_web_terminal_02.png"
                }
                alt="computer images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaTraderWebTerminalContentThree;
