"use strict";

app.controller("BoardCtrl", function($scope, DataFactory, $location, $routeParams) {

	console.log("$routeParams", $routeParams.boardID);
// This view has the following buttons: "Create Pin", "Delete Pin", "Delete Board".


	$scope.pinsForBoard = [];
	$scope.boardID = $routeParams.boardID;


	$scope.getBoardPins = function(){
		DataFactory.getBoardPins($routeParams.boardID)
		.then( (pins) => {
			$scope.pinsForBoard = pins;
			console.log("pinsForBoard", $scope.pinsForBoard);
		});
	};

	$scope.deleteBoard = function(){
		DataFactory.deleteBoard($scope.boardID)
		.then ( (data) => {
			$scope.pinsForBoard.forEach(function(currVal){
				console.log("currVal", currVal);
				DataFactory.deletePin(currVal.pinID);
			});
			$location.path('/profile');
		});
	};

	$scope.deletePin = function(pinID){
		console.log('pinID passed to deletePin()', pinID);
		DataFactory.deletePin(pinID).
		then( (data) => {
			$scope.getBoardPins();
		});
	};



	$scope.getBoardPins();


});