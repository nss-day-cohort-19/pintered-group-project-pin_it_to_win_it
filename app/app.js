"use strict";

const app = angular.module('PinItApp' ,["ngRoute"]);

let isAuth = (AuthFactory) =>
new Promise((resolve, reject) => {
	AuthFactory.isAuthenticated()
	.then((userExists) => {
		if(userExists) {
			console.log("Authenticated, go ahead");
			resolve();
		}else {
			console.log("Authentication rejected!");
			reject();
		}
	});
});

app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
    templateUrl: 'partials/auth.html'
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
  	.when('/pintoboard', {
		templateUrl: 'partials/pintoboard.html',
		controller: 'HomeCtrl',
    resolve: {isAuth}
	})
	.when('/pintoboard/:boardID', {
		templateUrl: 'partials/pintoboard.html',
		controller: 'HomeCtrl'
	})
	.when('/profile', {
		templateUrl: 'partials/profile.html',
		controller: 'ProfileCtrl',
		resolve: {isAuth}
	})
	.when('/boards', {
		templateUrl: 'partials/boardview.html',
		controller: 'BoardCtrl',
		resolve: {isAuth}
	})
	.when('/createboard', {
		templateUrl: 'partials/createboard.html',
		controller: 'ProfileCtrl',
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
