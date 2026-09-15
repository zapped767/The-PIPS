const ThePipsInsightsContentFour = () => {
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
                <h4>Timely Market Analysis</h4>
              </div>
              <p>
                Stay updated with daily and weekly market trends and movements.
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
                <h4>Expert Views</h4>
              </div>
              <p>Simple, expert-driven insights to help you understand the markets.</p>
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
                <h4>Visual Data</h4>
              </div>
              <p>Clear charts and reports for easier analysis and interpretation.</p>
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
                <h4>Multi-Market Coverage</h4>
              </div>
              <p>Insights across Forex, Crypto, Stocks, and Commodities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThePipsInsightsContentFour;
