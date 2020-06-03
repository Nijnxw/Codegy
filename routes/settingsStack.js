import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Settings from '../screens/settingsScreen'
import Header from '../shared/header'
import { purpleBg } from '../shared/globalStyles'


const Stack = createStackNavigator()

export default function settingsStackNav({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Path'
      screenOptions={{
        headerStyle: {
          backgroundColor: purpleBg,
          height: 80,
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