import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle, FaCog, FaUser } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <Row className="justify-content-center">
        <Col md={4} className="d-flex align-items-stretch mb-4">
          <Card className="border-0 shadow-sm rounded-3 p-4 text-center"
                style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Card.Body>
              <FaCheckCircle size={60} className="text-success mb-3" />
              <Card.Title>Feature One</Card.Title>
              <Card.Text>
                Description of the first feature and why it’s beneficial.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex align-items-stretch mb-4">
          <Card className="border-0 shadow-sm rounded-3 p-4 text-center"
                style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Card.Body>
              <FaCog size={60} className="text-primary mb-3" />
              <Card.Title>Feature Two</Card.Title>
              <Card.Text>
                Description of the second feature and how it stands out.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="d-flex align-items-stretch mb-4">
          <Card className="border-0 shadow-sm rounded-3 p-4 text-center"
                style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Card.Body>
              <FaUser size={60} className="text-warning mb-3" />
              <Card.Title>Feature Three</Card.Title>
              <Card.Text>
                Description of the third feature and its impact on users.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesSection;