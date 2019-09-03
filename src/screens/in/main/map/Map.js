import { View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { L } from 'camarche/core'
import { pinpoint } from 'camarche/optics'
import { L_, mark } from 'camarche/faith'
import { calmm } from 'camarche/calmm'

import { coord_state } from '~/project/state'


var styles = {
	strech_flex: {
		flex: 1,
		alignSelf: 'stretch' } } 

export default calmm (_ =>
	<MapView
		style={styles .strech_flex}
		showsUserLocation={true} followUserLocation={true}>
		{ pinpoint (L .when (L_ .isDefined), _ =>
		<Marker coordinate={mark (coord_state)} />
		) (mark (coord_state) ) }
		</MapView> )
