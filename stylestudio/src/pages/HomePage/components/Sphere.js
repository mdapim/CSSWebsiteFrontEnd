import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import "./Sphere.css";

const TextShpere = () => {
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
        radius: 500,
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

export default TextShpere;
