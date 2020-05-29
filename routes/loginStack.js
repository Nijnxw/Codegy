import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import SplashScreen from '../screens/welcome/splashScreen';
import LoginScreen from '../screens/welcome/loginScreen';
import HomeScreen from '../screens/footer/homeScreen';
import SignUpScreen from '../screens/welcome/signUpScreen';

const Stack = createStackNavigator()

export default function loginNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen 
          name='SplashScreen' 
          component={SplashScreen} 
          options={{ title: 'About GameZone' }} 
        />
        <Stack.Screen 
          name='LoginScreen' 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name='SignUpScreen' 
          component={SignUpScreen} 
          options={{ title: 'Sign Up' }} 
        />
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}