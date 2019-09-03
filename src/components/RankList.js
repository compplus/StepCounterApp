import { FlatList, Text, View} from 'react-native'

var styles = {
	listContainer:{
		flex: 1 },
	listItem: {
		padding: 10,
		backgroundColor: '#eee',
		flexDirection: 'row',
		justifyContent: 'space-between' },
	rank: {
		flex:1,
		padding:10,
		alignSelf: 'flex-start',
		fontFamily: 'Gill Sans' },
	ID:{
		flex:6,
		textAlign: 'left',
		padding:10,
		fontFamily: 'Gill Sans' },
	Steps:{
		flex:4,
		padding:10,
		textAlign: 'right',
		fontFamily: 'Gill Sans' },
	separator: {
		height: 1,
		width: '97%',
		backgroundColor: '#CED0CE',
		marginLeft: '3%' }
}

var flatListData = [
	{
		Rank: '1',
		ID: 'HKU',
		Steps: '99,999,999,999'
	},
	{
		Rank: '2',
		ID: 'CU',
		Steps: '10,000'
	},
	{
		Rank: '3',
		ID: 'HKUST',
		Steps: '5,000'
	},
	{
		Rank: '4',
		ID: 'PolyU',
		Steps: '2,500'
	},
	{
		Rank: '5',
		ID: 'BU',
		Steps: '1,250'
	}
]

var ListItem = ({ rank, id, steps }) =>
	<View style={styles .listItem}>
		<Text style={styles .rank}>{ rank }</Text>
		<Text style={styles .id}>{ id }</Text>
		<Text style={styles .steps}>{ steps }</Text>
		</View>

var renderSeparator = _ => 
	<View style={styles .separator} />

export default _ =>
    <FlatList
	    style={styles .listContainer}
	    data={flatListData}
	    renderItem={ListItem}
	    keyExtractor={({ rank }) => rank}
	    ItemSeparatorComponent={renderSeparator} />
