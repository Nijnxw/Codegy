import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { CourseList } from '../components/Course'

// All the temp data i use to render, need to connect to firebase
import { coursesData } from '../shared/tempData'

export function PathScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <CourseList title="Career" data={coursesData} navigation={navigation} />
      <CourseList title="Path" data={coursesData} navigation={navigation} />
      <CourseList title="Language" data={coursesData} navigation={navigation} />
    </View>
  )
}

export function ArticleScreen({ navigation }) {
  // Now i just use text but in future needs to be Paths
  const randText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet autem necessitatibus. Dicta beatae veniam aliquam sit fuga ea voluptates corporis necessitatibus labore, laborum odio deleniti perferendis rem incidunt velit?'
  const [articles, setArticles] = useState([
    { title: 'Artificial Intelligence breackthrough!!', details: randText, key: '21' },
    { title: 'What is Computer Science?', details: randText, key: '22' },
    { title: 'How to start my programming journey', details: randText, key: '23' },
    { title: 'Tips and Tricks to Debug', details: randText, key: '24' },
    { title: 'Advice for beginners', details: randText, key: '25' },
  ])
  
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ArticleDetails', item )} >
            <Text style={styles.item}>{ item.title }</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export function ChallengeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Challenge screen</Text>
    </View>
  )
}

export function ForumScreen() {
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
  item: {
    margin: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: 'lavender',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'quicksand-bold'
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'roboto-bold',
    fontSize: 20,
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