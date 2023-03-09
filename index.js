const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

// ...

app.post('/send-email', (req, res) => {
    const { to, text } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'uptheswagswag@gmail.com',
            pass: '0725544988'
        }
    });

    const mailOptions = {
        from: 'uptheswagswag@gmail.com',
        to,
        subject: 'Submission data',
        text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.get('/', (req, res) => {
    res.send('It works !');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

// ...