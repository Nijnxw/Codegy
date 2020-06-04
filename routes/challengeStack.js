import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ChallengeScreen from "../screens/main/ChallengeScreen";
import Header from '../shared/header'
import { headerOption } from '../shared/globalStyles'

const Stack = createStackNavigator()

export default function challengeStackNav({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Challenge'
      screenOptions={headerOption}
    >
      <Stack.Screen name='Challenge' component={ChallengeScreen} 
        options={{ 
          headerLeft: () => <Header icon={"menu"} onPress={() => navigation.openDrawer()} />, 
        }}
      />
    </Stack.Navigator>
  );
}