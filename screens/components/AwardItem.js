import React ,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'

export default class AwardItem extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.text}>
				{this.props.award}
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		width:'100%',
		marginTop:'2%',
		elevation: 2, //android shadow
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
	},
	text:{
		margin:'1%'
	}
})