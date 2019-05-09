const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
    host : 'localhost',
    user : process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'wild-portfolio',
})

module.exports = connection;
