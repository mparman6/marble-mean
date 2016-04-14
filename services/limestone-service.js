angular.module("marbleApp")

.factory('limestoneFactory', function($q, $http) {
	return {
		getLimestoneStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/limestone');

		httpPromise.success(function(limestone) {
			deferred.resolve(limestone);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});