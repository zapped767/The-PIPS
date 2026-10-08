import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbFees from "../../components/breadcrumbs/trading/BreadcrumbFees";
import FeesContentFour from "../../components/trading-contents/fees-contents/FeesContentFour";
import FeesContentThree from "../../components/trading-contents/fees-contents/FeesContentThree";
import FeesContentOne from "../../components/trading-contents/fees-contents/FeesContentOne";
import FeesContentTwo from "../../components/trading-contents/fees-contents/FeesContentTwo";

const Fees = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Fees</title>
        <meta name="description" content="About page of The Pips" />
      </Helmet>
      <LayoutTwo theme="blue">
        <BreadcrumbFees title="Fees" />
        <FeesContentOne />
        <FeesContentTwo />
        <FeesContentThree />
        <FeesContentFour />
      </LayoutTwo>
    </Fragment>
  );
};

export default Fees;
