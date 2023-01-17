import "./Forums.css";
import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { MDBSpinner } from "mdb-react-ui-kit";

import Button from "react-bootstrap/Button";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RecentComments({
  commentsForIndivPost,
  handleNewComment,
  addComments,
  currentUserDetails,
  fetchComments,
}) {
  const [updatedComment, setUpdatedComment] = useState("");
  const [editComment, setEditComment] = useState(false);
  const [commentTarget, setCommentTarget] = useState("");

  useEffect(() => {
    fetchComments();
  }, [editComment]);

  const handleEditButtonClick = (e) => {
    const currentCommentTarget = e.target.name;
    setEditComment(!editComment);
    setCommentTarget(currentCommentTarget);
  };

  const handleEditPost = (e) => {
    const value = e.target.value;
    const currentComment = e.target.key;
    console.log(currentComment);
    setUpdatedComment(value);
  };

  const fetchEditComment = async (id) => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_comment",
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          {
            description: updatedComment,
            comment_id: id,
            user_id: currentUserDetails[0]["id"],
          },
        ]),
      }
    );
    const data = await res.json();

    setEditComment(false);

    if (
      data[0]["message"] ===
      "item has already been deleted or user does not have required access"
    ) {
      console.log("not correct user");
    } else {
      setEditComment(false);
    }
  };

  const fetchDeleteComment = async (id) => {
    console.log(id, currentUserDetails[0]["id"]);
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_comment",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          { comment_id: id, user_id: currentUserDetails[0]["id"], user_type: 2 },
        ]),
      }
    );
    const data = await res.json();

    if (data[0]["?column?"] === "successfully deleted comment") {
      fetchComments();
    }
  };

  return (
    <section className="comment-section-full-post">
      <MDBContainer
        className="py-4"
        style={{
          maxWidth: "800px",
          marginLeft: "-70px",
        }}
      >
        <MDBRow className="justify-content-center">
          <MDBCol md="10" lg="10">
            <MDBTypography tag="h4" className="mb-0">
              Recent comments
            </MDBTypography>
            <p className="fw-light mb-4 pb-2">
              Latest Comments section by users
            </p>
            <input
              onChange={handleNewComment}
              style={{
                marginBottom: "15px",
                width: "82%",
                height: "40px",
                borderRadius: "8px",
                border: "solid 1px grey",
                marginLeft: "3%",
              }}
              placeholder="New comment..."
              name="description"
            />
            <Button
              style={{
                backgroundColor: "black",
                marginTop: "-5px",
                height: "2.5rem",
              }}
              onClick={addComments}
            >
              OK
            </Button>

            <div
              style={{
                maxHeight: "400px",
                overflowY: "scroll",
              }}
            >
              {commentsForIndivPost.map((comment, i) => {
                return (
                  <MDBCard className="text-dark">
                    <MDBCardBody className="p-2">
                      <div className="d-flex flex-start">
                        <MDBCardImage
                          className="rounded-circle shadow-2-strong me-3"
                          src={comment["profile_picture"]}
                          alt="avatar"
                          width="60"
                          height="60"
                        />
                        <div>
                          <MDBTypography tag="h6" className="fw-bold mb-1">
                            {comment["username"]}
                          </MDBTypography>
                          <div className="d-flex align-items-center mb-3">
                            <p className="mb-0">{comment["date_created"]}</p>
                          </div>
                          {editComment &&
                          comment["id"] === parseInt(commentTarget) ? (
                            <div className="comment-section">
                              <textarea
                                style={{ border: "solid 1px black" }}
                                className="description-text"
                                onChange={handleEditPost}
                              />
                              <FontAwesomeIcon
                                onClick={() => {
                                  fetchEditComment(comment["id"]);
                                }}
                                className="check"
                                icon={faCheck}
                                style={{ cursor: "pointer" }}
                              />
                            </div>
                          ) : (
                            <p className="mb-0">{comment["description"]}</p>
                          )}
                        </div>
                      </div>
                    </MDBCardBody>
                    {commentsForIndivPost[i]["user_id"] ===
                      currentUserDetails[0]["id"] && (
                      <div className="modify-comments">
                        <button
                          onClick={handleEditButtonClick}
                          key={comment["description"]}
                          name={comment["id"]}
                          style={{
                            fontSize: "smaller",
                            cursor: "pointer",
                          }}
                        >
                          Edit post
                        </button>

                        <FontAwesomeIcon
                          onClick={() => {
                            fetchDeleteComment(comment["id"]);
                          }}
                          className="bin"
                          icon={faTrash}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    )}
                    <hr className="my-0" />
                  </MDBCard>
                );
              })}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
    </section>
  );
}
