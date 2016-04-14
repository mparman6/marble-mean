angular.module("marbleApp")

.factory('soapstoneFactory', function($q, $http) {
	return {
		getSoapstoneStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/soapstone');

		httpPromise.success(function(soapstone) {
			deferred.resolve(soapstone);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});