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
  };

  useEffect(() => {
    fetchForumData();
  }, []);

  return (
    <div className="forum-container">
      <ForumNav />
      {forumData.map((item) => {
        return (
          <ForumBox
            key={item["id"]}
            username={item["username"]}
            date={item["date_created"]}
            Title={item["title"]}
            description={item["description"]}
            comments={item["comments"]}
            upvotes={item["likes"]}
            downvotes={item["dislikes"]}
          />
        );
      })}
    </div>
  );
}
