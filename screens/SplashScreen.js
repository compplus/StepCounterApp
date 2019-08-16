import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class SplashScreen extends Component {

    render() {
        return <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Text style={styles.buttonText}>
          Sign in with Facebook
        </Text>
      </LinearGradient>
    };
}


var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });
