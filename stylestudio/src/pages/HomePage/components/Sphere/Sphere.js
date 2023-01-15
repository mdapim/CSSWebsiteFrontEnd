import React, { useEffect } from "react";
import "./Sphere.css";
const TagCloud = require("TagCloud");

export const TextSphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "CSS",
        "Animations",
        "JavaScript",
        "CSS3",
        "Blur",
        "Shadow",
        "Flex",
        "Rolling",
        "Sphere",
        "6KB",
        "v2.x",
        "Sphere",
        "6KB",
        "v2.x",
        "Sphere",
        "6KB",
        "adam",
        "mike",
        "cal",
      ];
      const options = {
        radius: 150,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div>
      <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
    </div>
  );
};

export const WorkingTextSphere = () => {
  useEffect(() => {
    const container = ".tagcloud";
    let radii;
    const texts = [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "Vue",
      "Nuxt",
      "NodeJS",
      "Shopify",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB",
    ];

    function radiusValue() {
      if (window.screen.width <= 778) {
        radii = 150;
      } else {
        radii = 290;
      }
      return radii;
    }

    const options = {
      radius: radiusValue(),
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <div>
      <div className="text-shpere">
        <span className="tagcloud"></span>
      </div>
    </div>
  );
};
