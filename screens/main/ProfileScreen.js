import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import { headerBg } from '../../shared/globalStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={headerBg} style={styles.header}>
        <MaterialCommunityIcons name="arrow-left" size={28} style={styles.icon}
          onPress={() => navigation.goBack()}  
        />
        <Text style={styles.headerText}>Profile</Text>
      </ImageBackground>
      <Text style={styles.titleText}>Profile screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  titleText: {
    textAlign: 'center',
    fontFamily: 'roboto-bold',
    fontSize: 30,
  }
});