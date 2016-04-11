var Material = require('model-materials');

module.exports = function(app) {
	app.get('/materials', function(req, res) {
		Material.find(function(err, materials) {
			if (err) {
				res.send(err);
			}
			res.json(materials);
		});
	});
};