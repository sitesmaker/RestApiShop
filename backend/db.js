const mysql = require('mysql2')
const dotenv = require('dotenv').config();

const dbConnection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
});

const connect = async (err) => {
    
    if(err) {
        console.log(err);
        return err;
    } else {
        await dbConnection.connect();
    }
};

connect();

module.exports = { dbConnection };