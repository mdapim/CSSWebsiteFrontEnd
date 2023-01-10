import React, { useState, useEffect } from "react";
import { ForumBox } from "./Forum_box";
import "./Forums.css";
import { ForumNav } from "./Forum_nav.js";

export function Forums() {
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
    console.log(forumData);
  };

  useEffect(() => {
    fetchForumData();
  }, []);

  return (
    <div className="forum-container">
      <ForumNav />
      <ForumBox />
      <ForumBox />
      <ForumBox />
    </div>
  );
}
