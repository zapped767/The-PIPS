const DemoTradingAccountContentThree = () => {
  return (
    <div className="how__work__trading">
      <div className="quality-section-market">
        <div className="quality-header-market">
          <h1>Hone your skills at home or on the go</h1>
        </div>
      </div>
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
                <h4>Desktop & web platforms</h4>
              </div>
              <p>
                Explore our wide range of platforms such as MetaTrader 4 and
                Metatrader 5, Metatrader WebTerminal, and the Pips Terminal to
                hone your demo trading skills.
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
                <h4>Mobile platforms</h4>
              </div>
              <p>
                Whether you prefer the MetaTrader mobile app or Pips Trade
                App, your demo trading experience is streamlined and efficient
                with all the Pips benefits and features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoTradingAccountContentThree;
