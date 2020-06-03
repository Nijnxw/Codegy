import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import firebase from 'firebase';

import SplashScreen from '../screens/welcome/splashScreen';
import LoginScreen from '../screens/welcome/loginScreen';
// import HomeScreen from '../screens/main/homeScreen';
import SignUpScreen from '../screens/welcome/signUpScreen';
import MenuDrawerNav from './menuDrawer'

const Stack = createStackNavigator()

export default function loginNavigator() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userData = firebase.database().ref('Users/' + user.uid).once('value').then(
          () => {
            setLoading(false)
            setUser(userData)
          }
        );
      } else {
        setUser(null)
        setLoading(false)
      }
    });
  }, []);

  if (loading) {
    return (
      <SplashScreen />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          user ? (
            <Stack.Screen name="Home">
              {props => <MenuDrawerNav {...props} extraData={user} />}
            </Stack.Screen>
          ) : (
              <>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
              </>
            )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}