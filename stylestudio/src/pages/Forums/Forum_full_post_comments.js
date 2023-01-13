import React from "react";
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
import Button from "react-bootstrap/Button";
import "./Forums.css";

export default function RecentComments({
  commentsForIndivPost,
  handleNewComment,
  addComments,
}) {
  return (
    <section style={{ backgroundColor: "white" }}>
      <MDBContainer
        className="py-3"
        style={{
          maxWidth: "800px",
          marginLeft: "-70px",
          // maxHeight: "800px",
          // overflowY: "scroll",
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
                width: "90%",
                height: "50px",
                borderRadius: "8px",
                border: "solid 1px grey",
              }}
              placeholder="New comment..."
              name="description"
            />
            <Button onClick={addComments}>OK</Button>
            <div
              style={{
                // maxWidth: "800px",
                // marginLeft: "-70px",
                maxHeight: "400px",
                overflowY: "scroll",
              }}
            >
              {commentsForIndivPost.map((comment) => {
                return (
                  <MDBCard className="text-dark">
                    <MDBCardBody className="p-4">
                      <div className="d-flex flex-start">
                        <MDBCardImage
                          className="rounded-circle shadow-1-strong me-3"
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
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
                            <a href="#!" className="link-muted">
                              <MDBIcon fas icon="pencil-alt ms-2" />
                            </a>
                            <a href="#!" className="link-muted">
                              <MDBIcon fas icon="redo-alt ms-2" />
                            </a>
                            <a href="#!" className="link-muted">
                              <MDBIcon fas icon="heart ms-2" />
                            </a>
                          </div>
                          <p className="mb-0">{comment["description"]}</p>
                        </div>
                      </div>
                    </MDBCardBody>
                    <hr className="my-0" />
                  </MDBCard>
                );
              })}
            </div>
            {/* <input
              onChange={handleNewComment}
              style={{
                marginTop: "15px",
                width: "90%",
                height: "50px",
                borderRadius: "8px",
                border: "solid 1px grey",
              }}
              placeholder="New comment..."
              name="description"
            /> */}
            {/* <Button onClick={addComments}>OK</Button> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
    </section>
  );
}
