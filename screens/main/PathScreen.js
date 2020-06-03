import React from 'react'
import { View, StyleSheet } from 'react-native'
import CourseList from '../../components/course/CourseList'

// All the temp data i use to render, need to connect to firebase
import { coursesData } from '../../shared/tempData'

export default function PathScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CourseList title='Career' data={coursesData} navigation={navigation} />
      <CourseList title='Path' data={coursesData} navigation={navigation} />
      <CourseList title='Language' data={coursesData} navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})