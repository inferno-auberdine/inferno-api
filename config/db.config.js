const DB_PORT = process.env.DB_PORT || '27017';
const DB_URI = process.env.DB_URI || 'localhost';
const DB_NAME = process.env.DB_NAME || 'inferno-app';

module.exports = {
    url: `mongodb://${DB_URI}:${DB_PORT}/${DB_NAME}`
};
