import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbCryptoMarket from "../../components/breadcrumbs/markets/BreadcrumbCryptoMarket";
import CryptoMarketContentOne from "../../components/market-contents/crypto-market-contents/CryptoMarketContentOne";
import CryptoMarketContentTwo from "../../components/market-contents/crypto-market-contents/CryptoMarketContentTwo";
import CryptoMarketContentThree from "../../components/market-contents/crypto-market-contents/CryptoMarketContentThree";
import CryptoMarketContentFour from "../../components/market-contents/crypto-market-contents/CryptoMarketContentFour";
import MarketTable from "../../components/market-tables/MarketTable";

const CryptoMarket = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Crypto Market</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbCryptoMarket title="Forex Market" />
        <CryptoMarketContentThree />
        <CryptoMarketContentOne />
        <CryptoMarketContentTwo />
        <MarketTable />
        <CryptoMarketContentFour />
      </LayoutTwo>
    </Fragment>
  );
};

export default CryptoMarket;
