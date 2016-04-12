var app = angular.module("marbleApp", []);


app.controller('SearchCtrl', function($scope) {
	$scope.categories = [
		{id: '1', name: 'Granite', route: '/granite', material_id: '35'},
		{id: '2', name: 'Marble', route: '/marble', material_id: '36'},
		{id: '4', name: 'Quartz', route: '/quartzite', material_id: '38'},
		{id: '5', name: 'Onyx', route: '/onyx', material_id: '39'},
		{id: '6', name: 'Travertine', route: '/travertine', material_id: '40'},
		{id: '7', name: 'Gemstone', route: '/gemstone', material_id: '41'},
		{id: '8', name: 'Limestone', route: '/limestone', material_id: '42'},
		{id: '9', name: 'Soapstone', route: '/soapstone', material_id: '47'},
		{id: '10', name: 'Slate', route: '/slate', material_id: '49'},
		{id: '11', name: 'Glass', route: '/glass', material_id: '45'},
		{id: '3', name: 'Quartzite', route: '/quartzite', material_id: '43'},
	];
	
});

