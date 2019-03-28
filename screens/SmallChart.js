import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import ChartBar from './ChartBar'

export default class SmallChart extends Component{
	state={chartlayout:null,layout:null}
	
	
	getBars(data,height,width){
		let max=Math.max(...data)
		let w=width/data.length/2
		let h=height*0.9
		let output=data.map((d,i)=><ChartBar key={i} height={h} value={d} maxValue={max} width={w*3/2} gap={w*1/2}/>)
		return output
	}
	
	textBox(val,unit){
		return(
		<View style={styles.textBox}>
			<Text style={styles.value}>{val}</Text>
			<Text style={styles.unit}>{unit}</Text>
		</View>)
	}
	
	render(){
		return(
			<View style={{...styles.container,flexDirection:this.props.portrait?'row':'column'}}>
			<View style={{...styles.barchart,flex:(this.props.portrait?6:3)}}>
				<Text style={styles.title}>{this.props.title}</Text>
				<View style={styles.barContainer} onLayout={(event)=>{this.setState({layout:event.nativeEvent.layout})}}>
					{this.state.layout?this.getBars(this.props.data,this.state.layout.height,this.props.portrait?this.state.layout.width:this.props.width):null}	
				</View>
			</View>
			{this.textBox(this.props.data[0],'Kcal.')}
			</View>
		)
	}
}

const styles={
	container:{
		justifyContent:'center',
		flex:1,
		alignItems:'center',
		width:'100%'
	},
	title:{
		textAlign:'left',
		color:'#404040',
		margin:'2%'
	},
	barContainer:{
		flexDirection:'row',
		flex:1,
		alignItems:'center'
	},
	barchart:{
		justifyContent:'center',
		margin:'5%'
	},
	textBox:{
		flex:3,
		justifyContent:'center'
	},
	value:{
		fontSize:22,
		margin:'2%',
		fontWeight:'bold',
		textAlign:'center'
	},
	unit:{
		fontSize:12,
		fontWeight:'bold',
		textAlign:'center'
	}
}
