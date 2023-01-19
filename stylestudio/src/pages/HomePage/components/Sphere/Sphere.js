import React, { useEffect } from "react";
import "./Sphere.css";
const TagCloud = require("TagCloud");

export const TextSphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "CSS",
        "HTML",
        "JavaScript",
        "React Bootstrap",
        "Blur",
        "CSS Basics",
        "Flex",
        "React",
        "DOM",
        "Element",
        "Specificity",
        "Web Fonts",
        "Animista.co.uk",
        "CodePen",
        "React-slide",
        "Color",
        "Property value",
        "Learn CSS",
        "Selector",
        "Value",
        "Google Fonts",
        "Coolor.co.uk",
        "Forums",
        "Always",
        "Be",
        "CSSING",
        "ClassName",
        "ID",
        "!important",
        "Framework",
        "1011",
        "Body",
        "Style Rules",
        "font-family",
        "align-content",
        "Justify context",
        "Border",
        "Class Selector",
        "Universal Selector",
        "Pseudo Class",
        "Combinator",
        "At-Rule",
        "Statement",
        "Identifier",
        "Keyword",
        ":first-child",
        "decoration",
        "none",
        ":visited",
        "text",
      ];
      const options = {
        radius: 250,
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
      "CSS",
      "HTML",
      "JavaScript",
      "React Bootstrap",
      "Blur",
      "CSS Basics",
      "Flex",
      "React",
      "DOM",
      "Element",
      "Specificity",
      "Web Fonts",
      "Animista.co.uk",
      "CodePen",
      "React-slide",
      "Color",
      "Property value",
      "Learn CSS",
      "Selector",
      "Value",
      "Google Fonts",
      "Coolor.co.uk",
      "Forums",
      "Always",
      "Be",
      "CSSING",
      "ClassName",
      "ID",
      "!important",
      "Framework",
      "1011",
      "Body",
      "Style Rules",
      "font-family",
      "align-content",
      "Justify context",
      "Border",
      "Class Selector",
      "Universal Selector",
      "Pseudo Class",
      "Combinator",
      "At-Rule",
      "Statement",
      "Identifier",
      "Keyword",
      ":first-child",
      "decoration",
      "none",
      ":visited",
      "text",
    ];

    function radiusValue() {
      if (window.screen.width <= 778) {
        radii = 250;
      } else {
        radii = 250;
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
