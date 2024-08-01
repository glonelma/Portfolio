const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config(); // Add this line to load environment variables

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Serve static files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle form submission
app.post("/submit-form", (req, res) => {
  const { firstName, lastName, email, mobile, message } = req.body;

  // Email setup
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable
      pass: process.env.EMAIL_PASS, // Use environment variable
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL, // Use environment variable
    subject: "Contact Form Submission",
    text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).send("An error occurred.");
    } else {
      console.log("Email sent:", info.response);
      res.send("Your message has been sent.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
