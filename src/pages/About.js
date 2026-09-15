import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import BreadcrumbAboutUs from "../components/breadcrumbs/BreadcrumbAboutUs";
import AboutContentTwo from "../components/about-contents/AboutContentTwo";
import AboutContent from "../components/about-contents/AboutContent";
import AboutContentThree from "../components/about-contents/AboutContentThree";
import CounterUp from "../containers/counter-ups/CounterUp";
import QualityProcessSection from "../components/about-contents/QualityProcessSection";

const About = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>PIPS | About Us</title>
        <meta name="description" content="About page of The Pips" />
      </MetaTags>
      <LayoutTwo theme="blue">
        <BreadcrumbAboutUs title="About Us" />
        <AboutContent />
        <AboutContentTwo />
        <AboutContentThree />
        <CounterUp />
        {/* <CounterUp backgroundImage="/images/bg/4.jpg" /> */}
        <QualityProcessSection />
      </LayoutTwo>
    </Fragment>
  );
};

export default About;
