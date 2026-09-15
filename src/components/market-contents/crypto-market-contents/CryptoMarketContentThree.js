import TopicThree from "../crypto-market-contents/TopicThree";

const CryptoMarketContentThree = () => {
  return (
    <>
      {/* <TopicThree /> */}

      <div className="how__work__market">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Trade Cryptocurrency 7 Days a Week</h1>
            <p>
              The Cryptocurrency market is dominated by retail speculators.
              Trade cryptocurrency CFDs with no central bank intervention or
              giant pension funds moving market prices.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="contact__cards row">
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="contact__card">
                <div className="card-header">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/markets/instant_withdrawals.png"
                    }
                    alt="play icon"
                  />
                  <h4>Flexible Position Leverage</h4>
                </div>
                <p>
                  Access up to 1:500 leverage for BTCUSD and ETHUSD below
                  exposure caps. Leverage options scale smoothly to 1:300 or
                  1:200 based on net asset sizes.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="contact__card">
                <div className="card-header">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/markets/instant_withdrawals.png"
                    }
                    alt="play icon"
                  />
                  <h4>No Central Intervention</h4>
                </div>
                <p>
                  Trade crypto pairs long or short without interbank dealers
                  controlling order flow. Enjoy tight spreads down to 0.0 pips
                  and completely clear commission structures.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="contact__card">
                <div className="card-header">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/markets/instant_withdrawals.png"
                    }
                    alt="play icon"
                  />
                  <h4>FSA Regulated & Live Support</h4>
                </div>
                <p>
                  Operate under reliable FSA regulation across MetaTrader 4, 5,
                  cTrader, and TradingView. Get real human live support while
                  trading assets 7 days a week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoMarketContentThree;
