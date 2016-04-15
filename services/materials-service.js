angular.module("marbleApp")

.factory('materialFactory', function($q, $http) {
	return {
		getMaterialStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/glass/nanocrystalizedglass');

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

