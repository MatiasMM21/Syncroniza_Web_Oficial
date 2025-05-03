const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Por favor ingrese su nombre']
  },
  email: {
    type: String,
    required: [true, 'Por favor ingrese su email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Por favor ingrese un email válido'
    ]
  },
  telefono: {
    type: String
  },
  empresa: {
    type: String,
    required: [true, 'Por favor ingrese el nombre de su empresa']
  },
  cargo: {
    type: String
  },
  tipoProyecto: {
    type: String,
    enum: ['Edificación en Altura', 'Retail', 'Infraestructura', 'Industrial', 'Otro', '']
  },
  mensaje: {
    type: String,
    required: [true, 'Por favor ingrese su mensaje']
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contact', ContactSchema);