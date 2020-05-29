import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import EmailLogIn from '../utils/authentication/EmailLogIn.js';
import { signInWithFacebook } from '../utils/authentication/facebookSignIn.js';
import { signInWithGoogle } from '../utils/authentication/googleSignIn.js';

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Codegy</Text>
                <EmailLogIn props={this.props} />
                <Button title="Log in with Google"
                    onPress={() => signInWithGoogle(this.props)}/>
                <Button title="Log in with Facebook"
                    onPress={() => signInWithFacebook(this.props)} />
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