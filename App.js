import React, {Component} from 'react'
import {StyleSheet, Text, View, SafeAreaView, BackHandler} from 'react-native'
import * as screens from './screens'

export default class App extends Component{
	state = {screen: 'Login'}


	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
	}
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
	}


	handleBackPress() {
		this.back()
		return true
	}
	back() {
		this.setState({screen: 'Login'})
	}
	render() {
		var screen_name = this.state.screen
		var ActiveScreen = screens [screen_name]
		return <SafeAreaView style={styles.container}>
			<ActiveScreen go={screen => this.setState({screen})} />
		</SafeAreaView>
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
