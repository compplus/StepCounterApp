import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,Dimensions} from 'react-native';
import CommonStats from './components/CommonStats'
import DynamicStats from './components/DynamicStats'
import { Pedometer } from "expo"

export default class Main extends Component{
	state={portrait:this.isPortrait()}
	isPortrait(){
		return Dimensions.get('window').height>Dimensions.get('window').width
	}
	componentDidMount () {
		Pedometer.watchStepCount(result => {
			alert (JSON .stringify (result))
		})
	}
	render() {
		return <View style={{...styles.container,flexDirection:(this.state.portrait?'column':'row')}} onLayout={()=>{this.setState({portrait:this.isPortrait()});}}>
			<DynamicStats portrait={this.state.portrait}/>
			<CommonStats portrait={this.state.portrait}/>
		</View>
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
};
