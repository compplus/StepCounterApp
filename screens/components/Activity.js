import React, {Component} from 'react'
import {View,StyleSheet,Text,Dimensions} from 'react-native'

export default class Activity extends Component{
	render(){
		return(
			<View style={{...styles.container,width:this.props.width}}>
				<Text>Activity</Text>
			</View>
		)
	}
}

const {width,height} = Dimensions.get('window')

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')',
		alignItems:'center',
		justifyContent:'center'
	}
})