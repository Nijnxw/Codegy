import React from 'react'
import { View, FlatList } from 'react-native'
import { globalStyles } from '../../shared/globalStyles'
import ArticleCard from '../../components/article/ArticleCard'

// All the temp data i use to render, need to connect to firebase
import { articleData } from '../../shared/tempData'

export default function ArticleScreen({ navigation }) { 
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={articleData}
        renderItem={({ item }) => <ArticleCard item={item} navigation={navigation} /> }
      />
    </View>
  )
}
