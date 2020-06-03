import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import CourseCard from './CourseCard'

export default function CourseList({ title, data, navigation }) {
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