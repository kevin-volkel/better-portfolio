import { SMTPClient } from "emailjs";
require("dotenv").config();

const emailReg =
/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const sendEmail = async (req, res) => {
  
  try {

    const { email, body, name } = req.body;
    if (!email || !body || !name)
      return res.status(400).send("Some information is missing");

    const emailTest = email.match(emailReg);
    if (emailTest === null) return res.status(400).send("Invalid email");

    const client = new SMTPClient({
      user: process.env.EMAIL,
      password: process.env.PASSWORD,
      host: "smtp.gmail.com",
      ssl: true,
    });

    client.send({
      text: body,
      from: email,
      to: "volkelkevin9@gmail.com",
      subject: `Email from ${name}`,
    });

    return res.status(200).send("Email sent");
  } catch (err) {
    console.error(err);
    return res.status(500).send("error @ sendEmail");
  }
};

module.exports = { sendEmail };
