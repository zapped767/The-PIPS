import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";

import BreadcrumbStandardAccounts from "../../components/breadcrumbs/trading/BreadcrumbStandardAccounts";

import StandardAccountsContentOne from "../../components/trading-contents/standard-accounts-contents/StandardAccountsContentOne";

import StandardAccountsContentTwo from "../../components/trading-contents/standard-accounts-contents/StandardAccountsContentTwo";

const StandardAccounts = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Types of Accounts</title>
        <meta
          name="description"
          content="Types of Accounts - The Pips"
        />
      </MetaTags>

      <LayoutTwo theme="blue">

        {/* TOP BULL BANNER */}
        <BreadcrumbStandardAccounts
          title="Types of Accounts"
        />

        {/* TRADING CONDITIONS */}
        <StandardAccountsContentOne />

        {/* ACCOUNT TYPES CARDS */}
        <StandardAccountsContentTwo />

      </LayoutTwo>
    </Fragment>
  );
};

export default StandardAccounts;