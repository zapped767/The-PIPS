import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbPipsTradeApp from "../../components/breadcrumbs/platforms/BreadcrumbPipsTradeApp";
import PipsTradeAppContentOne from "../../components/platform-contents/pips-trade-app-contents/PipsTradeAppContentOne";
import PipsTradeAppContentThree from "../../components/platform-contents/pips-trade-app-contents/PipsTradeAppContentThree";
import PipsTradeAppContentTwo from "../../components/platform-contents/pips-trade-app-contents/PipsTradeAppContentTwo";
import PipsTradeAppContentFour from "../../components/platform-contents/pips-trade-app-contents/PipsTradeAppContentFour";
import PipsTradeAppContentFive from "../../components/platform-contents/pips-trade-app-contents/PipsTradeAppContentFive";

const PipsTradeApp = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Pips Trade App</title>
        <meta name="description" content="About page of The Pips" />
      </Helmet>
      <LayoutTwo theme="blue">
        <BreadcrumbPipsTradeApp title="Pips Trade App" />
        <PipsTradeAppContentOne />
        <PipsTradeAppContentTwo />
        <PipsTradeAppContentThree />
        <PipsTradeAppContentFour />
        <PipsTradeAppContentFive />
      </LayoutTwo>
    </Fragment>
  );
};

export default PipsTradeApp;
