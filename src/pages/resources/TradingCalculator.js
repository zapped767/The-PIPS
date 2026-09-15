import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbTradingCalculator from "../../components/breadcrumbs/resources/BreadcrumbTradingCalculator";
import TradingCalculatorContentOne from "../../components/resource-contents/trading-calculator-contents/TradingCalculatorContentOne";
import TradingCalculatorContentThree from "../../components/resource-contents/trading-calculator-contents/TradingCalculatorContentThree";
import TradingCalculatorContentTwo from "../../components/resource-contents/trading-calculator-contents/TradingCalculatorContentTwo";
// import TradingCalculatorContentFour from "../../components/resource-contents/trading-calculator-contents/TradingCalculatorContentFour";
import TradingCalculatorContentFive from "../../components/resource-contents/trading-calculator-contents/TradingCalculatorContentFive";
import TradingCalculatorContentSix from "../../components/resource-contents/trading-calculator-contents/TradingCalculatorContentSix";

const TradingCalculator = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Trading Calculator</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbTradingCalculator title="Trading Calculator" />
        <TradingCalculatorContentOne />
        <TradingCalculatorContentTwo />
        {/* <TradingCalculatorContentTwo /> */}
        <TradingCalculatorContentThree />
        {/* <TradingCalculatorContentFour /> */}

        <TradingCalculatorContentFive />
        <TradingCalculatorContentSix />
      </LayoutTwo>
    </Fragment>
  );
};

export default TradingCalculator;
