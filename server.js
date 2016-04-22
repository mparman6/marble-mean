var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');


var material = require('./app/models/modelMaterials')
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/'));


app.get('/', (req, res) => {
	res.sendFile(process.cwd() + "/public/index.html");
});

app.get('/home', (req, res) => {
	res.sendFile(process.cwd() + "/public/index.html");
});

// app.get('/:category/:material', function(req, res) {
// 	res.sendFile(process.cwd() + "/public/views/partials-granite-matInfo.html");
// });

// routes

app.get('/categories', (req, res) => {
	db.collection('categories').find({}).toArray(function(err, results) {
		res.json(results);
	});
});

app.get('/materialscroll/:category', (req, res) => {
	db.collection('materials').find({"material_category_id": req.params.category}).toArray(function(err, results) {
		// console.log(req.params.category);
		res.json(results);
	});
});

app.get('/category/:name', (req, res) => {
	db.collection('otherPhotos').find({"material_name": req.params.name}).toArray(function(err, results) {
		console.log(req.params.name);
		res.json(results);
	});
});

app.get('/material/:id/:name', (req, res) => {
	db.collection('otherPhotos').find({"material_category_id": req.params.id}).toArray(function(err, results) {
		console.log(req.params.id);
		console.log(req.params.name);
		res.json(results);
	});
});

app.get('/all/:id', (req, res) => {
	db.collection('otherPhotos').find({"material_category_id": req.params.id}).toArray(function(err, results) {
		console.log(req.params.id);
		res.json(results);
	});
});

app.get('/search/:name', (req, res) => {
	db.collection('materials').find({"$text":{"$search": req.params.name}}).toArray(function(err, results) {
		console.log(req.params.name);
		res.json(results);
	});
});

app.get('/photos', (req, res) => {
	db.collection('photos').find({}).toArray(function(err, results) {
		res.json(results);
	});
});

app.get('/granite', (req, res) => {
	db.collection('materials').find({"material_category_id": "35"}).toArray(function(err, results) {
		res.json(results);
	});
});

app.get('/marble', (req, res) => {
	db.collection('materials').find({"material_category_id": "36"}).toArray(function(err, results) {
		res.json(results);
	});
});

app.get('/quartz', (req, res) => {
	db.collection('materials').find({"material_category_id": "38"}).toArray(function(err, results) {
		res.json(results);
	});
});


app.get('/quartzite', (req, res) => {
	db.collection('materials').find({"material_category_id": "43"}).toArray(function(err, results) {
		res.json(results);
	});
});

app.get('/onyx', (req, res) => {
	db.collection('materials').find({"material_category_id": "39"}).toArray(function(err, results) {
		res.json(results);
	});
});

app.get('/travertine', (req, res) => {
	db.collection('materials').find({"material_category_id": "40"}).toArray(function(err, results) {
		res.json(results);
	});
});

app.get('/gemstone', (req, res) => {
	db.collection('materials').find({"material_category_id": "41"}).toArray(function(err, results) {
		res.json(results);
	});
});

app.get('/limestone', (req, res) => {
	db.collection('materials').find({"material_category_id": "42"}).toArray(function(err, results) {
		res.json(results);
	});
});

app.get('/soapstone', (req, res) => {
	db.collection('materials').find({"material_category_id": "47"}).toArray(function(err, results) {
		res.json(results);
	});
});

app.get('/slate', (req, res) => {
	db.collection('materials').find({"material_category_id": "49"}).toArray(function(err, results) {
		res.json(results);
	});
});

app.get('/glass', (req, res) => {
	db.collection('materials').find({"material_category_id": "45"}).toArray(function(err, results) {
		res.json(results);
	});
});



app.listen(3000, () => {
	console.log('Running app.js on 3000');
});
