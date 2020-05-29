import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import firebase from 'firebase';

import { onSuccessfulLogin, onLoginFailure } from './login.js';

class EmailLogIn extends Component {
	state = { displayName: '', email: '', password: '', errorMessage: '', loading: false };

	signInWithEmail = async () => {
		await firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(onSuccessfulLogin(this.props.props))
			.catch(error => {
				let errorCode = error.code;
				let errorMessage = error.message;
				if (errorCode == 'auth/weak-password') {
					onLoginFailure.bind(this)('Weak Password!');
				} else {
					onLoginFailure.bind(this)(errorMessage);
				}
			});
	}

	render() {
		return (
			<View style={styles.container}>
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
			</View>
		);
	}
}

export default EmailLogIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});