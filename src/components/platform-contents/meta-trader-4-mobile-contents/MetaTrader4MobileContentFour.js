const MetaTrader4MobileContentFour = () => {
  return (
    <div className="how__work__platform">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb-left">
              <div className="content-left">
                <h2>All the Markets, in the Palm of Your Hand</h2>

                <p>Trade global markets easily with MT4 Mobile.</p>
              </div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/platforms/meta_trader_4_mobile/meta_trader_4_mobile_3.jpg"
                }
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <h3>Forex</h3>
              <p>Trade 60+ currency pairs with fast execution.</p>
              <hr className="black-line" />
              <h3> Commodities</h3>
              <p>Trade energy, metals, and agriculture with live data.</p>
              <hr className="black-line" />
              <h3>Indices</h3>
              <p>Access major global indices with control and flexibility.</p>
              <hr className="black-line" />
              <h3>Cryptocurrencies</h3>
              <p>Trade digital assets securely on the go.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaTrader4MobileContentFour;
