import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,Dimensions} from 'react-native';
import CommonStats from './components/CommonStats'
import DynamicStats from './components/DynamicStats'

export default class Main extends Component{
	state={portrait:this.isPortrait()}
	isPortrait(){
		return Dimensions.get('window').height>Dimensions.get('window').width
	}
	render() {
		return <View style={{...styles.container,flexDirection:(this.state.portrait?'column':'row')}} onLayout={()=>{this.setState({portrait:this.isPortrait()});}}>
						<DynamicStats portrait={this.state.portrait}/>
						<CommonStats portrait={this.state.portrait}/>
				</View>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
