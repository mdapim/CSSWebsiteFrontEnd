import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import RecentComments from "./Forum_full_post_comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
}) {
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
          <p>{description}</p>
          <hr />
          <p>UPVOTES:{upvotes}</p>

          <p>DOWNVOTES:{downvotes}</p>
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
