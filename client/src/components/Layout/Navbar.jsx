import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFileAlt } from 'react-icons/fa';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function NavComponent() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#f8f9fa" }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <FaFileAlt
            style={{ fontSize: "24px", marginRight: "6px", color: "#FD366E" }}
          />
          <span style={{ color: "#FD366E", fontWeight: "600" }}>
            Resume Align
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" style={{ color: "#343a40" }}>
              Home
            </Nav.Link>
            <SignedIn>
              <Nav.Link as={Link} to="/dashboard" style={{ color: "#343a40" }}>
                Dashboard
              </Nav.Link>
            </SignedIn>
            <SignedOut>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#FD366E",
                  borderColor: "#FD366E",
                  color: "white",
                }}
              >
                <SignInButton />
              </Button>
            </SignedOut>
            <SignedIn>
              <Nav.Link as={Link} to="#" style={{ color: "#343a40" }}>
                <UserButton
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#343a40",
                  }}
                />
              </Nav.Link>
            </SignedIn>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
