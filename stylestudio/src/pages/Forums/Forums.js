import "./Forums.css";
import React, { useState, useEffect } from "react";
import { ForumBox } from "./Forum_box";
import { ForumNav } from "./Forum_nav.js";

export function Forums({ currentUserDetails }) {
  const [forumData, setForumData] = useState([]);
  const [allComments, setAllComments] = useState([]);
  const [votes, setVotes] = useState([]);
  const [searchedString, setSearchedString] = useState("");

  //Managing votes & re-rendering
  const manageVotes = (vote, id) => {
    const copyVotes = [...votes];
    const thisPost = copyVotes.filter((post) => post.id === id)[0];
    if (vote === "downvote") {
      thisPost.dislikes += 1;
    } else {
      thisPost.likes += 1;
    }

    setVotes(copyVotes);
  };
  const handleVote = async (vote, id) => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_vote",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([{ post_id: id, vote: vote }]),
      }
    );
    manageVotes(vote, id);
  };

  //firstload - call both functions
  useEffect(() => {
    fetchForumData();
    fetchComments();
  }, []);

  // effect for re-rendering when votes update
  useEffect(() => {}, [votes]);

  //all forum data
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

    const voteList = data.map((el) => {
      return { id: el.id, likes: el.likes, dislikes: el.dislikes };
    });

    setVotes(voteList);
  };

  //fetching all comments in forums
  const fetchComments = async () => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/get_all"
    );
    const data = await res.json();
    setAllComments(data);
  };

  const filterDataSearch = (e) => {
    const searchString = e.target.value;
    console.log(searchString);
    setSearchedString(searchString);
    const searchedStringLowerCase = searchedString.toLowerCase();
    let filtering = forumData.filter((el) => {
      return el.title.toLowerCase().includes(searchedStringLowerCase);
    });

    if (searchString.length > 0) {
      setForumData(filtering);
    } else {
      console.log("No matches found");
      fetchForumData();
    }
  };

  return (
    <div className="forum-container">
      {/* <ForumNav
        currentUserDetails={currentUserDetails}
        filterDataSearch={filterDataSearch}
        fetchForumData={fetchForumData}
      /> */}
      <div className="test">
        {forumData.map((item, i) => {
          return (
            <ForumBox
              key={item["id"]}
              username={item["username"]}
              user_id={item["user_id"]}
              currentUserDetails={currentUserDetails}
              date={item["date_created"]}
              Title={item["title"]}
              description={item["description"]}
              upvotes={votes[i]["likes"]}
              downvotes={votes[i]["dislikes"]}
              post_id={item["id"]}
              votes={votes}
              setVotes={setVotes}
              handleVote={handleVote}
              commentCount={item["comment"]}
              commentsForIndivPost={allComments.filter(
                (el) => el.post_id === item["id"]
              )}
              fetchComments={fetchComments}
              fetchForumData={fetchForumData}
            />
          );
        })}
      </div>
    </div>
  );
}
