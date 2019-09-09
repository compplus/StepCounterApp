import { Image, FlatList, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { FlatListItem } from '~/components'
import Icon from 'react-native-vector-icons/FontAwesome'

import { suppose, L, K, I } from 'camarche/core'
import { L_, please, belief, mark } from 'camarche/faith'
import { pin_first, l_sum } from 'camarche/optics'
import { calmm } from 'camarche/calmm'
import { as } from 'camarche/adt'
import { as_to, map_v_as_value } from '~/project/aux'

import screen_ from '~/project/screen_'
import { nav, main_view, step_stat, step_sample } from '~/project/types'
import { location_state, orientation_state, step_stat_state, location_nav_state } from '~/project/state'

//TODO: reformulate this shit with flex
var rows = 3
var cols = 2

var marginHorizontal = 5
var marginVertical = 5

var { width, height } = Dimensions .get ('window')


var styles = {
	box_2: {
		backgroundColor: '#212121',
		alignItems: 'center',
		justifyContent: 'center',
		width: '95%' },
	headerimage: {
		height: 100 / 1.2,
		width: 250 / 1.2,
		flex: 1,
		marginBottom: 15 },
	steps: {
		backgroundColor: 'transparent',
		fontSize: 24,
		textAlign: 'center',
		color: '#7ADAE9', // dark
		//color: '#171D33',
		fontFamily: 'Gill Sans',
		justifyContent: 'center' },
	highlight: {
		backgroundColor: 'transparent',
		fontSize: 24,
		textAlign: 'center',
		color: 'white', // dark
		//color: 'green',
		fontFamily: 'Gill Sans',
		justifyContent: 'center' },
	container: {
		flex: 1,
		backgroundColor: '#212121' },
	stepcountContainer: {
		backgroundColor: '#212121', // dark
		//backgroundColor: 'white',
		marginTop: 20,
		marginBottom: 20,
		marginLeft: marginHorizontal,
		marginRight: marginHorizontal,
		justifyContent: 'center',
		alignItems: 'center' },
	separator: {
		backgroundColor: '#171D33',
		flex: 1,
		height: 50 },
	sectionContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#212121', // dark
		//backgroundColor: 'white'
		},
	boxContainer: {
		marginTop: marginVertical,
		marginBottom: marginVertical,
		marginLeft: marginHorizontal,
		marginRight: marginHorizontal,
		width: (width / cols) - (marginHorizontal * (cols + 1)),
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#424242',
		borderRadius: 10 },
	itemWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between' },
	itemArrow: {
		padding: 10,
		margin: 5,
		color: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center' },
	arrowWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-end' },
	itemText: {
		padding: 12,
		margin: 5,
		fontSize: 20,
		color: '#FFFFFF', // dark
		fontFamily: 'Gill Sans',
		//color: 'black'
		},
	gap: {
		height: 0.5,
		width: '100%',
		backgroundColor: '#C8C8C8' } }

var options =
	[ { name: 'Walking challenge' }
	, { name: 'Settings', screen: main_view .settings } ]

var Option = ({  name, screen }) =>
	suppose (
	( go_option = pin_first (l_sum ([ [ K (screen_ (screen)), L .when (I), _screen => {;please (L_ .set (_screen)) (location_nav_state)} ], _ => {;alert ('Page under construction')} ])) 
	) =>
	<TouchableOpacity style={styles .itemWrapper} onPress={go_option}>
		<Text style={styles .itemText}>{ name }</Text>
		<View style={styles .arrowWrapper}>
			<Icon style={styles .itemArrow} name="chevron-right" color="white" size={15} /> </View>
		</TouchableOpacity> )

var main_state = belief (as_to (nav) (main_view)) (location_state)
var today_steps_state = belief ([ as (step_stat) .by_days, L .choice ([ L .first, map_v_as_value, as (step_sample) .steps ], K (0)) ]) (step_stat_state)

export default calmm (_ =>
	suppose (
	( _orientation = mark (orientation_state)
	, today_steps = mark (today_steps_state)
	, go_profile = _ => {;please (L_ .set (screen_ (main_view .profile))) (main_state)}
	, go_activity = _ => {;please (L_ .set (screen_ (main_view .activity))) (main_state)}
	, go_map = _ => {;please (L_ .set (screen_ (main_view .map))) (main_state)}
	, go_awards = _ => {;please (L_ .set (screen_ (main_view .awards))) (main_state)}
	) =>
	<ScrollView style={styles .container}>
		<View style={styles.stepcountContainer}>
			<View style={styles .box_2}>
				<Image
					source={require('__/assets/main_page/logo.png')}
					style={styles .headerimage} />
				<Text style={styles .steps}>
					You've walked <Text style={styles. highlight}>{ today_steps } steps</Text> today. </Text> </View>
			</View>
		<View style={styles.sectionContainer}>
			<TouchableOpacity activeOpacity={0.5} onPress={go_profile}>
				<Image
					source={require('__/assets/main_page/main_info.jpg')}
					style={styles.boxContainer} /> </TouchableOpacity>
			<TouchableOpacity activeOpacity={0.5} onPress={go_activity}>
				<Image
					source={require('__/assets/main_page/main_activity.jpg')}
					style={styles.boxContainer} /> </TouchableOpacity>
			<TouchableOpacity activeOpacity={0.5} onPress={go_map}>
				<Image
					source={require('__/assets/main_page/main_map.jpg')}
					style={styles.boxContainer} /> </TouchableOpacity>
			<TouchableOpacity activeOpacity={0.5} onPress={go_awards}>
				<Image
					source={require('__/assets/main_page/main_awards.jpg')}
					style={styles.boxContainer} /> </TouchableOpacity>
			</View>
		<View style={{ ... styles .gap, marginTop: 40 }} />
		<FlatList
			data={options}
			ItemSeparatorComponent={K (<View style={styles .gap} />)}
			renderItem={FlatListItem (Option)} />
		<View style={styles .gap} />
		</ScrollView> ) )
