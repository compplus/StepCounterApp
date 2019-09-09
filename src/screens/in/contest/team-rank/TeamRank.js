import { Text, View, Image } from 'react-native'
import { RankList } from '~/components'

import { suppose, L, K } from 'camarche/core'
import { pinpoints } from 'camarche/optics'
import { belief, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { team_ranking_state } from '~/project/api'

var styles = {
	container: {
		flex: 1,
		alignItems: 'stretch',
		flexDirection: 'column',
		backgroundColor: '#EEEEEE' },
	team: {
		flex: 1.5,
		flexDirection: 'row',
		backgroundColor: 'yellow',
		alignItems: 'stretch' },
	teamItemWrapper:{
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#212121',
		alignItems: 'center',
		justifyContent: 'center' },
	title_box: {
		marginHorizontal: 10,
		height: 50,
		flexShrink: 0,
		alignSelf: 'stretch',
		backgroundColor: '#EBF6F7',
		flexDirection: 'row',
		alignItems: 'center' },
	title_rank: {
		position: 'absolute',
		left: 10,
		textAlign: 'left',
		fontFamily: 'Gill Sans' },
	title_id: {
		position: 'absolute',
		left: 60,
		textAlign: 'left',
		fontFamily: 'Gill Sans' },
	title_steps: {
		position: 'absolute',
		right: 10,
		textAlign: 'right',
		fontFamily: 'Gill Sans' },
	rankList: {
		flex: 6 },
	teamIcon: {
		width: 65,
		height: 65,
		alignSelf: 'center' },
	team_info: {
		fontFamily: 'Gill Sans',
		color: 'white',
		fontSize: 18 } }

var steps_state = belief (pinpoints (L .elems, 'steps')) (team_ranking_state)

export default calmm (_ =>
	suppose (
	( _ranking = mark (team_ranking_state)
	, _steps = mark (steps_state)
	) =>
	<View style={styles .container}>
		<View style={styles .team}>
			<View style={styles .teamItemWrapper}>
				<Image 
					style={styles .teamIcon}
					source={require ('__/assets/contest_page/myrank.png')} />
				<Text style={styles .team_info}>Team's rank: {/* _rank */}</Text>
				</View>
			<View style={styles.teamItemWrapper}>
				<Image 
					style={styles.teamIcon}
					source={require ('__/assets/contest_page/mysteps.png')} />
				<Text style={styles .team_info}>Team's steps: {/* _steps */}</Text>
				</View> </View>
		<View style={styles .title_box}>
			<Text style={styles .title_rank}>Rank</Text>
			<Text style={styles .title_id}>Team Name</Text>
			<Text style={styles .title_steps}>Steps</Text>
			</View>
		<View style={styles .rankList}> 
			<RankList ranking={_ranking} />
			</View> </View> ) )
