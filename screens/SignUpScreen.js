import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput, ActivityIndicator } from "react-native";
import firebase from 'firebase';

import * as Google from 'expo-google-app-auth';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as Facebook from 'expo-facebook';

class SignUpScreen extends Component {
    state = { displayName: '', email: '', password: '', errorMessage: '', loading: false };
    onSuccessfulLogin() {
        this.props.navigation.navigate('HomeScreen');
    }


    onLoginFailure(errorMessage) {
        this.setState({ error: errorMessage, loading: false });
    }

    async signInWithEmail() {
        await firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.onSuccessfulLogin.bind(this))
            .catch(error => {
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    this.onLoginFailure.bind(this)('Weak Password!');
                } else {
                    this.onLoginFailure.bind(this)(errorMessage);
                }
            });

    }
    async signInWithFacebook() {
        try {
            const { type, token } = await Facebook.logInWithReadPermissionsAsync('254052149144768', {
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
                const credential = firebase.auth.FacebookAuthProvider.credential(token);
                const facebookProfileData = await firebase.auth().signInWithCredential(credential);
                this.onSuccessfulLogin.bind(this);
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
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
        var unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!this.isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                var credential = firebase.auth.GoogleAuthProvider.credential(
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
        }.bind(this));
    }
    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: '129041788657-cmlichseut01fvqk0n90l0e3et71e6fh.apps.googleusercontent.com',
                iosClientId: '129041788657-9rivq090nkqafvrfqlsoqtsn7kr1ljkg.apps.googleusercontent.com',
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

    // loadingIndicator() {
    //     if (this.state.loading) {
    //         return (
    //             <View>
    //                 <ActivityIndicator size={'large'} />
    //             </View>
    //         );
    //     }
    // }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        returnKeyType="next"
                        textContentType="name"
                        value={this.state.displayName}
                        onChangeText={displayName => this.setState({ displayName })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        returnKeyType="next"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        returnKeyType="done"
                        textContentType="newPassword"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </View>
                <Button title="Sign Up" onPress={() => this.signInWithEmail()} />
                <Button title="Sign up with FaceBook" onPress={() => this.signInWithFacebook()} />
                <Button title="Sign up with Google" onPress={() => this.signInWithGoogleAsync()} />
                <Button title="Already have an account?" onPress={() => {
                    this.props.navigation.navigate('LoginScreen');
                }} />
            </View>
        )
    }
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});