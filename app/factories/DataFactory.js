"use strict";
console.log("DataFactory");
app.factory("DataFactory", ($q, $http, FBCreds) => {


	const getPinList = () => {
		console.log("PinList here");
		let pins = [];
		return $q( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/pins.json`)
			.then( (pinObj) => {
				let pinCollection = pinObj.data;
				console.log("pinCollection", pinCollection);
			  	Object.keys(pinCollection).forEach( (key) => {
			  		pinCollection[key].id = key;
			  		pins.push(pinCollection[key]);
			  	});
			  	resolve(pins);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};

// This is for the createPin
	const addPin = (newObj) => {
		return $q( (resolve, reject) => {
			let object = JSON.stringify(newObj);
			$http.post(`${FBCreds.databaseURL}/pins.json`, object)
			.then ( (pinID) => {
				resolve(pinID);
			})
			.catch ( (error) => {
				reject(error);
			});
		});
	};

// This is for a user adding a pin to their board/profile
	const editPin = (pinID, editedObj) => {
		return $q( (resolve, reject) => {
			let newObj = JSON.stringify(editedObj);
			$http.patch(`${FBCreds.databaseURL}/pins/${pinID}.json`, newObj)
			.then( (pinObj) => {
				resolve(pinObj);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};

	const getBoardList = (user) => {
		console.log("boardlist here");
		let boards = [];
		return $q( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${user}"`) 
			.then( (boardObj) => {
				let boardCollection = boardObj.data;
				console.log("boardCollection", boardCollection);
				Object.keys(boardCollection).forEach( (key) => {
					boardCollection[key].boardId = key;
					boards.push(boardCollection[key]);
				});
				resolve(boards);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};

	const getBoard = ( boardID ) => {
		return $q( (resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/boards/${boardID}.json`)
			.then( (boardObj) => {
				resolve(boardObj.data);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};

	const deleteBoard = (uid, boardId) => {
		return $q ( (resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/boards/${boardId}.json`)
			.then( (response) => {
				resolve(response);
			})
			.catch( (error) => {
				reject(error);
			});
		});
	};


	const addBoard = (boardObj) => {
		return $q( (resolve, reject) => {
			let object = JSON.stringify(boardObj);
			$http.post(`${FBCreds.databaseURL}/boards.json`, object)
			.then ( (boardID) => {
				resolve(boardID);
			})
			.catch ( (error) => {
				reject(error);
			});
		});
	};


	return {
	  getPinList,
	  getBoardList,
	  editPin,
	  deleteBoard,
	  addPin,
	  addBoard,
	  getBoard
	};
// getPin ???
// getBoard ???
});




