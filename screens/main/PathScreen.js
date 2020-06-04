import React from 'react'
import { View } from 'react-native'
import { globalStyles } from '../../shared/globalStyles'
import CourseList from '../../components/course/CourseList'

// All the temp data i use to render, need to connect to firebase
import { coursesData } from '../../shared/tempData'

export default function PathScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <CourseList title='Career' data={coursesData} navigation={navigation} />
      <CourseList title='Path' data={coursesData} navigation={navigation} />
      <CourseList title='Language' data={coursesData} navigation={navigation} />
    </View>
  )
}
