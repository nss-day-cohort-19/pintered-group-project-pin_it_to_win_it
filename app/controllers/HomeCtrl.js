"use strict";
console.log("Hi HomeCtrl");
app.controller("HomeCtrl", function($scope, DataFactory, AuthFactory, SearchTermData) {

	// console.log("$routeParams", $routeParams);
	$scope.searchText = SearchTermData;
	$scope.pinList = []; //this has all the pins in FB
	let user = AuthFactory.getUser();

	let getPinList = function () {
		DataFactory.getPinList()
		.then( (pins) => {
			let array = $(pins).filter(function(index, obj){
				return obj.uid !== user;
			});
			$scope.pinList = array;
			console.log("filtered array", array);

		});
	};



	getPinList();
	// $scope.getBoardList();


});