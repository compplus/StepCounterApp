import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground,  KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Images } from '../assets/assets'
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
		<ImageBackground source={Images['background']} style={styles.container}>
			{/*<TouchableWithoutFeedback onPress={()=>this.props.go(1)}>
				<Text style={styles.Name}>Login</Text>
			</TouchableWithoutFeedback>
			<TouchableWithoutFeedback onPress={()=>this.props.go(3)}>
				<Text style={styles.Name}>Signup</Text>
			</TouchableWithoutFeedback>*/}

      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={styles.loginWrapper}>

          <TouchableWithoutFeedback onPress={()=>this.props.go(1)}>
            <Text style={styles.title}>Log in to your account</Text>
          </TouchableWithoutFeedback>
        
          <View>
            <LoginForm />
          </View>

          <View style={styles.signupWrapper}>
            <Text style={styles.bottomText}>Don't have an account?  </Text>
            <TouchableOpacity>
              <Text style={styles.signupText}>Sign up.</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
              <Text style={styles.forgotpwText}>Forgot password?</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
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

  wrapper: {
    flex: 1
  },

  loginWrapper: {
    flexGrow: 1,
    justifyContent: 'center'
  },

  title: {
    fontSize: 35,
    textAlign: 'center',
	  color: 'white',
    fontWeight: '400',
    width: 300,
    fontFamily: 'Gill Sans'
  },

  signupWrapper: {
    justifyContent: 'center',
    flexDirection: "row"
  },

  bottomText: {
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Gill Sans'
  },

  signupText: {
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Gill Sans',
    fontWeight: '600'
  },

  forgotpwText: {
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Gill Sans',
    marginTop: 10
  }

});
