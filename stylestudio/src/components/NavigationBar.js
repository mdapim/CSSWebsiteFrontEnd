import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export function NavigationBar({ currentUserDetails }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="ml-2">StyleStudio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/home">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/leaderboard">Specificity Leaderboard</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="forums">Forum</Link>
          </Nav.Link>
          <Nav.Link ><Link to="/guides">Guides</Link></Nav.Link>
          <Nav.Link>
            <Link to="/login">Login</Link>
          </Nav.Link>
        </Nav>
        <p style={{ color: "white", marginRight: "30px" }}>
          Signed in as: {currentUserDetails["username"]}{" "}
        </p>
      </Navbar>
    </div>
  );
}
