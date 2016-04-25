angular.module("marbleApp")

.factory('searchFactory', function($q, $http, $stateParams) {
	return {
		getSearchResults: function(name) {
			var deferred = $q.defer(),
			httpPromise = $http.get('/search/' +name);

		httpPromise.success(function(results) {
			deferred.resolve(results);
		})
		.error(function(error) {
			console.log('Error...', error);
		});
		return deferred.promise;
		}
	};
});
