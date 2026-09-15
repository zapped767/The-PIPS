import { Link } from "react-router-dom";

const MetaTrader4MobileContentThree = () => {
  return (
    <div className="how__work__platform">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="content-left">
              <h2>Trade Anytime, From Any Device</h2>
              <p>
                MetaTrader 4 Mobile lets you trade on iOS and Android anytime.
                Stay synced with desktop and web for a smooth, connected
                experience. Get real-time prices, charts, and fast execution, so
                you can manage your account and trade wherever you are.
              </p>
              <Link
                className="slide__btn dg__btn"
                to={process.env.PUBLIC_URL + "/company/contact"}
              >
                Download for iOS / Android
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="thumb-right">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/platforms/meta_trader_4_mobile/meta_trader_4_mobile_2.png"
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

export default MetaTrader4MobileContentThree;
