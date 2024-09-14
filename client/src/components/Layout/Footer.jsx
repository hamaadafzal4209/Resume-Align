import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#ffffff', padding: '20px 0' }}>
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3 mb-md-0">
            <h5 style={{ color: '#FD366E' }}>Resume Align</h5>
            <p>
              Enhance your job search with our advanced resume optimization tools. We use AI to help you get noticed.
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 style={{ color: '#FD366E' }}>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FD366E'} onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}>Home</a></li>
              <li><a href="/dashboard" style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FD366E'} onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}>Dashboard</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 style={{ color: '#FD366E' }}>Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '20px', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FD366E'} onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}>
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '20px', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FD366E'} onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}>
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '20px', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FD366E'} onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}>
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p style={{ margin: '0', fontSize: '14px' }}>© {new Date().getFullYear()} Resume Align. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
