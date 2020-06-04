import React, { useState } from "react";
import firebase from 'firebase';
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { userSignOut } from '../../utils/authentication/user.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function profileScreen({ navigation }) {
    const[fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                } else if (errorCode == 'auth/email-already-in-use') {
                    alert('An account with this email already exists');
                } else if (errorCode == 'auth/invalid-email') {
                    alert('Invalid email. Please provide an actual email.');
                } else {
                    alert(errorMessage);
                }
            });
    }

    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <Button title="Sign out" onPress={userSignOut} />
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
                        placeholder="Username"
                        returnKeyType="next"
                        textContentType="username"
                        value={username}
                        onChangeText={username => setUsername(username)}
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
                </View>
                <Button title="Update Profile" onPress={() => this.signUpWithEmail()} />
            </KeyboardAwareScrollView>
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
});