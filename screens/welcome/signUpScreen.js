import React from "react";
import { View, StyleSheet, Button } from "react-native";

import EmailSignUp from '../../utils/authentication/EmailSignUp.js';
import { signUpWithFacebook } from '../../utils/authentication/facebookSignIn.js';
import { signUpWithGoogle } from '../../utils/authentication/googleSignIn.js';

export default function SignUpScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <EmailSignUp />
            <Button title="Sign up with FaceBook" onPress={() => signUpWithFacebook()} />
            <Button title="Sign up with Google" onPress={() => signUpWithGoogle()} />
            <Button title="Already have an account?" onPress={() => {
                navigation.navigate('Login');
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});