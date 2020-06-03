import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { checkUserLoggedIn } from '../../utils/authentication/user.js';

class SplashScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});