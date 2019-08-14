import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import Analysis from '../components/Analysis'

export default class AnalysisPage extends Component {
	state = { currentPage: 0, width: width }

	render() {
		const { currentPage, width } = this.state
		return <View style={styles.container}>
				<Analysis width={width} portrait={this.props.portrait} parentshouldScroll={sE => this.setState({ scrollEnabled: sE })} />
		</View>
	}
}

const { width, height } = Dimensions.get('window')

const styles = {
	container: {
		backgroundColor: '#212121',
		flex: 1,
		justifyContent: 'center', 
		alignContent: 'center'
	},
}
