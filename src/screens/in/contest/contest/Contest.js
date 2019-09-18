import { View, TouchableOpacity, Image } from 'react-native'

import { suppose } from 'camarche/core'
import { belief, please, L_ } from 'camarche/faith'
import { as_to } from '~/project/aux'

import default_ from '~/project/default_'
import { nav, contest_view } from '~/project/types'
import { location_state } from '~/project/state'

var styles = {
	container: {
		flex: 1,
		backgroundColor: '#212121',
		justifyContent: 'center',
		alignItems: 'center' },
	individualRank: {
		flex: 1,
		margin: 5,
		marginTop: 10 },
	teamRank: {
		flex: 1,
		margin: 5 },
	teamFormation: {
		flex: 1,
		margin: 5 },
	imageClass: {
		flex: 1,
		height: 400,
		width: 400,
		borderRadius: 20 } }

var contest_state = belief (as_to (nav) (contest_view)) (location_state)

export default _ =>
	suppose (
	( go_individual_rank = _ => {;please (L_ .set (default_ (contest_view .individual_rank))) (contest_state)}
	, go_team_formation = _ => {;please (L_ .set (default_ (contest_view .team_formation))) (contest_state)}
	, go_team_rank = _ => {;please (L_ .set (default_ (contest_view .team_rank))) (contest_state)}
	) =>
	<View style={styles .container}>
		<View style={styles .individualRank}>
			<TouchableOpacity activeOpacity = { 0.5 } onPress={go_individual_rank}>
				<Image source={require('__/assets/contest_page/individual_rank_edit.jpg')} style={styles .imageClass} /> </TouchableOpacity> </View>
		<View style={styles .teamRank}>
			<TouchableOpacity activeOpacity = { 0.5 } onPress={go_team_rank}>
				<Image source={require('__/assets/contest_page/team_rank_edit.jpg')} style={styles .imageClass} /> </TouchableOpacity> </View>
		<View style={styles .teamFormation}>
			<TouchableOpacity activeOpacity = { 0.5 } onPress={go_team_formation}>
				<Image source={require('__/assets/contest_page/team_formation_edit.jpg')} style={styles .imageClass} /> </TouchableOpacity> </View>
		</View> )
