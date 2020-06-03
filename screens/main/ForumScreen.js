import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

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
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'roboto-bold',
    fontSize: 20,
  },
})