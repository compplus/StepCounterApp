import { ScrollView, View, Text, ActivityIndicator, Dimensions } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon_ion from 'react-native-vector-icons/Ionicons'
import { LineChart } from 'react-native-chart-kit'

import { L, K, R } from 'camarche/core'
import { pinpoint, pinpoints, match, case_ } from 'camarche/optics'
import { belief, please, L_, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { as, variant_name_ } from 'camarche/adt'
import { as_string, as_to, as_into } from '~/project/aux'

import { calories_, days_in_month_, hour_as_ordinal, day_as_ordinal, month_as_ordinal } from '~/project/domain-aux'
import { nav, in_view, activity_view } from '~/project/types'
import { step_stat, time_unit, dimensions } from '~/project/types'
import { location_state, width_state, height_state, step_stat_state } from '~/project/state'

var styles = {
	container: {
		backgroundColor: '#212121',
		flex: 1 },
	scroll_container: {
		alignContent: 'center' },
	buttons_container: {
		borderRadius: 5,
		borderColor: '#212121',
		backgroundColor: '#424242' },
	buttons_border: {
		color: '#212121' },
	buttons_text: {
		color: '#FFFFFF' },
	selected_button: {
		backgroundColor: '#26A69A' },
	title: {
		color: '#FFFFFF',
		fontSize: 20,
		justifyContent: 'center',
		alignItems: 'center',
		fontFamily: 'Gill Sans',
		marginTop: 30 },
	titleContainer: {
		justifyContent: 'center',
		alignItems: 'center' },
	steps: {
		height: 210,
		marginVertical: 8,
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center' },
	calories: {
		height: 210,
		marginVertical: 8,
		borderRadius: 16,
		justifyContent: 'center',
		alignItems: 'center' } }

var charts = {
	steps: {
		backgroundColor: '#006064',
		backgroundGradientFrom: '#00838F',
		backgroundGradientTo: '#00BCD4',
		strokeWidth: 2,
		decimalPlaces: 0, // optional, defaults to 2dp
		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		style: { borderRadius: 16 } },
	calories: {
		backgroundColor: '#004D40',
		backgroundGradientFrom: '#00695C',
		backgroundGradientTo: '#009688',
		strokeWidth: 2,
		decimalPlaces: 0, // optional, defaults to 2dp
		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		style: { borderRadius: 16 } } }


//var calories = L .modify ([ L .elems, 'y' ]) (calories_) (steps)



var tab_label_ = L .modify ([ as_string, L .first ]) (R .toUpper)

var tabs = [ time_unit .hour, time_unit .day, time_unit .month ]

var activity_state = belief (as_to (nav) (activity_view)) (location_state)
var tab_state = belief (as (activity_view) .time_unit) (activity_state)

var samples_per_graph = 6
var interval_on = n => total => 
	suppose (
	( _from = R .min (R .max (0) (n - samples_per_graph + 1)) (total - samples_per_graph + 1)
	) =>
	[ _from, _from + samples_per_graph - 1])
var sample_stamps_ = by (_time_unit => pinpoint (
	match (
	case_ (as_in (time_unit .hour)) (_stamp => 
		suppose (
		( [ _from, _to ] = interval_on (pinpoint (hour_as_ordinal) (_stamp)) (24)
		) =>
		[ ... R .map (_n => L .set (hour_as_ordinal) (_n) (_stamp)) (R .range (_from) (_to + 1)) ] ) ),
	case_ (as_in (time_unit .day)) (_stamp => 
		suppose (
		( [ _from, _to ] = interval_on (pinpoint (day_as_ordinal) (_stamp)) (days_in_month_ (month_ (_stamp)))
		) =>
		[ ... R .map (_n => L .set (day_as_ordinal) (_n) (_stamp)) (R .range (_from) (_to + 1)) ] ) ),
	case_ (as_in (time_unit .month)) (_stamp => 
		suppose (
		( [ _from, _to ] = interval_on (pinpoint (month_as_ordinal) (_stamp)) (12)
		) =>
		[ ... R .map (_n => L .set (month_as_ordinal) (_n) (_stamp)) (R .range (_from) (_to + 1)) ] ) ) ) ) )



export default calmm (_ =>
	suppose (
	( _width = mark (width_state)
	, _height = mark (height_state)
	, _time_unit = mark (tab_state)
	, _step_sample_state = belief (
			pinpoint (match (
			case_ (as_in (time_unit .hour)) (as (step_stat) .by_hours),
			case_ (as_in (time_unit .day)) (as (step_stat) .by_days),
			case_ (as_in (time_unit .month)) (as (step_stat) .by_months) )
			) (_time_unit )
		) (step_stat_state )

	, _timestamp = new Date
	, sample_stamps = sample_stamps_ (_time_unit) (_timestamp)

	, _steps_data_state = belief (_step_sample => (
			{ labels: pinpoints (L .elems, display_stamp_ (_time_unit)) (sample_stamps)
			, datasets: [ { data: pinpoints (L .elems, _stamp => pinpoint (un (L .keyed), display_stamp_ (_time_unit) (_stamp), L .choice (as (step_sample) .steps, K (0))) (_step_sample)) (sample_stamps) } ] } )
		) (_step_sample_state )
	, _calories_data_state = belief (_calories => (
			{ labels: pinpoints (L .elems, display_stamp_ (_time_unit)) (sample_stamps)
			, datasets: [ { data: pinpoints (L .elems, _stamp => pinpoint (un (L .keyed), display_stamp_ (_time_unit) (_stamp), L .choice (as (step_sample) .calories, K (0))) (_calories)) (sample_stamps) } ] } )
		) (_step_sample_state )
	) =>
	<ScrollView style={{ width: _width, ... styles .container }} contentContainerStyle={styles .scroll_container}>
		<View style={{ height: 15 }} />
		<ButtonGroup
			onPress={i => {;please (L_ .set (tabs [i])) (tab_state)}}
			selectedIndex={R .indexOf (_time_unit) (tabs)}
			buttons={pinpoints (L .elems, variant_name_, tab_label_) (tabs)}
			containerStyle={styles .buttons_container} selectedButtonStyle={styles .selected_button}
			innerBorderStyle={styles .buttons_border} textStyle={styles .buttons_text} />
		{ pinpoint (match (
		case_ (L_ .isDefined) (
		<>
		<View style={styles .titleContainer}><Text style={styles .title}>Number of steps you've walked</Text></View>
		<LineChart
			labels={[]}
			data={mark (_steps_data_state)} yAxisLabel={''}
			bezier chartConfig={charts .steps}
			style={styles .steps}
			width={_width - 25} height={_height / 2 - 200} /> </> ),
		case_ (K) (
		<ActivityIndicator /> ) )
		) (mark (_steps_data_state) ) }
		{ pinpoint (match (
		case_ (L_ .isDefined) (
		<>
		<View style={styles .titleContainer}><Text style={styles .title}>Calories you've burnt</Text></View>
		<LineChart
			labels={[]}
			data={mark (_calories_data_state)} yAxisLabel={''}
			bezier chartConfig={charts .calories}
			style={styles .calories}
			width={_width - 25} height={_height / 2 - 200} /> </> ),
		case_ (K) (
		<ActivityIndicator /> ) )
		) (mark (_calories_data_state) ) }
		</ScrollView> ) )
