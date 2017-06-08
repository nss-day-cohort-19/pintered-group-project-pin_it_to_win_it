"use strict";

app.controller('PinToBoardCtrl', ["$scope", "$routeParams", "DataFactory", "$location",
	function($scope, $routeParams, DataFactory, $location, AuthFactory){

		$scope.pinObj = {
			boardID: "",
			pinID: "",
			title: "",
			UID: "",
			url: ""
		};
		$scope.pinID = $routeParams.pinID;
		$scope.userBoards = "";

		let user = AuthFactory.getUser();
		console.log("user as seen by HomeCtrl", user);

		//get User Boards and pass them to the partial
		DataFactory.getBoardList(user)
		.then( (boards) => {
			$scope.userBoards = boards;
			console.log("userBoards", $scope.userBoards);
		});

		//get id of board to which pin will be added
		$scope.getBoardID = function(id){
			$scope.pinObj.boardID = id;
		};

		//get pin from FB, pass to partial, clone and addPin to FB with new boardID
		DataFactory.getpin($routeParams.pinID)
		.then(function(singlePin){
			$scope.pinObj = singlePin;
			//add boardID to pinObj
			// DataFactory.addPin($scope.pinObj)
			// .then(function(data){
			// 	console.log("cloned pin", data);
			// });
		});

		$scope.addPin = function(){
			DataFactory.addPin($scope.pinObj)
				.then(function(data){
					console.log("cloned pin", data);
			});
		};





		// $scope.getBoardList(user);
		// $scope.getPin(pinID);

}]);

