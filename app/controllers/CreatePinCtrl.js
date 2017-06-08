"use strict";

app.controller("CreatePinCtrl", function($scope, DataFactory, $location, AuthFactory, $routeParams){

	let user = AuthFactory.getUser();

	$scope.newPin = {
		boardID: $routeParams.boardID,
		pinID: "",
		title: "",
		uid: user,
		url: ""
	};

	$scope.addPin = function(){
		DataFactory.addPin($scope.newPin)
		.then( (data) => {
			$location.path(`/boards/${$routeParams.boardID}`);
		});
	};

});