import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import firebase from 'firebase';

class HomeScreen extends Component {
    state = { user: {} };
    componentDidMount() {
        this.addUser();
    }

    addUser() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                this.setState({ user: user });
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <Button title="Sign out" onPress={() => {
                    firebase.auth().signOut();}} />
            </View>
        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});