import TopicOne from "../deposits-and-withdrawals-contents/TopicOne";
import { useEffect, useState } from "react";

const DepositsAndWithdrawalsContentOne = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <TopicOne />

      <div className="how__work__trading">
        <div
          className="container"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/images/transparentImages/2.png"})`,
            backgroundSize: isMobile ? "80%" : "50%",
            backgroundPosition: isMobile ? "-25% 18%" : "-40% 120%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="content-left">
                <h3>Payment methods for your convenience</h3>
                <p>
                  Global, local and secure payment methods for seamless deposits
                  and withdrawals.
                </p>
                <h3>Your money is yours. Period</h3>
                <p>
                  Funds sent within seconds, even on weekends, with instant
                  withdrawals.
                </p>
                <h3>Your funds, commission-free</h3>
                <p>
                  Deposit and withdraw without worrying about charges. We'll
                  cover third-party costs for you.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
              <div className="thumb-right">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/trading/deposits_and_withdrawals/deposit_n_withdrawals_1.png"
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

export default DepositsAndWithdrawalsContentOne;
