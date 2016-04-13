var mongoose = require('mongoose');
var material = require('./app/models/modelMaterials');

module.exports = function(app) {
	app.get('/granite', function(req, res) {
		material.find({"material_category_id": "35"}, function(err, materials) {
			console.log(materials);
		});
	});
};