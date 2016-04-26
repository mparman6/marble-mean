var marbleApp = angular.module("marbleApp")

.controller('ImageCtrl', function($scope, imageFactory) {
	$scope.allPhotos = {};
	$scope.test = "test successful";
	imageFactory.getAllPhotos()
	.then(function(images) {
		$scope.allPhotos = images;
	}, function(error) {
		console.log(error);
	});
})

.controller('MatInfoCtrl', function($scope, $rootScope, materialFactory, $stateParams) {
	$scope.materialStuff = {};
	$scope.name = $stateParams.name;
	materialFactory.getMaterialStuff($scope.name)
	.then(function(material) {
		$rootScope.materialStuff = material;
		console.log(material);
	}, function(error) {
		console.log(error);
	});	
})

.controller('ScrollCtrl', function($scope, $rootScope, scrollFactory, $stateParams) {
	$scope.scrollStuff = {};
	$scope.id = $stateParams.id;
	$scope.offset = $stateParams.offset;
	scrollFactory.getScrollStuff($scope.id)
	.then(function(scrolls) {
		// loop for pointer

		var newArray = [];
		var matArray = scrolls;
		var offset = parseInt($scope.offset, 10);
		// console.log(offset);
		for(var i = 0; i < matArray.length; i++) {
			var pointer = (i + offset) % matArray.length;
			newArray.push(matArray[pointer]);
			// console.log(newArray);
		}

		$scope.scrollStuff = newArray;
		// console.log(scrolls);
	}, function(error) {
		console.log(error);
	});	
})

.controller('SearchCtrl', function($scope, $rootScope, searchFactory) {
	$scope.searchResults = {};
	$scope.name = $rootScope.materialStuff;
	searchFactory.getSearchResults($scope.name)
	.then(function(results) {
		$scope.searchResults = results;
		// console.log(results);
	}, function(error) {
		console.log(error);
	});	
})

.controller('MainCtrl', function($scope, mongoFactory) {
	$scope.mongoStuff = {};
	mongoFactory.getMongoStuff()
	.then(function(categories) {
		$scope.mongoStuff = categories;
		// console.log(categories);
	}, function(error) {
		console.log(error);
	});
})

.controller('GraniteCtrl', function($scope, $rootScope, graniteFactory) {
	// $scope.graniteStuff = {};
	$scope.myMethod = function(newPageNumber, oldPageNumber) {
		$(".reset").click(function() {
			$(window).scrollTop(top);
		});
	}
	graniteFactory.getGraniteStuff()
	.then(function(granite) {
	$scope.graniteStuff = granite;
		// console.log(granite);
	}, function(error) {
		console.log(error);
	});
})


.controller('MarbleCtrl', function($scope, marbleFactory) {
	$scope.marbleStuff = {};
	$scope.myMethod = function(newPageNumber, oldPageNumber) {
		$(".reset").click(function() {
			$(window).scrollTop(top);
		});
	}
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
	$scope.myMethod = function(newPageNumber, oldPageNumber) {
		$(".reset").click(function() {
			$(window).scrollTop(top);
		});
	}
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
	$scope.myMethod = function(newPageNumber, oldPageNumber) {
		$(".reset").click(function() {
			$(window).scrollTop(top);
		});
	}
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
	$scope.myMethod = function(newPageNumber, oldPageNumber) {
		$(".reset").click(function() {
			$(window).scrollTop(top);
		});
	}
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
	$scope.myMethod = function(newPageNumber, oldPageNumber) {
		$(".reset").click(function() {
			$(window).scrollTop(top);
		});
	}
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
	$scope.myMethod = function(newPageNumber, oldPageNumber) {
		$(".reset").click(function() {
			$(window).scrollTop(top);
		});
	}
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
	$scope.myMethod = function(newPageNumber, oldPageNumber) {
		$(".reset").click(function() {
			$(window).scrollTop(top);
		});
	}
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
	$scope.myMethod = function(newPageNumber, oldPageNumber) {
		$(".reset").click(function() {
			$(window).scrollTop(top);
		});
	}
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
	$scope.myMethod = function(newPageNumber, oldPageNumber) {
		$(".reset").click(function() {
			$(window).scrollTop(top);
		});
	}
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
	$scope.myMethod = function(newPageNumber, oldPageNumber) {
		$(".reset").click(function() {
			$(window).scrollTop(top);
		});
	}
	glassFactory.getGlassStuff()
	.then(function(glass) {
		$scope.glassStuff = glass;
		console.log(glass);
	}, function(error) {
		console.log(error);
	});
})

.controller('BackCtrl', function($scope, backFactory, $stateParams) {
	$scope.backStuff = {};
	$scope.id = $stateParams.id;
	backFactory.getBackStuff($scope.id)
	.then(function(id) {
		$scope.backStuff = id;
		console.log(id);
	}, function(error) {
		console.log(error);
	});	
})