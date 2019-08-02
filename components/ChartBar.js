import React,{Component} from 'react'
import {View,Animated,Text,StyleSheet} from 'react-native'

export default class ChartBar extends Component{
	state={barheight:new Animated.Value(0)}
	componentDidUpdate(){
		Animated.timing(this.state.barheight, {toValue: this.props.height*(this.props.value/this.props.maxValue),duration: 1000,}).start()
	}
	render(){
		return(
			<View style={{...styles.container,height:this.props.height,width:this.props.width,marginLeft:this.props.gap/2,marginRight:this.props.gap/2}}>
				<Animated.View style={{...styles.fill,height:this.state.barheight}}/>
			</View>
		)
	}
}
const styles={
	container:{
		backgroundColor:'rgba(0,0,0,0.1)'
	},
	fill:{
		backgroundColor:'rgba(0,0,0,0.6)',
		position:'absolute',
		bottom:0,
		width:'100%'
	}
}
