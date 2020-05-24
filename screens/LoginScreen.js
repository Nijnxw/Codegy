import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as Google from 'expo-google-app-auth';

class LoginScreen extends Component {
    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                androidClientId: '129041788657-cmlichseut01fvqk0n90l0e3et71e6fh.apps.googleusercontent.com',
                iosClientId: '129041788657-9rivq090nkqafvrfqlsoqtsn7kr1ljkg.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Log in:</Text>
                <Button title="Log in with Google"
                    onPress={() => this.signInWithGoogleAsync()}/>
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