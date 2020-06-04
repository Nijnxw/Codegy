import React from 'react'
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ icon, onPress }) {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <MaterialIcons name={icon} size={28} style={styles.iconImg} onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    height: '100%',
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImg: {
    position: 'absolute',
    left: 20,
    color: '#fff',
  },
});