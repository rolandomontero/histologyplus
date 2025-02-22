const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "histologyplus.mclautaro.cl",
  port: 465,
  secure: true,
  auth: {
    user: "app@histologyplus.mclautaro.cl",
    pass: "Rmx21071972#",
  },
});

exports.sendEmail = functions.https.onRequest(async (req, res) => {
  const {to, subject, text} = req.body;

  if (!to || !subject || !text) {
    return res.status(400).send({error: "Faltan parámetros"});
  }

  const mailOptions = {
    from: "info@histologyplus.com",
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).send({message: "Correo enviado correctamente"});
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return res.status(500).send({error: "Error al enviar el correo"});
  }
});
