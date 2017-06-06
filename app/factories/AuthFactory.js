"use strict";

app.factory("AuthFactory", function(){

    let currentUser = null;

    let logoutUser = function(){
        console.log("logoutUser");
        return firebase.auth().signOut();
    };

    let isAuthenticated = function (){
        console.log("AuthFactory: isAuthenticated");
        return new Promise ( (resolve, reject) => {
            firebase.auth().onAuthStateChanged( (user) => {
                if (user){
                    currentUser = user.uid;
                    console.log("user", user.uid);
                    resolve(true);
                }else {
                    resolve(false);
                }
            });
        });
    };

    let getUser = function(){
        return currentUser;
    };

    let provider = new firebase.auth.GoogleAuthProvider();

    let authWithProvider= function(){
        return firebase.auth().signInWithPopup(provider);
    };


    return {logoutUser, isAuthenticated, getUser, authWithProvider};

});