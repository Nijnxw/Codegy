import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import ArticleCard from '../../components/article/ArticleCard'

// All the temp data i use to render, need to connect to firebase
import { articleData } from '../../shared/tempData'

export default function ArticleScreen({ navigation }) { 
  return (
    <View style={styles.container}>
      <FlatList
        data={articleData}
        renderItem={({ item }) => <ArticleCard item={item} navigation={navigation} /> }
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
})