import { Fragment } from "react";
import MetaTags from "react-meta-tags";
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
      <MetaTags>
        <title>PIPS | Partners</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
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
