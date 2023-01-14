import "./Forums.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

function ForumVoting({ handleVote, post_id }) {
  return (
    <div>
      {" "}
      <button
        onClick={() => {
          handleVote("upvote", post_id);
        }}
        name="upvote"
        className="votebutton"
      >
        <FontAwesomeIcon className="thumb-up" icon={faArrowUp} />
      </button>
      <br />
      <button
        onClick={() => {
          handleVote("downvote", post_id);
        }}
        name="downvote"
        className="votebutton"
      >
        <FontAwesomeIcon className="thumb-down" icon={faArrowDown} />
      </button>
    </div>
  );
}

export default ForumVoting;
