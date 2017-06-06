"use strict";
console.log("Hi HomeCtrl");
app.controller("HomeCtrl", function($scope, DataFactory, $location, AuthFactory) {

$scope.getPinList = function () {
	DataFactory.getPinList()
	.then( (pins) => {
		$scope.pins = pins;
		console.log("pins", $scope.pins);
	});
	// console.log("Home controller");
};

$scope.getPinList();
});