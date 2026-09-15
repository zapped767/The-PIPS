import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbCurrencyConverter from "../../components/breadcrumbs/resources/BreadcrumbCurrencyConverter";
import CurrencyConverterContentOne from "../../components/resource-contents/currency-converter-contents/CurrencyConverterContentOne";
// import CurrencyConverterContentThree from "../../components/resource-contents/currency-converter-contents/CurrencyConverterContentThree";
// import CurrencyConverterContentTwo from "../../components/resource-contents/currency-converter-contents/CurrencyConverterContentTwo";
// import CurrencyConverterContentFour from "../../components/resource-contents/currency-converter-contents/CurrencyConverterContentFour";
import CurrencyConverterContentFive from "../../components/resource-contents/currency-converter-contents/CurrencyConverterContentFive";
import CurrencyConverterContentSix from "../../components/resource-contents/currency-converter-contents/CurrencyConverterContentSix";

const CurrencyConverter = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Currency Converter</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbCurrencyConverter title="Currency Converter" />
        <CurrencyConverterContentOne />
        {/* <CurrencyConverterContentTwo /> */}
        {/* <CurrencyConverterContentTwo /> */}
        {/* <CurrencyConverterContentThree /> */}
        {/* <CurrencyConverterContentFour /> */}

        <CurrencyConverterContentFive />
        <CurrencyConverterContentSix />
      </LayoutTwo>
    </Fragment>
  );
};

export default CurrencyConverter;
