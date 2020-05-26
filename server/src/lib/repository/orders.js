const db = require('lib/db');

const createOrder = (totalAmount,totalItems) => db.query('INSERT INTO orders (totalAmount,totalItems) VALUES (?, ?)', [totalAmount, totalItems]).then(([result,fields]) => result.orderId);

module.exports = {
	createOrder
};