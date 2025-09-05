require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: name,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Something went wrong.');
    }
    res.status(200).send('Message sent successfully!');
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Contact form server running on port ${PORT}`);
});
