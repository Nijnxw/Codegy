import React, { Component } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import firebase from 'firebase';

import { onLoginFailure, onSuccessfulLogin } from './login.js';

class EmailSignUp extends Component {
	state = { displayName: '', email: '', password: '', errorMessage: '', loading: false };

	signUpWithEmail = async () => {
		await firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
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
		return(
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
				<Button title="Sign Up" onPress={() => this.signUpWithEmail()} />
			</View>
		);
	}
}

export default EmailSignUp;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});