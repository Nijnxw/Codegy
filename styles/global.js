import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  titleText: {
    fontFamily: 'orbitron-semibold',
    fontSize: 18,
    color: '#333'
  },
  paragaph: {
    marginVertical: 8,
    marginHorizontal: 10,
    lineHeight: 20,
    textAlign: 'justify',
  }
})