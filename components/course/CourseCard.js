import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, } from 'react-native'

export default function CourseCard({ item, navigation }) {
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('PathDetails', item)} 
      style={styles.cardContainer}
    >
      <View style={styles.iconContainer}>
        {/* Icon */}
      </View>
      <Text style={styles.itemText} numberOfLines={2}>{ item.title }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 115,
    height: 150,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: 'royalblue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'pink',
    borderRadius: 100,
  },
  itemText: {
    height: 45,
    paddingTop: 5,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'roboto-black'
  },
})