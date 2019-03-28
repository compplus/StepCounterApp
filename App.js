import React, {Component} from 'react'
import {StyleSheet, Text, View, SafeAreaView, BackHandler,Platform} from 'react-native'
import {suppose} from 'camarche'
import {Font} from 'expo'

import {AppLoading, SplashScreen} from 'expo'

import * as screens from './screens'



var load = _ => Font .loadAsync (
	{ 'Material Icons': require ('@expo/vector-icons/fonts/MaterialIcons.ttf')
	, 'FontAwesome': require ('@expo/vector-icons/fonts/FontAwesome.ttf')
	, 'Ionicons': require ('@expo/vector-icons/fonts/Ionicons.ttf')
	, 'anticon': require ('./assets/fonts/anticon.ttf')
	})


export default class App extends Component{
	state = {screen: 'Login',EntryScreen:''}


	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
	}
	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
	}


	handleBackPress=()=>{
		return this.back()
	}
	back=()=> {
		let screen=this.state.screen
		if(screen=='Entry'){
			if(this.state.EntryScreen=='In')this.setState({screen: 'Login'})
			else this.setState({EntryScreen: 'In'})
			return true
		}
		else if(screen=='Signup'){
			this.setState({screen: 'Login'})
			return true
		}
		return false
	}
	go=screen => {
		if(screen in screens){
			this.setState({screen})
		}else{
			console.warn("screen \""+screen+"\" do not exist")
		}
	} 

		 
	render() {
		var self = this
		return !! self .loaded
		?
			suppose ( 
			( screen_name = this.state.screen
			, ActiveScreen = screens [screen_name]
			) =>
			<SafeAreaView style={styles.container}>	
				<ActiveScreen
					EntryScreen={this.state.EntryScreen}//for Entry
					go={this.go}
				/>
			</SafeAreaView> )
		:
			<AppLoading
				startAsync={ load }
				onFinish={ _ => (self .loaded = true, SplashScreen .hide (), self .forceUpdate ()) }
				onError={ _ => console .error (err) } />
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
})
