import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function AccordionComponent() {
  return (
    <div
      style={{
        marginBottom: "50px",
      }}
    >
      <Container>
        <h2 className="text-center mb-4">FAQs</h2>
        <Accordion eventKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How does Resume Align work?</Accordion.Header>
            <Accordion.Body>
              Resume Align allows you to upload multiple resume files. Our AI
              analyzes each resume to determine which one is the best fit for
              your job search. The top resumes are then displayed for you to
              review and choose from.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What types of resumes can I upload?
            </Accordion.Header>
            <Accordion.Body>
              You can upload resumes in various formats including PDF, DOCX, and
              TXT. Ensure that your resumes are clear and well-formatted to get
              the best results from our AI analysis.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Is my resume data secure?</Accordion.Header>
            <Accordion.Body>
              Yes, your resume data is secure with us. We employ
              industry-standard security measures to protect your data and
              ensure that it is not shared with unauthorized parties.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How accurate is the AI in evaluating resumes?
            </Accordion.Header>
            <Accordion.Body>
              Our AI is designed to evaluate resumes with high accuracy, using
              advanced algorithms to assess the quality and relevance of each
              resume. While it provides valuable insights, we recommend
              reviewing the results and making final decisions based on your own
              judgment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Can I get support if I have issues with the platform?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we offer customer support for any issues or questions you may
              have. You can contact us through the contact form on our website
              or via our support email, and our team will be happy to assist
              you.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}

export default AccordionComponent;
