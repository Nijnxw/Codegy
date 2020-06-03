import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import{ AppLoading } from 'expo';
import * as Font from 'expo-font';

import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook'
import { firebaseConfig, facebookConfig } from './config.js'

// Config firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);
Facebook.initializeAsync(facebookConfig, 'Codegy');

// Screens
import MenuDrawerNav from './routes/menuDrawer'
import LoginNavigator from './routes/loginStack';

// Fonts for our App
const getFonts = () => Font.loadAsync({
  'asap-italic' : require('./assets/fonts/Asap-Italic.ttf'),
  'asap-mediumitalic' : require('./assets/fonts/Asap-MediumItalic.ttf'),
  'orbitron-regular': require('./assets/fonts/Orbitron-Regular.ttf'),
  'orbitron-semibold': require('./assets/fonts/Orbitron-SemiBold.ttf'),
  'quicksand-regular': require('./assets/fonts/Quicksand-Regular.ttf'),
  'quicksand-bold': require('./assets/fonts/Quicksand-Bold.ttf'),
  'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
})

export default function App() {
  // Loading Fonts for App
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      < LoginNavigator />
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

