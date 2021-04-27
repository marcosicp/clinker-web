var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var NovedadesSchema   = new Schema({
    fecha_creo: Date,
    titulo: String,
    descripcion: String,
    imagen: String
});

module.exports = mongoose.model('Novedades', NovedadesSchema);