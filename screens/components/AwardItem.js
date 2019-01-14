import React ,{Component} from 'react'
import {View,StyleSheet,Text, Image, TouchableOpacity} from 'react-native'

export default class AwardItem extends Component{
	state={
		pressStatus: false
	};

	render(){
		return(
			<View style={styles.container}>


				<Image style={{width: 50, height: 50}} source={this.props.imageuri}/>

				<View style={styles.textBox}>
					<Text style={styles.title}>
						{this.props.title}
					</Text>

					<Text style={styles.description}>
						{this.props.description}
					</Text>
				</View>


				 <TouchableOpacity
				 	onPress={()=>{this.setState({pressStatus: true})}}

				 	disabled={!(this.props.status=="Get")||(this.state.pressStatus)}

				    style={!(this.props.status=="Get")||(this.state.pressStatus)
	                        ? styles.buttonPress
	                        : styles.button}
				 	>
					 <Text style={styles.buttonText}>
	                    {this.state.pressStatus
	                    	? 'Awarded'
	                    	: this.props.status}
	                </Text>
				 </TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		alignItems:'center',
		margin:'3%'
	},
	textBox:{
		flexDirection: 'column',
		flex:1
	},
	title:{
		fontSize: 18,
		color: 'white',
		fontWeight: "600",
		margin:'3%'
	},
	description:{
		fontSize: 15,
		color: 'lightgrey',
		fontWeight: '600',
		margin:'3%'
	},
	button:{
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#459cff',
		borderRadius: 5,
		height: 30,
		width: 70
	},
	buttonPress:{
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'white',
		borderWidth: 1.5,
		borderRadius: 5,
		height: 30,
		width: 70
	},
	buttonText:{
		fontSize: 15,
		color: 'white',
		fontWeight: "600"
	}

})
