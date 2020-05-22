const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host:'localhost',
    user: 'root',
    database: 'mydb',
    password: 'projekt'
}).promise();