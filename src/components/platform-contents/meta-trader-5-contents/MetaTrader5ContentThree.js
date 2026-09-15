import { Link } from "react-router-dom";

const MetaTrader5ContentThree = () => {
  return (
    <div className="how__work__platform">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Trade Anywhere, Anytime with MetaTrader 5</h2>
              <p>
                Trade on MT5 via mobile, web, or desktop with full access
                anytime. Manage trades, analyze markets, and execute orders from
                any device. Stay synced across platforms with fast, smooth
                performance on the go.
              </p>
              <Link
                className="slide__btn dg__btn"
                to={process.env.PUBLIC_URL + "/company/contact"}
              >
                Access MT5 Anywhere
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="thumb-right">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/platforms/meta_trader_4/meta_trader_4_02.png"
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

export default MetaTrader5ContentThree;
