import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbIndicesMarket from "../../components/breadcrumbs/markets/BreadcrumbIndicesMarket";
import IndicesMarketContentOne from "../../components/market-contents/indices-market-contents/IndicesMarketContentOne";
import IndicesMarketContentTwo from "../../components/market-contents/indices-market-contents/IndicesMarketContentTwo";
import IndicesMarketContentThree from "../../components/market-contents/indices-market-contents/IndicesMarketContentThree";
import IndicesMarketContentFour from "../../components/market-contents/indices-market-contents/IndicesMarketContentFour";
import MarketTable from "../../components/market-tables/MarketTable";

const IndicesMarket = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Indices Market</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbIndicesMarket title="Forex Market" />
        <IndicesMarketContentThree />
        <IndicesMarketContentOne />
        <IndicesMarketContentTwo />
        <MarketTable tableType="indices"/>
        <IndicesMarketContentFour />
      </LayoutTwo>
    </Fragment>
  );
};

export default IndicesMarket;
