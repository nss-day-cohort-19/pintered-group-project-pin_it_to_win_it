"use strict";
console.log("Hi HomeCtrl");
app.controller("HomeCtrl", function($scope, DataFactory, $location, AuthFactory) {

$scope.getPinList = function () {
	DataFactory.getPinList()
	.then( (pins) => {
		$scope.pins = pins;
		console.log("pins", $scope.pins);
	});
};

$scope.getBoardList = function() {
		// get the user's board
		DataFactory.getBoardList()
		.then( (boards) => {
			$scope.boards = boards;
			console.log("boards", $scope.boards);
		});
	};

$scope.getPinList();
});