var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var database = require('../config/database');
mongoose.connect(database.url);
var db = mongoose.connection;





router.get('/models/modelMaterials', (req, res) => {
	db.collection('materials').find({"material_category_id": "35"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

router.get('/marble', (req, res) => {
	db.collection('materials').find({"material_category_id": "36"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

router.get('/quartz', (req, res) => {
	db.collection('materials').find({"material_category_id": "38"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});


router.get('/quartzite', (req, res) => {
	db.collection('materials').find({"material_category_id": "43"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

router.get('/onyx', (req, res) => {
	db.collection('materials').find({"material_category_id": "39"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

router.get('/travertine', (req, res) => {
	db.collection('materials').find({"material_category_id": "40"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

router.get('/gemstone', (req, res) => {
	db.collection('materials').find({"material_category_id": "41"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

router.get('/limestone', (req, res) => {
	db.collection('materials').find({"material_category_id": "42"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

router.get('/soapstone', (req, res) => {
	db.collection('materials').find({"material_category_id": "47"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

router.get('/slate', (req, res) => {
	db.collection('materials').find({"material_category_id": "49"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

router.get('/glass', (req, res) => {
	db.collection('materials').find({"material_category_id": "45"}).toArray(function(err, results) {
		console.log(results);
	});
	res.redirect('/');
});

module.exports = router;