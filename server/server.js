const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const filePath = path.join(__dirname, req.file.path);
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    fs.unlinkSync(filePath);
    res.json({ text: data.text });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process PDF' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
