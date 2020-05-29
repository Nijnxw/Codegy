import firebase from 'firebase';
import * as Facebook from 'expo-facebook';

import { facebookConfig } from '../../config.js';
import { onSuccessfulLogin } from './login.js';

isUserEqual = (facebookUser, firebaseUser) => {
	if (firebaseUser) {
		const providerData = firebaseUser.providerData;
		for (var i = 0; i < providerData.length; i++) {
			if (providerData[i].providerId === firebase.auth.FacebookAuthProvider.PROVIDER_ID &&
				providerData[i].uid === facebookUser.userID) {
				// We don't need to reauth the Firebase connection.
				return true;
			}
		}
	}
	return false;
}

onSignIn = (facebookUser) => {
	console.log('Facebook Auth Response', facebookUser);
	// We need to register an Observer on Firebase Auth to make sure auth is initialized.
	const unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
		unsubscribe();
		// Check if we are already signed-in Firebase with the correct user.
		if (!this.isUserEqual(facebookUser, firebaseUser)) {
			// Build Firebase credential with the Google ID token.
			const credential = firebase.auth.FacebookAuthProvider.credential(facebookUser);
			// Sign in with credential from the Google user.
			firebase.auth().signInWithCredential(credential).then(function (result) {
				console.log("user sign in");
				if (result.additionalUserInfo.isNewUser) {
					firebase
						.database()
						.ref('/users' + result.user.uid)
						.set({
							email: result.user.email,
							profile_picture: result.additionalUserInfo.profile.picture.data.url,
							phoneNumber: response.user.phoneNumber,
							first_name: result.additionalUserInfo.profile.first_name,
							last_name: result.additionalUserInfo.profile.last_name,
							created_at: Date.now()
						});
				} else {
					firebase.database()
						.ref(`users/${result.user.uid}`)
						.update({
							lastLogIn: Date.now(),
						});
				}

			}).catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
		} else {
			console.log('User already signed-in Firebase.');
		}
	});
}

export const signUpWithFacebook = async (props) => {
	try {
		const { type, token } = await Facebook.logInWithReadPermissionsAsync(facebookConfig.id, {
			permissions: ['public_profile'],
		});
		if (type === 'success') {
			await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
			this.onSignIn(token);
			onSuccessfulLogin(props);
		}
	} catch ({ message }) {
		alert(`Facebook Login Error: ${message}`);
	}
}

export const signInWithFacebook = async (props) => {
	try {
		const { type, token } = await Facebook.logInWithReadPermissionsAsync(facebookConfig.id, {
			permissions: ['public_profile'],
		});
		if (type === 'success') {
			await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
			this.onSignIn(token);
			onSuccessfulLogin(props)
		}
	} catch ({ message }) {
		alert(`Facebook Login Error: ${message}`);
	}
}