var marbleApp = angular.module("marbleApp", ['ui.router']);

marbleApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('categories', {
    url: '/home',
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


