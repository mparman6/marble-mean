var marbleApp = angular.module("marbleApp", ['ui.router']);

marbleApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'public/index.html',
    controller: 'MainCtrl'
  })
  .state('materials', {
    url: '/materials',
    templateUrl: 'public/home.html',
    controller: 'MainCtrl'
  })
  .state('granite', {
    url: '/granite',
    templateUrl: '/public/partials-granite.html',
    controller: 'MaterialCtrl'
  })
  .state('marble', {
    url: '/marble',
    templateUrl: '/public/partials-marble.html',
    controller: 'MarbleCtrl'
  });
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
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

marbleApp.factory('graniteFactory', function($q, $http) {
	return {
		getGraniteStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/granite');

		httpPromise.success(function(granite) {
			deferred.resolve(granite);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});

marbleApp.factory('marbleFactory', function($q, $http) {
	return {
		getMarbleStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/marble');

		httpPromise.success(function(marble) {
			deferred.resolve(marble);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});

marbleApp.controller('MaterialCtrl', function($scope, graniteFactory) {
	$scope.graniteStuff = {};
	graniteFactory.getGraniteStuff()
	.then(function(granite) {
		$scope.graniteStuff = granite;
		console.log(granite);
	}, function(error) {
		console.log(error);
	});
});

marbleApp.controller('MarbleCtrl', function($scope, marbleFactory) {
	$scope.marbleStuff = {};
	marbleFactory.getMarbleStuff()
	.then(function(marble) {
		$scope.marbleStuff = marble;
		console.log(marble);
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
