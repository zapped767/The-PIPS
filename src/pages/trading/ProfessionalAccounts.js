import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbProfessionalAccounts from "../../components/breadcrumbs/trading/BreadcrumbProfessionalAccounts";
import ProfessionalAccountsContentTwo from "../../components/trading-contents/professional-accounts-contents/ProfessionalAccountsContentTwo";
import ProfessionalAccountsContentOne from "../../components/trading-contents/professional-accounts-contents/ProfessionalAccountsContentOne";
const ProfessionalAccounts = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Professional Accounts</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbProfessionalAccounts title="Professional Accounts" />
        <ProfessionalAccountsContentOne />
        <ProfessionalAccountsContentTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default ProfessionalAccounts;
