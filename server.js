/*jshint esversion: 8 */
require('./config/config');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(require('./routes/routesclient'));
//app.use(require('../server/uploads/uploadImagen'));
let carga = require('./uploads/cargaMasiva')
let ciudades = require('./uploads/ciudades')

// parse application/json
app.use(bodyParser.json())


// conexion a mongoDB
mongoose.connect('mongodb+srv://jonasoft:Yi8FBQscLZPF5MmW@cluster0-bw4ak.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    (err, res) => {
        if (err) throw err;
        console.log('Conectado a base de datos');
    });


app.listen(process.env.PORT, async() => {
    console.log('Escuchando puerto: ', process.env.PORT);
    /*await carga.cargaMasiva((err) => {
        if (err) console.log(err);
    });*/
});