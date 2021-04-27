var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var VideosSchema = new Schema({
    fecha_creo: Date,
    nombre: String,
    portada: String,
    duracion: Number,
    descripcion: Number,
    esFavorito: Boolean,
    cantidadLikes: Boolean,
    estaGuardado: Boolean,
});

module.exports = mongoose.model('Videos', VideosSchema);