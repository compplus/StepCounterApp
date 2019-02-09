import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback,Dimensions} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import CommonStats from './components/CommonStats'
import DynamicStats from './components/DynamicStats'
import Main from './Main'
import Awards from './Awards'

var tabs = [ {Main}, {Awards} ]
export default class In extends Component{
	state={tab_name: 'Main'}

	render() {
		var tab_name = this.state.tab_name
		var ActiveTab = tab_of (tab_name)
		return <View style={{ flex: 1 }}>
			<ActiveTab />
			<ButtonGroup
			  onPress={(i)=>{this.setState({tab_name: tab_names[i]})}}
			  selectedIndex={tab_name_index(tab_name)}
			  buttons={tab_names}
			  containerStyle={{}} />
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

var only_key = x => Object.keys(x)[0]

var tab_of = tab_name => Object.values(tabs.filter(x => only_key (x) === tab_name)[0])[0]
var tab_names = tabs.map(only_key)
var tab_name_index = tab_name => tab_names.indexOf(tab_name)
