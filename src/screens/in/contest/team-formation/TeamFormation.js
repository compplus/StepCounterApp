import { ActivityIndicator, ScrollView, View, TextInput, Text } from 'react-native'
import { DirectFlatList } from '~/components'
import Invitation from './Invitation'
import CaptainItem from './CaptainItem'
import MemberItem from './MemberItem'
import InvitationItem from './InvitationItem'
import Invite from './Invite'

import { L, I, K, by, equals } from 'camarche/core'
import { belief, mark } from 'camarche/faith'
import { pinpoint, pinpoints } from 'camarche/optics'
import { calmm } from 'camarche/calmm'
import { as } from 'camarche/adt'
import { as_to } from '~/project/aux'

import { invites_state, id_user_state_ } from '~/project/api'
import { nav, contest_view } from '~/project/types'
import { user, team, mention } from '~/project/types'
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


var captain_state = belief ([ as (team) .captain, as (mention) .id, _id => mark (id_user_state_ (_id)) ]) (team_state)
var members_state = belief ([ as (team) .members, pinpoints ([ L .elems, as (mention) .id, _id => mark (id_user_state_ (_id)) ]) ]) (team_state)
var invitations_state = belief (as (team) .invitations) (team_state)

var team_mines_yes_state = belief ([ as (user) .id, by (_ => equals (pinpoint (as (user) .id) (mark (user_state)))) ]) (captain_state)



export default calmm (_ =>
	<View style={styles .container}>
		{ pinpoints (L .elems, _id =>
		<Invitation id={_id} />
		) (mark (invites_state) ) }
		{ pinpoint (match (
		case_ (L .subset (equals (true))) (
		<Invite team_state={team_state} style={styles .memberInput} /> ) )
		) (mark (team_mines_yes_state) ) }
		<ScrollView style={styles .memberList}>
			{ pinpoint (_user =>
			!! L_ .isDefined (_user) ?
			<CaptainItem user={_user} />
			:
			<ActivityIndicator />
			) (mark (captain_state) ) }
			{ pinpoints (L .elems, _user => 
			!! L_ .isDefined (_user) ?
			<MemberItem user={_user} />
			:
			<ActivityIndicator />
			) (mark (members_state) ) }
			{ pinpoints (L .elems, _email =>
			<InvitationItem email={_email} />
			) (mark (invitations_state) ) }
			</ScrollView>
		</View> )
