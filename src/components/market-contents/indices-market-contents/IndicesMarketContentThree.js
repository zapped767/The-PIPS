import TopicThree from "./TopicThree";

const IndicesMarketContentThree = () => {
  return (
    <>
      {/* Add the TopicOne component here */}
      {/* <TopicThree /> */}

      <div className="how__work__market">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Indices are the Most Popular Form of CFDs</h1>
            <p>
              Gain exposure to a broad basket of premium blue chip stocks listed
              on global exchanges rather than taking an isolated view on one
              individual asset alone.
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
                  <h4>25 Indices to Trade From</h4>
                </div>
                <p>
                  Choose from a comprehensive range of indices around the world,
                  including the Australian S&P 200, UK FTSE 100, US E-mini S&P
                  500 and US DJIA Index.
                </p>
              </div>
            </div>

            {/* Email Inquiries */}
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
                  <h4>Deep Liquidity & No Commissions</h4>
                </div>
                <p>
                  Take advantage of flexible online CFD and futures-based
                  instruments offered across all platforms featuring stable
                  margins, no hidden commissions, and leverage up to 1:200.
                </p>
              </div>
            </div>

            {/* Our Office */}
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
                  <h4>Indicative Market Performance</h4>
                </div>
                <p>
                  Track underlying economic sentiment effectively since changes
                  in the execution performance of any individual constituent
                  stock are instantly reflected in the overall index value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndicesMarketContentThree;
