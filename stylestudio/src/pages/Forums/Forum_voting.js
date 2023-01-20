import "./Forums.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

//handles voting for forums
export function ForumVoting({ handleVote, post_id }) {
  return (
    <div className="voting">
      {" "}
      <p
        onClick={() => {
          handleVote("upvote", post_id);
        }}
        name="upvote"
        className="votebutton"
        data-testid="upvote"
      >
        <FontAwesomeIcon
          style={{ color: "green", height: "25px" }}
          icon={faArrowUp}
        />
      </p>
      <br />
      <p
        onClick={() => {
          handleVote("downvote", post_id);
        }}
        name="downvote"
        data-testid="downvote"
      >
        <FontAwesomeIcon
          icon={faArrowDown}
          style={{ color: "red", height: "25px" }}
        />
      </p>
    </div>
  );
}

export default ForumVoting;
