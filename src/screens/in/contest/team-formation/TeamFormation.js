import { ActivityIndicator, ScrollView, View, TextInput, Text } from 'react-native'
import TeamNameSelect from './TeamNameSelect'
import TeamNameItem from './TeamNameItem'
import Invitation from './Invitation'
import CaptainItem from './CaptainItem'
import MemberItem from './MemberItem'
import InvitationItem from './InvitationItem'
import Invite from './Invite'

import { R, L, I, K, not, by, equals } from 'camarche/core'
import { L_, belief, mark } from 'camarche/faith'
import { match, case_, pinpoint, pinpoints } from 'camarche/optics'
import { calmm } from 'camarche/calmm'
import { as } from 'camarche/adt'
import { as_to } from '~/project/aux'

import { invites_state, id_user_state_, id_email_state_ } from '~/project/api'
import { nav, contest_view } from '~/project/types'
import { user, team, mention } from '~/project/types'
import { team_state, user_state } from '~/project/state'

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


var captain_state = belief (as (team) .captain, as (mention) .id, _id => mark (id_user_state_ (_id))) (team_state)
var members_state = belief (as (team) .members, pinpoints ([ L .elems, as (mention) .id, _id => mark (id_user_state_ (_id)) ])) (team_state)
var invitations_state = belief (as (team) .invitations) (team_state)

var team_mines_yes_state = belief (as (user) .id, by (_ => equals (pinpoint (as (user) .id) (mark (user_state))))) (captain_state)
var hkuer_yes_state = belief (as (user) .id, _id => mark (id_email_state_ (_id)), L .reread (R .endsWith ('hku.hk'))) (user_state)



export default calmm (_ =>
	<View style={styles .container}>
		{ match (case_ (L .subset (equals (true))) (
		<TeamNameSelect /> )
		) (mark (team_mines_yes_state) && mark (hkuer_yes_state) ) }
		{ match (case_ (L .subset (equals (true))) (
		<TeamNameItem /> )
		) (not (mark (team_mines_yes_state)) ) }
		{ pinpoints (L .elems, _id =>
		<Invitation id={_id} />
		) (mark (invites_state) ) }
		{ match (case_ (L .subset (equals (true))) (
		<Text style={{ color: 'white', padding: 25 }}>Ask a friend with an hku.hk email to create a team!</Text> )
		) (mark (team_mines_yes_state) && not (mark (hkuer_yes_state)) ) }
		<ScrollView style={styles .memberList}>
			{ match (case_ (L .subset (equals (true))) (
			<>
			{ pinpoint (_user =>
			!! L_ .isDefined (_user) ?
			<CaptainItem user={_user} />
			:
			<ActivityIndicator style={{ marginVertical: 20 }} />
			) (mark (captain_state) ) }
			{ pinpoints (L .elems, _user => 
			!! L_ .isDefined (_user) ?
			<MemberItem user={_user} key={pinpoint (as (user) .id) (_user)} />
			:
			<ActivityIndicator style={{ marginVertical: 20 }} />
			) (mark (members_state) ) }
			{ pinpoints (L .elems, _email =>
			<InvitationItem email={_email} key={_email} />
			) (mark (invitations_state) ) } </> )
			) (not (mark (team_mines_yes_state)) || mark (hkuer_yes_state) ) }
			{ match (case_ (L .subset (equals (true))) (
			<Invite team_state={team_state} style={styles .memberInput} /> )
			) (mark (team_mines_yes_state) && mark (hkuer_yes_state) ) }
			</ScrollView>
		</View> )
