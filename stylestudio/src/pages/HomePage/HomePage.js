import React, { useEffect } from "react";
import { WorkingTextSphere, TextSphere } from "./components/Sphere/Sphere";
import "./components/TitleSwitch/SwitchingTitle";
import SwitchingText from "./components/TitleSwitch/SwitchingTitle.jsx";
import "./Homepage.css";
import Carousel from "./components/Carousel/Carousel";

export function HomePage() {
  return (
    <div>
      <div className="siteContainer">
        <div className="container">
          <div className="item1">
            <h1 className="homepage-h1">Welcome to Style Studio</h1>
            <div className="separator" style={{ width: 500 }}></div>
            <br />
            <p className="homepage-p">For all the simple CSS tips and tricks</p>
            <SwitchingText />
          </div>
          <div className="item2">
            <WorkingTextSphere />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="separator2"></div>
        <div className="carousel">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
