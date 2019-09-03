import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { DismissKeyboard } from '~/components'
import SignupForm from './SignupForm'
import { Images } from '__/assets/assets'

import { suppose } from 'camarche/core'
import { L_, belief, please } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { as_to } from '~/project/aux'

import screen_ from '~/project/screen_'
import { nav, signup_view } from '~/project/types'
import { location_state, location_nav_state } from '~/project/state'

var styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center' },
	wrapper: {
		flex: 1 },
	signupWrapper: {
		flexGrow: 1,
		justifyContent: 'center' },
	loginWrapper: {
		justifyContent: 'center',
		flexDirection: "row" },
	bottomText: {
		fontSize: 17,
		textAlign: 'center',
		color: 'white',
		fontFamily: 'Gill Sans' },
	loginText: {
		fontSize: 17,
		textAlign: 'center',
		color: 'white',
		fontFamily: 'Gill Sans',
		fontWeight: '600' },
	title: {
		fontSize: 35,
		textAlign: 'center',
		color: 'white',
		fontWeight: '400',
		width: 300,
		fontFamily: 'Gill Sans' } }

var signup_state = belief (as_to (nav) (signup_view)) (location_state)

export default calmm (_ =>
	suppose (
	( go_login = _ => {;please (L_ .set (screen_ (nav .login))) (location_nav_state)}
	) =>
	<DismissKeyboard>		
		<ImageBackground source={Images .background} style={styles .container}>
			<KeyboardAvoidingView behavior="padding" style={styles .wrapper}>
				<View style={styles .signupWrapper}>
					<TouchableWithoutFeedback>
						<Text style={styles .title}>Sign Up Here</Text> </TouchableWithoutFeedback>
					<View><SignupForm signup_state={signup_state} /></View>
					<View style={styles .loginWrapper}>
						<Text style={styles .bottomText}>Already have an account?</Text>
						<TouchableOpacity onPress={go_login}>
							<Text style={styles .loginText}> Login.</Text>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
			</ImageBackground> 
		</DismissKeyboard> ) )
