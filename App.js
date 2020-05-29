import React, { useState } from 'react';
import { View, Text } from 'react-native'

import{ AppLoading } from 'expo';
import * as Font from 'expo-font';

import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook'
import { firebaseConfig } from './config.js'

// Config firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);
Facebook.initializeAsync('254052149144768', 'Codegy');

// Screens
import RootDrawerNavigator from './routes/drawer'

// Fonts for our App
const getFonts = () => Font.loadAsync({
  'asap-italic' : require('./assets/fonts/Asap-Italic.ttf'),
  'asap-mediumitalic' : require('./assets/fonts/Asap-MediumItalic.ttf'),
  'orbitron-regular': require('./assets/fonts/Orbitron-Regular.ttf'),
  'orbitron-semibold': require('./assets/fonts/Orbitron-SemiBold.ttf'),
  'quicksand-regular': require('./assets/fonts/Quicksand-Regular.ttf'),
  'quicksand-bold': require('./assets/fonts/Quicksand-Bold.ttf'),
})

export default function App() {
  // Loading Fonts for App
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      RootDrawerNavigator()
    )
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => console.log('font loading error!')}
      />
    )
  }
}

