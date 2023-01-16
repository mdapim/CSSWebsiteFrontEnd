import {
  Card,
  UpdatesCard,
  TopSearchCard,
  TopQuestionsCard,
  TopVotedCard,
} from "../Card/Card";
import "./Carousel.css";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronsRight } from "react-icons/fi";
import LeftArrow from "./first.png";
import RightArrow from "./last.png";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <img src={LeftArrow} alt="prevArrow" {...props} />
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <img src={RightArrow} alt="nextArrow" {...props} />
);

export default function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 2,
    speed: 1000,
    dots: true,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className="slide-top">
      {/* <h2> News Reel</h2> */}
      <Slider {...settings}>
        <div>
          <UpdatesCard />
        </div>
        <div>
          <TopVotedCard />
        </div>
        <div>
          <TopQuestionsCard />
        </div>
        <div>
          <TopSearchCard />
        </div>
      </Slider>
    </div>
  );
}
