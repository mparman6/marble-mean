var app = angular.module("marbleApp", ['ui.router'])
.config(function($stateProvider, $urlRouteProvider, $locationProvider) {

	$urlRouteProvider.otherwise('/home');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: '/public/index.html'
	});
	$locationProvider.html5Mode(true);
});