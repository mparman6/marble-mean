angular.module("marbleApp")

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

.factory('materialFactory', function($q, $http, $stateParams) {
	return {
		getMaterialStuff: function(name) {
			var deferred = $q.defer(),
			httpPromise = $http.get('/category/' +name);

		httpPromise.success(function(material) {
			deferred.resolve(material);
		})
		.error(function(error) {
			console.log('Error...', error);
		});
		return deferred.promise;
		}
	};
})

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

.factory('imageFactory', function($q, $http) {
	return {
		getAllPhotos: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/photos');

		httpPromise.success(function(images) {
			deferred.resolve(images);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
})

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

.factory('searchFactory', function($q, $http, $stateParams) {
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