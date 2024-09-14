import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFileAlt } from 'react-icons/fa'; // Import the document icon

function NavComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* Navbar.Brand with docs icon and text */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <FaFileAlt style={{ fontSize: '24px', marginRight: '8px' }} />
          Resume Align
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Link</Nav.Link>
            {/* Removed NavDropdown as per previous requirement */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;