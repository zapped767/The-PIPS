import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbStockMarket from "../../components/breadcrumbs/markets/BreadcrumbStockMarket";
import StockMarketContentOne from "../../components/market-contents/stock-market-contents/StockMarketContentOne";
import StockMarketContentTwo from "../../components/market-contents/stock-market-contents/StockMarketContentTwo";
import StockMarketContentThree from "../../components/market-contents/stock-market-contents/StockMarketContentThree";
import StockMarketContentFour from "../../components/market-contents/stock-market-contents/StockMarketContentFour";
import MarketTable from "../../components/market-tables/MarketTable";

const StockMarket = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Stock Market</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbStockMarket title="Forex Market" />
        <StockMarketContentThree />
        <StockMarketContentOne />
        <StockMarketContentTwo />
        <MarketTable tableType="stocks"/>
        <StockMarketContentFour />
      </LayoutTwo>
    </Fragment>
  );
};

export default StockMarket;
