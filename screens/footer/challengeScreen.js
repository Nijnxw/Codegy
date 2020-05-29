import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ChallengeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Challenge screen</Text>
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