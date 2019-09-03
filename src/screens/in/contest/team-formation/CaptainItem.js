import { ActivityIndicator } from 'react-native'
import { ListItem } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'

import { not, suppose, L, by } from 'camarche/core'
import { pinpoint, match, case_ } from 'camarche/optics'
import { L_, belief, please, show, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { jinx } from 'camarche/effects'
import { as } from 'camarche/adt'

import { client_state, local_state } from '~/project/state'
import { user } from '~/project/types'
import api from  '~/project/api'

var styles = {
	item: {
		padding: 10,
		backgroundColor: '#eee',
		borderColor: '#dbb979',
		borderWidth: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10,
		borderRadius: 20,
		height: 100 } }

var Status = K (
	<MaterialIcons name="check" color="green" size={20} /> )

export default calmm (({ user: _user }) =>
	suppose (
	( _id = pinpoint (as (user) .id) (_user)
	, email_state = belief ([ 'member-select', _id ]) (local_state)
	, $__load_email = jinx (_ => {
		if (not (L_ .isDefined (show (email_state)))) {
			;api .email ({ client: show (client_state), id: _id })
			.then (_email => {;please (L_ .set (_email)) (email_state)}) } } )
	) =>
	!! L_ .isDefined (mark (email_state)) ?
	<ListItem
		containerStyle={styles .item}
		title={mark (email_state)}
		rightIcon={Status} />
		//leftAvatar={{ source: { uri: image } }}
	:
	<ActivityIndicator /> )  )
