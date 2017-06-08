"use strict";

app.controller("BoardCtrl", function($scope, DataFactory, $location, AuthFactory, $routeParams) {

	console.log("$routeParams", $routeParams);
	console.log("$routeParams", $routeParams.boardID);
// This view has the following buttons: "Create Pin", "Delete Pin", "Delete Board".

	// $scope.newPin = { //this will be on the createPinCtrl
	// 	boardID: "",
	// 	pinID: "",
	// 	title: "",
	// 	UID: "",
	// 	url: ""
	// };
	$scope.pinsForBoard = [];
	$scope.boardID = $routeParams.boardID;

	// $scope.addPin = function(){
	// 	DataFactory.addPin($scope.newPin);
	// };
	//move to createPinCtrl

	$scope.getBoardPins = function(){
		DataFactory.getBoardPins($routeParams.boardID)
		.then( (pins) => {
			console.log("the pins", pins);
			$scope.pinsForBoard = pins;
		});
	};

	$scope.deleteBoard = function(){
		DataFactory.deleteBoard($scope.boardID)
		.then ( (data) => {
			$scope.pinsForBoard.forEach(function(currVal){
				console.log("currVal.pinID", currVal.pinID);
				DataFactory.deletePin(currVal.pinID);
			});
			$location.path('/profile');
		});
	};

	$scope.deletePin = function(pinID){
		DataFactory.deletePin(pinID).
		then( (data) => {
			$scope.getBoardPins();
		});
	};

	// $scope.getBoard = () => {
	// 	console.log("boards called???");
	// 	DataFactory.getBoard($routeParams.boardID)
	// 	.then( (boards) => {
	// 		$scope.boards = boards;
	// 		$scope.boardID = $routeParams.boardID;
	// 		console.log("the boards", $scope.boards);
	// 		console.log("a boardID", $scope.boardID);
	// 	});
	// };



	$scope.getBoardPins();
	// $scope.getBoard();

});