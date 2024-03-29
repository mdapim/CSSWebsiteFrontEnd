import React, { useEffect } from "react";
import "./Sphere.css";
const TagCloud = require("TagCloud");

export function HomePage() {
  console.log(TagCloud);
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
        radius: 300,
        maxSpeed: "fast",
        initSpeed: "fast",
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
}
