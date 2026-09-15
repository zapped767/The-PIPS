import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbEconomicCalendar from "../../components/breadcrumbs/resources/BreadcrumbEconomicCalendar";
import EconomicCalendarContentOne from "../../components/resource-contents/economic-calendar-contents/EconomicCalendarContentOne";
// import EconomicCalendarContentThree from "../../components/resource-contents/economic-calendar-contents/EconomicCalendarContentThree";
// import EconomicCalendarContentTwo from "../../components/resource-contents/economic-calendar-contents/EconomicCalendarContentTwo";
// import EconomicCalendarContentFour from "../../components/resource-contents/economic-calendar-contents/EconomicCalendarContentFour";
// import EconomicCalendarContentFive from "../../components/resource-contents/economic-calendar-contents/EconomicCalendarContentFive";
import EconomicCalendarContentSix from "../../components/resource-contents/economic-calendar-contents/EconomicCalendarContentSix";

const EconomicCalendar = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Economic Calendar</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbEconomicCalendar title="Economic Calendar" />
        <EconomicCalendarContentOne />
        {/* <EconomicCalendarContentTwo /> */}
        {/* <EconomicCalendarContentTwo /> */}
        {/* <EconomicCalendarContentThree /> */}
        {/* <EconomicCalendarContentFour /> */}

        {/* <EconomicCalendarContentFive /> */}
        <EconomicCalendarContentSix />
      </LayoutTwo>
    </Fragment>
  );
};

export default EconomicCalendar;
