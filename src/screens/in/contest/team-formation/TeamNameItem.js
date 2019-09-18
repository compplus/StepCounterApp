import { TextInput } from 'react-native'
import { ListItem } from 'react-native-elements'
import { MaterialIcons } from '@expo/vector-icons'

import { K, not, suppose, L, by } from 'camarche/core'
import { L_, belief, please, show, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'
import { jinx } from 'camarche/effects'
import { as } from 'camarche/adt'
import { debounce } from '~/project/aux'

import { team } from '~/project/types'
import { team_state } from '~/project/state'
import api from  '~/project/api'

var styles = {
	name_box: {
		margin: 10,
		marginTop: 20,
		marginBottom: -10,
		padding: 10,
		paddingVertical: 5,
		backgroundColor: 'white',
		borderRadius: 10,
		height: 40 } }

var name_state = belief (as (team) .name) (team_state)

export default calmm (_ =>
	suppose (
	( name_team = _name => {;please (L_ .set (_name)) (name_state) ;update_name (_name)}
	, update_name = debounce (1000) (_name => {
		;go .then (_ =>
		api .name_team ({ name: _name || 'Unnamed' }) ) .then (_ =>
		api .team ()) } )
	) =>
	<TextInput placeholder="Team name" value={mark (name_state)} onChangeText={name_team} style={styles .name_box} /> ) )
