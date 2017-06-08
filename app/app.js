"use strict";

const app = angular.module('PinItApp' ,["ngRoute"]);

let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
	AuthFactory.isAuthenticated()
	.then( (userExists) => {
		if (userExists){
			console.log("Authenticated, go ahead");
			resolve();
		}else {
			console.log("Not Authenticated");
			reject();
		}
	});
});

app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
    	templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/login', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/logout', {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl',
		resolve: {isAuth}
	})
	.when('/pintoboard/:pinID', {
		templateUrl: 'partials/pintoboard.html',
		controller: 'PinToBoardCtrl',
   		resolve: {isAuth}
	})
	.when('/profile', {
		templateUrl: 'partials/profile.html',
		controller: 'ProfileCtrl',
		resolve: {isAuth}
	})
	.when('/boards', {
		templateUrl: 'partials/boardView.html',
		controller: 'BoardCtrl',
		resolve: {isAuth}
	})
	.when('/createpin', {
		templateUrl: 'partials/createpin.html',
		controller: 'CreatePinCtrl',
		resolve: {isAuth}
	})
	.when('/createboard', {
		templateUrl: 'partials/createboard.html',
		controller: 'CreateBoardCtrl',
    	resolve: {isAuth}
	})
	.otherwise('/');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);
});
