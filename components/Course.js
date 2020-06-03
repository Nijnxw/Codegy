import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'

export default function CourseCard({ item, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('PathDetails', item)} style={styles.cardContainer}>
      <View style={styles.iconContainer}>
        {/* Icon */}
      </View>
      <Text style={styles.itemText} numberOfLines={2}>{ item.title }</Text>
    </TouchableOpacity>
  )
}

export function CourseList({ title, data, navigation }) {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.sectionText}>{ title }</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <CourseCard navigation={navigation} item={item} />}
        horizontal={true}
      />
    </View>
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
  listContainer: {
    flex: 1,
    borderColor:'#333',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
  },
  sectionText: {
    fontFamily: 'roboto-bold',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 5,
  }
})