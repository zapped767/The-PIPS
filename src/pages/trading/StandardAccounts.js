import { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbStandardAccounts from "../../components/breadcrumbs/trading/BreadcrumbStandardAccounts";

import StandardAccountsContentOne from "../../components/trading-contents/standard-accounts-contents/StandardAccountsContentOne";
import StandardAccountsContentTwo from "../../components/trading-contents/standard-accounts-contents/StandardAccountsContentTwo";

const StandardAccounts = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Types of Accounts</title>
        <meta
          name="description"
          content="Explore The PIPS account types, trading conditions, account features and available trading options."
        />
      </Helmet>

      <LayoutTwo theme="blue">

        {/* KEEP NEW BLUE HEADER */}
        <BreadcrumbStandardAccounts title="Types of Accounts" />

        {/* OLD THEPIPS CONTENT */}
        <StandardAccountsContentOne />

        <StandardAccountsContentTwo />

      </LayoutTwo>
    </Fragment>
  );
};

export default StandardAccounts;