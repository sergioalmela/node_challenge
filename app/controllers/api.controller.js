const User = require( '../models/user' );

//Creamos un nuevo usuario pasados sus datos
exports.create = (req, res) => {
    let data = req.body;

    //Creamos una instancia del usuario con los datos pasados por Postman
    let user = new User({
        name: data.name,
        email: data.email,
        birthDate: data.birthDate,
        address: data.address
    });

    user.save( (err, saved) => {
        if (err) {
            return res.status(405).json({
                description: 'Invalid input'
            });
        }

        res.status(201).json({
            description: 'CREATED',
            user: saved
        });
    });
};

//Recuperamos todos los usuarios de la base de datos
exports.findAll = (req, res) => {
    User.find( (err, users) => {
        res.status(200).json({
            description: 'OK',
            users
        });
    });
};

//Recuperamos un usuario pasado su ID
exports.findOne = (req, res) => {
    let id = req.params.userId;

    //Recuperamos el usuario por su ID
    User.findById(id, (err, user) => {
        if (err) {
            return res.status(400).json({
                description: 'Invalid user id'
            });
        }

        if(!user) {
            return res.status(404).json({
                description: 'User not found'
            });
        }

        res.status(200).json({
            description: 'OK',
            user: user
        });
    });
};

//Actualizamos los datos de un usuario pasado su ID
exports.updateOne = (req, res) => {
    let id = req.params.userId;

    let data = req.body

    User.findByIdAndUpdate(id, {$set:data},{new:true}, (err, saved) => {
        if (err) {
            return res.status(400).json({
                description: 'Invalid user id'
            });
        }

        if(!saved) {
            return res.status(404).json({
                description: 'User not found'
            });
        }

        res.status(200).json({
            description: 'OK',
            user: saved
        });
    });
};

//Eliminamos un usuario pasado su ID
exports.deleteOne = (req, res) => {
    let id = req.params.userId;

    User.findByIdAndDelete(id, (err, deleted) => {
        if (err) {
            return res.status(400).json({
                description: 'Invalid user id'
            });
        }

        if(!deleted) {
            return res.status(404).json({
                description: 'User not found'
            });
        }

        res.status(200).json({
            description: 'OK'
        });
    });
};