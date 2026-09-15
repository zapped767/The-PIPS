import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbCommoditiesMarket from "../../components/breadcrumbs/markets/BreadcrumbCommoditiesMarket";
import CommoditiesMarketContentOne from "../../components/market-contents/commodities-market-contents/CommoditiesMarketContentOne";
import CommoditiesMarketContentTwo from "../../components/market-contents/commodities-market-contents/CommoditiesMarketContentTwo";
import CommoditiesMarketContentThree from "../../components/market-contents/commodities-market-contents/CommoditiesMarketContentThree";
import CommoditiesMarketContentFour from "../../components/market-contents/commodities-market-contents/CommoditiesMarketContentFour";
import MarketTable from "../../components/market-tables/MarketTable";
import CommoditiesMarketContentFive from "../../components/market-contents/commodities-market-contents/CommoditiesMarketContentFive";

const CommoditiesMarket = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Commodities Market</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbCommoditiesMarket title="Forex Market" />
        <CommoditiesMarketContentThree />
        <CommoditiesMarketContentOne />
        <CommoditiesMarketContentTwo />
        <MarketTable tableType="commodities" />
        <CommoditiesMarketContentFour />
        <CommoditiesMarketContentFive />
      </LayoutTwo>
    </Fragment>
  );
};

export default CommoditiesMarket;
