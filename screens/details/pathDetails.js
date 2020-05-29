import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function PathDetails({ route }) {

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'quicksand-bold'
  },
  details: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'quicksand-bold',
  }
})