import { useDropzone } from 'react-dropzone';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';

const Dashboard = () => {
  const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
    accept: 'application/pdf',
    onDrop: (acceptedFiles) => {
      // Handle the file upload logic here
      console.log(acceptedFiles);
    },
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Upload Your Resume</h2>
          <div
            {...getRootProps({ className: 'dropzone' })}
            style={{
              border: '2px dashed #FD366E',
              padding: '20px',
              borderRadius: '5px',
              textAlign: 'center',
              backgroundColor: isDragActive ? '#f0f0f0' : '#ffffff',
            }}
          >
            <input {...getInputProps()} />
            {
              isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some PDF files here, or click to select files</p>
              )
            }
          </div>
          {acceptedFiles.length > 0 && (
            <div className="mt-4">
              <h4>Uploaded Files:</h4>
              <ul>
                {files}
              </ul>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;