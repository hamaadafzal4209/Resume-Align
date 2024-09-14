import { useState, useRef } from "react";
import { Container, Row, Col, Card, ListGroup, Button, Alert } from "react-bootstrap";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PDFDocument } from 'pdf-lib'; 
import axios from 'axios'; 

const fileTypes = ["JPG", "PNG", "GIF", "PDF"];

const Dashboard = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);

  // Handle file change
  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    event.target.value = ""; // Clear file input value after selection
  };

  // Remove a file
  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Trigger file input click
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Extract text from PDF
  const extractTextFromPDF = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const pages = pdfDoc.getPages();
    let text = '';
    for (const page of pages) {
      const { textContent } = await page.getTextContent();
      text += textContent.items.map(item => item.str).join(' ') + '\n';
    }
    return text;
  };

  // Process files
  const processFiles = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const pdfFiles = files.filter(file => file.type === 'application/pdf');
      const texts = await Promise.all(pdfFiles.map(file => extractTextFromPDF(file)));
      
      // Replace 'your-endpoint' with your actual Gemini API endpoint
      const apiEndpoint = 'https://api.gemini.com/v1/evaluate-resumes'; // Example endpoint
      const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

      const responses = await Promise.all(texts.map(text => 
        axios.post(apiEndpoint, { text }, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        })
      ));
      
      // Process and display results
      const topResume = responses.map(response => response.data).sort((a, b) => b.score - a.score)[0];
      setResult(topResume);

    } catch (error) {
      setError("An error occurred while processing the files.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
      <Row className="justify-content-center">
        <Col>
          <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#343a40" }}>
            Upload Your Files
          </h2>

          {/* Custom File Uploader */}
          <div
            onClick={handleClick}
            style={{
              border: "2px dashed #FD366E",
              padding: "40px",
              borderRadius: "12px",
              textAlign: "center",
              backgroundColor: "#fff",
              transition: "background-color 0.3s ease-in-out",
              cursor: "pointer",
              position: "relative",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
          >
            <FaCloudUploadAlt size={40} color="#FD366E" style={{ marginBottom: "10px" }} />
            <p style={{ marginTop: "10px", color: "#6c757d", fontSize: "14px" }}>
              Drag & drop or click to upload your files (PDF, JPG, PNG, GIF)
            </p>
            <input
              type="file"
              ref={fileInputRef}
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }} // Hide the default file input
            />
          </div>

          {/* Uploaded Files Display */}
          {files.length > 0 && (
            <Card className="mt-4" style={{ borderRadius: "8px", borderColor: "#FD366E" }}>
              <Card.Header
                style={{
                  backgroundColor: "#FD366E",
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "10px",
                }}
              >
                Uploaded Files
              </Card.Header>
              <ListGroup variant="flush">
                {files.map((file, index) => (
                  <ListGroup.Item key={index} style={{ padding: "10px 20px", fontSize: "14px" }}>
                    <Row>
                      <Col xs={8}>
                        <strong>{file.name}</strong> ({(file.size / 1024).toFixed(2)} KB)
                      </Col>
                      <Col xs={4} className="text-end">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => removeFile(index)}
                          style={{
                            borderRadius: "20px",
                            borderColor: "#FD366E",
                            color: "#FD366E",
                            fontSize: "12px",
                          }}
                          onMouseEnter={(e) => (e.target.style.backgroundColor = "#FD366E", e.target.style.color = "#fff")}
                          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = "#FD366E")}
                        >
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          )}

          {/* Process Files Button */}
          {files.length > 0 && (
            <Button
              onClick={processFiles}
              disabled={loading}
              style={{ display: "block", margin: "20px auto", backgroundColor: "#FD366E", borderColor: "#FD366E" }}
            >
              {loading ? "Processing..." : "Process Files"}
            </Button>
          )}

          {/* Display Results */}
          {result && (
            <Alert variant="success" className="mt-4">
              <h4>Top Resume</h4>
              <p><strong>Title:</strong> {result.title}</p>
              <p><strong>Score:</strong> {result.score}</p>
              {/* Display more details as needed */}
            </Alert>
          )}

          {/* Display Error */}
          {error && (
            <Alert variant="danger" className="mt-4">
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;