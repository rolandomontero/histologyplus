/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configura el transporte de correo con el servidor empresarial
const transporter = nodemailer.createTransport({
  host: "histologyplus.mclautaro.cl", // Host SMTP de tu servidor empresarial
  port: 465, // Puerto (465 para SSL, 587 para TLS)
  secure: true, // `true` para SSL, `false` para TLS
  auth: {
    user: "app@histologyplus.mclautaro.cl", // Dirección de correo empresarial
    pass: "Rmx21071972#", // Contraseña del correo
  },
});

// Función para enviar correo
exports.sendEmail = functions.https.onRequest(async (req, res) => {
  const {to, subject, text} = req.body;

  if (!to || !subject || !text) {
    return res.status(400).send({error: "Faltan parámetros"});
  }

  const mailOptions = {
    from: "info@histologyplus.com", // Dirección de correo remitente
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
