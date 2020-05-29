import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function articleDetails({ route, navigation }) {

  const { title, details } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{ title }</Text>
      <Text style={styles.details}>{ details }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    paddingLeft: 15,
    fontSize: 35,
    fontFamily: 'quicksand-bold'
  },
  details: {
    paddingHorizontal: 15,
    textAlign: 'justify',
    fontSize: 15,
    fontFamily: 'quicksand-bold',
  }
})