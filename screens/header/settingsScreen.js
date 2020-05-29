import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

export default function Settings({ navigation }) {
  
  // Now i just use text but in future needs to be screens for Settings
  const [screens, setScreens] = useState([
    { text: 'Edit Profile', key: '10' },
    { text: 'Change Password', key: '11' },
    { text: 'Terms of Conditions', key: '12' },
    { text: 'Notification Settings', key: '13' },
    { text: 'Sign Out', key: '14' },
  ])
  
  return (
    <View style={styles.container}>
      <FlatList
        data={screens}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(item.text)} >
            <Text style={styles.item}>{ item.text }</Text>
          </TouchableOpacity>
        )}
      />
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
    fontFamily: 'orbitron-semibold',
    fontSize: 18,
    color: '#333'
  },
  item: {
    marginTop: 15,
    paddingLeft: 30,
    padding: 10,
    backgroundColor: 'lavender',
    fontSize: 18,
    fontFamily: 'quicksand-bold'
  }
})