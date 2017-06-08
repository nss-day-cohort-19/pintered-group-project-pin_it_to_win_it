"use strict";

app.controller('NavCtrl', function ($scope, AuthFactory, $window, SearchTermData) {

  // Log Button Function

  $scope.isLoggedIn = false;
  $scope.searchText = SearchTermData;
  // $scope.searchText = searchTermData;  //item we inject into our controller

  firebase.auth().onAuthStateChanged(function (user) {  //returning a promise to us and checking if there is a user
    if (user) {
      $scope.isLoggedIn = true;
      console.log("currentUser logged in", user, $scope.isLoggedIn);
      //$scope.$apply();  //makes the data appear in the view when refreshing data, without this it would not trigger the login/logout if there is a user
    } else {
      $scope.isLoggedIn = false;
      console.log("currentUser logged in", $scope.isLoggedIn);
      $window.location.href = "#!/login";
    }
  });

});