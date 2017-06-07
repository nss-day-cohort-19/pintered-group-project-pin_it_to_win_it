"use strict";
console.log("Profile Ctrl loads");

app.controller('ProfileCtrl', function($scope, DataFactory, $location, AuthFactory) {
	// pass SearchTermData (from FilterFactory) into above function once created

	// $scope.searchText = SearchTermData; (add once SearchTermData is created)
	let user = AuthFactory.getUser();

	$scope.getBoardList = function() {
		// get the user's board
		DataFactory.getBoardList(user)
		.then( (boards) => {
			$scope.boards = boards;
			console.log("boards", $scope.boards);
		});
	};

	$scope.boards = {
		name: "",
		uid: user
	};

	$scope.addBoard = function() {
		// add a new board
		console.log("$scope.boards", $scope.boards);
		DataFactory.addBoard($scope.boards)
		.then( (data) => {
			$location.path("/profile");
		});
		$scope.boards = {};
	};

$scope.getBoardList();

});