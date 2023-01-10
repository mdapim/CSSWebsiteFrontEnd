import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
export function Signup({handleSignInChange, signInCredentials}) {
  const [successfulSignUp, setSuccessfulSignUp] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);

  const fetchSignUp = async () => {
    console.log([signInCredentials])
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/create_user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([signInCredentials]),
      }
    );
    const data = await res.json();
    console.log(data)
  };
  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="7"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-2 fw-bold ls-tight px-5"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            StyleStudio <br />
          </h1>
          <p className="px-1" style={{ color: "hsl(218, 81%, 85%)" }}></p>
        </MDBCol>
        <MDBCol md="4" className="position-relative">
          <div
            id="radius-shape-2"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>
          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form3"
                type="email"
                name="name"
                onChange={handleSignInChange}
              />
              <MDBInput
                wrapperClass="mb-5"
                label="Password"
                id="form4"
                type="password"
                name="password"
                onChange={handleSignInChange}
              />
              <Button onClick={fetchSignUp} size="lg">
                sign up
              </Button>
              {successfulSignUp && (
                <div>
                  <h3>Success.. Loading....</h3>
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              )}
              {invalidInput && (
                <h3>Please sign up with an account name and a password</h3>
              )}
 
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Signup;