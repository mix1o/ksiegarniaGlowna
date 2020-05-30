const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host:'localhost',
    user: 'test',
    database: 'mydb',
    password: 'projekt'
}).promise();