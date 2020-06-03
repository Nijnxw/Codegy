import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  headerContainer: {
    padding: 10,
    backgroundColor: 'royalblue'
  },
  titleText: {
    fontFamily: 'orbitron-semibold',
    fontSize: 18,
    color: '#eee',
    textAlign: 'center'
  },
  paragraph: {
    marginVertical: 8,
    marginHorizontal: 10,
    lineHeight: 20,
    textAlign: 'justify',
    fontFamily: 'roboto-regular',
  }
})

export const headerBg = require('../assets/background.png')
export const purpleBg = '#4926a4'