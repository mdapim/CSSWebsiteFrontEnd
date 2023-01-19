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
  MDBSpinner
} from "mdb-react-ui-kit";


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
  const [loadingComments,setLoadingComments] = useState(false)
  useEffect(() => {
    setLoadingComments(true)
    fetchComments();
    setLoadingComments(false)
  }, [editComment]);

  const handleEditButtonClick = (e) => {
    const currentCommentTarget = e.target.name;
    setEditComment(!editComment);
    setCommentTarget(currentCommentTarget);
  };

  const handleEditPost = (e) => {
    const value = e.target.value;
    const currentComment = e.target.key;
    setUpdatedComment(value);
  };

  const fetchEditComment = async (id) => {
    setLoadingComments(true)
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_comment",
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          {
            description: updatedComment,
            comment_id: id,
            user_id: currentUserDetails["id"],
          },
        ]),
      }
    );
    const data = await res.json();

    if (
      data[0]["message"] ===
      "item has already been deleted or user does not have required access"
    ) {
      console.log("not correct user");
    } else {
      setEditComment(false);
    }
    setLoadingComments(false)
  };

  const fetchDeleteComment = async (id) => {
    setLoadingComments(true)
    console.log(id, currentUserDetails["id"]);
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/forum_comment",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([
          {
            comment_id: id,
            user_id: currentUserDetails["id"],
            user_type: 2,
          },
        ]),
      }
    );
    const data = await res.json();

    if (data[0]["?column?"] === "successfully deleted comment") {
      fetchComments();
    }
    setLoadingComments(false)
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
            <div className='input-field-comments'>
            <input
              onChange={handleNewComment}
              style={{
                width: "300px",
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
                height: "2.5rem",
                border: "none",
              }}
              onClick={async ()=> {
                setLoadingComments(true)
                await addComments()
                setLoadingComments(false)
                }}
            >
              OK
            </Button>
            {loadingComments && <MDBSpinner style={{alignSelf:"center",marginLeft:"20px"}} role='status'></MDBSpinner>}
            </div>
            <div
              style={{
                maxHeight: "400px",
                overflowY: "scroll",
                display:"flex",
                flexDirection:"column"
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
                      currentUserDetails["id"] && (
                      <div className="modify-comments">
                        <a
                          onClick={handleEditButtonClick}
                          href
                          key={comment["description"]}
                          name={comment["id"]}
                          style={{
                            fontSize: "smaller",
                            cursor: "pointer",
                          }}
                        >
                          Edit post
                        </a>

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
