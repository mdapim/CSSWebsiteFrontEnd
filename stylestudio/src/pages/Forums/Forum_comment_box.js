import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBModal,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Comments({
  staticModal,
  setStaticModal,
  toggleShow,
  commentsForIndivPost,
  handleNewComment,
  addComments,
  fetchComments,
  commentsCopy,

  displayEditButton,
}) {
  useEffect(() => {
    fetchComments();
  }, [commentsCopy]);

  return (
    <MDBModal
      staticBackdrop
      tabIndex="-1"
      show={staticModal}
      setShow={setStaticModal}
    >
      <MDBContainer
        className="mt-5"
        style={{
          maxWidth: "1000px",
          minWidth: "1000px",
        }}
      >
        <div className="comment-section">
          <MDBCol md="8" lg="6">
            <MDBCard
              className=" shadow-0 border"
              style={{ backgroundColor: "#212529" }}
            >
              <FontAwesomeIcon
                onClick={toggleShow}
                className="check"
                icon={faClose}
                style={{ cursor: "pointer", marginLeft: "28rem" }}
              />
              <MDBCardBody>
                <div className="pop-up-comments-input">
                  <textarea
                    onChange={handleNewComment}
                    wrapperClass="mb-4"
                    placeholder="What are your thoughts?"
                    name="description"
                    style={{ width: "300px" }}
                    rows="1"
                  />
                  <Button onClick={addComments}>OK</Button>
                </div>
                <div className="pop-up-comment">
                  {commentsForIndivPost.length > 0 ? (
                    commentsForIndivPost.map((e, i) => {
                      return (
                        <MDBCard key={i} className="pop-up-comment mb-4">
                          <MDBCardBody>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <MDBCardImage
                                  className="rounded-circle shadow-2-strong me-3"
                                  src={e["profile_picture"]}
                                  alt="avatar"
                                  width="60"
                                  height="60"
                                />
                                <strong>
                                  <p
                                    style={{
                                      color: "black",
                                      marginTop: "15px",
                                    }}
                                  >
                                    {e["username"]}
                                  </p>
                                </strong>

                                <p className="small mb-0 ms-2"></p>
                              </div>
                              <p style={{ color: "black" }}>
                                {e["description"]}
                              </p>

                              <div className="d-flex flex-row align-items-center"></div>
                              {displayEditButton && (
                                <p style={{ color: "black", cursor: "submit" }}>
                                  Edit
                                </p>
                              )}
                            </div>
                          </MDBCardBody>
                        </MDBCard>
                      );
                    })
                  ) : (
                    <p>There is no comments for this post</p>
                  )}
                </div>
              </MDBCardBody>

              {/* <button onClick={toggleShow}>Exit</button> */}
            </MDBCard>
          </MDBCol>
        </div>
      </MDBContainer>
    </MDBModal>
  );
}
