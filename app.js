const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');

const app = express();

//Añadimos el cors middleware
app.use(cors());

//Parseamos las peticiones de tipo json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Conectamos a la base de datos
const mongoConnectionString = 'mongodb://localhost/users';
mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
    .then(db => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));

//Cargamos las rutas
require("./app/routes/routes")(app);

//Arrancamos el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Servidor funcionando en el puerto ' + PORT);
});