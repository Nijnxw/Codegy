import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from '../screens/main/SettingsScreen'
import Header from '../shared/header'
import { headerOption } from '../shared/globalStyles'


const Stack = createStackNavigator()

export default function settingsStackNav({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Path'
      screenOptions={headerOption}
    >
      <Stack.Screen 
        name='Settings' 
        component={SettingsScreen} 
        options={{ 
          headerLeft: () => <Header icon='arrow-back' onPress={() => navigation.navigate('Main')} />, 
        }}
      />
    </Stack.Navigator>
  );
}