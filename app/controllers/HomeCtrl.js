"use strict";
console.log("Hi HomeCtrl");
app.controller("HomeCtrl", function($scope, DataFactory, $location, AuthFactory, $routeParams) {

	console.log("$routeParams", $routeParams);

	$scope.pinObj = { //this will
		boardID: [],
		pinID: "",
		title: "",
		UID: "",
		url: ""
	};
	$scope.pinList = [];
	$scope.pinID = $routeParams.pinID;


	let user = AuthFactory.getUser();
	console.log("user as seen by HomeCtrl", user);
	$scope.userBoards = "";

	$scope.getPinList = function () {
		DataFactory.getPinList()
		.then( (pins) => {
			$scope.pinList = pins;
			console.log("pins", $scope.pinList);
		});
	};

	$scope.getBoardList = function(user) {
			DataFactory.getBoardList()
			.then( (boards) => {
				//filter boards by current UID
				$scope.userBoards = boards;
				console.log("userBoards", $scope.userBoards);
			});
		};

	$scope.editPin = function(){
		DataFactory.editPin($scope.pinID, $scope.pinObj);
	};

	$scope.getPin = function(pinID){
		DataFactory.getpin(pinID)
		.then(function(singlePin){
			$scope.pinObj = singlePin;
		});
	};

	$scope.showBoardID = function(boardID){
		$scope.pinObj.boardID.push(boardID);
	};


	$scope.getPinList();
	$scope.getBoardList();


});