import { View, Text } from 'react-native'

import { K, not, suppose, L, by } from 'camarche/core'
import { L_, belief, please, show, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { jinx } from 'camarche/effects'
import { as } from 'camarche/adt'
import { debounce } from '~/project/aux'

import { team } from '~/project/types'
import { team_state } from '~/project/state'

var styles = {
	name_box: {
		margin: 10,
		marginTop: 20,
		marginBottom: -10,
		padding: 10,
		paddingVertical: 5,
		backgroundColor: 'white',
		borderRadius: 10,
		justifyContent: 'center',
		height: 40 } }

var name_state = belief (as (team) .name) (team_state)

export default calmm (_ =>
	<View style={styles .name_box}><Text style={{ fontSize: 20 }}>{ mark (name_state) }</Text></View> )
