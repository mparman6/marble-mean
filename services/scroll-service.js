angular.module("marbleApp")

.factory('scrollFactory', function($q, $http, $stateParams) {
	return {
		getScrollStuff: function(name) {
			var deferred = $q.defer(),
			httpPromise = $http.get('/stuff/' + name);

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
