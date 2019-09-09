import { TouchableOpacity, ActivityIndicator } from 'react-native'
import { ListItem } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'

import { K, not, suppose, L, by } from 'camarche/core'
import { pinpoint, match, case_ } from 'camarche/optics'
import { L_, belief, please, show, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { jinx } from 'camarche/effects'
import { as } from 'camarche/adt'

import { client_state, local_state } from '~/project/state'
import { user } from '~/project/types'
import { id_email_state_ } from  '~/project/api'
import api from  '~/project/api'

var styles = {
	item: {
		margin: 10,
		marginTop: 5,
		marginBottom: 0,
		padding: 10,
		paddingVertical: 5,
		backgroundColor: '#fff5d9',
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 15,
		height: 50 } }

var Reject = _email => _ =>
	suppose (
	( reject = _ => {
		;go
		.then (_ => api .reject ({ email: _email }))
		.then (_ => (api .invites ({}), api .team ({}))) }
	) =>
	<TouchableOpacity onPress={reject}>
		<MaterialIcons name="cancel" color="black" size={35} /> </TouchableOpacity> )

export default calmm (({ id: _id }) =>
	suppose (
	( email_state = id_email_state_ (_id)
	, _email = mark (email_state)
	, accept = _ => {
		;go
		.then (_ => api .accept ({ email: _email }))
		.then (_ => (api .invites ({}), api .team ({}))) }
	) =>
	!! L_ .isDefined (_email) ?
	<TouchableOpacity onPress={accept}>
		<ListItem
			containerStyle={styles .item}
			title={'Accept invite from ' + _email + '\'s team?'}
			rightIcon={Reject (_email)} /> </TouchableOpacity>
	:
	<ActivityIndicator /> ) )
