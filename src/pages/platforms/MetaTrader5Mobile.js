import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbMetaTrader5Mobile from "../../components/breadcrumbs/platforms/BreadcrumbMetaTrader5Mobile";
import MetaTrader5MobileContentOne from "../../components/platform-contents/meta-trader-5-mobile-contents/MetaTrader5MobileContentOne";
import MetaTrader5MobileContentThree from "../../components/platform-contents/meta-trader-5-mobile-contents/MetaTrader5MobileContentThree";
import MetaTrader5MobileContentTwo from "../../components/platform-contents/meta-trader-5-mobile-contents/MetaTrader5MobileContentTwo";
import MetaTrader5MobileContentFour from "../../components/platform-contents/meta-trader-5-mobile-contents/MetaTrader5MobileContentFour";
import MetaTrader5MobileContentFive from "../../components/platform-contents/meta-trader-5-mobile-contents/MetaTrader5MobileContentFive";

const MetaTrader5Mobile = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Meta Trader 5 Mobile</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbMetaTrader5Mobile title="Meta Trader 5 Mobile" />
        <MetaTrader5MobileContentOne />
        <MetaTrader5MobileContentTwo />
        <MetaTrader5MobileContentThree />
        <MetaTrader5MobileContentFour />
        <MetaTrader5MobileContentFive />
      </LayoutTwo>
    </Fragment>
  );
};

export default MetaTrader5Mobile;
