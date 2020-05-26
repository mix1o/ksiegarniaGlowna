const db = require('lib/db');

const getBooks = () => db.query('SELECT * FROM mydb.books').then(([rows,fields]) => rows);

const getBook = (id) => db.query('SELECT * FROM mydb.books WHERE id=?', [id]).then(([rows,fields]) => {
	if(rows.length) {
		return rows[0];
	}
	return null;
});

const searchBook = (search) => db.query('SELECT * FROM mydb.books WHERE title LIKE ?',[`%${search}%`]).then(([result,fields]) =>{
	return result;
})

const getBookFromCategory = (id) => db.query('SELECT b.* FROM books b INNER JOIN books_categories c ON c.book_id=b.id WHERE c.category_id = ?', [id]).then(([result,fields]) => {
	return result;
});



module.exports = {
	getBooks,
	getBook,
	getBookFromCategory,
	searchBook
};