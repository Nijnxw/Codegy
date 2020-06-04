import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'

export default function CourseCard({ item, navigation }) {
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('PathDetails', item)} 
      style={styles.cardContainer}
    >
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={ item.icon } />
      </View>
      <Text style={styles.itemText} numberOfLines={2}>{ item.title }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 3.4,
    height: '95%',
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: 'royalblue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    padding: 2,
  },
  iconContainer: {
    flex: 2,
    marginTop: 3,
    width: '80%',
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: '#fdfd96',
  },
  icon: {
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain'
  },
  itemText: {
    flex: 1,
    height: "100%",
    paddingTop: 5,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'roboto-bold',
    color: 'midnightblue',
  },
})