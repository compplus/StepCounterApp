import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { S, equals, mark, gentle_calmm } from 'camarche'

import { login, logged_in } from '../api'

import { Images } from '../assets/assets'
import LoginForm from '../components/Login/LoginForm';
import DialogInput from 'react-native-dialog-input';
import { DismissKeyboard } from '../components/GeneralUserInput/DismissKeyboard';

var sendInput = inputText => {
	console.log("sendInput (DialogInput#1): " + inputText);
}

export default gentle_calmm(class Login extends Component {
	state = {
		isDialogVisible: false
	}
	showDialog(isShow) {
		this.setState({ isDialogVisible: isShow });
	}

	render() {
		var go = this.props.go
		var $__log_in_transition = S(_ => {
			if (mark(logged_in)) {
				; console.log('hi')
				go('Entry')
			}
		})

		return <ImageBackground source={Images['background']} style={styles.container}>
			<KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
				<DismissKeyboard>
					<View style={styles.loginWrapper}>
						<Text style={styles.title}>Log in to your account</Text>

						<LoginForm go={go} />

						<View style={styles.signupWrapper}>
							<Text style={styles.bottomText}>Don't have an account?</Text>
							<TouchableOpacity onPress={() => go('Signup')}>
								<Text style={styles.signupText}> Sign up.</Text>
							</TouchableOpacity>
						</View>

						<View style={styles.forgotpwWrapper}>
							<TouchableOpacity onPress={() => { this.showDialog(true) }} style={{ padding: 10 }}>
								<Text style={styles.forgotpwText}>Forgot password?</Text>
							</TouchableOpacity>
						</View>

						<DialogInput isDialogVisible={this.state.isDialogVisible}
							title={"Forgot your password?"}
							message={"Enter your registered email."}
							hintInput={"Email"}
							submitInput={sendInput}
							closeDialog={() => { this.showDialog(false) }}>
						</DialogInput>

					</View>
				</DismissKeyboard>
			</KeyboardAvoidingView>
		</ImageBackground>
	}
})

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

	forgotpwWrapper: {
		justifyContent: 'center',
		flexDirection: "row"
	},

	bottomText: {
		fontSize: 17,
		textAlign: 'center',
		color: 'white',
		fontFamily: 'Gill Sans'
	},

	signupText: {
		fontSize: 17,
		textAlign: 'center',
		color: 'white',
		fontFamily: 'Gill Sans',
		fontWeight: '600'
	},

	forgotpwText: {
		fontSize: 17,
		textAlign: 'center',
		color: 'white',
		fontFamily: 'Gill Sans',
		marginTop: 3
	}

});
