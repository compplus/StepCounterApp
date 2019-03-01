import React ,{Component} from 'react'
import {View,StyleSheet,Text, Image, TouchableOpacity, Dimensions} from 'react-native'
import { scale, moderateScale, verticalScale} from './Scaling';
const { width, height } = Dimensions.get('window');



export default class AwardItem extends Component{
	state={
		height:undefined
	};


	render(){
		return(
			<View style={{...styles.container,height:this.state.height}} onLayout={(e)=>{this.setState({height:e.nativeEvent.layout.height})}}>


				<Image style={styles.image} source={this.props.status
																											? this.props.imageuri
																											: require('../../assets/award_page/question_mark.png')}/>

					<Text style={styles.text}>
						{this.props.status
							?this.props.title
							: null}
					</Text>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex :1,
		alignItems: 'center',
		marginBottom: '6%',
		marginTop: '6%'

	},

	image:{
		width: scale(100),
		height: scale(100),
	},

	text:{
		fontSize: scale(13),
		textAlign: 'center',
		color: 'white',
		fontWeight: "600",
		margin:'3%'
	},

})
