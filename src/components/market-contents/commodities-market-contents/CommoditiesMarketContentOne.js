import TopicOne from "../commodities-market-contents/TopicOne";

const CommoditiesMarketContentOne = () => {
  return (
    <>
      <TopicOne />

      <div className="how__work__market">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="content-left">
                <h3>Over 22 Commodities CFDs</h3>
                <p>
                  Access a highly attractive market for speculators where price
                  movements fluctuate continuously with dramatic global changes
                  in supply and demand.
                </p>
                <h3>Energy, Agriculture and Metals</h3>
                <p>
                  Diversify your trading portfolio across major asset classes,
                  securing multi-platform connectivity with reliable modern
                  order execution protocols.
                </p>
                <h3>Spot and Futures CFDs</h3>
                <p>
                  Gain targeted market entry through liquid instruments designed
                  to maximize underlying volatility and support robust
                  day-trading methodologies.
                </p>
                <h3>Leverage and Raw Pricing</h3>
                <p>
                  Utilize flexible leverage options up to 1:1000 and
                  institutional-grade raw spreads scaling all the way down to a
                  minimum of 0.0 pips.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="thumb-right">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/commodities_cfd/commodities_1.png"
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

export default CommoditiesMarketContentOne;
