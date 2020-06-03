import React from 'react'
import { StyleSheet, Text, ImageBackground, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { headerBg } from './globalStyles'

export default function Header({ navigation, title }) {
  return (
    <ImageBackground source={headerBg} style={styles.header}>
      <MaterialIcons name="menu" size={28} style={styles.icon}
        onPress={() => navigation.openDrawer()}  
      />
      <Text style={styles.headerText}>{ title }</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    height: 80,
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -16,
    marginTop: -24,
  },
  headerText: {
    fontFamily: 'orbitron-semibold',
    fontSize: 30,
    color: '#fff',
    letterSpacing: 1,
    paddingTop: 15,
  },
  icon: {
    position: 'absolute',
    left: 20,
    color: '#fff',
    paddingTop: 15,
  },
});