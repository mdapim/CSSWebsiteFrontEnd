import React, { useState, useEffect } from "react";
import { WorkingTextSphere, TextSphere } from "./components/Sphere/Sphere";
import "./components/TitleSwitch/SwitchingTitle";
import SwitchingText from "./components/TitleSwitch/SwitchingTitle.jsx";
import "./Homepage.css";
import Carousel from "./components/Carousel/Carousel";

export function HomePage() {
  const [forumData, setForumData] = useState([]);
  const fetchForumData = async () => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_post",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    setForumData(data);
  };

  const retrieveCardData = (forumData, category) => {
    let mostPopular = forumData.reduce(
      (prevItem, currentItem) => {
        if (
          currentItem["likes"] > prevItem["likes"] &&
          currentItem["category"] === category
        ) {
          return currentItem;
        } else {
          return prevItem;
        }
      },
      { likes: 0 }
    );
    return mostPopular;
  };

  useEffect(() => {
    fetchForumData();
  }, []);
  return (
    <div>
      <div className="siteContainer">
        <div className="home-page-container">
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
          <Carousel forumData={forumData} />
        </div>
      </div>
    </div>
  );
}
