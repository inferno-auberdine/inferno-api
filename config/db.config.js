const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_NAME = process.env.DB_NAME || 'inferno-app_db';
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.PASS;

module.exports = {
    url: `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
};
