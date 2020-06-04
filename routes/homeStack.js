import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "../screens/main/HomeScreen";
import Header from '../shared/header'
import { headerOption } from '../shared/globalStyles'


const Stack = createStackNavigator()

export default function homeStackNav({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Home'
      screenOptions={headerOption}
    >
      <Stack.Screen name='Home' component={HomeScreen} 
        options={{ 
          headerLeft: () => <Header icon='menu' onPress={() => navigation.openDrawer()} />
        }}
      />
      {/* <Stack.Screen name='PathDetails' component={PathDetails} /> */}
    </Stack.Navigator>
  );
}