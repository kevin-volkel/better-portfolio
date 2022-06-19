const nodemailer = require('nodemailer')
require('dotenv').config()
const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

const sendEmail = async (req, res) => {
  try {

    const {email, body, name} = req.body;
    if(!email || !body || !name) return res.status(400).send('Some information is missing')

    const emailTest = email.match(emailReg)
    if(emailTest === null) return res.status(400).send('Invalid email')

    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      },
    });

    const mailOptions = {
      from: email,
      to: 'volkelkevin9@gmail.com',
      text: body
    }

    transporter.sendMail(
      {...mailOptions, subject: `Portfolio Email from ${name}`},
      function (error, info) {
        if(error){
          console.error(error)
        } else {
          console.log(`Email sent: ${info.response}`)
        }
      }
    )
    console.log('EMAIL SENT')
    return res.status(200).send('Email sent')
  } catch (err) {
    console.error(err)
    return res.status(500).send('error @ sendEmail')
  }
}

module.exports = { sendEmail }