const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Esquema de direcciones
const AddressSchema = Schema({
    street: {
        type: String,
        required: [true, 'El campo calle es obligatorio']
    },
    state: {
        type: String,
        required: [true, 'El campo provincia es obligatorio']
    },
    city: {
        type: String,
        required: [true, 'El campo ciudad es obligatorio']
    },
    country: {
        type: String,
        required: [true, 'El campo país es obligatorio']
    },
    zip: {
        type: String,
        required: [true, 'El campo código postal es obligatorio']
    }
});

mongoose.model('address', AddressSchema);