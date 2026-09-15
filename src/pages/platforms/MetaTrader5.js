import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbMetaTrader5 from "../../components/breadcrumbs/platforms/BreadcrumbMetaTrader5";
import MetaTrader5ContentOne from "../../components/platform-contents/meta-trader-5-contents/MetaTrader5ContentOne";
import MetaTrader5ContentThree from "../../components/platform-contents/meta-trader-5-contents/MetaTrader5ContentThree";
import MetaTrader5ContentTwo from "../../components/platform-contents/meta-trader-5-contents/MetaTrader5ContentTwo";
import MetaTrader5ContentFour from "../../components/platform-contents/meta-trader-5-contents/MetaTrader5ContentFour";
import MetaTrader5ContentFive from "../../components/platform-contents/meta-trader-5-contents/MetaTrader5ContentFive";

const MetaTrader5 = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Meta Trader 5</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbMetaTrader5 title="Meta Trader 5" />
        <MetaTrader5ContentOne />
        <MetaTrader5ContentTwo />
        <MetaTrader5ContentThree />
        <MetaTrader5ContentFour />
        <MetaTrader5ContentFive />
      </LayoutTwo>
    </Fragment>
  );
};

export default MetaTrader5;
