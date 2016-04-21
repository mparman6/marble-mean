angular.module("marbleApp")

.factory('scrollFactory', function($q, $http, $stateParams) {
	return {
		getScrollStuff: function(id) {
			var deferred = $q.defer(),
			httpPromise = $http.get('/stuff/' +id);

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
