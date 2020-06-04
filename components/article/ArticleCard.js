import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ArticleCard({ item, navigation }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ArticleDetails', item )} >
      <Image source={ item.image } style={styles.image}/>
      <View style={styles.textContainer}>
        <View style={styles.articleHeader}>
          <Text style={styles.title} numberOfLines={2} >{ item.title }</Text>
          <MaterialCommunityIcons name="heart-outline" size={24} style={styles.likeIcon} />
          <Text style={styles.likes}>{ item.likes }</Text>
        </View>
        <View style={styles.articleDetails}>
          <Image style={styles.profilePic} source={ item.userPic } />
          <Text style={styles.details}>by { item.userID } | { item.date }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: Dimensions.get('window').height / 6,
    backgroundColor: "lavender",
    borderWidth: 1.5,
    borderColor: 'royalblue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'contain'
  },
  textContainer: {
    flex: 2,
    flexDirection: 'column',
  },
  articleHeader: {
    flex: 1,
    flexDirection: 'row',    
    alignItems: 'center',
    margin: 2,
  },
  title: {
    alignItems: 'center',
    width: 195,
    paddingLeft: 5,
    fontSize: 18,
    fontFamily: 'quicksand-bold'
  },  
  likeIcon: {
    color: "red",
  },
  likes: {
    fontFamily: 'roboto-regular',
    paddingHorizontal: 2,
  },
  articleDetails: {
    flexDirection: 'row',
    margin: 2,
    alignItems: 'center',
    paddingLeft: 5,
  },
  profilePic: {
    borderRadius: 100,
    resizeMode: 'contain',
    height: 45
  },
  details: {
    paddingLeft: 2,
    fontFamily: 'roboto-regular'
  },
})