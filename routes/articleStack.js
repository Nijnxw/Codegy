import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ArticleScreen from "../screens/main/ArticleScreen";
import ArticleDetails from '../screens/details/articleDetails'
import Header from '../shared/header'
import { headerOption } from '../shared/globalStyles'

const Stack = createStackNavigator()

export default function pathStackNav({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Article'
      screenOptions={headerOption}
    >
      <Stack.Screen name='Article' component={ArticleScreen} 
        options={{ 
          headerLeft: () => <Header icon={"menu"} onPress={() => navigation.openDrawer()} />,
        }}
      />
      <Stack.Screen name='ArticleDetails' component={ArticleDetails} />
    </Stack.Navigator>
  );
}