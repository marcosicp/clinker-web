var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var JugadoresSchema = new Schema({
    fecha_creo: Date,
    nombre: String,
    puesto: String,
    peso:  Number, // arreglar
    altura: Number,
});

module.exports = mongoose.model('Jugadores', JugadoresSchema);