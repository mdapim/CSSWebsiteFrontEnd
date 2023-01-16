import React, { useEffect } from "react";
import "./Sphere.css";
const TagCloud = require("TagCloud");

export const TextSphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "CSS",
        "React word cloud tutorial",
        "JavaScript",
        "React Bootstrap",
        "Blur",
        "CSS Basics",
        "How do I add a hr element",
        "Flex box tips and tricks",
        "We Punched an Asteroid, and the Science Results are In",
      ];
      const options = {
        radius: 200,
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
      <div className="text-sphere">
        <span className="tagcloud"></span>
      </div>
    </div>
  );
};
