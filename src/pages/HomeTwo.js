import { Fragment } from "react";

import SEO from "../components/common/SEO";
import OrganizationSchema from "../components/common/OrganizationSchema";

import LiveChartTwo from "../components/home-contents/LiveChartTwo";
import HowWorks from "../components/home-contents/HowWorks";
import HowWorksTwo from "../components/home-contents/HowWorksTwo";
import HeroSliderTwo from "../components/home-contents/HeroSliderTwo";
import LayoutTwo from "../layouts/LayoutTwo";
import FeatureBlock from "../components/home-contents/FeatureSection/FeatureSection";
import QualityProcessSection from "../components/home-contents/QualityProcessSection";
import ReferencesSection from "../components/home-contents/ReferencesSection";
import BannerOne from "../components/home-contents/BannerOne";
import BannerTwo from "../components/home-contents/BannerTwo";

const HomeTwo = () => {
  return (
    <Fragment>
      <SEO
        title="Forex, Crypto, Stocks & Global Trading Platform"
        description="Explore The PIPS trading platform for forex, crypto, stocks, indices and commodities. Access trading accounts, market tools, analytical resources and global trading opportunities."
        path="/"
        image="/images/logo/logo.png"
      />
      <OrganizationSchema />

      <LayoutTwo theme="blue">
        <HeroSliderTwo />

        <FeatureBlock />

        <QualityProcessSection />

        <LiveChartTwo />

        <HowWorks />

        <ReferencesSection />

        <BannerOne />

        <BannerTwo />

        <HowWorksTwo />
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeTwo;