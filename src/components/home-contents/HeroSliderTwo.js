import React from "react";
import sliderData from "../../data/hero-sliders/hero-slider-two.json";
import HeroSliderTwoSingle from "./HeroSliderTwoSingle.js";

const HeroSliderTwo = () => {
  return (
    <div className="dg__slider__area slider--2">
      {/* Pass the entire array once - slider logic lives inside HeroSliderTwoSingle */}
      <HeroSliderTwoSingle data={sliderData} />
    </div>
  );
};

export default HeroSliderTwo;