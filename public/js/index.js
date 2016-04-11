var mongoose = require('mongoose');
var Material = mongoose.model('Material');

router.get('/modelMaterials', function(req, res, next) {
	Material.find(function(err, results) {
		if(err){ return next(err); }

		res.json(results);
	});
});