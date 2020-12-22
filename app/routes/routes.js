module.exports = app => {
    const api = require("../controllers/api.controller.js");

    const router = require("express").Router();

    //Crear un usuario
    router.post("/createUsers", api.create);

    //Recuperar todos los usuarios
    router.get("/getusers", api.findAll);

    //Recuperar un usuario por ID
    router.get("/getusersById/:userId", api.findOne);

    //Actualizar un usuario pasado un ID
    router.put("/updateUsersById/:userId", api.updateOne);

    //Eliminar un usuario pasado un ID
    router.delete("/deleteUsersById/:userId", api.deleteOne);

    app.use("/", router);
};