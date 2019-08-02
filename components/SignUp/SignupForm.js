import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Images } from '../../assets/assets';
import { sign_up } from '../../api';
import Input from "react-native-input-validation";
import {DismissKeyboard} from '../GeneralUserInput/DismissKeyboard';

export default class SignupForm extends Component {
    constructor(props){
    	super(props);
    	this.state = {
	        email: '',
	        password1: '',
	        password2: '',
	        emailValid: false,
	        password1Valid: false,
	        password2Valid: false,
	        allValid: false
	    };
    }

	passwordConfirmValidator(a, b){
		return a == b;
	}

	render() {
		const submit = _ => {
			sign_up (
				{ email: this.state.email,
				  password: this.state.password1 })
			.catch (err => {
				alert (err) }) }

		return (
      <DismissKeyboard>
			<View style={styles.container}>
				<Input
					placeholder="Email"
					placeholderTextColor="rgba(64,64,64,0.5)"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					autoCapitalize="none"
					autoCorrect={false}
					style={styles.input}
					onChangeText={(email) => this.setState({email: email})}
					inputRef={(input) => input && (this.emailInput = input)}
					validator="^[-.\w]+@([\w-]+\.)*(hku.hk){1}$"
					onValidatorExecuted={(isValid) => {this.setState({emailValid: isValid && this.state.email != ''})
												this.setState((state) => ({allValid: state.emailValid && state.password1Valid && state.password2Valid}))
												console.log(this.state.email, this.state.allValid, this.state.emailValid, this.state.password1Valid, this.state.password2Valid)}}
					errorMessage="Please input a valid HKU email address."
					errorMessageStyle={styles.errorMessageStyle}
					errorInputContainerStyle={{ }} />

				<Input
					placeholder="Password"
					placeholderTextColor="rgba(64,64,64,0.5)"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordConfirm.focus()}
					secureTextEntry={true}
					style={styles.input}
					onChangeText={(password1) => this.setState({password1: password1})}
					inputRef={(input) => input && (this.passwordInput = input)}
					validator="password"
					//customValidator={() => this.passwordConfirmValidator(this.state.password1, this.state.password2)}
					onValidatorExecuted={(isValid) => {this.setState({password1Valid: isValid && this.state.password1 != ''})
												this.setState((state) => ({allValid: state.emailValid && state.password1Valid && state.password2Valid}))
												console.log(this.state.password1, this.state.allValid, this.state.emailValid, this.state.password1Valid, this.state.password2Valid)}}
					errorMessage="Password must be at least 8 characters long and contain at least 1 lowercase letter, 1 uppercase letter, and 1 number."
					errorMessageStyle={styles.errorMessageStyle}
					errorInputContainerStyle={{ }} />

				<Input
					placeholder="Confirm Password"
					placeholderTextColor="rgba(64,64,64,0.5)"
					returnKeyType="go"
					secureTextEntry={true}
					style={styles.input}
					onChangeText={(password2) => this.setState({password2: password2})}
					inputRef={(input) => input && (this.passwordConfirm = input)}
					//validator="password"
					customValidator={() => this.passwordConfirmValidator(this.state.password1, this.state.password2)}
					onValidatorExecuted={(isValid) => {this.setState({password2Valid: isValid && this.state.password2 != ''})
												this.setState((state) => ({allValid: state.emailValid && state.password1Valid && state.password2Valid}))
												console.log(this.state.password2, this.state.allValid, this.state.emailValid, this.state.password1Valid, this.state.password2Valid)}}
					errorMessage="Password does not match."
					errorMessageStyle={styles.errorMessageStyle}
					errorInputContainerStyle={{ }}
					/>

				<TouchableOpacity disabled={!this.state.allValid} onPress={submit} style={this.state.allValid ? styles.buttonContainer : styles.buttonContainerDisabled}>
					<Text style={styles.buttonText}>SIGN UP</Text>
				</TouchableOpacity>
			</View>
      </DismissKeyboard>
		)
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

  buttonContainerDisabled: {
    marginTop: 20,
    backgroundColor: 'rgba(0,51,51,1)',
    paddingVertical: 15,
    borderRadius: 7,
    opacity: 0.5
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '400',
    fontFamily: 'Gill Sans'
  },

  errorMessageStyle: {
  	color: 'white',
  	padding: 10,
  	paddingBottom: -10,
  	maxWidth: 250
  }
});
