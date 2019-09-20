import { ImageBackground, KeyboardAvoidingView, ActivityIndicator, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Input from 'react-native-input-validation'
import { DismissKeyboard } from '~/components'
import { Images } from '__/assets/assets'

import { L, equals, not, suppose, I } from 'camarche/core'
import { pinpoint, as_match, case_ } from 'camarche/optics'
import { L_, belief, please, show, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { as } from 'camarche/adt'
import { as_to } from '~/project/aux'

import { nav, signup_view, signup_step_one, signup_step_two } from '~/project/types'
import { nav_state, inner_nav_state } from '~/project/state'
import default_ from '~/project/default_'

var styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center' },
	wrapper: {
		flex: 1 },
	signupWrapper: {
		flexGrow: 1,
		marginVertical: 50,
		justifyContent: 'center' },
	step_one_box: {
		padding: 20 },
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.5)',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		color: '#FFF',
		paddingHorizontal: 15,
		borderRadius: 7 },
	buttonContainer: {
		marginTop: 20,
		backgroundColor: '#004D40',
		paddingVertical: 15,
		borderRadius: 7 },
	buttonContainerDisabled: {
		marginTop: 20,
		backgroundColor: 'rgba(0,51,51,1)',
		paddingVertical: 15,
		borderRadius: 7,
		opacity: 0.5 },
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '400',
		fontFamily: 'Gill Sans' },
	errorMessageStyle: {
		color: 'white',
		padding: 10,
		paddingBottom: -10,
		maxWidth: 250 },
	loginWrapper: {
		justifyContent: 'center',
		flexDirection: 'row' },
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

	
var signup_state = belief (as_to (nav) (signup_view)) (nav_state)

var step_one_state = belief (as_to (signup_view) (signup_step_one)) (signup_state)
var step_two_state = belief (as_to (signup_view) (signup_step_two)) (signup_state)

var email_state = belief (as (signup_step_one) .email) (step_one_state)
var password_state = belief (as (signup_step_one) .password) (step_one_state)
var password_confirmation_state = belief (as (signup_step_one) .password_confirmation) (step_one_state)



var valid_yes_ = _ => equals (show (password_state)) (show (password_confirmation_state))
var valid_yes_belief = belief (valid_yes_) (step_one_state)


export default calmm (_ => 
	suppose (
	( password_ref
	, password_confirmation_ref
	, ref_password = _ref => {;_ref && (password_ref = _ref)}
	, ref_password_confirmation = _ref => {;_ref && (password_confirmation_ref = _ref)}

	, select_email = _email => {;please (L_ .set (_email)) (email_state)}
	, select_password = _password => {;please (L_ .set (_password)) (password_state)}
	, select_password_confirmation = _password => {;please (L_ .set (_password)) (password_confirmation_state)}
	, focus_password = _ => {;password_ref .focus ()}
	, focus_password_confirmation = _ => {;password_confirmation_ref .focus ()}
	, commit_step_one = _ => {;please (L_ .set (default_ (signup_step_two))) (step_two_state)}
	, go_login = _ => {;please (L_ .set (default_ (nav .login))) (inner_nav_state)}
	) =>
	<DismissKeyboard>		
		<ImageBackground source={Images .background} style={styles .container}>
			<KeyboardAvoidingView behavior="padding" style={styles .wrapper}>
				<View style={styles .signupWrapper}>
					<TouchableWithoutFeedback>
						<Text style={styles .title}>Sign Up Here</Text> </TouchableWithoutFeedback>
					<View style={styles .step_one_box}>
						<Input style={styles .input} placeholder="Email" placeholderTextColor="rgba(64,64,64,0.5)"
							keyboardType="email-address" returnKeyType="next" autoCapitalize="none" autoCorrect={false}
							validator="^[-.\w]+@([\w-]+\.)*(hku.hk){1}$" onValidatorExecuted={I}
							errorMessage="Please input a valid HKU email address." errorMessageStyle={styles .errorMessageStyle} errorInputContainerStyle={{}}
							onChangeText={select_email} onSubmitEditing={focus_password} />
						<Input style={styles .input} placeholder="Password" placeholderTextColor="rgba(64,64,64,0.5)" 
							secureTextEntry={true} returnKeyType="next"
							validator="password" onValidatorExecuted={I}
							errorMessage="Password must be at least 8 characters long and contain at least 1 lowercase letter, 1 uppercase letter, and 1 number." errorMessageStyle={styles .errorMessageStyle} errorInputContainerStyle={{}}
							onChangeText={select_password} onSubmitEditing={focus_password_confirmation} inputRef={ref_password} />
						<Input style={styles .input} placeholder="Confirm Password" placeholderTextColor="rgba(64,64,64,0.5)"
							secureTextEntry={true} returnKeyType="go"
							customValidator={valid_yes_} onValidatorExecuted={I}
							errorMessage="Password does not match." errorMessageStyle={styles .errorMessageStyle} errorInputContainerStyle={{}}
							onChangeText={select_password_confirmation} inputRef={ref_password_confirmation} />
						{ mark (valid_yes_belief) ?
						<TouchableOpacity onPress={commit_step_one} style={styles .buttonContainer}>
							<Text style={styles .buttonText}>SIGN UP</Text> </TouchableOpacity>
						: not (mark (valid_yes_belief)) ?
						<View style={styles .buttonContainerDisabled}>
							<Text style={styles .buttonText}>SIGN UP</Text> </View>
						: _ }
						</View>
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
