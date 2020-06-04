import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import CourseCard from './CourseCard'

export default function CourseList({ title, data, navigation }) {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.contentTitle}>{ title }</Text>
      <FlatList
        style={styles.list}
        data={data}
        horizontal={true}
        renderItem={({ item }) => <CourseCard navigation={navigation} item={item} />}
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
    padding: 2,
  },
  contentTitle: {
    fontFamily: 'roboto-black',
    fontSize: 20,
    paddingLeft: 10,
    paddingVertical: 3,
  },
})