import React,{Component} from 'react'
import {View,ScrollView,StyleSheet,Dimensions} from 'react-native'
import Analysis from './Analysis'
import Activity from './Activity'
import Map from './Map'
import Dots from './Dots'

export default class DynamicStats extends Component{
	state={currentPage:0}
	
	setCurrentPage(index){
		this.setState({currentPage:index})
	}
	
	render(){
		return(
			<View style={styles.container}>
			<ScrollView style={{flex:1}} horizontal showsHorizontalScrollIndicator={false} pagingEnabled onMomentumScrollEnd={(event)=>{this.setCurrentPage(event.nativeEvent.contentOffset.x/(width*0.95))}}>
				<Activity/>
				<Analysis/>
				<Map/>
			</ScrollView>
			<Dots numofpage={3} currentPage={this.state.currentPage}/>
			</View>
		)
	}
}

const {width, height} = Dimensions.get('window')

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