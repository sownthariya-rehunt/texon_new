import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Endpoint to handle sending emails
app.post('/api/send-email', async (req: Request, res: Response) => {
  const { name, email, number, subject, message } = req.body;

  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Your Gmail address
      pass: 'your-password', // Your Gmail password
    },
  });

  // Email content
  const mailOptions = {
    from: 'your-email@gmail.com', // Sender email
    to: email, // Receiver email (can be the same as sender or a different one)
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\n\nMessage: ${message}`,
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
