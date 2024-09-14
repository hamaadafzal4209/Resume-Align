import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle, FaCog, FaUser } from 'react-icons/fa'; // Example icons

const FeaturesSection = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Features</h2>
      <Row className="text-center">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <FaCheckCircle size={50} className="mb-3" />
              <Card.Title>Feature One</Card.Title>
              <Card.Text>
                Description of the first feature and why it’s beneficial.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <FaCog size={50} className="mb-3" />
              <Card.Title>Feature Two</Card.Title>
              <Card.Text>
                Description of the second feature and how it stands out.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <FaUser size={50} className="mb-3" />
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
