angular.module("marbleApp")

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
});