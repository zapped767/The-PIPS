import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbAnalyticalTools from "../../components/breadcrumbs/resources/BreadcrumbAnalyticalTools";
import AnalyticalToolsContentOne from "../../components/resource-contents/analytical-tools-contents/AnalyticalToolsContentOne";
import AnalyticalToolsContentThree from "../../components/resource-contents/analytical-tools-contents/AnalyticalToolsContentThree";
import AnalyticalToolsContentTwo from "../../components/resource-contents/analytical-tools-contents/AnalyticalToolsContentTwo";
// import AnalyticalToolsContentFour from "../../components/resource-contents/analytical-tools-contents/AnalyticalToolsContentFour";
// import AnalyticalToolsContentFive from "../../components/resource-contents/analytical-tools-contents/AnalyticalToolsContentFive";
import AnalyticalToolsContentSix from "../../components/resource-contents/analytical-tools-contents/AnalyticalToolsContentSix";

const AnalyticalTools = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Analytical Tools</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbAnalyticalTools title="Analytical Tools" />
        <AnalyticalToolsContentOne />
        <AnalyticalToolsContentTwo />
        {/* <AnalyticalToolsContentTwo /> */}
        <AnalyticalToolsContentThree />
        {/* <AnalyticalToolsContentFour /> */}

        {/* <AnalyticalToolsContentFive /> */}
        <AnalyticalToolsContentSix />
      </LayoutTwo>
    </Fragment>
  );
};

export default AnalyticalTools;
