import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css'; 
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section text-center">
      <Container>
        <Row className="justify-content-center align-items-center" style={{
          height: "60vh"
        }}>
          <Col md={8} lg={6}>
            <h1 className="hero-heading">Welcome to Resume Align</h1>
            <p className="hero-subheading">
              Optimize and enhance your resumes with our cutting-edge AI tool. Get the best resume for your job search.
            </p>
            <Link to="/dashboard">
              <Button 
                variant="danger"
                size="lg" 
                style={{
                  backgroundColor: '#FD366E', 
                  borderColor: '#FD366E',
                  padding: '10px 20px', 
                  fontSize: '1.125rem', 
                  borderRadius: '0.375rem',
                  transition: 'background-color 0.3s, transform 0.3s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#e52f6b'; 
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#FD366E';
                  e.currentTarget.style.transform = 'scale(1)'; 
                }}
              >
                Get Started
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
