import { Fragment } from "react";
import MetaTags from "react-meta-tags";
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
      <MetaTags>
        <title>PIPS</title>
        <meta name="description" content="Homepage of The Pips" />
      </MetaTags>
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
