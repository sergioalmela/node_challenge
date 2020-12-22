const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Address = require('./address');

//Esquema de usuarios
const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'El campo nombre es obligatorio']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true
    },
    birthDate: {
        //type: Date,
        type: String,
        required: [true, 'El campo fecha de cumpleaños es obligatorio'],
    },
    address: {
        type: Address,
        required: [true, 'El campo dirección es obligatorio']
    }
});

module.exports = mongoose.model('user', UserSchema);