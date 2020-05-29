import { View, Text, StyleSheet, Button } from "react-native";

import EmailLogIn from '../../utils/authentication/EmailLogIn';
import { signInWithFacebook } from '../../utils/authentication/facebookSignIn';
import { signInWithGoogle } from '../../utils/authentication/googleSignIn';

export default function LoginScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.logoTitle}>Codegy</Text>
			<EmailLogIn props={this.props} />
			<Button title="Log in with Google"
				onPress={() => signInWithGoogle(this.props)}/>
			<Button title="Log in with Facebook"
				onPress={() => signInWithFacebook(this.props)} />
			<Button title="Sign Up" onPress={() => this.props.navigation.navigate("SignUpScreen")} />
		</View>
	)
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