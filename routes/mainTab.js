import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

// import HomeScreen from '../screens/footer/homeScreen''
import { ChallengeScreen, ForumScreen } from '../screens/mainScreens'
import PathStackNav from './pathStack'
import ArticleStackNav from './articleStack'
import { purpleBg } from '../shared/globalStyles'


const Tab = createMaterialBottomTabNavigator()

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Path"
      activeColor='white'
      barStyle={{ backgroundColor: purpleBg }}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen 
        name="Path" 
        component={PathStackNav} 
        options={{
          tabBarLabel: 'Path',
          tabBarIcon: ({ color }) => 
            <FontAwesome name="graduation-cap" size={20} color={color} />          
        }}
      />
      <Tab.Screen 
        name="Article" 
        component={ArticleStackNav}
        options={{
          tabBarLabel: 'Article',
          tabBarIcon: ({ color }) => 
            <FontAwesome name="newspaper-o" size={20} color={color} />
        }}
      />
      <Tab.Screen 
        name="Challenge" 
        component={ChallengeScreen}
        options={{
          tabBarLabel: 'Challenge',
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="notebook-multiple" size={20} color={color} />
        }}
      />
      <Tab.Screen 
        name="Forum" 
        component={ForumScreen} 
        options={{
          tabBarLabel: 'Path',
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="forum" size={20} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}