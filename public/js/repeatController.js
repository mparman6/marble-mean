var app = angular.module("marbleApp");

app.controller('MainCtrl', function($scope, $http) {
	$scope.materials = [];
	$http.get('materials', function(results) {
	console.log(results);
	$scope.materials = results;
});

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