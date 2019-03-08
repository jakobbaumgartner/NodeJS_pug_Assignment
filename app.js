const express = require('express')
const app = express()

const pug = require('pug')
app.set('views', './views');
app.set('view engine', 'pug');

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

const names = []

app.get('/users', (req, res) => {
	res.render('users',{names: names});
});

app.post('/users', (req, res) => {
	names.push(req.body.text)
	console.log(names)
	 res.redirect('/users');
});


app.get('/', (req, res) => {
	res.render('index', {title: "Input form."});
});



 app.listen(3000);