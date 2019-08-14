import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Map from '../components/Map'

export default class DynamicStats extends Component {

	render() {
		return <View style={styles.container}>
			<Map width={width} />
		</View>
	}
}

const { width, height } = Dimensions.get('window')

const styles = {
	container: {
		backgroundColor: 'white',
		flex: 1,
	}
}
