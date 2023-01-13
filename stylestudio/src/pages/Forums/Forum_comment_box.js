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

export default function Comments({
  staticModal,
  setStaticModal,
  toggleShow,
  commentsForIndivPost,
  handleNewComment,
  addComments,
  fetchComments,
  commentsCopy,
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
        style={{ maxWidth: "1000px", minWidth: "1000px" }}
      >
        <MDBRow className="justify-content-center">
          <MDBCol md="8" lg="6">
            <MDBCard
              className="shadow-0 border"
              style={{ backgroundColor: "#f0f2f5" }}
            >
              <MDBCardBody>
                <MDBInput
                  onChange={handleNewComment}
                  wrapperClass="mb-4"
                  placeholder="Type comment..."
                  name="description"
                />
                <Button onClick={addComments}>Add new comments...</Button>

                {commentsForIndivPost.length > 0 ? (
                  commentsForIndivPost.map((e) => {
                    return (
                      <MDBCard className="mb-4">
                        <MDBCardBody>
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <p>{e["username"]}</p>

                              <p className="small mb-0 ms-2"></p>
                            </div>
                            <p>{e["description"]}</p>

                            <div className="d-flex flex-row align-items-center">
                              <MDBIcon
                                far
                                icon="thumbs-up mx-2 fa-xs text-black"
                                style={{ marginTop: "-0.16rem" }}
                              />
                            </div>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    );
                  })
                ) : (
                  <p>There is no comments for this post</p>
                )}
              </MDBCardBody>
              <button onClick={toggleShow}>Exit</button>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBModal>
  );
}
