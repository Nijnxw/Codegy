import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import pathNavigator from './pathStack';
import articleNavigator from './articleStack'
import settingsNavigator from './settingsStack';
import Challenges from '../screens/footer/challengeScreen'
import Forum from '../screens/footer/forumScreen'

const Drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Path">
        <Drawer.Screen name="Path" component={pathNavigator} />
        <Drawer.Screen name="Article" component={articleNavigator} />
        <Drawer.Screen name="Settings" component={settingsNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}