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
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'roboto-bold',
    fontSize: 20,
  },
})