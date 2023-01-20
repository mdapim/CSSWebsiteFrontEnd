import "./Forums.css";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ForumFullPost from "./Forum_full_post";
import Comments from "./Forum_comment_box.js";
import ForumVoting from "./Forum_voting.js";

export function ForumBox({
  username,
  date,
  Title,
  description,
  upvotes,
  downvotes,
  post_id,
  handleVote,
  commentsForIndivPost,
  setComments,
  commentCount,
  fetchComments,
  currentUserDetails,
  fetchForumData,
  user_id,
  inputtedCode,
  category,
}) {
  const [staticModal, setStaticModal] = useState(false);
  const toggleShow = () => setStaticModal(!staticModal);
  const [show, setShow] = useState(false);
  const [displayEditButton, setDisplayEditButton] = useState(false);
  const [editPost, setEditPost] = useState(false);

  const [commentsCopy, setCommentsCopy] = useState([]);
  const [newComment, setNewComment] = useState({
    description: "",
    post_id: post_id,
    user_id: currentUserDetails["id"],
  });

  useEffect(() => {
    setNewComment((prev) => {
      return { ...prev, user_id: currentUserDetails["id"] };
    });
  }, [currentUserDetails]);

  const handleNewComment = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewComment((prev) => {
      return { ...prev, [name]: value };
    });
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

  const handleDescriptionLength = (des, len) => {
    let description = des.length > len ? des.substring(0, len) + "..." : des;
    return description;
  };

  return (
    <div className="forum-box-container">
      <div className="card-container">
        <div className="card-content">
          <Card.Body>
            <div className="header">
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                {username}
              </span>{" "}
              <br />
              <span>{date}</span>
              <ForumVoting
                className="voting"
                handleVote={handleVote}
                post_id={post_id}
              />
              <div className="user-interaction">
                <p>|</p>
                <p>Upvotes: {upvotes}</p>
                <p>|</p>
                <p>Downvotes: {downvotes}</p>
                <p>|</p>
                <p
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={toggleShow}
                >
                  Comments ({commentCount})
                </p>
              </div>
            </div>

            <div
              data-testid="click-full-post"
              onClick={setShow}
              className="title-description"
            >
              <Card.Title style={{ marginBottom: "2rem", color: "white" }}>
                <div>{handleDescriptionLength(Title, 100)}</div>
              </Card.Title>
              <Card.Text
                style={{
                  marginBottom: "2rem",
                  color: "white",
                }}
              >
                <div className="description-flex">
                  <div>{handleDescriptionLength(description, 300)}</div>
                </div>
              </Card.Text>
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
          post_id={post_id}
          user_id={user_id}
          category={category}
          fetchComments={fetchComments}
          fetchForumData={fetchForumData}
          currentUserDetails={currentUserDetails}
          setDisplayEditButton={setDisplayEditButton}
          displayEditButton={displayEditButton}
          editPost={editPost}
          setEditPost={setEditPost}
          inputtedCode={inputtedCode}
        />
      </div>
    </div>
  );
}
