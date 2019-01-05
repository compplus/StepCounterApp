import React, {Component} from 'react'
import {View,StyleSheet} from 'react-native'

export default class CommonStats extends Component{
	render(){
		return(
			<View style={styles.container}>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'white',
		width:'95%',
		height:'20%',
		elevation: 2, //android shadow
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
	}
})