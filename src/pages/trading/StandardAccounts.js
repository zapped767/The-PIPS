import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbStandardAccounts from "../../components/breadcrumbs/trading/BreadcrumbStandardAccounts";

import StandardAccountsContentOne from "../../components/trading-contents/standard-accounts-contents/StandardAccountsContentOne";
const StandardAccounts = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Types of Accounts</title>
        <meta name="description" content="About page of The Pips" />
      </Helmet>
      <LayoutTwo theme="blue">
        <BreadcrumbStandardAccounts title="Types of Accounts" />
        <StandardAccountsContentOne />
       
      </LayoutTwo>
    </Fragment>
  );
};

export default StandardAccounts;
