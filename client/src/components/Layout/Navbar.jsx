import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFileAlt } from 'react-icons/fa';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

function NavComponent() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#f8f9fa" }}>
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <FaFileAlt
            style={{ fontSize: "24px", marginRight: "6px", color: "#FD366E" }}
          />{" "}
          <span style={{ color: "#FD366E", fontWeight: "600" }}>
            Resume Align
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={{ color: "#343a40" }}>
              Home
            </Nav.Link>
            <SignedIn>
              <Nav.Link href="/dashboard" style={{ color: "#343a40" }}>
                Dashboard
              </Nav.Link>
            </SignedIn>
            <SignedOut>
              <Nav.Link href="#" style={{ color: "#343a40" }}>
                <SignInButton />
              </Nav.Link>
            </SignedOut>
            <SignedIn>
              <Nav.Link href="#" style={{ color: "#343a40" }}>
                <UserButton />
              </Nav.Link>
            </SignedIn>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
