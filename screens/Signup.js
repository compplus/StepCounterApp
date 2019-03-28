import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Images } from '../assets/assets'
import SignupForm from './SignupForm'
import { suppose, mark, gentle_calmm, S, equals } from 'camarche'

import { logged_in } from '../api'

const Signup = gentle_calmm (({ go }) =>
	suppose (
	( $__logged_in_transition = S (_ => {
		if (equals (mark (logged_in)) (true)) {
			go ('Entry')  } })
	) =>
	<ImageBackground source={Images['background']} style={styles.container}>
		<KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
			<View style={styles.signupWrapper}>

				<TouchableWithoutFeedback onPress={() => go ('Entry')}>
					<Text style={styles.title}>Sign Up Here</Text>
				</TouchableWithoutFeedback>

				<View>
					<SignupForm />
				</View>

			</View>
		</KeyboardAvoidingView>
	</ImageBackground> ) )

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

	title: {
		fontSize: 35,
		textAlign: 'center',
		color: 'white',
		fontWeight: '400',
		width: 300,
		fontFamily: 'Gill Sans'
	},

})

export default Signup
