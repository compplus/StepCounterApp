import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Screen from './screens/screens'
import Background from './screens/components/background'

export default class App extends Component{
	state={screen:0}
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Screen screen={this.state.screen} setScreen={(screen)=>{this.setState({screen})}}/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
