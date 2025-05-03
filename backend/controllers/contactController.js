const nodemailer = require('nodemailer');

// Configuración de transporter para nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Controlador para enviar mensajes de contacto
exports.sendContactMessage = async (req, res) => {
  try {
    const { nombre, email, telefono, empresa, cargo, tipoProyecto, mensaje } = req.body;
    
    // Validación básica
    if (!nombre || !email || !empresa || !mensaje) {
      return res.status(400).json({ 
        success: false, 
        error: 'Por favor complete todos los campos requeridos' 
      });
    }
    
    // Configuración del email
    const mailOptions = {
      from: email,
      to: 'contacto@syncroniza.cl', // Email de la empresa
      subject: `Nuevo mensaje de contacto de ${nombre} - ${empresa}`,
      html: `
        <h2>Nuevo Mensaje de Contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Cargo:</strong> ${cargo || 'No proporcionado'}</p>
        <p><strong>Tipo de Proyecto:</strong> ${tipoProyecto || 'No especificado'}</p>
        <h3>Mensaje:</h3>
        <p>${mensaje}</p>
      `
    };
    
    // Enviar el email
    await transporter.sendMail(mailOptions);
    
    // Enviar respuesta exitosa
    res.status(200).json({
      success: true,
      message: 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.'
    });
    
  } catch (error) {
    console.error('Error al enviar el mensaje de contacto:', error);
    res.status(500).json({
      success: false,
      error: 'Error al enviar el mensaje. Por favor intente nuevamente más tarde.'
    });
  }
};