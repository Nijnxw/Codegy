import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ArticleScreen from "../screens/footer/articleScreen";
import ArticleDetails from '../screens/details/articleDetails'
import Header from '../shared/header'

const Stack = createStackNavigator()

export default function articleNavigator({ navigation }) {
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
      <Stack.Screen name='Article' component={ArticleScreen} 
        options={{ 
          headerTitle: () => <Header navigation={navigation} title="Article" /> 
        }}
      />
      <Stack.Screen name='ArticleDetails' component={ArticleDetails} />
    </Stack.Navigator>
  );
}