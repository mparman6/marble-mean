angular.module("marbleApp")

.factory('scrollFactory', function($q, $http, $stateParams) {
	return {
		getScrollStuff: function(category) {
			var deferred = $q.defer(),
			httpPromise = $http.get('/materialscroll/' +category);

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
