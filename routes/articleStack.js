import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ArticleScreen from "../screens/main/ArticleScreen";
import ArticleDetails from '../screens/details/articleDetails'
import Header from '../shared/header'
import { purpleBg } from '../shared/globalStyles'

const Stack = createStackNavigator()

export default function pathStackNav({ navigation }) {
  return (
    <Stack.Navigator initialRouteName='Article'
      screenOptions={{
        headerStyle: {
          backgroundColor: purpleBg,
          height: 80,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name='Article' component={ArticleScreen} 
        options={{ 
          headerTitle: () => <Header navigation={navigation} title="Article" /> 
        }}
      />
      <Stack.Screen name='ArticleDetails' component={ArticleDetails} />
    </Stack.Navigator>
  );
}