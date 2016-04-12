var app = angular.module("marbleApp", []);


app.controller('SearchCtrl', function($scope, $http) {
	$scope.categories = [
		{id: '1', name: 'Granite', route: '/models/modelMaterials', material_id: '35'},
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

	$scope.results = [
		{id: '1', name: 'Cosmic Black', category: 'granite', material_name: 'Cosmic Black', image: 'http://marble.com/uploads/materials/499/300X300/thumbnail/Cosmic-Black_APeruB9I056YsF3mZ0sT.jpg'},
		{id: '2', name: 'Aspen White', category: 'granite', material_name: 'Aspen White', image: 'http://marble.com/uploads/materials/68/300X300/thumbnail/Aspen-White_RIKXCOOHk7PvydMw4olZ.jpg'},
		{id: '3', name: 'Sucuri White', category: 'granite', material_name: 'Sucuri White', image: 'http://marble.com/uploads/materials/694/300X300/thumbnail/Sucuri-White_xrE3GtgvlAnI6G6q4pmB.jpg'},
		{id: '4', name: 'Labradorite Green', category: 'granite', material_name: 'Labradorite Green', image: 'http://marble.com/uploads/materials/917/300X300/thumbnail/Labradorite-Green_oU9fNhvGaaTaGyZt7XSn.jpg'},
		{id: '1', name: 'Cosmic Black', category: 'granite', material_name: 'Cosmic Black', image: 'http://marble.com/uploads/materials/499/300X300/thumbnail/Cosmic-Black_APeruB9I056YsF3mZ0sT.jpg'},
		{id: '2', name: 'Aspen White', category: 'granite', material_name: 'Aspen White', image: 'http://marble.com/uploads/materials/68/300X300/thumbnail/Aspen-White_RIKXCOOHk7PvydMw4olZ.jpg'},
		{id: '3', name: 'Sucuri White', category: 'granite', material_name: 'Sucuri White', image: 'http://marble.com/uploads/materials/694/300X300/thumbnail/Sucuri-White_xrE3GtgvlAnI6G6q4pmB.jpg'},
		{id: '4', name: 'Labradorite Green', category: 'granite', material_name: 'Labradorite Green', image: 'http://marble.com/uploads/materials/917/300X300/thumbnail/Labradorite-Green_oU9fNhvGaaTaGyZt7XSn.jpg'},
		{id: '1', name: 'Cosmic Black', category: 'granite', material_name: 'Cosmic Black', image: 'http://marble.com/uploads/materials/499/300X300/thumbnail/Cosmic-Black_APeruB9I056YsF3mZ0sT.jpg'},
		{id: '2', name: 'Aspen White', category: 'granite', material_name: 'Aspen White', image: 'http://marble.com/uploads/materials/68/300X300/thumbnail/Aspen-White_RIKXCOOHk7PvydMw4olZ.jpg'},
		{id: '3', name: 'Sucuri White', category: 'granite', material_name: 'Sucuri White', image: 'http://marble.com/uploads/materials/694/300X300/thumbnail/Sucuri-White_xrE3GtgvlAnI6G6q4pmB.jpg'},
		{id: '4', name: 'Labradorite Green', category: 'granite', material_name: 'Labradorite Green', image: 'http://marble.com/uploads/materials/917/300X300/thumbnail/Labradorite-Green_oU9fNhvGaaTaGyZt7XSn.jpg'},
	];

	
});

