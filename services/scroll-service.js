angular.module("marbleApp")

.factory('backFactory', function($q, $http, $stateParams) {
	return {
		getBackStuff: function(id) {
			var deferred = $q.defer(),
			httpPromise = $http.get('/back/' +id);

		httpPromise.success(function(id) {
			deferred.resolve(id);
		})
		.error(function(error) {
			console.log('Error...', error);
		});
		return deferred.promise;
		}
	};
});
