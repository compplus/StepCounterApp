import { ActivityIndicator, Dimensions, Text, View, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'
import { TextField } from 'react-native-material-textfield'
import { Avatar } from 'react-native-elements'

import { I, not, suppose, L } from 'camarche/core'
import { pinpoint, pinpoints } from 'camarche/optics'
import { belief, please, L_, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { as, variants_, variant_name_ } from 'camarche/adt'
import { as_to, name_variant_, display_ } from '~/project/aux'

import { nav, profile_view } from '~/project/types'
import { user, category, gender } from '~/project/types'
import { location_state, dimensions_state, local_state } from '~/project/state'
import { departments, faculties } from '~/project/domain-aux'

var { height } = Dimensions .get ('window')

var styles = {
	container: {
		backgroundColor: '#212121',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'stretch',
		height: height/4 - 20,
		shadowOffset: { width: 5,  height: 5 },
		shadowColor: '#B0BEC5',
		shadowOpacity: 1.0 },
	avatar: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 20,
		padding: 10,
		justifyContent: 'center',
		alignContent: 'center' },
	username_box: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 10,
		justifyContent: 'center',
		alignContent: 'stretch' },
	username: {
		color: '#FFFFFF',
		flexDirection: 'row',
		fontSize: 25,
		fontFamily: 'Gill Sans',
		justifyContent: 'center',
		alignContent: 'center',
		marginTop: 15 },
	wrapper: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor:'#EFEFF4',
		justifyContent: 'center', 
		alignContent: 'stretch' },
	buttonContainer: {
		marginTop: 20,
		marginBottom: 20,
		backgroundColor: 'rgba(0,51,51,1)',
		paddingVertical: 15,
		borderRadius: 7 },
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '400',
		fontSize: 17,
		fontFamily: 'Gill Sans' },
	disclaimer: {
		paddingTop: 20,
		fontSize: 14,
		color: 'grey' },
	titleText: {
		textAlign: 'left' ,
		color: 'rgba(0,51,51,1)',
		fontSize: 25,
		fontWeight: '400',
		fontFamily: 'Gill Sans' },
	department_input: {
		padding: 12,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 0 },
	department_item: {
		padding: 10,
		marginTop: 0,
		backgroundColor: 'white',
		borderColor: '#bbb',
		borderWidth: 0,
		borderRadius: 0 },
	department_box: {
		padding: 0 },
	department_text: {
		color: 'black' },
	department_items_box: {
		maxHeight: 150 } }


var categories = pinpoints (variants_, L .values, display_, value => ({ value })) (category)
var genders = pinpoints (variants_, L .values, display_, value => ({ value })) (gender)

var profile_state = belief (as_to (nav) (profile_view)) (location_state)
var unbound_user_state = belief (as (profile_view) .unbound_user) (profile_state)
var committing_yes_state = belief (as (profile_view) .committing_yes) (profile_state)

var faculty_state = belief (as (user) .faculty) (unbound_user_state)
var department_state = belief (as (user) .department) (unbound_user_state)
var category_state = belief (as (user) .category) (unbound_user_state)
var first_name_state = belief (as (user) .first_name) (unbound_user_state)
var last_name_state = belief (as (user) .last_name) (unbound_user_state)
var gender_state = belief (as (user) .gender) (unbound_user_state)
var age_state = belief (as (user) .age) (unbound_user_state)
var height_state = belief (as (user) .height) (unbound_user_state)
var weight_state = belief (as (user) .weight) (unbound_user_state)


//TODO: validation

export default calmm (_ =>
	suppose (
	( commit_profile = _ => {;please (L_ .set (true)) (committing_yes_state)}
	) =>
	<KeyboardAvoidingView behavior="padding" style={styles .wrapper}>
		<ScrollView style={{ flex: 1 }}>
			<View style={{ paddingHorizontal: 50 }}> 
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
					label="First Name" maxLength={15} value={mark (first_name_state)}
					onChangeText={_firstname => {;please (L_ .set (_firstname)) (first_name_state)}} />
				<TextField
					label="Last Name" maxLength={20} value={mark (last_name_state)}
					onChangeText={_lastname => {;please (L_ .set (_lastname)) (last_name_state)}} />
				<TextField
					label="Age" value={mark (age_state)}
					keyboardType = "number-pad"
					onChangeText={_age => {;please (L_ .set (_age)) (age_state)}} />
				<TextField
					label="Height (cm)" value={mark (height_state)}
					keyboardType = "numeric"
					onChangeText={_height => {;please (L_ .set (_height)) (height_state)}} />
				<TextField
					label="Weight (kg)" value={mark (weight_state)}
					keyboardType = 'numeric'
					onChangeText={_weight => {;please (L_ .set (_weight)) (weight_state)}} />
				{ !! not (mark (committing_yes_state)) ?
				<TouchableOpacity onPress={commit_profile} style={styles .buttonContainer}>
					<Text style={styles .buttonText}>SAVE</Text>
					</TouchableOpacity>
				:
				<ActivityIndicator style={{ marginTop: 25 }} /> }
				</View>
			</ScrollView>
		</KeyboardAvoidingView> ) )
