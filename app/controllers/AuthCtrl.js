"use strict";

app.controller("AuthCtrl", ["$scope", "AuthFactory", "$window", "$location",
	function($scope, AuthFactory, $window, $location){
		console.log('AuthCtrl is activated');

		$scope.logout = function(){
			AuthFactory.logoutUser()
			.then(function(data){
				// $window.location.url= '#!/login'; //which one do I use?
				$location.path('/'); //which one do I use?
				$scope.$apply();
				console.log("hello");
			}, function(error){
				console.log('There was an error logging user out');
			});

		};

		// AuthFactory.isAuthenticated()
		// .then(function(data){
		// 	if (data) {
		// 		console.log('reading AuthCtrl data', data);
		// 		logout();
		// }});

		$scope.googleLogIn = function(){
			AuthFactory.getUser();
			AuthFactory.authWithProvider()
			.then(function(data){
				AuthFactory.getUser();
				// var user = data.user.uid;
				console.log("data from googleLogIn", data);
				$location.path('/home');
				$scope.$apply();
			})
			.catch(function(error){
				console.log(error);
			});
		};


}]);