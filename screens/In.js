import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,Dimensions} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import Main from './Main'
import Awards from './Awards'

var tabs = [ {Main}, {Awards}]
export default class In extends Component{
	state={tab_name: 'Main'}

	render() {
		var tab_name = this.state.tab_name
		var ActiveTab = tab_of (tab_name)
		return (
		
		<View style={styles.container}>
			<ActiveTab />
			<ButtonGroup
			  onPress={(i)=>{this.setState({tab_name: tab_names[i]})}}
			  selectedIndex={tab_name_index(tab_name)}
			  buttons={tab_names}
			  containerStyle={{}} />
		</View>)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'black'
	}
});

var only_key = x => Object.keys(x)[0]

var tab_of = tab_name => Object.values(tabs.filter(x => only_key (x) === tab_name)[0])[0]
var tab_names = tabs.map(only_key)
var tab_name_index = tab_name => tab_names.indexOf(tab_name)
