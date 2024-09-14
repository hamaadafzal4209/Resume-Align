import React from 'react';
import { Uploader } from 'react-uploader'; // Check that this is correctly installed and imported
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';

// Configure uploader options
const uploaderOptions = {
  multi: false,  // Allow single file upload
  maxFileCount: 1,
  accept: ['.pdf'],  // Only accept PDF files
  styles: {
    colors: {
      primary: '#FD366E',  // Your main color
    },
  },
};

const Dashboard = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Upload Your Resume</h2>
          
          {/* File Uploader */}
          <Uploader
            options={uploaderOptions}
            onComplete={(files) => {
              if (files.length > 0) {
                console.log('Uploaded file:', files[0].fileUrl);
              }
            }}
          >
            {({ open }) => (
              <Button
                onClick={open}
                className="btn btn-primary"
                style={{ backgroundColor: '#FD366E', borderColor: '#FD366E' }}
              >
                Upload PDF
              </Button>
            )}
          </Uploader>

          {/* Message for user guidance */}
          <Alert variant="info" className="mt-4">
            Please upload your resume in PDF format.
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;