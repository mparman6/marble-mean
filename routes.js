var mongoose = require('mongoose');
var Material = require('./app/models/modelMaterials');

module.exports = function(app) {
	app.get('/granite', function(req, res) {
		Material.find({}, function(err, materials) {
			console.log(materials);
			res.json(materials);
		});
	});
};