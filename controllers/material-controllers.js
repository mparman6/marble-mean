var marbleApp = angular.module("marbleApp")

.controller('MatInfoCtrl', function($scope, materialFactory, $stateParams) {
	$scope.materialStuff = {};
	materialFactory.getMaterialStuff()
	.then(function(materials) {
		$scope.materialStuff = materials;
		console.log(materials);
	}, function(error) {
		console.log(error);
	});
	$scope.name = $stateParams.materialName;
	
})

.controller('MainCtrl', function($scope, mongoFactory) {
	$scope.mongoStuff = {};
	mongoFactory.getMongoStuff()
	.then(function(categories) {
		$scope.mongoStuff = categories;
		console.log(categories);
	}, function(error) {
		console.log(error);
	});
})

.controller('GraniteCtrl', function($scope, graniteFactory) {
	$scope.graniteStuff = {};
	graniteFactory.getGraniteStuff()
	.then(function(granite) {
		$scope.graniteStuff = granite;
		console.log(granite);
	}, function(error) {
		console.log(error);
	});
})


.controller('MarbleCtrl', function($scope, marbleFactory) {
	$scope.marbleStuff = {};
	marbleFactory.getMarbleStuff()
	.then(function(marble) {
		$scope.marbleStuff = marble;
		console.log(marble);
	}, function(error) {
		console.log(error);
	});
})


.controller('QuartziteCtrl', function($scope, quartziteFactory) {
	$scope.quartziteStuff = {};
	quartziteFactory.getQuartziteStuff()
	.then(function(quartzite) {
		$scope.quartziteStuff = quartzite;
		console.log(quartzite);
	}, function(error) {
		console.log(error);
	});
})


.controller('QuartzCtrl', function($scope, quartzFactory) {
	$scope.quartzStuff = {};
	quartzFactory.getQuartzStuff()
	.then(function(quartz) {
		$scope.quartzStuff = quartz;
		console.log(quartz);
	}, function(error) {
		console.log(error);
	});
})


.controller('OnyxCtrl', function($scope, onyxFactory) {
	$scope.onyxStuff = {};
	onyxFactory.getOnyxStuff()
	.then(function(onyx) {
		$scope.onyxStuff = onyx;
		console.log(onyx);
	}, function(error) {
		console.log(error);
	});
})


.controller('TravertineCtrl', function($scope, travertineFactory) {
	$scope.travertineStuff = {};
	travertineFactory.getTravertineStuff()
	.then(function(travertine) {
		$scope.travertineStuff = travertine;
		console.log(travertine);
	}, function(error) {
		console.log(error);
	});
})


.controller('GemstoneCtrl', function($scope, gemstoneFactory) {
	$scope.gemstoneStuff = {};
	gemstoneFactory.getGemstoneStuff()
	.then(function(gemstone) {
		$scope.gemstoneStuff = gemstone;
		console.log(gemstone);
	}, function(error) {
		console.log(error);
	});
})


.controller('SoapstoneCtrl', function($scope, soapstoneFactory) {
	$scope.soapstoneStuff = {};
	soapstoneFactory.getSoapstoneStuff()
	.then(function(soapstone) {
		$scope.soapstoneStuff = soapstone;
		console.log(soapstone);
	}, function(error) {
		console.log(error);
	});
})


.controller('LimestoneCtrl', function($scope, limestoneFactory) {
	$scope.limestoneStuff = {};
	limestoneFactory.getLimestoneStuff()
	.then(function(limestone) {
		$scope.limestoneStuff = limestone;
		console.log(limestone);
	}, function(error) {
		console.log(error);
	});
})


.controller('SlateCtrl', function($scope, slateFactory) {
	$scope.slateStuff = {};
	slateFactory.getSlateStuff()
	.then(function(slate) {
		$scope.slateStuff = slate;
		console.log(slate);
	}, function(error) {
		console.log(error);
	});
})


.controller('GlassCtrl', function($scope, glassFactory) {
	$scope.glassStuff = {};
	glassFactory.getGlassStuff()
	.then(function(glass) {
		$scope.glassStuff = glass;
		console.log(glass);
	}, function(error) {
		console.log(error);
	});
});