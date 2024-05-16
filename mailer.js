const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "melaraeduardo661@gmail.com", // tu dirección de correo electrónico de Gmail
    pass: "qmajoobgmumgtbdv", // tu contraseña específica de la aplicación
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Dennis Eduardo Melara Zepeda" <melaraeduardo661@gmail.com>', // tu dirección de correo electrónico
    to: "j.william03@hotmail.com", // dirección de correo electrónico del destinatario
    subject: "Hola, mi nombre es Dennis Eduardo Melara Zepeda, espero que estés bien", // línea de asunto
    text: "¡Hola! ¿Cómo estás?", // cuerpo de texto plano
    html: "<b>¡Hola! ¿Cómo estás?</b>", // cuerpo HTML
  });

  console.log("Mensaje enviado: %s", info.messageId);
}

main().catch(console.error);
