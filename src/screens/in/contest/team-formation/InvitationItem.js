import { ListItem } from 'react-native-elements'
import Ionicon from 'react-native-vector-icons/Ionicons'

import { K, L, by } from 'camarche/core'

var styles = {
	item: {
		padding: 10,
		backgroundColor: '#eee',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10,
		borderRadius: 20,
		height: 100,
		opacity: 0.5 } }

var Status = K (
	<Ionicon name="ios-time" size={30} /> )

export default ({ email }) =>
	<ListItem
		containerStyle={styles .item}
		title={email}
		rightIcon={Status} />
