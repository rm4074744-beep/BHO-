const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send-otp', (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);

    const mailOptions = {
        from: `"MingleJoys" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Verification Code',
        text: `Your MingleJoys OTP is: ${otp}`
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) return res.status(500).json({ success: false });
        res.status(200).json({ success: true, message: "Sent!" });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server Live!'));
