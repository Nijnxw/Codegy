import firebase from 'firebase';
import * as Facebook from 'expo-facebook';

import { facebookConfig } from '../../config.js';

export const signUpWithFacebook = async () => {
    try {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(facebookConfig.id, {
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            const facebookProfileData = await firebase.auth().signInWithCredential(credential);
            this.onSuccessfulLogin(props);
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
}

export const signInWithFacebook = async () => {
    try {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(facebookConfig.id, {
            permissions: ['public_profile'],
        });
        if (type === 'success') {
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            const facebookProfileData = await firebase.auth().signInWithCredential(credential);
            this.onSuccessfulLogin.bind(this)
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }
}