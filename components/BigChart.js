import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import PureChart from 'react-native-pure-chart'

export default class BigChart extends Component{
	state={chartheight:null}
	findDataMaxlength(data){
		let maxlength=0
		for(let d of data){
			d.data.length>maxlength&&(maxlength=d.data.length)
		}
		return maxlength
	}
	render(){
		return(
			<View style={{...styles.container}}>
				<Text style={styles.title}>{this.props.title}</Text>
				<View style={{flex:1}} onLayout={(event)=>{this.setState({chartheight:event.nativeEvent.layout.height*0.8})}}>
					{this.state.chartheight?
					<PureChart
						type='line'
						xAxisGridLineColor='transparent'
						yAxisGridLineColor='transparent'
						height={(this.state.chartheight)<(this.props.width*2/3)?(this.state.chartheight):(this.props.width*2/3)}
						gap={this.props.width/(this.findDataMaxlength(this.props.data)+1)}
						labelColor='white'
						data={this.props.data}
						backgroundColor='#404040'
					/>:null}
				</View>
			</View>
		)
	}
}

const styles={
	container:{
		justifyContent:'center',
		backgroundColor:'#404040',
		flex:1
	},
	title:{
		textAlign:'center',
		fontWeight:'bold',
		color:'white'
	}
}
