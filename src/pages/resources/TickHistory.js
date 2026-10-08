import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbTickHistory from "../../components/breadcrumbs/resources/BreadcrumbTickHistory";
import TickHistoryContentOne from "../../components/resource-contents/tick-history-contents/TickHistoryContentOne";
import TickHistoryContentThree from "../../components/resource-contents/tick-history-contents/TickHistoryContentThree";
import TickHistoryContentTwo from "../../components/resource-contents/tick-history-contents/TickHistoryContentTwo";
import TickHistoryContentFour from "../../components/resource-contents/tick-history-contents/TickHistoryContentFour";
import TickHistoryContentFive from "../../components/resource-contents/tick-history-contents/TickHistoryContentFive";
import TickHistoryContentSix from "../../components/resource-contents/tick-history-contents/TickHistoryContentSix";

const TickHistory = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Tick History</title>
        <meta name="description" content="About page of The Pips" />
      </Helmet>
      <LayoutTwo theme="blue">
        <BreadcrumbTickHistory title="Tick History" />
        <TickHistoryContentOne />
        <TickHistoryContentTwo />
        {/* <TickHistoryContentTwo /> */}
        <TickHistoryContentThree />
        <TickHistoryContentFour />

        <TickHistoryContentFive />
        <TickHistoryContentSix />
      </LayoutTwo>
    </Fragment>
  );
};

export default TickHistory;
