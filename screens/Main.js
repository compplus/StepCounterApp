import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Image, TouchableWithoutFeedback, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import CommonStats from '../components/CommonStats'
import DynamicStats from '../components/DynamicStats'
import Icon from 'react-native-vector-icons/Ionicons';

const rows = 3;
const cols = 2;
const marginHorizontal = 5;
const marginVertical = 5;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1)) - 100;

export default class Main extends Component {
	state = { portrait: this.isPortrait() }
	isPortrait() {
		return Dimensions.get('window').height > Dimensions.get('window').width
	}

	constructor() {
		super();
		this.state = {
			FlatListItems: [
				{ id: '0', value: '' },
				{ id: '1', value: 'Walking challenge' },
				{ id: '2', value: 'Settings' },
				{ id: '0', value: '' },
			],
		};
	}

	FlatListItemSeparator = () => {
		return (
			<View
				style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
			/>
		);
	};

	GetItem(item) {
		//Function for click on an item
		Alert.alert(item);
	}


	render() {
		var go = this.props.go

		return <View style={{ ...styles.container, flexDirection: (this.state.portrait ? 'column' : 'row') }} onLayout={() => { this.setState({ portrait: this.isPortrait() }); }}>
			<ScrollView style={styles.scrollContainer}>
				<View style={styles.stepcountContainer}>
					<DynamicStats portrait={this.state.portrait} />
				</View>

				<View style={styles.sectionContainer}>
					<TouchableOpacity activeOpacity={.5} onPress={() => go('Info')}>
						<Image
							source={require('./../assets/main_page/main_info.jpg')}
							style={styles.boxContainer}>
						</Image>
					</TouchableOpacity>

					<TouchableOpacity activeOpacity={.5} onPress={() => go('Analysis')}>
						<Image
							source={require('./../assets/main_page/main_activity.jpg')}
							style={styles.boxContainer}>
						</Image>
					</TouchableOpacity>
					
					<TouchableOpacity activeOpacity={.5} onPress={() => go('Map')}>
						<Image
							source={require('./../assets/main_page/main_map.jpg')}
							style={styles.boxContainer}>
						</Image>
					</TouchableOpacity>
					
					<TouchableOpacity activeOpacity={.5} onPress={() => go('Awards')}>
						<Image
							source={require('./../assets/main_page/main_awards.jpg')}
							style={styles.boxContainer}>
						</Image>
					</TouchableOpacity>
				</View>

				<FlatList
					data={this.state.FlatListItems}
					ItemSeparatorComponent={this.FlatListItemSeparator}
					renderItem={({ item }) => (
						<View>
							<Text style={styles.item} onPress={() => go('Setting')}>
								{item.value}
							</Text>
						</View>
					)}
				/>

			</ScrollView>
		</View>
		{/*<DynamicStats portrait={this.state.portrait}/>*/ }
		{/*<CommonStats portrait={this.state.portrait}/>*/ }
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	stepcountContainer: {
		backgroundColor: '#212121', // dark
		//backgroundColor: 'white',
		marginTop: 20,
		marginBottom: 20,
		marginLeft: marginHorizontal,
		marginRight: marginHorizontal,
		justifyContent: 'center',
		alignItems: 'center'
	},
	scrollContainer: {
		flex: 1,
		backgroundColor: '#212121' // dark
		//backgroundColor: 'white',
	},
	separator: {
		backgroundColor: '#171D33',
		flex: 1,
		height: 50,
	},
	sectionContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#212121', // dark
		//backgroundColor: 'white',
	},
	boxContainer: {
		marginTop: marginVertical,
		marginBottom: marginVertical,
		marginLeft: marginHorizontal,
		marginRight: marginHorizontal,
		width: width,
		height: height,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'gold',
		borderRadius: 10,
	},
	item: {
		padding: 10,
		margin: 5,
		fontSize: 20,
		height: 44,
		color: '#FFFFFF', // dark
		fontFamily: 'Gill Sans',
		//color: 'black',
	  },
};
