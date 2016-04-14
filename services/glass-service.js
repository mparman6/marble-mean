angular.module("marbleApp")

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
});