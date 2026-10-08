import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbPipsTerminal from "../../components/breadcrumbs/platforms/BreadcrumbPipsTerminal";
import PipsTerminalContentOne from "../../components/platform-contents/pips-terminal-contents/PipsTerminalContentOne";
import PipsTerminalContentThree from "../../components/platform-contents/pips-terminal-contents/PipsTerminalContentThree";
// import PipsTerminalContentTwo from "../../components/platform-contents/pips-terminal-contents/PipsTerminalContentTwo";
import PipsTerminalContentFour from "../../components/platform-contents/pips-terminal-contents/PipsTerminalContentFour";
import PipsTerminalContentFive from "../../components/platform-contents/pips-terminal-contents/PipsTerminalContentFive";

const PipsTerminal = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Pips Terminal</title>
        <meta name="description" content="About page of The Pips" />
      </Helmet>
      <LayoutTwo theme="blue">
        <BreadcrumbPipsTerminal title="Pips Terminal" />
        <PipsTerminalContentOne />
        {/* <PipsTerminalContentTwo /> */}
        <PipsTerminalContentThree />
        <PipsTerminalContentFour />
        <PipsTerminalContentFive />
      </LayoutTwo>
    </Fragment>
  );
};

export default PipsTerminal;
