import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

export default class Awards extends Component{
	render() {
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.props.go}>
				<Text style={styles.Name}>Awards</Text>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Name: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
