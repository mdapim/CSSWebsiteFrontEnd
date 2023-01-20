import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "./LoginPage.css";
import "../Styling.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";

export function LoginPage({ setCurrentUserDetails, handleLogIn }) {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/home");
  };
  const [signInCredentials, setSignInCredentials] = useState({
    name: "",
    password: "",
  });
  const handleSignInChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignInCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchSignIn = async () => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/find_user",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([signInCredentials]),
      }
    );

    handleLogIn();
    if (res.status === 200) {
      const data = await res.json();
      console.log(data, res);

      setCurrentUserDetails(data[0]);
      handleLogIn();
      routeChange();
    } else {
      setErrorLogin(true);
    }
    setLoading(false);
  };
  return (
    <MDBContainer fluid data-testid="login_tag">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "3rem", maxWidth: "400px" }}
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
                label="Username"
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
                title="login-password-input"
              />
              <p className="small mb-3 pb-lg-2">
                <a class="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              {loading ? (
                <MDBSpinner role="status"></MDBSpinner>
              ) : (
                <Button
                  onClick={() => {
                    setLoading(true);
                    fetchSignIn();
                  }}
                  outline
                  className="mx-2 px-5"
                  color="black"
                  size="lg"
                  data-testid="login-button"
                >
                  Login
                </Button>
              )}

              {errorLogin ? (
                <Alert
                  style={{ marginBottom: "-100px", paddingTop: "10px" }}
                  className={"mt-1 shake-horizontal"}
                  data-testid="login-alertbox"
                >
                  Your login credentials did not work. Please try again
                </Alert>
              ) : (
                ""
              )}

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
