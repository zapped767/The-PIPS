const BornToTradePodcastContentFour = () => {
  return (
    <div className="how__work__resource">
      <div className="container">
        <div className="contact__cards row">
          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="contact__card">
              <div className="card-header">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/instant_withdrawals.png"
                  }
                  alt="play icon"
                />
                <h4>Why Listen to Born to Trade</h4>
              </div>
              <p>
                Learn from experts sharing real trading experience and market
                insights.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="contact__card">
              <div className="card-header">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/instant_withdrawals.png"
                  }
                  alt="play icon"
                />
                <h4>Market Insights</h4>
              </div>
              <p>Stay updated on Forex, Crypto, Stocks, and Commodities with practical, research-style</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="contact__card">
              <div className="card-header">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/instant_withdrawals.png"
                  }
                  alt="play icon"
                />
                <h4>Practical Strategies</h4>
              </div>
              <p>Learn useful trading tips and risk management ideas you can apply in real markets.</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-12 mb-4">
            <div className="contact__card">
              <div className="card-header">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/markets/instant_withdrawals.png"
                  }
                  alt="play icon"
                />
                <h4>Listen Anywhere</h4>
              </div>
              <p>Stream episodes anytime on any device for flexible learning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BornToTradePodcastContentFour;
