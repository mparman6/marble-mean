angular.module("marbleApp")

.factory('mongoFactory', function($q, $http) {
	return {
		getMongoStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/categories');

		httpPromise.success(function(categories) {
			deferred.resolve(categories);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});