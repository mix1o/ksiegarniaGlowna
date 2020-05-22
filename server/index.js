require('app-module-path').addPath(__dirname + '/src/');

const express = require('express');
const bodyParser = require('body-parser');
const {createClient} = require("lib/repository/clients");
const auth = require('lib/middlewares/auth');
const app = express();
const port = 5000;

app.use(express.json());
app.use(bodyParser.json())

const crypto = require("crypto");


const {check,validationResult} = require('express-validator');

const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

app.use(cookieParser());
app.use(cookieSession({
	name: 'session',
	keys: ['somekey'],
	maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))

app.use(auth);

const { getUserByEmailAndPassword } = require('lib/repository/users');
const { getBooks, getBook, getBookFromCategory, searchBook } = require('lib/repository/books');


const validateRegistrationFieldsMiddleWare = [
	check('firstname').isLength({min:3}).withMessage("Pole jest wymagane"),
	check('lastname').isLength({min:3}).withMessage("Pole jest wymagane"),
	check('email').isLength({min:5}).withMessage("Pole jest wymagane"),
	check('password').isLength({min:5}).withMessage("Pole jest wymagane")	
]


app.get('/api/books', (req,res)=>{
	const {search} = req.body;

	let searchPromise;

	if(req.query.searchBook){
		searchPromise = searchBook(req.query.search);
	}else{
		searchPromise = searchBook()
	}
	searchPromise.then(booksSearch => res.send(booksSearch)).catch(e => res.send(e,500))


})


app.get('/api/books', (req, res) => {

	let booksPromise;
	if(req.query.categoryId) {
	booksPromise = getBookFromCategory(req.query.categoryId);
	}else {
	booksPromise = getBooks()
	}
	booksPromise.then(books => res.send(books)).catch(e => res.send(e,500))	
});


app.post('/api/signin', (req, res) => {
	const {email, password} = req.body;
	const hash = crypto.createHash('sha1');
	const hashedPassword = hash.update(password,'utf-8').digest('hex');

	getUserByEmailAndPassword(email, hashedPassword)
	.then(client => {
		req.session.user = client;
        const user = {...client};
        delete user.password;
        res.cookie('user', user);
		res.send('client logged')
	})
	.catch((e) => res.status(500).send(e));
})

app.post('/api/signout', (req, res) => {
	delete req.session.user;
	res.clearCookie('user');	
	res.send('client signout')
})

const {getCategories} = require("lib/repository/categories")

app.get('/api/categories',(req,res)=>{
	getCategories(req.query.categories)
	.then(categories => res.send(categories)).catch(e => res.send(e,500))	
})




app.post('/api/clients', validateRegistrationFieldsMiddleWare, (req,res)=>{
	
	const errors = validationResult(req);

	if(!errors.isEmpty()){
		return res.send({
			errors: errors.mapped(),
		}, 400);
	}


	const {firstname,lastname,email,password} = req.body;	


	const hash = crypto.createHash('sha1');
	const hashedPassword = hash.update(password,'utf-8').digest('hex');

	
	createClient(email,hashedPassword,firstname,lastname).then(id =>{
		res.send({id})
	});
});

app.get('/api/books/:id', (req, res) => {
	getBook(req.params.id)
	.then(book => {
		if(null !== book) {
			res.send(book);
		} else {
			res.send(null, 404);
		}
	})
	.catch(e => res.send(e, 500))
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))