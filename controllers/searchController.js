var marbleApp = angular.module('marbleApp')

.controller('SearchCtrl', function($scope, searchFactory, $stateParams) {
	$scope.searchMaterial = {};
	$scope.name = $stateParams.category;
	searchFactory.getSearch($scope.category)
	.then(function(material) {
		$scope.searchMaterial = material;
		console.log(material);
	}, function(error) {
		console.log(error);
	});	
})