import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "./NavigationBar.css";
import Button from "react-bootstrap/Button";
export function NavigationBar({ currentUserDetails, handleLogOut, loggedIn }) {
  useEffect(() => {}, [currentUserDetails]);

  return (
    <div className="main-nav">
      <Navbar>
        <Nav className="me-auto">
          <Nav.Link className="nav-child">
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link className="nav-child">
            <Link to="/leaderboard">Specificity Leaderboard</Link>
          </Nav.Link>
          <Nav.Link className="nav-child">
            <Link to="forums">Forum</Link>
          </Nav.Link>
          <Nav.Link className="nav-child">
            <Link to="/guides">Guides</Link>
          </Nav.Link>
          {!loggedIn ? (
            <Nav.Link>
              <NavDropdown
                title="Login"
                menuVariant="dark"
                style={{ zIndex: "2", marginTop: "-9px" }}
                className="nav-link"
              >
                <NavDropdown.Item>
                  <Link to="login">Login</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/sign-up">Sign-up</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          ) : (
            <NavDropdown
              style={{ zIndex: "2" }}
              className="nav-link"
              title="Profile"
              menuVariant="dark"
            >
              <p style={{ textAlign: "center", padding: "10px" }}>
                Signed in as {currentUserDetails["username"]}
              </p>
              <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogOut}>
                Logout
              </NavDropdown.Item>{" "}
            </NavDropdown>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}
