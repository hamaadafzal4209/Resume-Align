import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css'; 

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
            <Button 
              variant="primary" 
              size="lg" 
              href="/dashboard" // This will navigate to the dashboard section
            >
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
