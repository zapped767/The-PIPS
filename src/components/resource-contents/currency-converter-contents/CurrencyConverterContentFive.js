const CurrencyConverterContentFour = () => {
  return (
    <>
      <div className="how__work__resource">
        <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Why The Pips?</h1>
            <p>Upgrade your trading with better-than-market conditions.</p>
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
                  <h4>Fastest withdrawals</h4>
                </div>
                <p>
                  Stay in control of your funds. Simply choose your preferred
                  payment method and make a withdrawal request.
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
                  <h4>Ultra-fast execution</h4>
                </div>
                <p>
                  Get the most precise execution in the markets with spreads
                  that stay 4 times more stable during high-impact news.
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
                  <h4>Stop Out Protection</h4>
                </div>
                <p>
                  Protect your positions from unexpected market movements with
                  our advanced stop out protection features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrencyConverterContentFour;
