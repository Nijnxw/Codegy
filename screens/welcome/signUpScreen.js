import React, { Component } from "react";
import { View, StyleSheet, Button } from "react-native";

import EmailSignUp from '../../utils/authentication/EmailSignUp.js';
import { signUpWithFacebook } from '../../utils/authentication/facebookSignIn.js';
import { signUpWithGoogle } from '../../utils/authentication/googleSignIn.js';

class SignUpScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <EmailSignUp props={this.props}/>
                <Button title="Sign up with FaceBook" onPress={() => signUpWithFacebook(this.props)} />
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