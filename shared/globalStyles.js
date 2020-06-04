import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 5,
  },
  content: {
    padding: 40,
  },
  headerContainer: {
    padding: 10,
    backgroundColor: 'royalblue'
  },
  titleText: {
    textAlign: 'center',
    color: '#333',
    fontFamily: 'roboto-black',
    fontSize: 20,
  },
  paragraph: {
    marginVertical: 8,
    marginHorizontal: 10,
    lineHeight: 20,
    textAlign: 'justify',
    fontFamily: 'roboto-regular',
  }
})

export const headerOption = {
  headerStyle: {
    backgroundColor: '#6a51ae',
    height: 60,
  },
  headerTintColor: "#fff",
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'orbitron-semibold',
    fontSize: 30,
  }
}

export const headerBg = require('../assets/background.png')
export const purpleBg = '#6a51ae'
export const purpleBg2 = '#4926a4'