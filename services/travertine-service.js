angular.module("marbleApp")

.factory('travertineFactory', function($q, $http) {
	return {
		getTravertineStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/travertine');

		httpPromise.success(function(travertine) {
			deferred.resolve(travertine);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});