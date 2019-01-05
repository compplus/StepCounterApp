import React,{Component} from 'react'
import {View,ScrollView,StyleSheet} from 'react-native'
import Analysis from './Analysis'
import Activity from './Activity'
import Map from './Map'

export default class DynamicStats extends Component{
	render(){
		return(
			<View style={styles.container}>
			<ScrollView style={{flex:1}} horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
				<Activity/>
				<Analysis/>
				<Map/>
			</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		backgroundColor:'white',
		width:'95%',
		flex:1,
		elevation: 2, //android shadow
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
	}
})