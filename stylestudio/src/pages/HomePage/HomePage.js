import React, { useEffect } from "react";
import { WorkingTextSphere, TextSphere } from "./components/Sphere/Sphere";
import "./components/TitleSwitch/SwitchingTitle";
import SwitchingText from "./components/TitleSwitch/SwitchingTitle";
import "./Homepage.css";
import Carousel from "./components/Carousel/Carousel";
import SimpleSlider from "./components/Carousel/Carousel";
import "./Background/background.css";

export function HomePage() {
  return (
    <div className="siteContainer">
      <div className="container">
        <div className="item1">
          <SwitchingText />
        </div>
        <TextSphere className="item2" />
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </div>
  );
}
