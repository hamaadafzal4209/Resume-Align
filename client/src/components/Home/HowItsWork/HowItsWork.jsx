import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUpload, FaCheckCircle, FaTrophy } from 'react-icons/fa';
import './HowItWorksSection.css'; // Ensure you create this CSS file for custom styling

const HowItWorksSection = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">How It Works</h2>
      <Row className="justify-content-center">
        <Col md={4} className="d-flex align-items-stretch mb-4">
          <Card className="shadow-sm border-0 text-center how-it-works-card">
            <Card.Body>
              <FaUpload size={60} className="text-primary mb-3" />
              <Card.Title>Upload Your Resume</Card.Title>
              <Card.Text>
                Simply upload your resume files for analysis.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex align-items-stretch mb-4">
          <Card className="shadow-sm border-0 text-center how-it-works-card">
            <Card.Body>
              <FaCheckCircle size={60} className="text-success mb-3" />
              <Card.Title>Analyze with AI</Card.Title>
              <Card.Text>
                Our AI evaluates each resume to determine the best fit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex align-items-stretch mb-4">
          <Card className="shadow-sm border-0 text-center how-it-works-card">
            <Card.Body>
              <FaTrophy size={60} className="text-warning mb-3" />
              <Card.Title>Get Top Resumes</Card.Title>
              <Card.Text>
                Receive a list of the top resumes ready for submission.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HowItWorksSection;
