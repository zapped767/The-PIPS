import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbClientProtection from "../../components/breadcrumbs/trading/BreadcrumbClientProtection";
import ClientProtectionContentFour from "../../components/trading-contents/client-protection-contents/ClientProtectionContentFour";
import ClientProtectionContentOne from "../../components/trading-contents/client-protection-contents/ClientProtectionContentOne";
import ClientProtectionContentThree from "../../components/trading-contents/client-protection-contents/ClientProtectionContentThree";
import ClientProtectionContentTwo from "../../components/trading-contents/client-protection-contents/ClientProtectionContentTwo";
import ClientProtectionContentSix from "../../components/trading-contents/client-protection-contents/ClientProtectionContentSix";
import ClientProtectionContentSeven from "../../components/trading-contents/client-protection-contents/ClientProtectionContentSeven";

const ClientProtection = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Client Protection</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbClientProtection title="Client Protection" />
        <ClientProtectionContentOne />
        <ClientProtectionContentTwo />
        <ClientProtectionContentThree />
        <ClientProtectionContentFour />
        <ClientProtectionContentSix />
        <ClientProtectionContentSeven />
      </LayoutTwo>
    </Fragment>
  );
};

export default ClientProtection;
