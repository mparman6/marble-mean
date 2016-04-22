angular.module("marbleApp", []);


var marbleApp = angular.module("marbleApp", ['ui.router', 'angularUtils.directives.dirPagination']);


marbleApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state('categories', {
    url: '/home',
    templateUrl: 'public/views/home.html',
    controller: 'MainCtrl'
  })
  .state('material', {
    url: '/stuff/:id',
    templateUrl: '/public/views/partials-matInfo.html',
    controller: 'ScrollCtrl'
  })
  .state('material2', {
    url: '/all/:id',
    templateUrl: '/public/views/partials-matInfo2.html',
    controller: 'ScrollCtrl2'
  })
  .state('search', {
    url: '/material/:name',
    templateUrl: '/public/views/partials-search.html',
    controller: 'SearchCtrl'
  })
   .state('back', {
    url: '/back/:id',
    templateUrl: '/public/views/partials-back.html',
    controller: 'BackCtrl'
  })
  .state('granite', {
    url: '/granite',
    templateUrl: '/public/views/partials-granite.html',
    controller: 'GraniteCtrl'
  })
  .state('marble', {
    url: '/marble',
    templateUrl: '/public/views/partials-marble.html',
    controller: 'MarbleCtrl'
  })
  .state('quartzite', {
    url: '/quartzite',
    templateUrl: '/public//views/partials-quartzite.html',
    controller: 'QuartziteCtrl'
  })
  .state('quartz', {
    url: '/quartz',
    templateUrl: '/public/views/partials-quartz.html',
    controller: 'QuartzCtrl'
  })
  .state('onyx', {
    url: '/onyx',
    templateUrl: '/public/views/partials-onyx.html',
    controller: 'OnyxCtrl'
  })
  .state('travertine', {
    url: '/travertine',
    templateUrl: '/public/views/partials-travertine.html',
    controller: 'TravertineCtrl'
  })
  .state('gemstone', {
    url: '/gemstone',
    templateUrl: '/public/views/partials-gemstone.html',
    controller: 'GemstoneCtrl'
  })
  .state('soapstone', {
    url: '/soapstone',
    templateUrl: '/public/views/partials-soapstone.html',
    controller: 'SoapstoneCtrl'
  })
  .state('limestone', {
    url: '/limestone',
    templateUrl: '/public/views/partials-limestone.html',
    controller: 'LimestoneCtrl'
  })
  .state('slate', {
    url: '/slate',
    templateUrl: '/public/views/partials-slate.html',
    controller: 'SlateCtrl'
  })
  .state('glass', {
    url: '/glass',
    templateUrl: '/public/views/partials-glass.html',
    controller: 'GlassCtrl'
  });

	  $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
});

