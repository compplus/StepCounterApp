import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableWithoutFeedback,ImageBackground} from 'react-native';
import {Images} from '../assets/assets'

export default class Login extends Component {
  render() {
    return (
		<ImageBackground source={Images['background']} style={styles.container}>
			<TouchableWithoutFeedback onPress={()=>this.props.go(1)}>
				<Text style={styles.Name}>Login</Text>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={()=>this.props.go(3)}>
				<Text style={styles.Name}>Signup</Text>
			</TouchableWithoutFeedback>
		</ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Name: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
	color:'white'
  }
});
