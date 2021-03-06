angular.module("marbleApp")

// SERVICE FOR QUERYING ALL CATEGORIES
.factory('mongoFactory', function($q, $http) {
	return {
		getMongoStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/categories');

		httpPromise.success(function(categories) {
			deferred.resolve(categories);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
})


// SERVICE FOR QUERYING ALL GRANITE MATERIAL
.factory('graniteFactory', function($q, $http) {
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
})


// SERVICE FOR QUERYING ALL MARBLE MATERIAL
.factory('marbleFactory', function($q, $http) {
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
})


// SERVICE FOR QUERYING ALL GEMSTONE MATERIAL
.factory('gemstoneFactory', function($q, $http) {
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
})


// SERVICE FOR QUERYING ALL GLASS MATERIAL
.factory('glassFactory', function($q, $http) {
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
})


// SERVICE FOR QUERYING ALL LIMESTONE MATERIAL
.factory('limestoneFactory', function($q, $http) {
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
})


// SERVICE FOR QUERYING SEARCH PARAMS
.factory('searchFactory', function($q, $http, $stateParams) {
	return {
		getSearchResults: function(search) {
			var deferred = $q.defer(),
			httpPromise = $http.get('/materials/' +search);

		httpPromise.success(function(results) {
			deferred.resolve(results);
		})
		.error(function(error) {
			console.log('Error...', error);
		});
		return deferred.promise;
		}
	};
})


// SERVICE FOR QUERYING NAME PARAMS
.factory('materialInfoFactory', function($q, $http, $stateParams) {
	return {
		getSearchResults: function(name) {
			var deferred = $q.defer(),
			httpPromise = $http.get('/all/' +name);

		httpPromise.success(function(results) {
			deferred.resolve(results);
		})
		.error(function(error) {
			console.log('Error...', error);
		});
		return deferred.promise;
		}
	};
})


// SERVICE FOR QUERYING ALL ONYX MATERIAL
.factory('onyxFactory', function($q, $http) {
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
})


// SERVICE FOR QUERYING ALL QUARTZ MATERIAL
.factory('quartzFactory', function($q, $http) {
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
})


// SERVICE FOR QUERYING ALL QUARTZITE MATERIAL
.factory('quartziteFactory', function($q, $http) {
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
})


// SERVICE FOR QUERYING ALL SPECIFIC CATEGORY MATERIALS BY ID
.factory('scrollFactory', function($q, $http, $stateParams) {
	return {
		getScrollStuff: function(id) {
			var deferred = $q.defer(),
			httpPromise = $http.get('/material/' + id);

		httpPromise.success(function(scrolls) {
			deferred.resolve(scrolls);
		})
		.error(function(error) {
			console.log('Error...', error);
		});
		return deferred.promise;
		}
	};
})


// SERVICE FOR QUERYING ALL SLATE MATERIAL
.factory('slateFactory', function($q, $http) {
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
})


// SERVICE FOR QUERYING ALL SOAPSTONE MATERIAL
.factory('soapstoneFactory', function($q, $http) {
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
})


// SERVICE FOR QUERYING ALL TRAVERTINE MATERIAL
.factory('travertineFactory', function($q, $http) {
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