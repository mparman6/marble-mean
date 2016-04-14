angular.module("marbleApp")

.factory('quartzFactory', function($q, $http) {
	return {
		getQuartzStuff: function() {
			var deferred = $q.defer(),
			httpPromise = $http.get('/quartz');

		httpPromise.success(function(quartz) {
			deferred.resolve(quartz);
		})
		.error(function(error) {
			console.log('Error...');
		});
		return deferred.promise;
		}
	};
});
