import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Images } from '../assets/assets'
import SignupForm from '../components/SignUp/SignupForm'
import { suppose, mark, gentle_calmm, S, equals } from 'camarche'

import { logged_in } from '../api'
import { DismissKeyboard } from '../components/GeneralUserInput/DismissKeyboard';

const Signup = gentle_calmm (({ go }) =>
	suppose (
	( $__logged_in_transition = S (_ => {
		if (equals (mark (logged_in)) (true)) {
			go ('Entry')  } })
	) =>
	<DismissKeyboard>		
	<ImageBackground source={Images['background']} style={styles.container}>
		<KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
			<View style={styles.signupWrapper}>

				<TouchableWithoutFeedback>
					<Text style={styles.title}>Sign Up Here</Text>
				</TouchableWithoutFeedback>

				<View>
					<SignupForm />
				</View>

				<View style={styles.loginWrapper}>
						<Text style={styles.bottomText}>Already have an account?</Text>
							<TouchableOpacity onPress={()=>go('Login')}>
						<Text style={styles.loginText}> Login.</Text>
						</TouchableOpacity>
				</View>

			</View>
		</KeyboardAvoidingView>
	</ImageBackground> 
	</DismissKeyboard>) )

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	wrapper: {
		flex: 1
	},

	signupWrapper: {
		flexGrow: 1,
		justifyContent: 'center'
	},

	loginWrapper: {
		justifyContent: 'center',
		flexDirection: "row"
	},

	bottomText: {
		fontSize: 17,
		textAlign: 'center',
		color: 'white',
		fontFamily: 'Gill Sans'
	},

	loginText: {
		fontSize: 17,
		textAlign: 'center',
		color: 'white',
		fontFamily: 'Gill Sans',
		fontWeight: "600"
	},

	title: {
		fontSize: 35,
		textAlign: 'center',
		color: 'white',
		fontWeight: "400",
		width: 300,
		fontFamily: 'Gill Sans'
	},

})

export default Signup
