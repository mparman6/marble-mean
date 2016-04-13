angular.module("marbleApp", ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider.when('/',
		{
			templateUrl: "index.html",
			controller: 'SearchCtrl',

		}
	);
});