var marbleApp = angular.module("marbleApp", ['ui.router']);

marbleApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('materials', {
    url: '/',
    templateUrl: '/public/index.html'
  });
  $stateProvider
  .state('granite', {
    url: '/granite',
    templateUrl: '/public/partials-granite.html'
  });
  $locationProvider.html5Mode(true);
});


marbleApp.factory('mongoFactory', function($q, $http) {
	return {
		getMongoStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/materials');

		httpPromise.success(function(materials) {
			deferred.resolve(materials);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});


marbleApp.controller('MaterialCtrl', function($scope, mongoFactory) {
	$scope.mongoStuff = {};
	mongoFactory.getMongoStuff()
	.then(function(materials) {
		$scope.mongoStuff = materials;
		console.log(materials);
	}, function(error) {
		console.log(error);
	});
});

marbleApp.controller('MainCtrl', function($scope, mongoFactory) {
	$scope.mongoStuff = {};
	mongoFactory.getMongoStuff()
	.then(function(materials) {
		$scope.mongoStuff = materials;
		console.log(materials);
	}, function(error) {
		console.log(error);
	});
});


marbleApp.controller('SearchCtrl', function($scope) {
	$scope.categories = [
		{id: '1', name: 'Granite', route: '/granite', material_id: '35'},
		{id: '2', name: 'Marble', route: '/marble', material_id: '36'},
		{id: '4', name: 'Quartz', route: '/quartz', material_id: '38'},
		{id: '5', name: 'Onyx', route: '/onyx', material_id: '39'},
		{id: '6', name: 'Travertine', route: '/travertine', material_id: '40'},
		{id: '7', name: 'Gemstone', route: '/gemstone', material_id: '41'},
		{id: '8', name: 'Limestone', route: '/limestone', material_id: '42'},
		{id: '9', name: 'Soapstone', route: '/soapstone', material_id: '47'},
		{id: '10', name: 'Slate', route: '/slate', material_id: '49'},
		{id: '11', name: 'Glass', route: '/glass', material_id: '45'},
		{id: '3', name: 'Quartzite', route: '/quartzite', material_id: '43'},
	];
	
});
