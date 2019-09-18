import { Text, ActivityIndicator } from 'react-native'
import { ListItem } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'

import { K, not, suppose, L, by } from 'camarche/core'
import { pinpoint } from 'camarche/optics'
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
	<Text style={{ color: 'darkgoldenrod' }}>Captain</Text> )

export default calmm (({ user: _user }) =>
	suppose (
	( _id = pinpoint (as (user) .id) (_user)
	, email_state = id_email_state_ (_id)
	, _email = mark (email_state)
	) =>
	!! L_ .isDefined (_email) ?
	<ListItem
		containerStyle={styles .item}
		title={_email}
		rightIcon={Status} />
		//leftAvatar={{ source: { uri: image } }}
	:
	<ActivityIndicator style={{ marginVertical: 20 }} /> )  )
