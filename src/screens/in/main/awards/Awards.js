import { View, FlatList } from 'react-native'
import { FlatListItem } from '~/components'
import AwardItem from './AwardItem'

import award_items from './award-items'

var styles = {
	container: {
		flex: 1,
		backgroundColor: '#212121',
		alignItems: 'center' },
	awardList: {
		flex: 1,
		width: '95%' } }

var ListAwardItem = ({ title, description, image, status }) =>
	<View style={{ flex: 2, marginTop: 8, marginBottom: 8 }}>
		<AwardItem
			title={title}
			description={description}
			image={image}
			status={status}
			/>
		</View>

export default _ =>
	<View style={styles .container}>
		<View style={styles .awardList}>
			<FlatList
				style={{ flex: 1 }}
				numColumns={3} initialNumToRender={12}
				data={award_items}
				keyExtractor={({ title }) => title}
				showsVerticalScrollIndicator={false}
				renderItem={FlatListItem (ListAwardItem)} />
			</View> </View>
