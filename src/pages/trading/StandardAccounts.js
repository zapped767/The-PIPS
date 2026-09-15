import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbStandardAccounts from "../../components/breadcrumbs/trading/BreadcrumbStandardAccounts";
import StandardAccountsContentTwo from "../../components/trading-contents/standard-accounts-contents/StandardAccountsContentTwo";
import StandardAccountsContentOne from "../../components/trading-contents/standard-accounts-contents/StandardAccountsContentOne";
const StandardAccounts = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Types of Accounts</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbStandardAccounts title="Types of Accounts" />
        <StandardAccountsContentOne />
        <StandardAccountsContentTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default StandardAccounts;
