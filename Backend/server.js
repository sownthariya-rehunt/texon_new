const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const application = express(); // Instantiate Express application

application.use(bodyParser.json());
application.use(cors()); // Enable CORS

// Read the email template file asynchronously
fs.readFile(path.join(__dirname, 'emailTemplate.html'), 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading email template:', err);
    return;
  }
  
  // Define emailTemplate variable after reading the file
  const emailTemplate = data;

  // Endpoint to handle sending emails
  application.post('/api/send-email', async (req, res) => {
    const { name, email, number, subject, message } = req.body;
    const verify = 'http://localhost:3000/verify/';

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'inianh2t@gmail.com', // Your Gmail address
        pass: 'zgtj zxzd ktvj jivk' // Your Gmail password
      }
    });

    // Email content with template variables
    const mailOptions = {
      from: 'inianh2t@gmail.com ', // Sender email
      to: email, // Receiver email (can be the same as sender or a different one)
      subject: subject,
      html: emailTemplate.replace('{{verifyLink}}', verify)
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });
});

// Start the server
const port = process.env.PORT || 4000;
application.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
