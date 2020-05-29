import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { addUser, userSignOut } from '../../utils/authentication/user.js';

class HomeScreen extends Component {
	state = { user: {} };
	componentDidMount() {
		addUser.bind(this);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>HomeScreen</Text>
				<Button title="Sign out" onPress={userSignOut} />
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