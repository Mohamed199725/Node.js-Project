// email-sender.js
const nodemailer = require('nodemailer');

// Set up a nodemailer transporter with your email provider's details

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-password',
    },
});

// Set up email options
const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com',
    subject: 'Test Email',
    text: 'This is a test email from Node.js.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Email sent:', info.response);
    }
});