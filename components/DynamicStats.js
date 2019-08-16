import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Activity from './Activity'

export default class DynamicStats extends Component {
	state = { currentPage: 0, width: width * 0.95 }

	setCurrentPage(currentPage) {
		this.setState({ currentPage })
	}

	render() {
		return <View style={{ ...styles.container, width: this.props.portrait ? '95%' : undefined, height: this.props.portrait ? undefined : '95%' }} onLayout={(event) => { this.setState({ width: event.nativeEvent.layout.width }) }}>
			<Activity />
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
