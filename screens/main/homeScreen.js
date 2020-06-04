import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../../shared/globalStyles";

export default function HomeScreen() {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>Home Screen</Text>
		</View>
	)
}