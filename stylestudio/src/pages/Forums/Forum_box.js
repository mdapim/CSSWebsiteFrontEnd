import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Forums.css";
import ForumComments from "./Forum_comments.js";

export function ForumBox({
  username,
  date,
  Title,
  description,
  upvotes,
  downvotes,
  id,
  handleVote,
  comments,
  allComments,
}) {
  return (
    <div className="forum-box-container">
      <div className="card-container">
        <div className="card-content">
          <Card.Body>
            <ForumComments allComments={allComments} id={id} />
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
              <p>Comments{comments}</p>
              <p>|</p>
              <p>Upvotes:{upvotes}</p>
              <p>|</p>
              <p>Downvotes:{downvotes}</p>
            </div>

            <Button variant="primary">View Post</Button>
          </Card.Body>
        </div>
      </div>
    </div>
  );
}
