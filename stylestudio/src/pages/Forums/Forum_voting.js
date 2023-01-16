import "./Forums.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrin, faFaceFrown } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon className="thumb-up" icon={faFaceGrin} />
      </p>
      <br />
      <p
        onClick={() => {
          handleVote("downvote", post_id);
        }}
        name="downvote"
        className="votebutton"
        data-testid="downvote"
      >
        <FontAwesomeIcon className="thumb-down" icon={faFaceFrown} />
      </p>
    </div>
  );
}

export default ForumVoting;
