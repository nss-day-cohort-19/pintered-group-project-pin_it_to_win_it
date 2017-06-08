"use strict";
console.log("Profile Ctrl loads");

app.controller('ProfileCtrl', function($scope, DataFactory, $location, AuthFactory, $routeParams, SearchTermData) {
	// pass SearchTermData (from FilterFactory) into above function once created

	// $scope.searchText = SearchTermData; (add once SearchTermData is created)
	$scope.searchText = SearchTermData;
	let user = AuthFactory.getUser();
	console.log("user from profile ctrl", user);

	$scope.boards = {
		name: "",
		uid: user,
		boardID: ""
	};

	$scope.getBoardList = function() {
		// get the user's board
		DataFactory.getBoardList(user)
		.then( (boards) => {
			$scope.boards = boards;
			console.log("boards", $scope.boards);
		});
	};


$scope.getBoardList();

});