import TopicOne from "../meta-trader-web-terminal-contents/TopicOne";

const MetaTraderWebTerminalContentOne = () => {
  return (
    <>
      <TopicOne />

      <div className="how__work__platform">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="thumb-left">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/platforms/meta_trader_web_terminal/meta_trader_web_terminal_01.png"
                  }
                  alt="computer images"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="content-right">
                <h2>Freedom to Trade Without Limits</h2>
                <p>
                  MetaTrader Web Terminal lets you trade directly from your
                  browser, no downloads needed. Easily access your account from
                  any device and manage trades with speed and flexibility. Its
                  familiar interface, real-time data, and stable execution
                  ensure a smooth and reliable trading experience anytime,
                  anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetaTraderWebTerminalContentOne;
