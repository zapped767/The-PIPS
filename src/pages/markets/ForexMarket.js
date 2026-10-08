import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbForexMarket from "../../components/breadcrumbs/markets/BreadcrumbForexMarket";
import ForexMarketContentOne from "../../components/market-contents/forex-market-contents/ForexMarketContentOne";
import ForexMarketContentTwo from "../../components/market-contents/forex-market-contents/ForexMarketContentTwo";
import ForexMarketContentThree from "../../components/market-contents/forex-market-contents/ForexMarketContentThree";
import ForexMarketContentFour from "../../components/market-contents/forex-market-contents/ForexMarketContentFour";
import MarketTable from "../../components/market-tables/MarketTable";

const ForexMarket = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Forex Market</title>
        <meta name="description" content="About page of The Pips" />
      </Helmet>
      <LayoutTwo theme="blue">
        <BreadcrumbForexMarket title="Forex Market" />
        <ForexMarketContentThree />
        <ForexMarketContentOne />
        <ForexMarketContentTwo />
        <MarketTable tableType="forex"/>
        <ForexMarketContentFour />
      </LayoutTwo>
    </Fragment>
  );
};

export default ForexMarket;
