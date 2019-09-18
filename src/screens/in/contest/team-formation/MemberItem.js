import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { ListItem } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'

import { K, not, suppose, L, by } from 'camarche/core'
import { pinpoint, match, case_ } from 'camarche/optics'
import { L_, belief, please, show, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { jinx } from 'camarche/effects'
import { as } from 'camarche/adt'

import { team_state, user_state } from '~/project/state'
import { user } from '~/project/types'
import api from  '~/project/api'

var styles = {
	item: {
		padding: 10,
		backgroundColor: '#eee',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10,
		borderRadius: 20,
		height: 100 } }

// TODO: add abstraction for this pattern

var Remove = _email => _ =>
	suppose (
	( remove = _ => {
		;go
		.then (_ => api .remove ({ email: _email }))
		.then (_ => api .team ({})) }
	) =>
	<TouchableOpacity onPress={remove}>
		<MaterialIcons name="cancel" color="darkslategray" size={35} /> </TouchableOpacity> )

var captain_state = belief ([ as (team) .captain, as (mention) .id, _id => mark (id_user_state_ (_id)) ]) (team_state)

var team_mines_yes_state = belief ([ as (user) .id, by (_ => equals (pinpoint (as (user) .id) (mark (user_state)))) ]) (captain_state)

export default calmm (({ user: _user }) =>
	suppose (
	( _id = pinpoint (as (user) .id) (_user)
	, email_state = id_email_state_ (_id)
	, _email = mark (email_state)
	, team_mines_yes = mark (team_mines_yes_state)
	) =>
	!! L_ .isDefined (_email) ?
	<ListItem
		containerStyle={styles .item}
		title={_email}
		rightIcon={pinpoint (L .when (I), K (Remove (_email))) (team_mines_yes)} />
		//leftAvatar={{ source: { uri: image } }}
	:
	<ActivityIndicator style={{ marginVertical: 20 }} /> ) )
