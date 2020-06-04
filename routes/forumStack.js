import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ForumScreen from "../screens/main/ForumScreen";
import Header from '../shared/header'
import { headerOption } from '../shared/globalStyles'

const Stack = createStackNavigator()

export default function forumStackNav({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Forum'
      screenOptions={headerOption}
    >
      <Stack.Screen name='Forum' component={ForumScreen} 
        options={{ 
          headerLeft: () => <Header icon="menu" onPress={() => navigation.openDrawer()} />        }}
      />
    </Stack.Navigator>
  );
}