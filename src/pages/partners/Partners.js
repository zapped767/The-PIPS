import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbPartners from "../../components/breadcrumbs/BreadcrumbPartners";
// import StandardAccountsContentTwo from "../../components/trading-contents/standard-accounts-contents/StandardAccountsContentTwo";
import PartnerOfferings from "../../components/partners-contents/PartnerOfferings";
import PartnersContentTwo from "../../components/partners-contents/PartnersContentTwo";
import ClientLoveFeatures from "../../components/partners-contents/ClientLoveFeatures";
import ClientProtectionContentFour from "../../components/partners-contents/ClientProtectionContentFour";
import TopPartnerPayouts from "../../components/partners-contents/TopPartnerPayouts";
const Partners = () => {
  return (
    <Fragment>
      <Helmet>
        <title>PIPS | Partners</title>
        <meta name="description" content="About page of The Pips" />
      </Helmet>
      <LayoutTwo theme="blue">
        <BreadcrumbPartners title="Partners" />
        <PartnerOfferings />
        <PartnersContentTwo />
        <ClientLoveFeatures />
        <ClientProtectionContentFour />
        <TopPartnerPayouts />
        {/* <StandardAccountsContentTwo /> */}
      </LayoutTwo>
    </Fragment>
  );
};

export default Partners;
