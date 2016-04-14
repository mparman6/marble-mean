angular.module("marbleApp")

.factory('onyxFactory', function($q, $http) {
	return {
		getOnyxStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/onyx');

		httpPromise.success(function(onyx) {
			deferred.resolve(onyx);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});