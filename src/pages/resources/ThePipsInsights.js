import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbThePipsInsights from "../../components/breadcrumbs/resources/BreadcrumbThePipsInsights";
import ThePipsInsightsContentOne from "../../components/resource-contents/the-pips-insights-contents/ThePipsInsightsContentOne";
import ThePipsInsightsContentThree from "../../components/resource-contents/the-pips-insights-contents/ThePipsInsightsContentThree";
import ThePipsInsightsContentTwo from "../../components/resource-contents/the-pips-insights-contents/ThePipsInsightsContentTwo";
import ThePipsInsightsContentFour from "../../components/resource-contents/the-pips-insights-contents/ThePipsInsightsContentFour";
import ThePipsInsightsContentFive from "../../components/resource-contents/the-pips-insights-contents/ThePipsInsightsContentFive";
import ThePipsInsightsContentSix from "../../components/resource-contents/the-pips-insights-contents/ThePipsInsightsContentSix";

const ThePipsInsights = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | The Pips Insights</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbThePipsInsights title="The Pips Insights" />
        <ThePipsInsightsContentOne />
        <ThePipsInsightsContentTwo />
        {/* <ThePipsInsightsContentTwo /> */}
        <ThePipsInsightsContentThree />
        <ThePipsInsightsContentFour />

        <ThePipsInsightsContentFive />
        <ThePipsInsightsContentSix />
      </LayoutTwo>
    </Fragment>
  );
};

export default ThePipsInsights;
