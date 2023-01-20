import "./Forums.css";
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import RecentComments from "./Forum_full_post_comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import ForumVoting from "./Forum_voting.js";
import ForumCodePost from "./Forum_code_post.js";

function ForumFullPost({
  show,
  setShow,
  Title,
  description,
  username,
  date,
  upvotes,
  downvotes,
  commentsForIndivPost,
  handleNewComment,
  addComments,
  handleVote,
  post_id,
  user_id,
  fetchForumData,
  currentUserDetails,
  fetchComments,
  inputtedCode,
  category,
}) {
  const [editPost, setEditPost] = useState(false);
  const [displayEditButton, setDisplayEditButton] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({ description });

  // useEffect triggering re-render when new post is added
  useEffect(() => {}, [updatedPost]);

  // Handling IF edit button is rendered
  useEffect(() => {
    handleDisplayEditButtonPosts();
  }, []);

  const editPostToggle = () => {
    setEditPost(!editPost);
  };

  const handleDisplayEditButtonPosts = () => {
    user_id === currentUserDetails["id"]
      ? setDisplayEditButton(true)
      : setDisplayEditButton(false);
  };

  const handleEditPost = (e) => {
    const value = e.target.value;
    setUpdatedPost(value);
  };

  // PATCH request to edit post
  const fetchUpdatePost = async () => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_post",
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          {
            title: Title,
            description: updatedPost,
            post_id: post_id,
            user_id: user_id,
          },
        ]),
      }
    );
    const data = await res.json();

    if (
      data[0]["message"] ===
      "item could not be found in database, or user has no access to item"
    ) {
    } else {
      setEditPost(false);
      fetchForumData();
    }
  };

  // DELETE post
  const fetchDeletePost = async () => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_post",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          { post_id: post_id, user_id: user_id, user_type: 2 },
        ]),
      }
    );
    const data = await res.json();

    if (data[0]["?column?"] === "post has been deleted successfully") {
      fetchForumData();
    }
  };

  return (
    <>
      <Modal
        data-testid="full-post-modal"
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        className="full-post-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ whiteSpace: "" }}
            id="example-custom-modal-styling-title"
          >
            {Title}
          </Modal.Title>

          <ForumVoting handleVote={handleVote} post_id={post_id} />
        </Modal.Header>
        <div className="header full-card">
          <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
            {username}
          </span>{" "}
          <br />
          <span>{date}</span>
          <div className="user-interaction">
            <p>|</p>
            <p>Upvotes: {upvotes}</p>
            <p>|</p>
            <p>Downvotes: {downvotes}</p>
            <p>|</p>
            {category !== "Select a category" ? (
              <p style={{ color: "cyan", textDecoration: "underline" }}>
                {category}
              </p>
            ) : (
              <p style={{ color: "cyan", textDecoration: "underline" }}>
                General
              </p>
            )}
          </div>
        </div>

        <Modal.Body>
          <div className="description-full-post">
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
          {displayEditButton && (
            <div className="editing-post-icon">
              <div className="editing-post-icon-child">
                <p
                  onClick={editPostToggle}
                  style={{ fontSize: "smaller", cursor: "pointer" }}
                >
                  Edit post
                </p>
              </div>
              <div className="editing-post-child">
                <FontAwesomeIcon
                  onClick={() => {
                    fetchDeletePost();
                  }}
                  className="bin"
                  icon={faTrash}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          )}
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
          <div className="full-forum-post-bottom">
            <RecentComments
              handleNewComment={handleNewComment}
              commentsForIndivPost={commentsForIndivPost}
              addComments={addComments}
              currentUserDetails={currentUserDetails}
              fetchComments={fetchComments}
            />

            <div className="code-format-container">
              <ForumCodePost inputtedCode={inputtedCode} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ForumFullPost;
