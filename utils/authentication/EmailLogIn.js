import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import firebase from 'firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function EmailLogIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	signInWithEmail = async () => {
		await firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
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
				<Text>Log in with Email:</Text>
				<Button title="Log in"
					onPress={() => this.signInWithEmail()} />
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