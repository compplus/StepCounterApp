import React, {Component} from 'react'
import {View,StyleSheet,Text,Dimensions} from 'react-native'

export default class Map extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text>Map</Text>
			</View>
		)
	}
}

const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
	container:{
		width:width*0.95,
		flex:1,
		backgroundColor:'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')',
		alignItems:'center',
		justifyContent:'center'
	}
})