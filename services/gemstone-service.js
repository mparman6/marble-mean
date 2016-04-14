angular.module("marbleApp")

.factory('gemstoneFactory', function($q, $http) {
	return {
		getGemstoneStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/gemstone');

		httpPromise.success(function(gemstone) {
			deferred.resolve(gemstone);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});