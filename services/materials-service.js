angular.module("marbleApp")

.factory('materialFactory', function($q, $http, $stateParams) {
	return {
		getMaterialStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/materials/:test');

		httpPromise.success(function(materials) {
			deferred.resolve(materials);
		})
		.error(function(error) {
			console.log('Error...', error);
		});
		return deferred.promise;
		}
	};
});


