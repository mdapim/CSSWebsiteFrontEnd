import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="ml-2">StyleStudio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/home">Home</Link>
          </Nav.Link>
          <Nav.Link>Specificity Leaderboard</Nav.Link>
          <Nav.Link>
            <Link to="forums">Forum</Link>
          </Nav.Link>
          <Nav.Link href="#guides">Guides</Nav.Link>
          <Nav.Link>
            <Link to="/login">Login</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
