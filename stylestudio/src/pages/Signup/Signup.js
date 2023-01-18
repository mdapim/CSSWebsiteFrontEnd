import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./Signup.css";
import "../Styling.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSpinner,
} from "mdb-react-ui-kit";
export function Signup() {
  const navigate = useNavigate();
  const [successfulSignUp, setSuccessfulSignUp] = useState(false);
  const [signInCredentials, setSignInCredentials] = useState({
    name: "",
    password: "",
  });
  const [invalidInput, setInvalidInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSignInChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignInCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  }
  const routeChange = () => {
    navigate("/login");
  };
  const fetchSignUp = async () => {
    setLoading(true);
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
    setLoading(false);
    if (data[0].status === 200) {
      setInvalidInput(false);
      setSuccessfulSignUp(true);
      routeChange();
    } else {
      setInvalidInput(true);
    }
    console.log(data);
  };
  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
    >
      <div className="sign-up-card">
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
              <div className="options">
                <div className="center">
                  {!loading && (
                    <Button onClick={fetchSignUp} size="lg">
                      sign up
                    </Button>
                  )}
                </div>
                <div className="center">
                  {loading && <MDBSpinner role="status"></MDBSpinner>}
                </div>

                {invalidInput && (
                  <Alert className="m-1 shake-horizontal">
                    That username is already taken
                  </Alert>
                )}
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </MDBContainer>
  );
}
