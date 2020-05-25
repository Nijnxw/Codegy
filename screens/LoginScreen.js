import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

import { signInWithEmail } from '../utils/authentication/emailSignIn.js';
import { signInWithFacebook } from '../utils/authentication/facebookSignIn.js';
import { signInWithGoogle } from '../utils/authentication/googleSignIn.js';

class LoginScreen extends Component {
    state = { displayName: '', email: '', password: '', errorMessage: '', loading: false };

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
                    onPress={() => signInWithEmail.bind(this)} />
                <Button title="Log in with Google"
                    onPress={() => signInWithGoogle(this.props)}/>
                <Button title="Log in with Facebook"
                    onPress={() => signInWithFacebook()} />
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