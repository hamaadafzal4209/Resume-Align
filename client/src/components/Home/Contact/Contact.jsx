import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row>
        {/* Contact Information */}
        <Col md={6}>
          <h4 className="mb-4" style={{ color: '#FD366E' }}>Contact Information</h4>
          <ul className="list-unstyled">
            <li className="mb-3">
              <FaEnvelope size={20} className="me-2" style={{ color: '#FD366E' }} />
              <a 
                href="mailto:info@example.com" 
                style={{ textDecoration: 'none', color: '#343a40', transition: 'color 0.3s' }} 
                onMouseOver={(e) => e.currentTarget.style.color = '#FD366E'} 
                onMouseOut={(e) => e.currentTarget.style.color = '#343a40'}
              >
                info@example.com
              </a>
            </li>
            <li className="mb-3">
              <FaPhoneAlt size={20} className="me-2" style={{ color: '#FD366E' }} />
              <a 
                href="tel:+1234567890" 
                style={{ textDecoration: 'none', color: '#343a40', transition: 'color 0.3s' }} 
                onMouseOver={(e) => e.currentTarget.style.color = '#FD366E'} 
                onMouseOut={(e) => e.currentTarget.style.color = '#343a40'}
              >
                +123 456 7890
              </a>
            </li>
            <li className="mb-3">
              <h5 className="mb-2" style={{ color: '#FD366E' }}>Follow Us</h5>
              <div className="d-flex gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#343a40', transition: 'color 0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#FD366E'} 
                  onMouseOut={(e) => e.currentTarget.style.color = '#343a40'}
                >
                  <FaFacebookF size={24} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#343a40', transition: 'color 0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#FD366E'} 
                  onMouseOut={(e) => e.currentTarget.style.color = '#343a40'}
                >
                  <FaTwitter size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ color: '#343a40', transition: 'color 0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.color = '#FD366E'} 
                  onMouseOut={(e) => e.currentTarget.style.color = '#343a40'}
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </li>
          </ul>
        </Col>

        {/* Contact Form */}
        <Col md={6}>
          <h4 className="mb-4" style={{ color: '#FD366E' }}>Get in Touch</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                style={{ borderRadius: '0.25rem', borderColor: '#ced4da' }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                style={{ borderRadius: '0.25rem', borderColor: '#ced4da' }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4} 
                placeholder="Your message" 
                style={{ borderRadius: '0.25rem', borderColor: '#ced4da' }}
              />
            </Form.Group>

            <Button 
              variant="primary" 
              type="submit" 
              style={{ width: '100%', borderRadius: '0.25rem', backgroundColor: '#FD366E', borderColor: '#FD366E', transition: 'background-color 0.3s' }} 
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c81d5d'} 
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#FD366E'}
            >
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactSection;