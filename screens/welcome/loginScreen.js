import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import EmailLogIn from '../../utils/authentication/EmailLogIn';
import { signInWithFacebook } from '../../utils/authentication/facebookSignIn';
import { signInWithGoogle } from '../../utils/authentication/googleSignIn';

export default function LoginScreen({ navigation }) {

	return (
		<View style={styles.container}>
			<Text>Codegy</Text>
			<EmailLogIn />
			<Button title="Forgot Password?" onPress={() => navigation.navigate("ForgotPassword")} />
			<Button title="Log in with Google"
				onPress={() => signInWithGoogle()} />
			<Button title="Log in with Facebook"
				onPress={() => signInWithFacebook()} />
			<Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
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
	logoTitle: {
		fontFamily: 'orbitron-semibold',
	}
});