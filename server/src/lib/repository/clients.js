const db = require('lib/db');

const createClient = (email, password, firstname, lastname) => db.query('INSERT INTO clients (email, password, first_name, last_name) VALUES (?, ?, ?, ?)', [email, password, firstname, lastname]).then(([result,fields]) => result.insertId);

module.exports = {
	createClient
};
