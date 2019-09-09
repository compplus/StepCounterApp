import { FlatList, Text, View } from 'react-native'
import FlatListItem from './FlatListItem'

var styles = {
	listContainer:{
		flex: 1 },
	listItem: {
		marginHorizontal: 10,
		height: 50,
		flexShrink: 0,
		alignSelf: 'stretch',
		backgroundColor: '#eee',
		flexDirection: 'row',
		alignItems: 'center' },
	rank: {
		position: 'absolute',
		left: 10,
		textAlign: 'left',
		fontFamily: 'Gill Sans' },
	id: {
		position: 'absolute',
		left: 60,
		textAlign: 'left',
		fontFamily: 'Gill Sans' },
	steps: {
		position: 'absolute',
		right: 10,
		textAlign: 'right',
		fontFamily: 'Gill Sans' },
	separator: {
		height: 1,
		width: '97%',
		backgroundColor: '#CED0CE',
		marginLeft: '3%' } }

var ListItem = FlatListItem (({ rank, name, step_count }) =>
	<View style={styles .listItem}>
		<Text style={styles .rank}>{ rank }</Text>
		<Text style={styles .id}>{ name }</Text>
		<Text style={styles .steps}>{ step_count }</Text>
		</View> )

var renderSeparator = _ => 
	<View style={styles .separator} />

export default ({ ranking }) =>
    <FlatList
	    style={styles .listContainer}
	    data={ranking}
	    renderItem={ListItem}
	    keyExtractor={({ rank }) => rank}
	    ItemSeparatorComponent={renderSeparator} />
