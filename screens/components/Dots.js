import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native'

export default class Dots extends Component{
	
	dots(numofdots,current){
		output=[]
		for(let i=0;i<numofdots;i++){
			output.push(<View key={i} style={{...styles.emptyDot,backgroundColor:(current==i?'#ff9d42':'white')}}/>)
		}
		return output
	}
	
	render(){
		return(
			<View style={styles.container}>
				{this.dots(this.props.numofpage,this.props.currentPage)}
			</View>
		)
	}
}

const styles = {
	container:{
		alignItems:'center',
		justifyContent:'center',
		width:'100%',
		position:'absolute',
		bottom:'5%',
		flexDirection:'row'
	},
	emptyDot:{
		height:15,
		width:15,
		borderRadius:7.5,
		margin:5
	}
}
