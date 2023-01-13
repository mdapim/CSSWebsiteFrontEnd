import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RecentComments from "./Forum_full_post_comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import "./Forums.css";

function ForumFullPost({
  show,
  setShow,
  Title,
  description,
  username,
  date,
  commentCount,
  upvotes,
  downvotes,
  commentsForIndivPost,
  handleNewComment,
  addComments,
  handleVote,
  id,
  user_id,
  fetchComments,
  fetchForumData,
}) {
  const [editPost, setEditPost] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({ description });

  useEffect(() => {}, [description]);

  const editPostToggle = () => {
    setEditPost(!editPost);
    console.log(editPost);
  };

  const handleEditPost = (e) => {
    const value = e.target.value;
    setUpdatedPost(value);
  };

  const fetchUpdatePost = async () => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_post",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          {
            title: Title,
            description: updatedPost,
            post_id: id,
            user_id: user_id,
          },
        ]),
      }
    );
    const data = await res.json();
    console.log(res.status);

    if (res.status === 200) {
      setEditPost(false);
      fetchForumData();
    }
  };

  return (
    <>
      <Modal
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {Title}
          </Modal.Title>
          <button
            onClick={() => {
              handleVote("upvote", id);
            }}
            name="upvote"
            className="votebutton"
          >
            <FontAwesomeIcon className="thumb-up" icon={faArrowUp} />
          </button>

          <button
            onClick={() => {
              handleVote("downvote", id);
            }}
            name="downvote"
            className="votebutton"
          >
            <FontAwesomeIcon className="thumb-down" icon={faArrowDown} />
          </button>
        </Modal.Header>
        <div style={{ marginLeft: "18px" }} className="user-date">
          {username}
          <br />
          {date}
        </div>
        <Modal.Body>
          <div className="description">
            {!editPost ? (
              <p className="description-text">{description}</p>
            ) : (
              <textarea
                style={{ border: "solid 1px black" }}
                className="description-text"
                value={updatedPost["description"]}
                onChange={handleEditPost}
              />
            )}
          </div>
          <p
            onClick={editPostToggle}
            style={{ fontSize: "smaller", cursor: "pointer" }}
          >
            Edit post
          </p>
          {editPost && (
            <FontAwesomeIcon
              onClick={() => {
                fetchUpdatePost();
              }}
              className="check"
              icon={faCheck}
              style={{ cursor: "pointer" }}
            />
          )}

          <hr />
          <div className="votes">
            <p>UPVOTES:{upvotes}</p>

            <p>DOWNVOTES:{downvotes}</p>
          </div>
          <RecentComments
            handleNewComment={handleNewComment}
            commentsForIndivPost={commentsForIndivPost}
            addComments={addComments}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ForumFullPost;
