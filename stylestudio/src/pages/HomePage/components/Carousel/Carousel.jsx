import Card from "../Card/Card";
import "./Carousel.css";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
      }}
      onClick={onClick}
    />
  );
}

export default function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <p>1</p>
          <Card />
        </div>
        <div>
          <p>2</p>
          <Card />
        </div>
        <div>
          <p>3</p>
          <Card />
        </div>
        <div>
          <p>4</p>
          <Card />
        </div>
        <div>
          <p>5</p>
          <Card />
        </div>
        <div>
          <p>6</p>
          <Card />
        </div>
      </Slider>
    </div>
  );
}
