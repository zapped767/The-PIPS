import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbProfessionalAccounts from "../../components/breadcrumbs/trading/BreadcrumbProfessionalAccounts";
import ProfessionalAccountsContentTwo from "../../components/trading-contents/professional-accounts-contents/ProfessionalAccountsContentTwo";
import ProfessionalAccountsContentOne from "../../components/trading-contents/professional-accounts-contents/ProfessionalAccountsContentOne";
const ProfessionalAccounts = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Professional Accounts</title>
        <meta name="description" content="About page of The Pips" />
      </Helmet>
      <LayoutTwo theme="blue">
        <BreadcrumbProfessionalAccounts title="Professional Accounts" />
        <ProfessionalAccountsContentOne />
        <ProfessionalAccountsContentTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default ProfessionalAccounts;
