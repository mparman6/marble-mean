var marbleApp = angular.module("marbleApp")


// CONTROLLER FOR MATINFO VIEW
.controller('ScrollCtrl', function($scope, $rootScope, scrollFactory, $stateParams) {
	// $scope.scrollStuff = {};
	$scope.id = $stateParams.id;
	$scope.offset = $stateParams.offset;
	scrollFactory.getScrollStuff($scope.id, $scope.offset)
	.then(function(scrolls) {
		// loop for pointer

		var newArray = [];
		var matArray = scrolls;
		var offset = parseInt($scope.offset, 10);
		if (offset > 91) {
			offset = parseInt($scope.offset - 1, 10);
		} else {
			offset = parseInt($scope.offset, 10);
		}
		// console.log(offset);
		for(var i = 0; i < matArray.length; i++) {
			var pointer = (i + offset) % matArray.length;
			newArray.push(matArray[pointer]);
			// console.log(newArray);
		}

		$scope.scrollStuff = newArray;
		previousCounter = 0;
		$scope.previous = newArray[previousCounter + 517].material_name;
		var nextCounter = 1;
		$scope.next = newArray[offset - offset + nextCounter].material_name;
		// $rootScope.nextMaterial = function() {
		// 	$scope.next = newArray[offset - offset + nextCounter].material_name;
		// 	previousCounter++;
		// 	$scope.previous = newArray[previousCounter + 517].material_name;
		// }
	}, function(error) {
		console.log(error);
	});
})


// CONTROLLER FOR MATERIAL2 VIEW
.controller('Material2Ctrl', function($scope, $rootScope, materialInfoFactory, $stateParams) {
	$scope.name = $stateParams.name;
	materialInfoFactory.getSearchResults($scope.name)
	.then(function(results) {
		$scope.searchResults = results;
	}, function(error) {
		console.log(error);
	});
})


// CONTROLLER FOR SEARCH FEATURE AND VIEW
.controller('SearchCtrl', function($rootScope, $scope, searchFactory, $stateParams, $location) {
	$scope.search = $stateParams.search;
	$scope.searchFunction = function() {
		searchFactory.getSearchResults($scope.search)
		.then(function(results) {
			$rootScope.searchStuff = results;
			// console.log($scope.searchStuff);
		}, function(error) {
			console.log(error);
		});
		$scope.search = "";
		var url = '/search';
		$location.path(url);
	}

	$scope.showSearch = function() {
		$('#form').toggleClass('ng-hide');
	}
	$rootScope.searchStuff = $scope.searchStuff;
	console.log($scope.searchStuff);
})


// CONTROLLER FOR MAIN CATEGORIES VIEW
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


// CONTROLLER FOR GRANITE MATERIALS VIEW
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
	console.log(granite);
		// console.log(granite);
	}, function(error) {
		console.log(error);
	});
})


// CONTROLLER FOR MARBLE MATERIALS VIEW
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


// CONTROLLER FOR QUARTZITE MATERIALS VIEW
.controller('QuartziteCtrl', function($scope, quartziteFactory) {
	// $scope.quartziteStuff = {};
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


// CONTROLLER FOR QUARTZ MATERIAL VIEW
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


// CONTROLLER FOR ONYX MATERIAL VIEW
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


// CONTROLLER FOR TRAVERTINE MATERIAL VIEW
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


// CONTROLLER FOR GEMSTONE MATERIAL VIEW
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


// CONTROLLER FOR SOAPSTONE MATERIAL VIEW
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


// CONTROLLER FOR LIMESTONE MATERIAL VIEW
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


// CONTROLLER FOR SLATE MATERIAL VIEW
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


// CONTROLLER FOR GLASS MATERIAL VIEW
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
