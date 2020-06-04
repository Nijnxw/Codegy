import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeStackNav from './homeStack'
import PathStackNav from './pathStack'
import ArticleStackNav from './articleStack'
import ChallengeStackNav from './challengeStack'
import ForumStackNav from './forumStack'
import { purpleBg } from '../shared/globalStyles'


const Tab = createMaterialBottomTabNavigator()

export default function BottomTabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor='white'
      barStyle={{ backgroundColor: purpleBg }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStackNav} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => 
            <MaterialCommunityIcons name="home" size={20} color={color} />          
        }}
      />
      <Tab.Screen 
        name="Path" 
        component={PathStackNav} 
        options={{
          tabBarLabel: 'Path',
          tabBarIcon: ({ color }) => 
            <MaterialCommunityIcons name="notebook-multiple" size={20} color={color} />          
        }}
      />
      <Tab.Screen 
        name="Article" 
        component={ArticleStackNav}
        options={{
          tabBarLabel: 'Article',
          tabBarIcon: ({ color }) => 
            <MaterialCommunityIcons name="newspaper" size={20} color={color} />
        }}
      />
      <Tab.Screen 
        name="Challenge" 
        component={ChallengeStackNav}
        options={{
          tabBarLabel: 'Challenge',
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="calendar-multiple-check" size={20} color={color} />
        }}
      />
      <Tab.Screen 
        name="Forum" 
        component={ForumStackNav} 
        options={{
          tabBarLabel: 'Forum',
          tabBarIcon: ({ color }) =>
            <MaterialCommunityIcons name="forum" size={20} color={color} />
        }}
      />
    </Tab.Navigator>
  )
}