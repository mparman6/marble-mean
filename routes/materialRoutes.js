var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Material = require('../app/models/modelMaterials');



router.get('/gemstone', function(req, res, next) {
	Material.find({}, function(err, materials) {
		if (err) return next(err);
		res.json(materials);
	});
});

module.exports = router;