import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground,  KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Images } from '../assets/assets'
import LoginForm from './LoginForm';
import DialogInput from 'react-native-dialog-input';

export default class Login extends Component {
	constructor(props){
    super(props);
    this.state = {
      isDialogVisible: false,
    }
  }
  showDialog(isShow){
    this.setState({isDialogVisible: isShow});
  }
  sendInput(inputText){
    console.log("sendInput (DialogInput#1): "+inputText);
  }

	render() {
		var nav_screen = this.props.go
		return <ImageBackground source={Images['background']} style={styles.container}>
			<KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
				<View style={styles.loginWrapper}>

					<TouchableWithoutFeedback onPress={()=>nav_screen('Entry')}>
						<Text style={styles.title}>Log in to your account</Text>
					</TouchableWithoutFeedback>

					<LoginForm />

					<View style={styles.signupWrapper}>
						<Text style={styles.bottomText}>Don't have an account?</Text>
							<TouchableOpacity onPress={()=>nav_screen('Signup')}>
						<Text style={styles.signupText}> Sign up.</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity onPress={()=>{this.showDialog(true)}} style={{padding:10}}>
						<Text style={styles.forgotpwText}>Forgot password?</Text>
					</TouchableOpacity>

					<DialogInput isDialogVisible={this.state.isDialogVisible}
									 title={"Forgot your password?"}
									 message={"Enter your registered email."}
									 hintInput ={"Email"}
									 submitInput={ (inputText) => {this.sendInput(inputText)} }
									 closeDialog={ () => {this.showDialog(false)}}>
			 		</DialogInput>

				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
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
