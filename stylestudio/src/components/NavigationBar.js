import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import Button from "react-bootstrap/Button";
export function NavigationBar({ currentUserDetails, handleLogOut, loggedIn }) {
  return (
    <div className="main-nav">
      <Navbar>
        {/* <Navbar.Brand className="ml-2">StyleStudio</Navbar.Brand> */}
        <Nav className="me-auto">
          <Nav.Link className="nav-child">
            <Link to="/home">Home</Link>
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
          <Nav.Link className="nav-child">
            {loggedIn ? (
              <Button id="logoutbutton" size="sm" onClick={handleLogOut}>
                Log out
              </Button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </Nav.Link>
        </Nav>
        {/* <p style={{ color: "black", marginRight: "30px" }}>
          Signed in as: {currentUserDetails["username"]}{" "}
        </p> */}
      </Navbar>
    </div>
  );
}
