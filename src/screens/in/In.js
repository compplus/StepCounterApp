import in_screens from '~/project/__subscreens.macro'

import { SafeAreaView, ActivityIndicator, Platform, View } from 'react-native'
import { Header } from 'react-native-elements'
import { ButtonGroup } from 'react-native-elements'

import { R, L, K } from 'camarche/core'
import { pinpoint, pinpoints, match, case_ } from 'camarche/optics'
import { belief, please, L_, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { lift_defined } from 'camarche/calling'
import { as_in } from 'camarche/adt'
import { as_string, as_to, as_into, nested_path_, path_screen_ } from '~/project/aux'

import screen_ from '~/project/screen_'
import { nav, in_view, in_features, maybe } from '~/project/types'
import { location_state, location_nav_state, undo_history, history_state } from '~/project/state'


var styles = {
	loading_container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#212121' },
	container: {
		flex: 1,
		backgroundColor: '#212121' },
	header: {
		borderBottomWidth: 0,
		marginTop: Platform .OS === 'ios' ? 0 : -30,
		backgroundColor: '#004D40' },
	tabContainer: {
		backgroundColor: '#212121',
		height: 70 },
	buttons: {
		backgroundColor: '#212121',
		height: 100 } }



var display_ = lift_defined (pinpoint (L .modify ([ as_string, L .first ]) (R .toUpper), L .replaces ('_view') (''), L .replaces ('_') (' ')))
var tab_index = _ => pinpoint
	( L .elems
	, L .when (_tab => L .isDefined (as_into (nav) (_tab)) (mark (location_state)))
	, (_, i) => i ) (tabs)

var tabs = [ in_view .main, in_view .contest ]


var in_features_state = belief (as_to (nav) (maybe (in_features))) (location_state)
var in_state = belief (as_to (nav) (in_view)) (location_state)
var in_path_state = belief (nested_path_ ('view')) (in_state)
var in_screen_state = belief ([ path_screen_ (in_screens), L .valueOr (K (null)) ]) (in_path_state)

export default calmm (_ =>
	suppose (
	( Screen = mark (in_screen_state)
	, _features = mark (in_features_state)
	, _in = mark (in_state)
	, go_back = _ => {;please (undo_history) (history_state)}
	, log_out = _ => {;please (L_ .set (screen_ (nav .login))) (location_state)}
	) =>
	pinpoint (match (
	case_ (as_in (maybe .nothing)) (
	<View style={styles .loading_container}>
		<ActivityIndicator /> </View> ),
	case_ (K) (
	<View style={styles .container}>
		<Header
			containerStyle={styles .header}
			backgroundColor='black'
			centerComponent={{ text: display_ (pinpoint (L .last) (mark (in_path_state))), style: { color: '#fff', fontWeight: 'bold', } }}
			rightComponent={{ text: 'Log out', style: { color: '#fff', marginRight: 10, }, onPress: log_out }}
			barStyle="light-content" />
		<Screen />
		<View style={styles .tabContainer}>
			<ButtonGroup
				onPress={i => {;please (L_ .set (screen_ (tabs [i]))) (location_nav_state)}}
				selectedIndex={tab_index ()}
				buttons={pinpoints (L .elems, variant_name_, display_) (tabs)}
				innerBorderStyle={{ color: '#212121' }}
				selectedButtonStyle={{ backgroundColor: '#004D40' }}
				containerStyle={{ height: 42, borderRadius: 5, borderColor: '#212121', backgroundColor: '#CFD8DC' }} /> </View> </View> ) )
	) (_features ) ) )
