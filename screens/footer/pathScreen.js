import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

export default function PathScreen({ navigation }) {
  // Now i just use text but in future needs to be Paths
  const [paths, setPaths] = useState([
    { title: 'Artificial Intelligence', details: 'A Course on Artificial Intelligence by XXX', key: '1' },
    { title: 'Machine Learning', details: 'A Course on Machine Learning by XXX', key: '3' },
    { title: 'OOP', details: 'A Course on OOP by XXX', key: '2' },
    { title: 'Web Development', details: 'A Course on Web Development by XXX', key: '4' },
    { title: 'Mobile Development', details: 'A Course on Mobile Development by XXX', key: '5' },
  ])
  
  return (
    <View style={styles.container}>
      <FlatList
        data={paths}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PathDetails', item )} >
            <Text style={styles.item}>{ item.title }</Text>
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
  item: {
    margin: 10,
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: 'lavender',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'quicksand-bold'
  }
})