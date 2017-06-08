"use strict";
console.log("Hi HomeCtrl");
app.controller("HomeCtrl", function($scope, DataFactory) {

	// console.log("$routeParams", $routeParams);
	$scope.pinList = []; //this has all the pins in FB


	let getPinList = function () {
		DataFactory.getPinList()
		.then( (pins) => {
			$scope.pinList = pins;
			console.log("pins", $scope.pinList);
		});
	};



	// $scope.editPin = function(){
	// 	DataFactory.editPin($scope.pinID, $scope.pinObj);
	// };



	// $scope.showBoardID = function(boardID){
	// 	$scope.pinObj.boardID.push(boardID);
	// };


	getPinList();
	// $scope.getBoardList();


});