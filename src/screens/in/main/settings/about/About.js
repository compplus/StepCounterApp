import { Image, View, Text, Dimensions } from 'react-native'

var styles = {
	container: {
		flex: 1,
		backgroundColor: '#EFEFF4'
	},
	aboutbox: {
		flex: 0.5,
		marginTop: 40,
		marginBottom: 20,
		backgroundColor: '#FFFFFF',
		borderTopColor: '#CFD8DC',
		borderTopWidth: 1.5,
		borderBottomColor: '#CFD8DC',
		borderBottomWidth: 1.5,
		padding: 20,
		paddingBottom: 30,
	},
	image: {
		//flex: 1,
		height: '20%',
		width: '80%',
		alignItems: 'center',
	},  
	imagewrapper: {
		flex: 1, 
		alignItems: 'center',
		justifyContent: 'center',
	},
	parawrapper: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	paragraph: {
		color: '#424242',
	},
	bottomBox: {
		marginHorizontal: 30,
		marginTop: 10,
	},
	versionStyle: {
		color: 'gray',
		fontSize: 11,
	},
	rightReserveStyle: {
		color: 'gray',
		fontSize: 11,
	} }

export default _ =>
	<View style={styles .container}>
		<View style={styles .aboutbox}>
			<View style={styles .imagewrapper}>
				<Image
					style={styles .image}
					source={require('__/assets/setting_page/CSE_logo.png')} />
				</View>
			<View style={styles .parawrapper}>
				<Text style={styles .paragraph}>To-do: paragraph</Text>
				</View>
			</View>
		<View style={styles .bottomBox}>
			<Text style={styles .versionStyle}>Version 1.0.1</Text>
			<Text style={styles .rightReserveStyle}>2019 HKU Centre for Sports and Exercise. All rights reserved.</Text>
			</View>
		</View >
