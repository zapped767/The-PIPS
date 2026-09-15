import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbMetaTrader4 from "../../components/breadcrumbs/platforms/BreadcrumbMetaTrader4";
import MetaTrader4ContentOne from "../../components/platform-contents/meta-trader-4-contents/MetaTrader4ContentOne";
import MetaTrader4ContentThree from "../../components/platform-contents/meta-trader-4-contents/MetaTrader4ContentThree";
import MetaTrader4ContentTwo from "../../components/platform-contents/meta-trader-4-contents/MetaTrader4ContentTwo";
import MetaTrader4ContentFour from "../../components/platform-contents/meta-trader-4-contents/MetaTrader4ContentFour";
import MetaTrader4ContentFive from "../../components/platform-contents/meta-trader-4-contents/MetaTrader4ContentFive";

const MetaTrader4 = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Meta Trader 4</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbMetaTrader4 title="Meta Trader 4" />
        <MetaTrader4ContentOne />
        <MetaTrader4ContentTwo />
        <MetaTrader4ContentThree />
        <MetaTrader4ContentFour />
        <MetaTrader4ContentFive />
      </LayoutTwo>
    </Fragment>
  );
};

export default MetaTrader4;
