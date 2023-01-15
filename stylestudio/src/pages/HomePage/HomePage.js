import React, { useEffect } from "react";
import { WorkingTextSphere, TextSphere } from "./components/Sphere/Sphere";
import "./components/TitleSwitch/SwitchingTitle";
import SwitchingText from "./components/TitleSwitch/SwitchingTitle";
import "./Homepage.css";
import Carousel from "./components/Carousel/Carousel";
import SimpleSlider from "./components/Carousel/Carousel";

export function HomePage() {
  return (
    <div>
      <div className="container">
        <SwitchingText className="item1" />
        <TextSphere className="item2" />
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </div>
  );
}
