const db = require('lib/db');

const getCategories = () => db.query('SELECT * FROM categories').then(([rows,fields]) => rows);

module.exports = {
	getCategories,
};