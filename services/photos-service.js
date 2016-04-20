angular.module("marbleApp")

.factory('imageFactory', function($q, $http) {
	return {
		getAllPhotos: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/photos');

		httpPromise.success(function(images) {
			deferred.resolve(images);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});