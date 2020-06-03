import React, { useState, Component } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import firebase from 'firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function EmailSignUp({ navigation }) {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	signUpWithEmail = async () => {
		if (password !== confirmPassword) {
			alert("Passwords don't match.")
			return
		}
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch(error => {
				let errorCode = error.code;
				let errorMessage = error.message;
				if (errorCode == 'auth/weak-password') {
					alert('Weak Password!');
				} else {
					alert(errorMessage);
				}
			});
	}

	return (
		<View style={styles.container}>
			<KeyboardAwareScrollView
				style={{ flex: 1, width: '100%' }}
				keyboardShouldPersistTaps="always">
				<View>
					<TextInput
						style={styles.input}
						placeholder="Full Name"
						returnKeyType="next"
						textContentType="name"
						value={fullName}
						onChangeText={name => setFullName(name)}
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="Email"
						returnKeyType="next"
						keyboardType="email-address"
						textContentType="emailAddress"
						value={email}
						onChangeText={email => setEmail(email)}
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="Password"
						returnKeyType="done"
						textContentType="newPassword"
						secureTextEntry={true}
						value={password}
						onChangeText={password => setPassword(password)}
						autoCapitalize="none"
					/>
					<TextInput
						style={styles.input}
						placeholder="Confirm Password"
						returnKeyType="done"
						textContentType="newPassword"
						secureTextEntry={true}
						value={confirmPassword}
						onChangeText={password => setConfirmPassword(password)}
						autoCapitalize="none"
					/>
				</View>
				<Button title="Create Account" onPress={() => this.signUpWithEmail()} />
			</KeyboardAwareScrollView>
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