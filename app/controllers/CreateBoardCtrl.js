"use strict";

app.controller("CreateBoardCtrl", function($scope, DataFactory, $location, AuthFactory, $routeParams) {

	let user = AuthFactory.getUser();

	$scope.boards = {
		title: "",
		uid: user
	};

	$scope.addBoard = function() {
		// add a new board
		console.log("$scope.boards", $scope.boards);
		DataFactory.addBoard($scope.boards)
		.then( (data) => {
			$location.path("/profile");
		});
	};

});