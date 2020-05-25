import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput, ActivityIndicator } from "react-native";
import firebase from 'firebase';

import * as Google from 'expo-google-app-auth';
import * as GoogleSignIn from 'expo-google-sign-in';
import * as Facebook from 'expo-facebook'

class LoginScreen extends Component {
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
            .signInWithEmailAndPassword(this.state.email, this.state.password)
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
                this.onSuccessfulLogin.bind(this)
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    async signInWithGoogle() {
        try {
            const result = await Google.logInAsync({
                androidClientId: '129041788657-cmlichseut01fvqk0n90l0e3et71e6fh.apps.googleusercontent.com',
                iosClientId: '129041788657-9rivq090nkqafvrfqlsoqtsn7kr1ljkg.apps.googleusercontent.com',
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
                this.onSuccessfulLogin.bind(this);
            }
        } catch ({ message }) {
            alert('login: Error:' + message);
        }
    }

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
                <Text>Codegy</Text>
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
                <Text>Log in with Email:</Text>
                <Button title="Log in"
                    onPress={() => this.signInWithEmail()} />
                <Button title="Log in with Google"
                    onPress={() => this.signInWithGoogle()}/>
                <Button title="Log in with Facebook"
                    onPress={() => this.signInWithFacebook()} />
                <Button title="Sign Up" onPress={() => this.props.navigation.navigate("SignUpScreen")} />
            </View>
        )
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});