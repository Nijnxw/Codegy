import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ForumScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Forum screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'orbitron-semibold',
    fontSize: 18,
    color: '#eee'
  }
})