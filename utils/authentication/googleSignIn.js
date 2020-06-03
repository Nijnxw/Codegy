import firebase from 'firebase';
import * as Google from 'expo-google-app-auth';
import * as GoogleSignIn from 'expo-google-sign-in';
import { googleConfig } from '../../config.js';

isUserEqual = (googleUser, firebaseUser) => {
	if (firebaseUser) {
		const providerData = firebaseUser.providerData;
		for (var i = 0; i < providerData.length; i++) {
			if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
				providerData[i].uid === googleUser.getBasicProfile().getId()) {
				// We don't need to reauth the Firebase connection.
				return true;
			}
		}
	}
	return false;
}

onSignIn = (googleUser) => {
	console.log('Google Auth Response', googleUser);
	// We need to register an Observer on Firebase Auth to make sure auth is initialized.
	const unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
		unsubscribe();
		// Check if we are already signed-in Firebase with the correct user.
		if (!this.isUserEqual(googleUser, firebaseUser)) {
			// Build Firebase credential with the Google ID token.
			const credential = firebase.auth.GoogleAuthProvider.credential(
				googleUser.idToken,
				googleUser.accessToken);
			// Sign in with credential from the Google user.
			firebase.auth().signInWithCredential(credential).then(function (result) {

				console.log("user sign in");
				if (result.additionalUserInfo.isNewUser) {
					firebase
						.database()
						.ref('/users' + result.user.uid)
						.set({
							gmail: result.user.email,
							profile_picture: result.additionalUserInfo.profile.profile_picture,
							locale: result.additionalUserInfo.profile_picture.locale,
							first_name: result.additionalUserInfo.given_name,
							last_name: result.additionalUserInfo.family_name,
							created_at: Date.now()
						});
				} else {
					alert('this email account has alr been registered')
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
export const signUpWithGoogle = async () => {
	try {
		const result = await Google.logInAsync({
			androidClientId: googleConfig.androidClientId,
			iosClientId: googleConfig.iosClientId,
			scopes: ['profile', 'email']
		});

		if (result.type === 'success') {
			this.onSignIn(result);
			return result.accessToken;
		} else {
			return { cancelled: true };
		}
	} catch (e) {
		return { error: true };
	}
};

export const signInWithGoogle = async () => {
	try {
		const result = await Google.logInAsync({
			androidClientId: googleConfig.androidClientId,
			iosClientId: googleConfig.iosClientId,
			scopes: ['profile', 'email']
		});

		if (result.type === 'success') {
			await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
			const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
			const googleProfileData = await firebase.auth().signInWithCredential(credential).then(function (result) {
				if (result.additionalUserInfo.isNewUser) {
					alert('This google account is new');
				} else {
					firebase
						.database()
						.ref('/users' + result.user.uid)
						.update({
							last_logged_in: Date.now()
						})
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
		}
	} catch ({ message }) {
		alert('login: Error:' + message);
	}
}