import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Forums.css";
import Comments from "./Forum_comment_box.js";

export function ForumBox({
  username,
  date,
  Title,
  description,
  upvotes,
  downvotes,
  id,
  handleVote,
  commentsForIndivPost,

  setComments,
  commentCount,
  fetchComments,
  currentUserDetails,
}) {
  const [staticModal, setStaticModal] = useState(false);
  const toggleShow = () => setStaticModal(!staticModal);
  const [commentsCopy, setCommentsCopy] = useState([]);
  const [newComment, setNewComment] = useState({
    description: "",
    post_id: id,
    user_id: currentUserDetails["id"],
  });

  const handleNewComment = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewComment((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addComments = async () => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_comment",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([newComment]),
      }
    );
    const data = await res.json();
    const copyComment = { description: commentsForIndivPost };
    setCommentsCopy([...commentsCopy, copyComment]);
  };

  return (
    <div className="forum-box-container">
      <div className="card-container">
        <div className="card-content">
          <Card.Body>
            <div className="header">
              <p>
                <span>{username}</span> <br />
                <span>{date}</span>
              </p>
              <button
                onClick={() => {
                  handleVote("upvote", id);
                }}
                name="upvote"
                className="votebutton"
              >
                <FontAwesomeIcon className="thumb-up" icon={faArrowUp} />
              </button>
              <br />
              <button
                onClick={() => {
                  handleVote("downvote", id);
                }}
                name="downvote"
                className="votebutton"
              >
                <FontAwesomeIcon className="thumb-down" icon={faArrowDown} />
              </button>
            </div>

            <Card.Title style={{ marginBottom: "2rem" }}>{Title}</Card.Title>
            <Card.Text style={{ marginBottom: "2rem" }}>
              {description}
            </Card.Text>

            <div className="user-interaction">
              <button onClick={toggleShow}>
                <p>Comments{commentCount}</p>
              </button>
              <p>|</p>
              <p>Upvotes:{upvotes}</p>
              <p>|</p>
              <p>Downvotes:{downvotes}</p>
            </div>

            <Comments
              commentsForIndivPost={commentsForIndivPost}
              toggleShow={toggleShow}
              setStaticModal={setStaticModal}
              staticModal={staticModal}
              handleNewComment={handleNewComment}
              addComments={addComments}
              setComments={setComments}
              fetchComments={fetchComments}
              commentsCopy={commentsCopy}
            />
            <Button variant="primary">View Post</Button>
          </Card.Body>
        </div>
      </div>
    </div>
  );
}
