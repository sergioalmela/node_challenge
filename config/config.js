//Configuración de la base de datos para el hosting

const connection_mongo = process.env.NODE_ENV === 'dev' ? process.env.DB_URL : 'mongodb://localhost/users';

module.exports = connection_mongo;