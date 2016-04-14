angular.module("marbleApp")

.factory('quartziteFactory', function($q, $http) {
	return {
		getQuartziteStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/quartzite');

		httpPromise.success(function(quartzite) {
			deferred.resolve(quartzite);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});