import { ActivityIndicator, Text, View, TextInput, Button } from 'react-native'

import { I, not, suppose, R, L } from 'camarche/core'
import { l_sum, match, case_ } from 'camarche/optics'
import { L_, belief, mark, please } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { go } from 'camarche/effects'
import { as } from 'camarche/adt'

import api from '~/project/api'
import { team } from '~/project/types'
import { client_state, local_state } from '~/project/state'

var styles = {
	inputContainer: {
		width: '100%',
		flexDirection: 'row',
		marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20 },
	memberInput: {
		backgroundColor: 'white',
		width: '80%',
		height: 40,
		borderRadius: 10,
		paddingHorizontal: 15, 
		borderRadius: 6,
		marginHorizontal: 10 },
	addButton: {
		width: '30%',
		color:'white',
		backgroundColor: '#00BCD4',
		borderRadius: 5,
		marginHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center' },
	notice_box: {
		color: 'white',
		alignSelf: 'center',
		marginBottom: 20 } }

var adding_yes_state = belief ([ 'team-invite', 'adding-yes', L .valueOr (false) ]) (local_state)

export default calmm (({ team_state, style }) =>
	suppose (
	( invitations_state = belief (as (team) .invitations) (team_state)
	, id_state = belief (as (team) .id) (team_state)
	, disabled_yes_state = belief ([ L .count ([ l_sum ([ as (team) .members, as (team) .invitations ]), L .elems ]), R .lte (4) ]) (team_state)
	, select_email_state = belief ([ 'team-invite', mark (id_state) ]) (local_state)

	, select_email = _email => {;please (L_ .set (_email)) (select_email_state)}
	, invite_email = _ => {
		;go .then (_ => {
		;please (L_ .set (true)) (adding_yes_state) } ) .then (_ =>
		api .invite ({ client: show (client_state), email: show (select_email_state) }) ) .then (_ =>
		api .team (show (client_state)) ) .then (_team => {
		;please (L_ .set (_team)) (team_state) } )
		.catch (I) .then (_ => {
		;please (L_ .set (false)) (adding_yes_state) } ) }
	) =>
	<>
	<View style={{ ... styles .inputContainer, ... style }}>
		<TextInput
			style={styles .memberInput}
			placeholder="Enter new member's email"
			onChangeText={select_email} />
		{ !! not (mark (adding_yes_state)) ?
		<Button
			title="Invite"
			style={styles .addButton}
			onPress={invite_email}
			color='#81F7F3'
			disabled={mark (disabled_yes_state)} />
		:
		<ActivityIndicator style={{ marginVertical: 20 }} /> }
		</View>
	{ match (case_ (L .subset (not)) (
	<Text style={styles .notice_box}>You need to have five members in your team to participate in the team competition!</Text> )
	) (mark (disabled_yes_state) ) } </> ) )
