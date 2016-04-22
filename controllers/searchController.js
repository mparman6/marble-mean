var marbleApp = angular.module('marbleApp')

.controller('SearchCtrl', function($scope, searchFactory, $stateParams) {
	$scope.searchMaterial = {};
	$scope.name = $stateParams.name;
	searchFactory.getSearch($scope.name)
	.then(function(material) {
		$scope.searchMaterial = material;
		console.log(material);
	}, function(error) {
		console.log(error);
	});	
})