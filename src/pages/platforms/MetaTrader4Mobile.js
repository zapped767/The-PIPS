import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbMetaTrader4Mobile from "../../components/breadcrumbs/platforms/BreadcrumbMetaTrader4Mobile";
import MetaTrader4MobileContentOne from "../../components/platform-contents/meta-trader-4-mobile-contents/MetaTrader4MobileContentOne";
import MetaTrader4MobileContentThree from "../../components/platform-contents/meta-trader-4-mobile-contents/MetaTrader4MobileContentThree";
import MetaTrader4MobileContentTwo from "../../components/platform-contents/meta-trader-4-mobile-contents/MetaTrader4MobileContentTwo";
import MetaTrader4MobileContentFour from "../../components/platform-contents/meta-trader-4-mobile-contents/MetaTrader4MobileContentFour";
import MetaTrader4MobileContentFive from "../../components/platform-contents/meta-trader-4-mobile-contents/MetaTrader4MobileContentFive";

const MetaTrader4Mobile = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Meta Trader 4 Mobile</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbMetaTrader4Mobile title="Meta Trader 4 Mobile" />
        <MetaTrader4MobileContentOne />
        <MetaTrader4MobileContentTwo />
        <MetaTrader4MobileContentThree />
        <MetaTrader4MobileContentFour />
        <MetaTrader4MobileContentFive />
      </LayoutTwo>
    </Fragment>
  );
};

export default MetaTrader4Mobile;
