import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Forums.css";

export function ForumBox({
  username,
  date,
  Title,
  description,
  comments,
  upvotes,
  downvotes,
}) {
  // voting
  const handleVote = async () => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_vote",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: {},
      }
    );
  };
  return (
    <div className="forum-box-container">
      <div className="card-container">
        <div className="card-content">
          <Card.Body>
            <p>
              <span>{username}</span> <br />
              <span>{date}</span>
            </p>
            <Card.Title style={{ marginBottom: "2rem" }}>{Title}</Card.Title>
            <Card.Text style={{ marginBottom: "2rem" }}>
              {description}
            </Card.Text>
            <div className="user-interaction">
              <p>{comments} comments</p>
              <p>{upvotes}</p>
              <p>{downvotes}</p>
            </div>

            <div>
              <button>
                <FontAwesomeIcon className="thumb-down" icon={faArrowUp} />
              </button>
            </div>
            <br />
            <button>
              <FontAwesomeIcon className="thumb-up" icon={faArrowDown} />
            </button>

            {/* <Button variant="primary">View Post</Button> */}
          </Card.Body>
        </div>
      </div>
    </div>
  );
}
