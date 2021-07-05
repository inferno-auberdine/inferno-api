const mongoose = require('mongoose');
const DB_HOST = process.env.DB_URI || 'mongo';
const DB_PORT = process.env.DB_PORT || '27018';
const DB_NAME = process.env.DB_NAME || 'inferno-app';
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.PASS;

const connection = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const connectDb = () =>  {
    return mongoose.connect(connection, {useNewUrlParser: true, useUnifiedTopology: true})
}

module.exports = connectDb;
