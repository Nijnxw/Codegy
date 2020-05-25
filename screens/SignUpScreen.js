import React, { Component } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

import { signUpWithEmail } from '../utils/authentication/emailSignIn.js';
import { signUpWithFacebook } from '../utils/authentication/facebookSignIn.js';
import { signUpWithGoogle } from '../utils/authentication/googleSignIn.js';

class SignUpScreen extends Component {
    state = { displayName: '', email: '', password: '', errorMessage: '', loading: false };

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
                <Button title="Sign Up" onPress={() => signUpWithEmail.bind(this)} />
                <Button title="Sign up with FaceBook" onPress={() => signUpWithFacebook()} />
                <Button title="Sign up with Google" onPress={() => signUpWithGoogle()} />
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