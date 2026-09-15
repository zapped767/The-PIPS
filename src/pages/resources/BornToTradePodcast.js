import { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import BreadcrumbBornToTradePodcast from "../../components/breadcrumbs/resources/BreadcrumbBornToTradePodcast";
import BornToTradePodcastContentOne from "../../components/resource-contents/born-to-trade-podcast-contents/BornToTradePodcastContentOne";
import BornToTradePodcastContentThree from "../../components/resource-contents/born-to-trade-podcast-contents/BornToTradePodcastContentThree";
import BornToTradePodcastContentTwo from "../../components/resource-contents/born-to-trade-podcast-contents/BornToTradePodcastContentTwo";
import BornToTradePodcastContentFour from "../../components/resource-contents/born-to-trade-podcast-contents/BornToTradePodcastContentFour";
import BornToTradePodcastContentFive from "../../components/resource-contents/born-to-trade-podcast-contents/BornToTradePodcastContentFive";
import BornToTradePodcastContentSix from "../../components/resource-contents/born-to-trade-podcast-contents/BornToTradePodcastContentSix";

const BornToTradePodcast = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | Born To Trade Podcast</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbBornToTradePodcast title="Born To Trade Podcast" />
        <BornToTradePodcastContentOne />
        <BornToTradePodcastContentTwo />
        {/* <BornToTradePodcastContentTwo /> */}
        <BornToTradePodcastContentThree />
        <BornToTradePodcastContentFour />

        <BornToTradePodcastContentFive />
        <BornToTradePodcastContentSix />
      </LayoutTwo>
    </Fragment>
  );
};

export default BornToTradePodcast;
