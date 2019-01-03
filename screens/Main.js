import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

export default class Main extends Component{
  render() {
    return (
			<View style={styles.container}>
				<Text style={styles.Name}>Main</Text>
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
