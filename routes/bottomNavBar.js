import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import HomeScreen from '../screens/footer/homeScreen'
import PathScreen from '../screens/footer/pathScreen'
import ArticleScreen from '../screens/footer/articlesScreen'
import ChallengeScreen from '../screens/footer/challengeScreen'
import ForumScreen from '../screens/footer/forumScreen'

const Tab = createMaterialBottomTabNavigator()

export default function BottomNavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
       initialRouteName="Path"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
      >
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
        <Tab.Screen name="Path" component={PathScreen} />
        <Tab.Screen name="Article" component={ArticleScreen} />
        <Tab.Screen name="Challenge" component={ChallengeScreen} />
        <Tab.Screen name="Forum" component={ForumScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}