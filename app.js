angular.module("marbleApp", ['angularUtils.directives.dirPagination']);


var marbleApp = angular.module("marbleApp", ['ui.router']);


marbleApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('categories', {
    url: '/home',
    templateUrl: 'public//views/home.html',
    controller: 'MainCtrl'
  })
  .state('granite', {
    url: '/granite',
    templateUrl: '/public/views/partials-granite.html',
    controller: 'GraniteCtrl'
  })
  .state('marble', {
    url: '/marble',
    templateUrl: '/public/views/partials-marble.html',
    controller: 'MarbleCtrl'
  })
  .state('quartzite', {
    url: '/quartzite',
    templateUrl: '/public//views/partials-quartzite.html',
    controller: 'QuartziteCtrl'
  })
  .state('quartz', {
    url: '/quartz',
    templateUrl: '/public/views/partials-quartz.html',
    controller: 'QuartzCtrl'
  })
  .state('onyx', {
    url: '/onyx',
    templateUrl: '/public/views/partials-onyx.html',
    controller: 'OnyxCtrl'
  })
  .state('travertine', {
    url: '/travertine',
    templateUrl: '/public/views/partials-travertine.html',
    controller: 'TravertineCtrl'
  })
  .state('gemstone', {
    url: '/gemstone',
    templateUrl: '/public/views/partials-gemstone.html',
    controller: 'GemstoneCtrl'
  })
  .state('soapstone', {
    url: '/soapstone',
    templateUrl: '/public/views/partials-soapstone.html',
    controller: 'SoapstoneCtrl'
  })
  .state('limestone', {
    url: '/limestone',
    templateUrl: '/public/views/partials-limestone.html',
    controller: 'LimestoneCtrl'
  })
  .state('slate', {
    url: '/slate',
    templateUrl: '/public/views/partials-slate.html',
    controller: 'SlateCtrl'
  })
  .state('glass', {
    url: '/glass',
    templateUrl: '/public/views/partials-glass.html',
    controller: 'GlassCtrl'
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

marbleApp.controller('GraniteCtrl', function($scope, graniteFactory) {
	$scope.graniteStuff = {};
	graniteFactory.getGraniteStuff()
	.then(function(granite) {
		$scope.graniteStuff = granite;
		console.log(granite);
	}, function(error) {
		console.log(error);
	});
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

marbleApp.factory('quartziteFactory', function($q, $http) {
	return {
		getQuartziteStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/quartzite');

		httpPromise.success(function(quartzite) {
			deferred.resolve(quartzite);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});


marbleApp.controller('QuartziteCtrl', function($scope, quartziteFactory) {
	$scope.quartziteStuff = {};
	quartziteFactory.getQuartziteStuff()
	.then(function(quartzite) {
		$scope.quartziteStuff = quartzite;
		console.log(quartzite);
	}, function(error) {
		console.log(error);
	});
});

marbleApp.factory('quartzFactory', function($q, $http) {
	return {
		getQuartzStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/quartz');

		httpPromise.success(function(quartz) {
			deferred.resolve(quartz);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});


marbleApp.controller('QuartzCtrl', function($scope, quartzFactory) {
	$scope.quartzStuff = {};
	quartzFactory.getQuartzStuff()
	.then(function(quartz) {
		$scope.quartzStuff = quartz;
		console.log(quartz);
	}, function(error) {
		console.log(error);
	});
});

marbleApp.factory('onyxFactory', function($q, $http) {
	return {
		getOnyxStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/onyx');

		httpPromise.success(function(onyx) {
			deferred.resolve(onyx);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});


marbleApp.controller('OnyxCtrl', function($scope, onyxFactory) {
	$scope.onyxStuff = {};
	onyxFactory.getOnyxStuff()
	.then(function(onyx) {
		$scope.onyxStuff = onyx;
		console.log(onyx);
	}, function(error) {
		console.log(error);
	});
});

marbleApp.factory('travertineFactory', function($q, $http) {
	return {
		getTravertineStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/travertine');

		httpPromise.success(function(travertine) {
			deferred.resolve(travertine);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});


marbleApp.controller('TravertineCtrl', function($scope, travertineFactory) {
	$scope.travertineStuff = {};
	travertineFactory.getTravertineStuff()
	.then(function(travertine) {
		$scope.travertineStuff = travertine;
		console.log(travertine);
	}, function(error) {
		console.log(error);
	});
});

marbleApp.factory('gemstoneFactory', function($q, $http) {
	return {
		getGemstoneStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/gemstone');

		httpPromise.success(function(gemstone) {
			deferred.resolve(gemstone);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});


marbleApp.controller('GemstoneCtrl', function($scope, gemstoneFactory) {
	$scope.gemstoneStuff = {};
	gemstoneFactory.getGemstoneStuff()
	.then(function(gemstone) {
		$scope.gemstoneStuff = gemstone;
		console.log(gemstone);
	}, function(error) {
		console.log(error);
	});
});

marbleApp.factory('soapstoneFactory', function($q, $http) {
	return {
		getSoapstoneStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/soapstone');

		httpPromise.success(function(soapstone) {
			deferred.resolve(soapstone);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});


marbleApp.controller('SoapstoneCtrl', function($scope, soapstoneFactory) {
	$scope.soapstoneStuff = {};
	soapstoneFactory.getSoapstoneStuff()
	.then(function(soapstone) {
		$scope.soapstoneStuff = soapstone;
		console.log(soapstone);
	}, function(error) {
		console.log(error);
	});
});

marbleApp.factory('limestoneFactory', function($q, $http) {
	return {
		getLimestoneStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/limestone');

		httpPromise.success(function(limestone) {
			deferred.resolve(limestone);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});


marbleApp.controller('LimestoneCtrl', function($scope, limestoneFactory) {
	$scope.limestoneStuff = {};
	limestoneFactory.getLimestoneStuff()
	.then(function(limestone) {
		$scope.limestoneStuff = limestone;
		console.log(limestone);
	}, function(error) {
		console.log(error);
	});
});

marbleApp.factory('slateFactory', function($q, $http) {
	return {
		getSlateStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/slate');

		httpPromise.success(function(slate) {
			deferred.resolve(slate);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});


marbleApp.controller('SlateCtrl', function($scope, slateFactory) {
	$scope.slateStuff = {};
	slateFactory.getSlateStuff()
	.then(function(slate) {
		$scope.slateStuff = slate;
		console.log(slate);
	}, function(error) {
		console.log(error);
	});
});

marbleApp.factory('glassFactory', function($q, $http) {
	return {
		getGlassStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/glass');

		httpPromise.success(function(glass) {
			deferred.resolve(glass);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});


marbleApp.controller('GlassCtrl', function($scope, glassFactory) {
	$scope.glassStuff = {};
	glassFactory.getGlassStuff()
	.then(function(glass) {
		$scope.glassStuff = glass;
		console.log(glass);
	}, function(error) {
		console.log(error);
	});
});