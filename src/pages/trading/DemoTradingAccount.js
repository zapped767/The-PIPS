import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbDemoTradingAccount from "../../components/breadcrumbs/trading/BreadcrumbDemoTradingAccount";
import DemoTradingAccountContentTwo from "../../components/trading-contents/demo-trading-account-contents/DemoTradingAccountContentTwo";
import DemoTradingAccountContentFour from "../../components/trading-contents/demo-trading-account-contents/DemoTradingAccountContentFour";
import DemoTradingAccountContentFive from "../../components/trading-contents/demo-trading-account-contents/DemoTradingAccountContentFive";
import DemoTradingAccountContentThree from "../../components/trading-contents/demo-trading-account-contents/DemoTradingAccountContentThree";
import DemoTradingAccountContentOne from "../../components/trading-contents/demo-trading-account-contents/DemoTradingAccountContentOne";
const DemoTradingAccount = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Demo Trading Accounts</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbDemoTradingAccount title="Demo Trading Accounts" />
        <DemoTradingAccountContentOne />
        <DemoTradingAccountContentTwo />
        <DemoTradingAccountContentThree />
        <DemoTradingAccountContentFour />
        <DemoTradingAccountContentFive />
      </LayoutTwo>
    </Fragment>
  );
};

export default DemoTradingAccount;
