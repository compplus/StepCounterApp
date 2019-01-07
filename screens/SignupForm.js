import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Images } from '../assets/assets'

export default class SignupForm extends Component {
  render() {
    return (
      <View style={styles.container}>

          <TextInput 
            placeholder="Email"
            placeholderTextColor="rgba(64,64,64,0.5)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}/>

          <TextInput 
            placeholder="Password"
            placeholderTextColor="rgba(64,64,64,0.5)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordConfirm.focus()}
            secureTextEntry={true}
            style={styles.input}
            ref={(input) => this.passwordInput = input}/>

          <TextInput 
            placeholder="Confirm Password"
            placeholderTextColor="rgba(64,64,64,0.5)"
            returnKeyType="go"
            secureTextEntry={true}
            style={styles.input}
            ref={(input) => this.passwordConfirm = input}/>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },

  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    color: '#FFF',
    paddingHorizontal: 15,
    borderRadius: 7
  },

  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'rgba(0,51,51,1)',
    paddingVertical: 15,
    borderRadius: 7
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '400',
    fontFamily: 'Gill Sans'
  }
});
