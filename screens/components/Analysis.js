import React, {Component} from 'react'
import {View,StyleSheet,Text,Dimensions} from 'react-native'
import BigChart from './BigChart'
import SmallChart from './SmallChart'

export default class Analysis extends Component{
	state={width:this.props.width,smallwidth:null}
	
	render(){
		let sampleData = [{seriesName: 'series1', data: [0, 4, 6, 5, 10], color: 'white'},{seriesName: 'series2', data: [0, 3, 3, 6, 7], color: 'grey'}]
		let smallChartData=[1,2,3,4,5,6,7,8,9,10,11,12]
		return(
			<View style={{...styles.container,width:this.props.width,flexDirection:this.props.portrait?'column':'row'}} onLayout={()=>{this.setState({})}}>
			<View style={{...styles.bigchartBox,width:this.props.portrait?'100%':undefined}}  onLayout={(e)=>{this.setState({width:e.nativeEvent.layout.width})}}>
				<BigChart portrait={this.props.portrait} width={this.state.width} data={sampleData} title='Pace Analysis'/>
			</View>
			<View style={{...styles.smallchartBox,width:this.props.portrait?'100%':undefined,height:(this.props.portrait?undefined:'100%')}}  onLayout={(e)=>{this.setState({smallwidth:e.nativeEvent.layout.width})}}>
				<SmallChart portrait={this.props.portrait} title={'Splits'} data={smallChartData} width={this.state.smallwidth}/>
			</View>
			</View>
		)
	}
}

const {width,height} = Dimensions.get('window')

const styles = {
	container:{
		flex:1,
		backgroundColor:'white',
		alignItems:'center',
		justifyContent:'center'
	},
	bigchartBox:{
		backgroundColor:'#404040',
		flex:2
	},
	smallchartBox:{
		flex:1
	}
}
