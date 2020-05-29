import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Settings from '../screens/header/settingsScreen'
import Header from '../shared/header'

const Stack = createStackNavigator()

export default function settingsNavigator({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Path'
      screenOptions={{
        headerStyle: {
          backgroundColor: 'royalblue',
          height: 100,
        },
        headerTintColor: "#fff",
      }}
    >
    <Stack.Screen 
        name='Settings' 
        component={Settings} 
        options={{ 
          headerTitle: () => <Header navigation={navigation} title="Settings" />,
        }}
      />
    </Stack.Navigator>
  );
}