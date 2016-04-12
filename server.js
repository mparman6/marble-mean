console.log('May Node be with you');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

require('./routes')(app);

var material = require('./app/models/modelMaterials')
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/'));


app.get('/', (req, res) => {
	res.sendFile(process.cwd() + "/public/index.html");
});

// routes

app.get('/granite', (req, res) => {
	db.collection('materials').find({"material_category_id": "35"}).toArray(function(err, results) {
		res.json(results);
		console.log(results);
	});
	res.redirect('/');
	return;
});

app.get('/marble', (req, res) => {
	db.collection('materials').find({"material_category_id": "36"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

app.get('/quartz', (req, res) => {
	db.collection('materials').find({"material_category_id": "38"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});


app.get('/quartzite', (req, res) => {
	db.collection('materials').find({"material_category_id": "43"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

app.get('/onyx', (req, res) => {
	db.collection('materials').find({"material_category_id": "39"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

app.get('/travertine', (req, res) => {
	db.collection('materials').find({"material_category_id": "40"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

app.get('/gemstone', (req, res) => {
	db.collection('materials').find({"material_category_id": "41"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

app.get('/limestone', (req, res) => {
	db.collection('materials').find({"material_category_id": "42"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

app.get('/soapstone', (req, res) => {
	db.collection('materials').find({"material_category_id": "47"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

app.get('/slate', (req, res) => {
	db.collection('materials').find({"material_category_id": "49"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

app.get('/glass', (req, res) => {
	db.collection('materials').find({"material_category_id": "45"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});



app.listen(3000, () => {
	console.log('Running app.js on 3000');
});
