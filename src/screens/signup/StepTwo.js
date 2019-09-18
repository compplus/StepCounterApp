import { ActivityIndicator, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'
import { TextField } from 'react-native-material-textfield'
import { DismissKeyboard } from '~/components'

import { L, suppose, I } from 'camarche/core'
import { pinpoint } from 'camarche/optics'
import { L_, please, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { variants_ } from 'camarche/adt'
import { display_ } from '~/project/aux'

var styles = {
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
	disclaimer: {
		paddingTop: 20,
		fontSize: 14,
		color: 'grey' } }

var categories = pinpoints (variants_, L .values, display_, value => ({ value })) (category)
var genders = pinpoints (variants_, L .values, display_, value => ({ value })) (gender)



var signup_state = belief (as_to (nav) (signup_view)) (location_state)

var committing_yes_state = belief (as (signup_view) .committing_yes) (signup_state)

var step_two_state = belief (as_to (signup_view) (signup_step_two)) (signup_state)
var unbound_user_state = belief (as_to (signup_step_two) (unbound (user))) (step_two_state)

var faculty_state = belief (as (user) .faculty) (unbound_user_state)
var department_state = belief (as (user) .department) (unbound_user_state)
var category_state = belief (as (user) .category) (unbound_user_state)
var first_name_state = belief (as (user) .first_name) (unbound_user_state)
var last_name_state = belief (as (user) .last_name) (unbound_user_state)
var gender_state = belief (as (user) .gender) (unbound_user_state)
var age_state = belief (as (user) .age) (unbound_user_state)
var height_state = belief (as (user) .height) (unbound_user_state)
var weight_state = belief (as (user) .weight) (unbound_user_state)



var valid_yes_ = _ => true
var valid_yes_belief = belief (valid_yes_) (step_two_state)


export default calmm (_ =>
	suppose (
	( commit_profile = _ => {;please (L_ .set (true)) (committing_yes_state)}
	) =>
	<ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
		<View style={{ padding: 50 }}> 
			<Dropdown
				label="Faculty" data={faculties}
				value={pinpoint (L .valueOr ('')) (mark (faculty_state))}
				onChangeText={_faculty => {;please (L_ .set (_faculty)) (faculty_state)}} />
			<Dropdown
				label="Department" data={departments}
				value={pinpoint (L .valueOr ('')) (mark (department_state))}
				onChangeText={_department => {;please (L_ .set (_department)) (department_state)}} />
			<Dropdown
				label="Category" data={categories}
				value={display_ (mark (category_state)) }
				onChangeText={_category => {;please (L_ .set (name_variant_ (category) (_category))) (category_state)}} />
			<Text style={styles .disclaimer}>(To improve the accuracy of the data, please provide the following biometric information)</Text>
			<Dropdown
				label="Gender" data={genders}
				value={display_ (mark (gender_state)) }
				onChangeText={_genders => {;please (L_ .set (name_variant_ (gender) (_genders))) (gender_state)}} />
			<TextField
				label="First Name" value={mark (first_name_state)}
				onChangeText={_firstname => {;please (L_ .set (_firstname)) (first_name_state)}} />
			<TextField
				label="Last Name" value={mark (last_name_state)}
				onChangeText={_lastname => {;please (L_ .set (_lastname)) (last_name_state)}} />
			<TextField
				label="Age" value={mark (age_state)}
				onChangeText={_age => {;please (L_ .set (_age)) (age_state)}} />
			<TextField
				label="Height (cm)" value={mark (height_state)}
				onChangeText={_height => {;please (L_ .set (_height)) (height_state)}} />
			<TextField
				label="Weight (kg)" value={mark (weight_state)}
				onChangeText={_weight => {;please (L_ .set (_weight)) (weight_state)}} />
			{ !! mark (committing_yes_state) ?
			<ActivityIndicator style={{ marginTop: 25 }} />
			: mark (valid_yes_belief) ?
			<TouchableOpacity onPress={commit_profile} style={styles .buttonContainer}>
				<Text style={styles .buttonText}>SIGN UP</Text> </TouchableOpacity>
			: not (mark (valid_yes_belief)) ?
			<View style={styles .buttonContainerDisabled}>
				<Text style={styles .buttonText}>SIGN UP</Text> </View>
			: _ }
			</View>
		</ScrollView> ) )
