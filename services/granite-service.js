angular.module("marbleApp")

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
});