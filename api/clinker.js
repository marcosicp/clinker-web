var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var Novedades = require('../Models/novedades');
var Videos = require('../Models/videos');

router

  .get('/contacto', function(req, res) {
    res.render("contact", { title: "Home" });
  })
  
  //////////////////////////////
  
  .get('/videos', function(req, res, next) {
    Videos.find({ }, function(err, prods) {
      if (!err) {
        res.send(prods);
      } else {
        res.send(400, 'ERROR AL OBTENER LISTADO DE MESAS');
      }
    });
  })
  
  .post('/login', function (req, res, next) {
        Novedades.findOne({ nombre: req.query.mesa }, function(err, user) {
            if (!user) {
                res.render('login.jade', { error: 'Invalid email or password.' });
            } else {
            if (req.query.password === user._doc.pass) {
                // sets a cookie with the user's info
                //req.session.user = user;
                // res.redirect('/productos');
                res.send(user);
            } else {
                res.render('login.jade', { error: 'Invalid email or password.' });
            }
        }
    });
  })
  
  ///////////////////////
  
  
  .get('/UltimasNovedades', function(req, res, next) {
    Novedades.find(function(err, prods) {
      if (!err) {
        res.send(prods);
      } else {
        res.send(400, 'ERROR');
      }
    });
  })
  /////////////////////
  .get('/EliminarNovedad', function(req, res, next) {
    Novedades.findOneAndRemove({titulo : req.query.titulo}, function (err, _novedad){
      if(err!=null){
        res.send(_novedad);
      }
      else{
        res.send(400, 'No se encontro novedad para eliminar');
      }
    });
  })
      ////////////////////////
  .post('/IngresarNovedad', function(req, res, next) {
    var _novedad = new Novedades({
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      fecha_creo: Date.now()

    });
    
    _novedad.save(function(err,test){
      if (err) {
        res.send(400, 'Hubo un problema al guardar novedad.');
      }
      else{
        console.log("Novedad guardada con exito.");
        res.status(200).send("OK");  
      }
    });
  })
  
module.exports = router;