const FeesContentOne = () => {
  return (
    // <section className="how__work__trading">
    //   <div className="quality-table-wrapper">
    //     <div className="quality-section-market">
    //       <div className="quality-header-market">
    //         <h1>Transparent Fees. Zero Surprises. Total Control.</h1>
    //         <p>
    //           At The Pips, every cost is designed to be clear, predictable, and
    //           trader-friendly. No hidden charges, no fine print, just
    //           straightforward fees and a margin system built to protect you
    //           while you trade.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="contact__cards row justify-content-center mt-0">
    //       <div className="col-lg-4 col-md-6 col-12 mb-4">
    //         <div className="contact__card">
    //           <div className="card-header">
    //             <img
    //               src={
    //                 process.env.PUBLIC_URL +
    //                 "/images/markets/instant_withdrawals.png"
    //               }
    //               alt="play icon"
    //             />
    //             <h4>Transparent, No-Surprise Pricing</h4>
    //           </div>
    //           <p>
    //             Trade with full confidence knowing exactly what you pay, every
    //             time. The Pips offers clear, upfront pricing with no hidden
    //             markups, ambiguous fees, or last-minute charges. Every spread,
    //             commission, and overnight rate is displayed transparently so you
    //             can focus on your strategy, not your costs.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="col-lg-4 col-md-6 col-12 mb-4">
    //         <div className="contact__card">
    //           <div className="card-header">
    //             <img
    //               src={
    //                 process.env.PUBLIC_URL +
    //                 "/images/markets/instant_withdrawals.png"
    //               }
    //               alt="play icon"
    //             />
    //             <h4>Competitive Spreads Across All Markets</h4>
    //           </div>
    //           <p>
    //             Maximize your profit potential with institutional-grade pricing.
    //             Whether you're trading forex, indices, commodities, stocks, or
    //             crypto, our ultra-tight spreads are designed to give you an edge
    //             in fast-moving markets. Lower spreads mean lower trading costs,
    //             so more of your gains stay with you.
    //           </p>
    //         </div>
    //       </div>

    //       <div className="col-lg-4 col-md-6 col-12 mb-4">
    //         <div className="contact__card">
    //           <div className="card-header">
    //             <img
    //               src={
    //                 process.env.PUBLIC_URL +
    //                 "/images/markets/instant_withdrawals.png"
    //               }
    //               alt="play icon"
    //             />
    //             <h4>Fast Execution With Minimal Slippage</h4>
    //           </div>
    //           <p>
    //             Enter and exit trades at the price you expect. With high-speed
    //             order execution and deep liquidity across all major asset
    //             classes, The Pips reduces slippage and delays, even during
    //             volatile market conditions. This ensures smoother trading,
    //             better precision, and improved overall performance.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <div className="how__work__trading">
      <div className="container">
        {/* <div className="quality-section-market">
          <div className="quality-header-market">
            <h1>Transparent Fees. Zero Surprises. Total Control.</h1>
            <p>
              At The Pips, every cost is designed to be clear, predictable, and
              trader-friendly.
             
            </p>
          </div>
        </div> */}

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
                <h4>Say goodbye to withdrawal fees</h4>
              </div>
              <p>
                We pay your third-party transaction fees so you don't have to.
                {/* The Pips offers clear, upfront pricing with no hidden
                markups, ambiguous fees, or last-minute charges.  */}
                {/* Every spread,
                commission, and overnight rate is displayed transparently so you
                can focus on your strategy, not your costs. */}
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
                <h4>Find your ideal account type</h4>
              </div>
              <p>
                Choose from tailored accounts to suit your trading style and
                goals.
                {/* Whether you're trading forex, indices, commodities, stocks, or
                 crypto, our ultra-tight spreads are designed to give you an edge
                 in fast-moving markets.  */}
                {/* Lower spreads mean lower trading costs,
                 so more of your gains stay with you. */}
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
                <h4>Hold overnight positions for free</h4>
              </div>
              <p>
                Trade most popular available instruments with zero swap charges,
                including majors, crypto, and gold.
                {/* With high-speed
                order execution and deep liquidity across all major asset
                classes, The Pips reduces slippage and delays, even during
                volatile market conditions. This ensures smoother trading,
                better precision, and improved overall performance. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesContentOne;
