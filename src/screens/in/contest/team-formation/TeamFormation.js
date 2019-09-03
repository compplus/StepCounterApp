import { ScrollView, View, TextInput, Text } from 'react-native'
import { DirectFlatList } from '~/components'
import CaptainItem from './CaptainItem'
import MemberItem from './MemberItem'
import InvitationItem from './InvitationItem'
import Invite from './Invite'

import { by, equals } from 'camarche/core'
import { belief, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { as } from 'camarche/adt'
import { as_to } from '~/project/aux'

import { nav, contest_view } from '~/project/types'
import { team } from '~/project/types'
import { location_state, team_state, user_state } from '~/project/state'

var styles = {
	container: {
		flex: 1,
		backgroundColor: '#171D33' },
	pageTitle: {
		flexGrow: 0,
		marginTop: 10,
		backgroundColor: '#1F1F20',
		flexDirection: 'column-reverse' },
	memberInput:{
		marginTop: 20 },
	memberList: {
		flex: 1,
		marginTop: 20 },
	titleText:{
		textAlign: 'left',
		fontSize: 40,
		fontFamily: 'Gill Sans',
		color: 'white',
		fontWeight: '500',
		marginBottom: 10,
		marginLeft: 10 } }


var captain_state = belief (as (team) .captain) (team_state)
var members_state = belief (as (team) .members) (team_state)
var invitations_state = belief (as (team) .invitations) (team_state)

var my_team_yes_state = belief (by (_ => equals (mark (user_state)))) (captain_state)

export default calmm (_ =>
	<View style={styles .container}>
		{ pinpoint (L .when (I), K (
		<Invite team_state={team_state} style={styles .memberInput} /> )
		) (mark (my_team_yes_state) ) }
		<ScrollView style={styles .memberList}>
			<CaptainItem user={mark (captain_state)} />
			{ pinpoints (L .elems, _user =>
			<MemberItem user={_user} />
			) (mark (members_state) ) }
			{ pinpoints (L .elems, _email =>
			<InvitationItem email={_email} />
			) (mark (invitations_state) ) }
			</ScrollView>
		</View> )
