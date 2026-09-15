import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbMetaTraderWebTerminal from "../../components/breadcrumbs/platforms/BreadcrumbMetaTraderWebTerminal";
import MetaTraderWebTerminalContentOne from "../../components/platform-contents/meta-trader-web-terminal-contents/MetaTraderWebTerminalContentOne";
import MetaTraderWebTerminalContentThree from "../../components/platform-contents/meta-trader-web-terminal-contents/MetaTraderWebTerminalContentThree";
import MetaTraderWebTerminalContentTwo from "../../components/platform-contents/meta-trader-web-terminal-contents/MetaTraderWebTerminalContentTwo";
import MetaTraderWebTerminalContentFour from "../../components/platform-contents/meta-trader-web-terminal-contents/MetaTraderWebTerminalContentFour";
import MetaTraderWebTerminalContentFive from "../../components/platform-contents/meta-trader-web-terminal-contents/MetaTraderWebTerminalContentFive";

const MetaTraderWebTerminal = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Meta Trader Web Terminal</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbMetaTraderWebTerminal title="Meta Trader Web Terminal" />
        <MetaTraderWebTerminalContentOne />
        <MetaTraderWebTerminalContentTwo />
        <MetaTraderWebTerminalContentThree />
        <MetaTraderWebTerminalContentFour />
        <MetaTraderWebTerminalContentFive />
      </LayoutTwo>
    </Fragment>
  );
};

export default MetaTraderWebTerminal;
