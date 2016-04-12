var app = angular.module("marbleApp");

app.controller('MaterialCtrl', function($scope, $http) {
	$scope.mongoStuff = {};
	mongoFactory.getMongoStuff()
	.then(function(materials) {
		$scope.mongoStuff = materials;
	}, function(error) {
		console.log(error);
	});
});