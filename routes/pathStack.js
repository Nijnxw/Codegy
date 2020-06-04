import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PathScreen from "../screens/main/PathScreen";
import PathDetails from '../screens/details/pathDetails'
import Header from '../shared/header'
import { headerOption } from '../shared/globalStyles'


const Stack = createStackNavigator()

export default function pathStackNav({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Path'
      screenOptions={headerOption}
    >
      <Stack.Screen name='Path' component={PathScreen} 
        options={{ 
          headerLeft: () => <Header icon="menu" onPress={() => navigation.openDrawer()} />        }}
      />
      <Stack.Screen name='PathDetails' component={PathDetails} />
    </Stack.Navigator>
  );
}