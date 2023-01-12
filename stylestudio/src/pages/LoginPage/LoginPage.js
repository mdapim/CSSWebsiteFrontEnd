import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
export function LoginPage({
  handleSignInChange,
  signInCredentials,
  setCurrentUserDetails,
}) {
  const fetchSignIn = async () => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/find_user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([signInCredentials]),
      }
    );
    const data = await res.json();

    console.log(data);
    setCurrentUserDetails(data[0]);
  };
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>
              <MDBInput
                onChange={handleSignInChange}
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                name="name"
              />
              <MDBInput
                onChange={handleSignInChange}
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                name="password"
              />
              <p className="small mb-3 pb-lg-2">
                <a class="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <Button
                onClick={() => fetchSignIn()}
                outline
                className="mx-2 px-5"
                color="black"
                size="lg"
              >
                Login
              </Button>
              <div className="d-flex flex-row mt-3 mb-5">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="facebook-f" size="lg" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="twitter" size="lg" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-3"
                  style={{ color: "white" }}
                >
                  <MDBIcon fab icon="google" size="lg" />
                </MDBBtn>
              </div>
              <div>
                Don't have an account? <Link to="/sign-up">Sign up</Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
