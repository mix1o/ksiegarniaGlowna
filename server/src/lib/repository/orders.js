const db = require('lib/db');


const createOrder = (client_name,email,client_id,totalAmount,totalItems,items) => db.query('INSERT INTO orders (create_date,client_name,email,phone,client_adress,status,client_id,total_amount,total_items) VALUES (now(), ?, ?, "", "", "new", ?, ?, ?)', [client_name,email,client_id,totalAmount, totalItems]).then(([result,fields]) => {
	return result.insertId
});

const createOrderItem = (orderId, bookId, price, quantity) => db.query('INSERT INTO order_items(book_id,price,quantity,order_id)VALUES (?,?,?,?)',[bookId,price,quantity,orderId]);

const getOrderItems = (orderId) => db.query('SELECT b.title, b.cover, i.* FROM order_items i INNER JOIN books b on b.id=i.book_id WHERE i.order_id = ?', [orderId]).then(([results]) => results)

const getUserOrders = userId => db.query('SELECT * FROM orders WHERE client_id = ?', [userId]).then(async ([results]) => {
	const orders = [];
	for(let order of results) {
		const items = await getOrderItems(order.id);
		console.log('i',items)
		orders.push({
			...order,
			items,
		})
	};
	return orders;
})



const getOrder = (orderId) => db.query('SELECT * FROM orders WHERE id=?', [orderId]).then( async ([results]) => {
	if(results[0]){
		const items = await getOrderItems(results[0].id);
		return {
			...results[0],
			items,
		}
	}
});




module.exports = {
	createOrder,
	createOrderItem,
	getUserOrders,
	getOrder,
	getOrderItems,
};