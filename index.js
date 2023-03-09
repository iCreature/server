const express = require('express');
const app = express();
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const allowedOrigins = ['http://localhost:4200'];

app.use(cors({
    origin: allowedOrigins
}));

// Set SendGrid API key
sgMail.setApiKey('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');

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { to, text } = req.body;

    const msg = {
        to: to,
        from: 'mxolisi1025@gmail.com', // replace with your own email address
        subject: 'Submission data',
        text: text,
    };

    sgMail.send(msg)
        .then(() => {
            console.log('Email sent successfully');
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending email');
        });
});

app.get('/', (req, res) => {
    res.send('It works !');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});