angular.module("marbleApp")

.factory('slateFactory', function($q, $http) {
	return {
		getSlateStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/slate');

		httpPromise.success(function(slate) {
			deferred.resolve(slate);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});