import { View, Linking } from 'react-native'
import SettingsList from 'react-native-settings-list'

import { suppose } from 'camarche/core'
import { belief, please } from 'camarche/faith'
import { as_to } from '~/project/aux'

import screen_ from '~/project/screen_'
import { nav, settings_view } from '~/project/types'
import { location_state } from '~/project/state'

var styles = {
	container: {
		flex: 1,
		backgroundColor: '#EFEFF4'
	},
	headerStyle: {
		marginTop: 15,
		marginLeft: 15,
		color: 'gray'
	} }

var settings_state = belief (as_to (nav) (settings_view)) (location_state)

export default _ =>
	suppose (
	( go_to_about = _ => {;please (L_ .set (screen_ (settings_view .about))) (settings_state)}
	) =>
	<View style={styles.container}>
		<SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
			<SettingsList.Header headerText='ACCOUNT' headerStyle={styles .headerStyle} />
			<SettingsList.Item
				title='Change Password'
				hasNavArrow={false} />
			<SettingsList.Item
				title='Submission History'
				hasNavArrow={false} />
			<SettingsList.Header headerText='SUPPORT' headerStyle={styles .headerStyle} />
			<SettingsList.Item
				title='Help'
				hasNavArrow={false}
				onPress={_ => {;Linking .openURL('https://www.eim.cse.hku.hk/news/hku-walking-challenge-2.html')}} />
			<SettingsList.Item
				title='Contact Us'
				hasNavArrow={false}
				onPress={_ => {;Linking .openURL('https://cse.hku.hk/index.php?option=com_content&view=article&id=180&Itemid=117')}} />
			<SettingsList.Header headerStyle={{ marginTop: 15 }} />
			<SettingsList.Item
				title='About'
				hasNavArrow={false}
				onPress={go_to_about}
				/>
			</SettingsList> </View> )
