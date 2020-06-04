import React, { useState } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  ImageBackground, 
  Dimensions, 
  Image, 
  Button, 
  Modal, 
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
 } from 'react-native'
import { headerBg } from '../../shared/globalStyles'
import { MaterialIcons } from '@expo/vector-icons';

import EditProfileForm from '../../components/EditProfileForm'

// Temp Data
import { profileDetails } from '../../shared/tempData'

export default function ProfileScreen({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons name='close' size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} 
            />
            <EditProfileForm />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <ImageBackground source={headerBg} style={styles.headerBg}>
        <View style={styles.header}>
          <MaterialIcons name="arrow-back" size={28} style={styles.icon}
            onPress={() => navigation.navigate('Main')}  
          />
          <Text style={styles.headerText}>Profile</Text>
        </View>

        <View style={styles.profileDetailsContainer}>
          <View style={styles.profilePicContainer}>
            <Image style={styles.profilePic} source={profileDetails['profile pic']} />
          </View>
          <Text style={styles.name}>{ profileDetails.name }</Text>
          <Text style={styles.username}>@{ profileDetails.username }</Text>
          <Button style={styles.button} title="Edit Profile" onPress={() => setModalOpen(true)} />
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.titleText}>Profile screen</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'  
  },
  
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 5,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  
  headerBg: {
    height: 250,
  },
  header: {
    height: 60,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'orbitron-semibold',
    fontSize: 30,
    color: '#fff',
    letterSpacing: 1,
    paddingTop: 15,
  },
  icon: {
    position: 'absolute',
    left: 20,
    color: '#fff',
    paddingTop: 15,
  },

  profileDetailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicContainer: {
    borderColor: '#fff',
    borderRadius: 100,
    borderWidth: 3,
    margin: 2,
  },
  profilePic: {
    width: 48,
    aspectRatio: 1,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'roboto-bold' 
  },
  username: {
    color: 'white',
    marginBottom: 5,
  },
  button: {
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'roboto-bold',
    fontSize: 30,
  }
});