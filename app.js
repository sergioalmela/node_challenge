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

const mongo_connection = require("./config/config");

//Conectamos a la base de datos
mongoose.connect(mongo_connection, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
    .then(
        () => { console.log('Conectados a la base de datos'); },
        err => { console.log('Error al conectar con la base de datos'); }
    );

//Cargamos las rutas
require("./app/routes/routes")(app);

//Arrancamos el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor funcionando en el puerto ' + PORT);
});