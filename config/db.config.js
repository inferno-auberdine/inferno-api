const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || '27017';
const DB_NAME = process.env.DB_NAME || 'inferno-app_db';
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

let auth = '';

if (DB_USER) {
    auth = `${DB_USER}:${DB_PASS}@`
}

module.exports = {
    url: `mongodb://${auth}${DB_HOST}:${DB_PORT}/${DB_NAME}`
};
