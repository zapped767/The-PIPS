import { useEffect, useState } from "react";

const CommoditiesMarketContentTwo = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="how__work__market">
      <div
        className="container"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/1.png"})`,
          backgroundSize: isMobile ? "90%" : "50%",
          backgroundPosition: isMobile ? "-125% 87%" : "105% 105%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb-left">
              <div
                className="content-left"
                style={{ order: isMobile ? 1 : "unset" }}
              >
                <h2>How does CFDs on Commodities trading work?</h2>
                <p>
                  CFDs on Commodities cover energy, agriculture and metals
                  products. These products are traded in futures markets and
                  derive their value from demand and supply characteristics,
                  making them highly responsive indicators for investors seeking
                  targeted price speculation.
                </p>
              </div>
              <img
                style={{ order: isMobile ? 2 : "unset" }}
                src={
                  process.env.PUBLIC_URL +
                  "/images/markets/commodities_cfd/commodities_2.png"
                }
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content-right">
              <h3>Energies</h3>
              <p>
                Trade spot contracts including Crude Oil, Brent, and Natural Gas
                against the US Dollar. This instrument provides strong
                advantages for price speculation.
              </p>
              <hr className="black-line" />
              <h3>Precious Metals</h3>
              <p>
                Trade spot Gold or Silver against USD/EUR, and Platinum or
                Palladium against the US Dollar as a currency pair on 1:1000
                leverage.
              </p>
              <hr className="black-line" />
              <h3>Soft CFDs on Commodities</h3>
              <p>
                Access a versatile range of soft commodities including corn,
                soybeans, sugar, cocoa, coffee, and wheat as CFDs-all with tight
                spreads and up to 1:100 leverage.
              </p>
              <hr className="black-line" />
              <h3>Supply & Demand Drivers</h3>
              <p>
                Market trends are characterized by broader economic cycles,
                weather shifts affecting crops, population growth, and
                production extraction costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommoditiesMarketContentTwo;
