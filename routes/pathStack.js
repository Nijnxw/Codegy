import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PathScreen from "../screens/main/PathScreen";
import PathDetails from '../screens/details/pathDetails'
import Header from '../shared/header'
import { purpleBg } from '../shared/globalStyles'


const Stack = createStackNavigator()

export default function pathStackNav({ navigation }) {
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
      <Stack.Screen name='Path' component={PathScreen} 
        options={{ 
          headerTitle: () => <Header navigation={navigation} title="Path" /> 
        }}
      />
      <Stack.Screen name='PathDetails' component={PathDetails} />
    </Stack.Navigator>
  );
}