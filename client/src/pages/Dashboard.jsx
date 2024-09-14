import { useState, useRef } from "react";
import { Container, Row, Col, Card, ListGroup, Button, Alert } from "react-bootstrap";
import { FaCloudUploadAlt } from "react-icons/fa";
import pdf from 'pdf-parse';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const Dashboard = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [topResumes, setTopResumes] = useState([]); // To store top 5 resumes
  const fileInputRef = useRef(null);

  // Your API key
  const apiKey = 'AIzaSyACaSGdYOtuaM673cfWwwmq7zdqQTMPyuM';
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    event.target.value = ""; // Reset file input
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const extractTextFromPDF = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const data = await pdf(arrayBuffer);
    return data.text;
  };

  const processFiles = async () => {
    setLoading(true);
    setError(null);
    setTopResumes([]);

    try {
      const pdfFiles = files.filter(file => file.type === 'application/pdf');
      const texts = await Promise.all(pdfFiles.map(file => extractTextFromPDF(file)));

      const responses = await Promise.all(texts.map(text => {
        const chatSession = model.startChat({
          generationConfig,
          safetySettings,
          history: [],
        });

        return chatSession.sendMessage(text).then(response => ({
          text: response.response.text(),
        }));
      }));

      // Mock processing of responses
      const processedResponses = responses.map((response, index) => ({
        title: pdfFiles[index].name,
        score: Math.random() * 100 // Mocking the score since we don't know the exact structure
      }));

      const topFive = processedResponses.sort((a, b) => b.score - a.score).slice(0, 5);
      setTopResumes(topFive);

    } catch (error) {
      setError("An error occurred while processing the files.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="my-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
      <Row className="justify-content-center">
        <Col>
          <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#343a40" }}>
            Upload Your Resumes
          </h2>

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
              Drag & drop or click to upload your resumes (PDF format only)
            </p>
            <input
              type="file"
              ref={fileInputRef}
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>

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

          {files.length > 0 && (
            <Button
              onClick={processFiles}
              disabled={loading}
              style={{ display: "block", margin: "20px auto", backgroundColor: "#FD366E", borderColor: "#FD366E" }}
            >
              {loading ? "Processing..." : "Process Resumes"}
            </Button>
          )}

          {topResumes.length > 0 && (
            <Card className="mt-4">
              <Card.Header style={{ backgroundColor: "#28a745", color: "#fff", textAlign: "center" }}>
                Top 5 Resumes
              </Card.Header>
              <ListGroup variant="flush">
                {topResumes.map((resume, index) => (
                  <ListGroup.Item key={index}>
                    <strong>{index + 1}. {resume.title}</strong> - Score: {resume.score.toFixed(2)}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          )}

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