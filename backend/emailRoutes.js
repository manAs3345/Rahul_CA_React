const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/testEmailRoute/:messageToEcho', (req, res) => {
    const messageToEcho = req.params.messageToEcho;
    res.send(messageToEcho);
});

// const transporter = nodemailer.createTransport({
//     service: 'gmail', // e.g., 'gmail'
//     auth: {
//         user: 'casomaniqueries@gmail.com', // your email
//         pass: 'xovl armm wbfp ezyx'   // your email password
//     }
// });
const transporter = nodemailer.createTransport({
   host: "smtpout.secureserver.net",   // GoDaddy SMTP server
    port: 465,                          // SSL port (use 587 for TLS if needed)
    secure: true,                       // true for 465, false for 587
    auth: {
        user: 'support@casomani.com',  // your GoDaddy custom domain email (e.g. info@yourdomain.com)
        pass: 'Anshuathu@1'  // your email password
    }

});

router.post('/sendEmail', (req, res) => {
    const { fromMail, subject, name,message } = req.body;

    const mailOptions = {
        from:'support@casomani.com',
        to: 'support@casomani.com',
        subject: subject,
        text: `Name: ${name} \nMessage: ${message}\nEmail: ${fromMail}`,
    };



    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send({"result":`Email sent: ${info.response}`});
    });
});

module.exports = router;