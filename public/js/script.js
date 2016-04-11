var databaseSearch = function($http) {

	var getData = function(materialName) {
		return $http.get("mongodb://localhost/test")
			.then(function(response) {
				return response.data;
			});
	};
};


var module = angular.module("marbleApp");
module.factory("databaseSearch", databaseSearch);





