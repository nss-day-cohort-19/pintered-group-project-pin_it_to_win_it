"use strict";
console.log("Profile Ctrl loads");

app.controller('ProfileCtrl', function($scope, DataFactory, $location, AuthFactory, $routeParams) {
	// pass SearchTermData (from FilterFactory) into above function once created

	// $scope.searchText = SearchTermData; (add once SearchTermData is created)
	let user = AuthFactory.getUser();
	console.log("user from profile ctrl", user);

	$scope.boards = {
		name: "",
		uid: user
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