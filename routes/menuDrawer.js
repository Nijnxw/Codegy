import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import MainTab from './mainTab'
import ProfileScreen from '../screens/main/ProfileScreen'
import SettingsStack from './settingsStack'
import DrawerContent from './drawerContent'

const Drawer = createDrawerNavigator();

export default function MenuDrawerNav() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerContent={ props => <DrawerContent {...props} /> }
      >
        <Drawer.Screen name="Home" component={MainTab} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
