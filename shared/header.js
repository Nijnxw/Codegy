import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title }) {
  return (
    <View style={styles.header}>
      <MaterialIcons name="menu" size={30} style={styles.icon}
        onPress={() => navigation.openDrawer()}  
      />
      <Text style={styles.headerText}>{ title }</Text>
      <MaterialIcons name="face" size={30} style={styles.profile}
        onPress={() => console.log("Go to profile screen")} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'orbitron-semibold',
    fontSize: 30, 
    color: '#fff',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 10,
    color: '#fff',    
  },
  profile: {
    position: 'absolute',
    right: 10,
    color: '#fff',
  }
});