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
        <FontAwesomeIcon
          style={{ color: "green", height: "25px" }}
          icon={faFaceGrin}
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
          icon={faFaceFrown}
          style={{ color: "red", height: "25px" }}
        />
      </p>
    </div>
  );
}

export default ForumVoting;
