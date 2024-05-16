const nodemailer = require('nodemailer');

async function enviarMail() {
    try {
        const config = {
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'DM24B908@transforma.edu.sv',
                pass: 'Fusalmo24' // elimina el espacio al final de la contraseña
            }
        };

        const mensaje = {
            from: 'DM24B908@transforma.edu.sv',
            to: 'j.william03@hotmail.com',
            subject: 'Dennis Hefziba Martinez: Implementación de servidor de correos.',
            text: '¡Servidor de correo funcionando excelente!'
        };

        const transport = nodemailer.createTransport(config);
        const info = await transport.sendMail(mensaje);
        
        console.log("Mensaje enviado:", info.messageId);
    } catch (error) {
        console.error("Error al enviar el mensaje:", error);
    }
}

enviarMail();
