angular.module("marbleApp")

.factory('scrollFactory', function($q, $http, $stateParams) {
	return {
		getScrollStuff: function(id, name) {
			var deferred = $q.defer(),
			httpPromise = $http.get('/material/' + id + '/' + name);

		httpPromise.success(function(scrolls) {
			deferred.resolve(scrolls);
		})
		.error(function(error) {
			console.log('Error...', error);
		});
		return deferred.promise;
		}
	};
});
