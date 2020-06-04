import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase';

export default function ForgotPassword({navigation}) {
    const [email, setEmail] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const reset = async () => {
        setShowLoading(true);
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            alert("sent!")
            setShowLoading(false);
        } catch (error) {
            setShowLoading(false);
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 28, height: 50 }}>Reset Password!</Text>
                </View>
                <View style={styles.subContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Your Email'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.subContainer}>
                    <Button
                        style={styles.textInput}
                        title="Reset"
                        onPress={() => reset()} />
                </View>
                <View style={styles.subContainer}>
                    <Button
                        style={styles.textInput}
                        title="Back to Login"
                        onPress={() => {
                            navigation.navigate('Login');
                        }} />
                </View>
                {showLoading &&
                    <View style={styles.activity}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        height: 400,
        padding: 20
    },
    subContainer: {
        marginBottom: 20,
        padding: 5,
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 18,
        margin: 5,
        width: 200
    },
})
