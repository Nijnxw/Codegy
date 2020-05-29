import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PathScreen from "../screens/footer/pathScreen";
import PathDetails from '../screens/details/pathDetails'
import Header from '../shared/header'

const Stack = createStackNavigator()

export default function pathNavigator({ navigation }) {
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
      <Stack.Screen name='Path' component={PathScreen} 
        options={{ 
          headerTitle: () => <Header navigation={navigation} title="Path" /> 
        }}
      />
      <Stack.Screen name='PathDetails' component={PathDetails} />
    </Stack.Navigator>
  );
}