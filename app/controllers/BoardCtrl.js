"use strict";

app.controller("BoardCtrl", function($scope, DataFactory, $location, AuthFactory, $routeParams) {

	console.log("$routeParams", $routeParams);
	console.log("$routeParams", $routeParams.boardID);
// This view has the following buttons: "Create Pin", "Delete Pin", "Delete Board".

$scope.newPin = { //this will
		boardID: [],
		pinID: "",
		title: "",
		UID: "",
		url: ""
	};

	$scope.getPinList = () => {
		console.log("called???");
		DataFactory.getPinList()
		.then( (pins) => {
			$scope.pins = pins;
			console.log("the pins", $scope.pins);
		});
	};

	$scope.getBoard = () => {
		console.log("boards called???");
		DataFactory.getBoard($routeParams.boardID)
		.then( (boards) => {
			$scope.boards = boards;
			$scope.boardID = $routeParams.boardID;
			console.log("the boards", $scope.boards);
			console.log("a boardID", $scope.boardID);
		});
	};

	$scope.addPin = function(){
		DataFactory.addPin($scope.newPin);
	};


	$scope.getPinList();
	$scope.getBoard();

});