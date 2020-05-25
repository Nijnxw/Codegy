import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';

import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook'
import { firebaseConfig } from './config.js'

firebase.initializeApp(firebaseConfig);
Facebook.initializeAsync('254052149144768', 'Codegy');

export default function App() {
  return (
    <AppNavigator/>
  );
}

const AppSwitchNavigator = createSwitchNavigator({
  SplashScreen,
  LoginScreen,
  SignUpScreen,
  HomeScreen
},
{
  initialRouteName: 'SplashScreen'
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
