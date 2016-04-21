angular.module("marbleApp")

.factory('scrollFactory2', function($q, $http, $stateParams) {
	return {
		getAllStuff: function(id) {
			var deferred = $q.defer(),
			httpPromise = $http.get('/all/' +id);

		httpPromise.success(function(allMats) {
			deferred.resolve(allMats);
		})
		.error(function(error) {
			console.log('Error...', error);
		});
		return deferred.promise;
		}
	};
});
