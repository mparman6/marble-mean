angular.module("marbleApp")

.factory('materialFactory', function($q, $http, $stateParams) {
	return {
		getMaterialStuff: function(name) {
			var deferred = $q.defer(),
			httpPromise = $http.get('/material/' + name);

		httpPromise.success(function(material) {
			deferred.resolve(material);
		})
		.error(function(error) {
			console.log('Error...', error);
		});
		return deferred.promise;
		}
	};
});


