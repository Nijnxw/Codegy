import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'

// Validate inputs
const reviewSchema = yup.object({
  firstName: yup.string()
    .required()
    .min(3),
  lastName: yup.string()
    .required()
    .min(3),
  username: yup.string()
    .required()
    .min(4),
  email: yup.string()
    .required()
    .email()
})

export default function EditProfileForm() {
  
  const init = { 
    firstName: '', 
    lastName: '', 
    username: '',
    email: '',
  }
  
  return (
    <View style={styles.container}>
      <Formik
        initialValues={init}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          console.log(values)
          actions.resetForm(); 
          {/* addReview(values); */}
        }}
      >
        {props => (
          <View>

            <Text style={styles.titleText}>EditProfileForm</Text>

            <TextInput
              style={styles.input}
              placeholder='First Name'
              onChangeText={props.handleChange('firstName')}
              value={props.values.firstName}
            />
            <Text style={styles.errorText}>{ props.touched.firstName && props.errors.firstName }</Text>

            <TextInput
              style={styles.input}
              placeholder='Last Name'
              onChangeText={props.handleChange('lastName')}
              value={props.values.lastName}
            />
            <Text style={styles.errorText}>{ props.touched.lastName && props.errors.lastName }</Text>

            <TextInput
              style={styles.input}
              placeholder='Username'
              onChangeText={props.handleChange('username')}
              value={props.values.username}
            />
            <Text style={styles.errorText}>{ props.touched.username && props.errors.username }</Text>

            <TextInput
              style={styles.input}
              placeholder='Email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
            <Text style={styles.errorText}>{ props.touched.email && props.errors.email }</Text>

            <Button title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
    </View>
    
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontFamily: 'orbitron-semibold',
    color: '#333',
    textAlign: 'center',
    padding: 10
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 10,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10, 
    marginTop: 6,
    textAlign: 'center'
  }
});