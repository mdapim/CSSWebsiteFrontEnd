import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ForumFullPost from "./Forum_full_post";

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
  const [show, setShow] = useState(false);
  const [editPostAvailable, setEditPostAvailable] = useState(false);

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
    console.log(newComment);
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

  const handleDescriptionLength = (des) => {
    let description = des.length > 300 ? des.substring(0, 300) + "..." : des;
    return description;
  };

  const handleEditPost = () => {
    // currentUserDetails["id"] ===
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

            <div onClick={setShow} className="title-description">
              <Card.Title style={{ marginBottom: "2rem", color: "black" }}>
                {Title}
              </Card.Title>
              <Card.Text
                style={{
                  marginBottom: "2rem",
                  color: "black",
                }}
              >
                {handleDescriptionLength(description)}
              </Card.Text>
            </div>

            <div className="user-interaction">
              <p
                style={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={toggleShow}
              >
                Comments{commentCount}
              </p>

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
          </Card.Body>
        </div>
        <ForumFullPost
          description={description}
          Title={Title}
          show={show}
          setShow={setShow}
          username={username}
          date={date}
          downvotes={downvotes}
          upvotes={upvotes}
          commentCount={commentCount}
          commentsForIndivPost={commentsForIndivPost}
          handleNewComment={handleNewComment}
          addComments={addComments}
          handleVote={handleVote}
          id={id}
        />
      </div>
    </div>
  );
}
