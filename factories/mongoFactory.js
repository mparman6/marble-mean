angular.module("marbleApp")
.factory('mongoFactory', function($q, $http) {
	return {
		getMongoStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/granite');

		httpPromise.success(function(materials) {
			deferred.resolve(materials);
		})
		.error(function(error) {
			console.log('Error...');
		});

		return deferred.promise;
		}
	};
});