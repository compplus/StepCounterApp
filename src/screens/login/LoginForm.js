import { Text, View, TextInput, TouchableOpacity } from 'react-native'

import { L, suppose } from 'camarche/core'
import { L_, belief, please } from 'camarche/faith'
import { as } from 'camarche/adt'

import { login_view } from '~/project/types'

var styles = {
	container: {
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
		backgroundColor: 'rgba(0,51,51,1)',
		paddingVertical: 15,
		borderRadius: 7 },
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '400',
		fontFamily: 'Gill Sans' } }

export default ({ login_state }) =>
	suppose (
	( password_ref
	
	, committing_yes_state = belief (as (login_view) .committing_yes) (login_state)

	, select_email = _email => {;please (L .set (as (login_view) .email) (_email)) (login_state)}
	, select_password = _password => {;please (L .set (as (login_view) .password) (_password)) (login_state)}
	, commit_login = _ => {;please (L_ .set (true)) (committing_yes_state)}
	) =>
	<View style={styles.container}>
		<TextInput
			keyboardType="email-address" placeholder="Username or email"
			onChangeText={select_email} onSubmitEditing={_ => {;password_ref .focus ()}}
			autoCapitalize="none" autoCorrect={false}
			style={styles.input} placeholderTextColor="rgba(64,64,64,0.5)" returnKeyType="next" />
		<TextInput
			placeholder="Password"
			onChangeText={select_password} 
			secureTextEntry={true} returnKeyType="go"
			style={styles.input} placeholderTextColor="rgba(64,64,64,0.5)"
			ref={_ref => {;_ref && (password_ref = _ref)}} />
		{ !! mark (committing_yes_state) ?
		<ActivityIndicator style={{ marginVertical: 20 }} />
		: 
		<TouchableOpacity onPress={commit_login} style={styles.buttonContainer}>
			<Text style={styles.buttonText}>LOGIN</Text> </TouchableOpacity> }
		</View> )
