import TopicOne from "../crypto-market-contents/TopicOne";

const CryptoMarketContentOne = () => {
  return (
    <>
      <TopicOne />

      <div className="how__work__market">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="content-left">
                <h3>Unique Asset Value</h3>
                <p>
                  Bitcoin operates as a distinct digital asset class that prices
                  itself depending on raw liquidity pool dynamics instead of
                  relying on standard sovereign fiat backing structures.
                </p>

                <h3>Finite Capital Supply</h3>
                <p>
                  Because Bitcoin is minted with a hardcapped finite supply
                  ceiling, market values naturally climb over time whenever net
                  global purchasing demand accelerates across core networks.
                </p>

                <h3>Speculative & Practical Demand</h3>
                <p>
                  Buying pressure stems from combined speculative day trading
                  sources alongside concrete, practical use-cases, including
                  real-world online product transactions and digital purchases.
                </p>

                <h3>Traditional Market Sentiment</h3>
                <p>
                  Digital tokens showcase a distinct tendency to react strongly
                  against typical macroeconomic volatility, often showing sharp
                  price spikes during periods of negative equity or FX
                  sentiment.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="thumb-right">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/crypto_cfd/crypto_1.png"
                  }
                  alt="computer images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoMarketContentOne;
