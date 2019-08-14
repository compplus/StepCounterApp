import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Analysis from './Analysis'
import Activity from './Activity'
import Dots from './Dots'
import GoBack from './GoBack'
import Map from './Map'

export default class DynamicStats extends Component {
	state = { currentPage: 0, width: width * 0.95 }

	setCurrentPage(currentPage) {
		this.setState({ currentPage })
	}

	render() {
		const { currentPage, width } = this.state
		return <View style={{ ...styles.container, width: this.props.portrait ? '95%' : undefined, height: this.props.portrait ? undefined : '95%' }} onLayout={(event) => { this.setState({ width: event.nativeEvent.layout.width }) }}>
			{/*<Activity width={width} portrait={this.props.portrait} />*/}
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
