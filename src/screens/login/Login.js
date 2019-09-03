import { Text, View, TouchableWithoutFeedback, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import DialogInput from 'react-native-dialog-input'
import { DismissKeyboard } from '~/components'
import { Images } from '__/assets/assets'
import LoginForm from './LoginForm'

import { suppose, equals } from 'camarche/core'
import { belief, L_, please, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { as } from 'camarche/adt'
import { as_to } from '~/project/aux'

import screen_ from '~/project/screen_'
import { nav, login_view, signup_view, maybe, forgot_password_view } from '~/project/types'
import { location_state, location_nav_state } from '~/project/state'


var styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center' },
	wrapper: {
		flex: 1 },
	loginWrapper: {
		flexGrow: 1,
		justifyContent: 'center' },
	title: {
		fontSize: 35,
		textAlign: 'center',
		color: 'white',
		fontWeight: '400',
		width: 300,
		fontFamily: 'Gill Sans' },
	signupWrapper: {
		justifyContent: 'center',
		flexDirection: "row" },
	forgotpwWrapper: {
		justifyContent: 'center',
		flexDirection: "row" },
	bottomText: {
		fontSize: 17,
		textAlign: 'center',
		color: 'white',
		fontFamily: 'Gill Sans' },
	signupText: {
		fontSize: 17,
		textAlign: 'center',
		color: 'white',
		fontFamily: 'Gill Sans',
		fontWeight: '600' },
	forgotpwText: {
		fontSize: 17,
		textAlign: 'center',
		color: 'white',
		fontFamily: 'Gill Sans',
		marginTop: 3 } }

var login_state = belief (as_to (nav) (login_view)) (location_state)
var maybe_forgot_password_state = belief (as_to (login_view) (maybe (forgot_password_view))) (login_state)
var forgot_password_state = belief (as_to (login_view) (forgot_password_view)) (login_state)
var forgot_password_yes_state = belief (L_ .isDefined) (forgot_password_state)

export default calmm (_ =>
	suppose (
	( go_signup = _ => {;please (L_ .set (screen_ (nav .signup))) (location_nav_state)}
	, go_forgot_password = _ => {;please (L_ .set (maybe .just (forgot_password_view ('', false)))) (maybe_forgot_password_state)}
	, go_no_forgot_password = _ => {;please (L_ .set (maybe .nothing)) (maybe_forgot_password_state)}
	, commit_forgot_password = _ => {;please (L .modify (as (forgot_password_view) .committing_yes) (not)) (forgot_password_state)}
	) =>
	<ImageBackground source={Images['background']} style={styles .container}>
		<KeyboardAvoidingView behavior="padding" style={styles .wrapper}>
			<DismissKeyboard>
				<View style={styles .loginWrapper}>
					<Text style={styles .title}>Log in to your account</Text>
					<LoginForm login_state={login_state} />
					<View style={styles .signupWrapper}>
						<Text style={styles .bottomText}>Don't have an account? </Text>
						<TouchableOpacity onPress={go_signup}>
							<Text style={styles .signupText}>Sign up.</Text> </TouchableOpacity> </View>
					<View style={styles .forgotpwWrapper}>
						<TouchableOpacity onPress={go_forgot_password} style={{ padding: 10 }}>
							<Text style={styles .forgotpwText}>Forgot password?</Text> </TouchableOpacity> </View>
					<DialogInput isDialogVisible={false}
						title={'Forgot your password?'}
						message={'Enter your registered email.'}
						hintInput={'Email'}
						submitInput={commit_forgot_password}
						closeDialog={go_no_forgot_password} />
					</View>
				</DismissKeyboard>
			</KeyboardAvoidingView>
		</ImageBackground> ) )
