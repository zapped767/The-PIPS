import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbVPSHosting from "../../components/breadcrumbs/resources/BreadcrumbVPSHosting";
import VPSHostingContentOne from "../../components/resource-contents/vps-hosting-contents/VPSHostingContentOne";
import VPSHostingContentThree from "../../components/resource-contents/vps-hosting-contents/VPSHostingContentThree";
import VPSHostingContentTwo from "../../components/resource-contents/vps-hosting-contents/VPSHostingContentTwo";
import VPSHostingContentFour from "../../components/resource-contents/vps-hosting-contents/VPSHostingContentFour";
import VPSHostingContentFive from "../../components/resource-contents/vps-hosting-contents/VPSHostingContentFive";
import VPSHostingContentSix from "../../components/resource-contents/vps-hosting-contents/VPSHostingContentSix";

const VPSHosting = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | VPS Hosting</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbVPSHosting title="VPS Hosting" />
        <VPSHostingContentOne />
        <VPSHostingContentTwo />
        {/* <VPSHostingContentTwo /> */}
        <VPSHostingContentThree />
        <VPSHostingContentFour />

        <VPSHostingContentFive />
        <VPSHostingContentSix />
      </LayoutTwo>
    </Fragment>
  );
};

export default VPSHosting;
